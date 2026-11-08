import type { NextConfig } from 'next';
import { retiredBlogSlugs } from './app/lib/blog';

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (Vercel Hobby was paused on 7 Nov 2026).
  // The enquiry form runs as a Pages Function (functions/api/enquiry.js), the
  // WordPress 410s and www -> apex redirect in functions/_middleware.js, and
  // redirects() is written to public/_redirects by scripts/cf-redirects.ts.
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 301 redirects for old WordPress pages Google has indexed
  async redirects() {
    return [
      // Old WordPress appointment page → contact
      {
        source: '/appointment',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/appointment/',
        destination: '/contact',
        permanent: true,
      },
      // Any other old WordPress-style paths
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      // Consolidated blog cluster (Oct 2026): retired posts → pillar post / city page
      ...Object.entries(retiredBlogSlugs).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        statusCode: 301 as const,
      })),
    ];
  },
};

export default nextConfig;
