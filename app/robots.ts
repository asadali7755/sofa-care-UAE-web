import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Allow Googlebot to fetch JS/CSS bundles so it can render pages.
        // Only block API routes; never block /_next/static or /_next/image.
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://sofashampooingdubai.com/sitemap.xml',
    host: 'https://sofashampooingdubai.com',
  };
}
