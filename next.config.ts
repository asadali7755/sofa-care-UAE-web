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
  // Allow JSX in .tsx files without style jsx pragma for styled-jsx compatibility
  compiler: {
    styledJsx: true,
  },
};

export default nextConfig;
