// Replaces the Next.js middleware, which a static export cannot run.
// - www.sofashampooingdubai.com -> sofashampooingdubai.com (301)
// - 410 Gone for old WordPress query URLs (?p=, ?cat=, ?feed= ...) so Google
//   drops them for good.
const CANONICAL = 'sofashampooingdubai.com';
const REDIRECT_HOSTS = new Set(['www.sofashampooingdubai.com']);
const WP_PARAMS = ['feed', 'cat', 'tag', 'page_id', 'paged', 'author', 'p', 's', 'attachment_id'];

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  if (WP_PARAMS.some((p) => url.searchParams.has(p))) {
    return new Response(null, { status: 410, statusText: 'Gone', headers: { 'X-Robots-Tag': 'noindex' } });
  }
  return next();
}
