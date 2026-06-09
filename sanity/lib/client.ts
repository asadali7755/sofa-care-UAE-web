import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

// Only create a real client when a projectId is configured. This keeps the
// site safe (pages fall back to hardcoded content) if Sanity is not set up yet.
export const sanityConfigured = projectId.length > 0;

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true, // fast, cached reads; on-demand revalidation keeps content fresh
});
