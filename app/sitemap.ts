import { MetadataRoute } from 'next';
import { emirates } from './lib/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sofashampooingdubai.com';
  const now = new Date();
  // All area sub-pages across every emirate
  const areaRoutes: MetadataRoute.Sitemap = Object.values(emirates).flatMap((em) =>
    em.areas.map((a) => ({
      url: `${baseUrl}/${em.citySlug}/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))
  );
  return [
    ...areaRoutes,
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Location pages — high priority for local SEO
    { url: `${baseUrl}/sofa-cleaning-dubai`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/sofa-cleaning-abu-dhabi`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/sofa-cleaning-sharjah`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sofa-cleaning-ajman`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
