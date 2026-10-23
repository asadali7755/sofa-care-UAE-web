// Tell Bing (and other IndexNow engines) about new or changed pages.
// Usage:
//   node scripts/indexnow.mjs                 -> every URL in the live sitemap
//   node scripts/indexnow.mjs /path /other    -> only these pages
// Run it after a deploy is live. The key file is public/<KEY>.txt.

const HOST = 'sofashampooingdubai.com';
const BASE = `https://${HOST}`;
const KEY = '33466899a1e243bcb1d397c0df5660e2';

async function sitemapUrls() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => (p.startsWith('http') ? p : BASE + (p.startsWith('/') ? p : '/' + p))) : await sitemapUrls();
if (!urlList.length) throw new Error('No URLs to submit');

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted and key check pending.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URL(s)`);
if (res.status >= 300) console.log(await res.text());
