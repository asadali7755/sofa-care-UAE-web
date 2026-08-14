import { NextRequest, NextResponse } from 'next/server';

const WP_PARAMS = ['feed', 'cat', 'tag', 'page_id', 'paged', 'author', 'p', 's', 'attachment_id'];

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

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
