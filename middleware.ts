import { NextRequest, NextResponse } from 'next/server';
import { retiredBlogSlugs } from './app/lib/blog';

const WP_PARAMS = ['feed', 'cat', 'tag', 'page_id', 'paged', 'author', 'p', 's', 'attachment_id'];

const CANONICAL_HOST = 'sofashampooingdubai.com';

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // www -> apex (301). On Vercel the domain settings did this; on Hostinger
  // both hosts reach the app, so the app sends www to the canonical host.
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0];
  if (host === `www.${CANONICAL_HOST}`) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(url, 301);
  }

  // Consolidated blog cluster (Oct 2026): retired posts 301 to their pillar
  // post or city page. This was in next.config.ts, but next.config.mjs must
  // not import app code (see the note there).
  const retired = request.nextUrl.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);
  if (retired && Object.hasOwn(retiredBlogSlugs, retired[1])) {
    const url = request.nextUrl.clone();
    url.pathname = retiredBlogSlugs[retired[1]];
    return NextResponse.redirect(url, 301);
  }

  // 410 Gone for old WordPress URLs — tells Google to permanently drop them from index
  const hasWpParam = WP_PARAMS.some((param) => searchParams.has(param));
  if (hasWpParam) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|woff|ttf|ico)$).*)',
};
