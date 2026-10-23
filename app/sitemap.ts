import { MetadataRoute } from 'next';
import { emirates } from './lib/areas';
import { blogPosts } from './lib/blog';
import { SERVICE_PAGES } from './lib/servicePages';

/**
 * lastmod for non-blog pages. A fixed date (not `new Date()`) so every deploy
 * doesn't claim every URL changed — bump it when site-wide page content changes.
 */
const STATIC_LAST_MODIFIED = new Date('2026-10-17');
const SERVICE_PAGES_ADDED = new Date('2026-10-23');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sofashampooingdubai.com';
  const lastModified = STATIC_LAST_MODIFIED;
  // All area sub-pages across every emirate
  const areaRoutes: MetadataRoute.Sitemap = Object.values(emirates).flatMap((em) =>
    em.areas.map((a) => ({
      url: `${baseUrl}/${em.citySlug}/${a.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))
  );
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified ?? p.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  const routes: MetadataRoute.Sitemap = [
    ...areaRoutes,
    ...blogRoutes,
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    // Core pages
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    // Dedicated service pages
    ...SERVICE_PAGES.map((p) => ({ url: `${baseUrl}/${p.slug}`, lastModified: SERVICE_PAGES_ADDED, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    // Location pages — high priority for local SEO
    { url: `${baseUrl}/sofa-cleaning-dubai`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/sofa-cleaning-abu-dhabi`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/sofa-cleaning-sharjah`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sofa-cleaning-ajman`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sofa-cleaning-ras-al-khaimah`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sofa-cleaning-umm-al-quwain`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sofa-cleaning-fujairah`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];
  // Never list a URL twice (first entry wins)
  const seen = new Set<string>();
  return routes.filter((r) => !seen.has(r.url) && (seen.add(r.url), true));
}
