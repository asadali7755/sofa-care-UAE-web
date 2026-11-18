// Plain JavaScript on purpose; do not rename back to next.config.ts.
// Hostinger's build server has glibc < 2.29, too old for the native SWC
// binary of next >= 16.4.5 (needs 2.30), so Next falls back to WASM SWC.
// Hostinger wraps this file in a generated config that imports it; a .ts
// config then has to be transpiled by WASM SWC, which emits ESM with an
// extensionless import and the build fails (ERR_MODULE_NOT_FOUND). An .mjs
// config needs no transpiling. Keep it free of imports of app .ts files:
// the retired /blog redirects (retiredBlogSlugs in app/lib/blog.ts) are
// applied in middleware.ts.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger shared hosting caps how many processes a build may start, so
  // keep the build to one worker.
  experimental: { cpus: 1 },

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
