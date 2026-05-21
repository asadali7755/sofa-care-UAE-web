import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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
    ];
  },
};

export default nextConfig;
