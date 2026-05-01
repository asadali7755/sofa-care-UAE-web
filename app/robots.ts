import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://sofashampooingdubai.com/sitemap.xml',
    host: 'https://sofashampooingdubai.com',
  };
}
