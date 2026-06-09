import type { SanityImageSource } from '@sanity/image-url';
import { client, sanityConfigured } from './client';

export interface CityService {
  title?: string;
  desc?: string;
}

export interface CityPageData {
  metaTitle?: string;
  metaDescription?: string;
  heroTagline?: string;
  heroHeadingLead?: string;
  heroHeadingAccent?: string;
  heroSubtext?: string;
  heroImage?: SanityImageSource;
  heroImageAlt?: string;
  introHeadingAccent?: string;
  introParagraph1?: string;
  introParagraph2?: string;
  whyChooseBullets?: string[];
  areas?: string[];
  startingPriceValue?: string;
  startingPriceNote?: string;
  services?: CityService[];
}

const cityPageQuery = `*[_type == "cityPage" && slug.current == $slug][0]{
  metaTitle, metaDescription,
  heroTagline, heroHeadingLead, heroHeadingAccent, heroSubtext,
  heroImage, heroImageAlt,
  introHeadingAccent, introParagraph1, introParagraph2,
  whyChooseBullets, areas,
  startingPriceValue, startingPriceNote,
  services[]{ title, desc }
}`;

// Tag lets the revalidate webhook refresh both city pages on publish.
export const CITY_PAGES_TAG = 'cityPage';

/**
 * Fetch CMS content for a city page. Returns null when Sanity is not
 * configured or the document does not exist yet — callers fall back to
 * their hardcoded defaults so the live site never breaks.
 */
export async function getCityPage(slug: string): Promise<CityPageData | null> {
  if (!sanityConfigured) return null;
  try {
    return await client.fetch<CityPageData | null>(
      cityPageQuery,
      { slug },
      // tags → instant refresh via the publish webhook; revalidate → 60s
      // fallback so edits still go live even if the webhook is ever missed.
      { next: { tags: [CITY_PAGES_TAG, `cityPage:${slug}`], revalidate: 60 } }
    );
  } catch {
    return null;
  }
}
