import { NextRequest, NextResponse } from 'next/server';

// WordPress query parameters that should redirect to homepage
const WP_PARAMS = ['feed', 'cat', 'tag', 'page_id', 'paged', 'author', 'p', 's', 'attachment_id'];

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Redirect any URL with old WordPress query params → homepage (301 permanent)
  const hasWpParam = WP_PARAMS.some((param) => searchParams.has(param));
  if (hasWpParam) {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|woff|ttf|ico)$).*)',
};
