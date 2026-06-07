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
      {
        // Explicitly welcome AI assistants & answer engines so the business can
        // appear in / be cited by ChatGPT, Claude, Perplexity, Google AI
        // Overviews (Google-Extended), Gemini, Apple Intelligence, etc.
        userAgent: [
          'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
          'ClaudeBot', 'anthropic-ai', 'Claude-Web', 'Claude-User',
          'PerplexityBot', 'Perplexity-User',
          'Google-Extended', 'Applebot-Extended',
          'Amazonbot', 'CCBot', 'cohere-ai', 'DuckAssistBot',
          'Meta-ExternalAgent', 'YouBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://sofashampooingdubai.com/sitemap.xml',
    host: 'https://sofashampooingdubai.com',
  };
}
