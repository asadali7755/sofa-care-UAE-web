import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_IMAGES } from '../lib/cityImages';
import { getCityPage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

const SLUG = 'ras-al-khaimah';

// Hardcoded fallbacks — used when the Sanity document is empty/unavailable so
// the live page never breaks. The client can override any of these in the Studio.
const defaults = {
  metaTitle: 'Sofa Cleaning Ras Al Khaimah | Sofa Deep Shampoo & Steam Cleaning',
  metaDescription:
    'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Ras Al Khaimah (RAK). At-home doorstep service. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  heroTagline: 'Ras Al Khaimah Service',
  heroHeadingLead: 'Sofa Cleaning',
  heroHeadingAccent: 'Ras Al Khaimah',
  heroSubtext:
    'Expert sofa deep shampoo & steam cleaning in Ras Al Khaimah. Al Haya Sofa Care UAE comes to your home or beachfront apartment with full professional equipment — affordable, fast, and completely thorough.',
  heroImageUrl: '/sofa-cleaning-dubai-professional.webp',
  heroImageAlt: 'Professional sofa cleaning service in Ras Al Khaimah by Al Haya Sofa Care',
  introHeadingAccent: 'in Ras Al Khaimah',
  introParagraph1:
    'Al Haya Sofa Care UAE brings the same high-standard professional sofa cleaning trusted across Dubai and Sharjah to Ras Al Khaimah. Our mobile team arrives equipped with industrial shampoo machines and high-temperature steam cleaners, ready to restore your sofa to like-new condition — whether you live in RAK City, a Mina Al Arab apartment or an Al Hamra Village villa.',
  introParagraph2:
    "RAK's coastal humidity and fine desert dust settle deep into sofa fabric over time. Our 2-in-1 deep shampoo and steam cleaning method removes dust mites, bacteria, stubborn stains and unpleasant odors in a single visit. We handle all sofa types including fabric, leather, velvet, microfiber and suede.",
  whyChooseBullets: [
    'Mobile team comes to your home anywhere in Ras Al Khaimah',
    'Specialist care for beachfront and Al Marjan Island apartments',
    'All sofa types handled — fabric, leather, velvet, suede',
    'Stain removal for coffee, food, ink and pet stains',
    'Odor and humidity treatment — eliminated, not masked',
    'Affordable rates — transparent pricing, no hidden costs',
  ],
  areas: [
    'RAK City', 'Al Hamra Village', 'Mina Al Arab', 'Al Nakheel',
    'Al Marjan Island', 'Al Rams', 'Khuzam', 'Al Qusaidat',
    'Al Dhait', 'Julphar', 'Dafan Al Khor', 'Al Jazeera Al Hamra',
  ],
  startingPriceValue: 'Affordable Pricing',
  startingPriceNote: 'Free quote on WhatsApp — no hidden fees.',
  services: [
    { title: 'Sofa Deep Cleaning RAK', desc: 'Industrial extraction removes embedded dust, allergens and bacteria from every sofa type across Ras Al Khaimah.' },
    { title: 'Sofa Shampooing RAK', desc: 'Professional foam shampoo treatment lifts deep grime and stains. Fast-dry formula — ready in 2–4 hours.' },
    { title: 'Pet Hair Removal RAK', desc: 'Specialist vacuum and roller treatment removes embedded pet hair from all cushions and seams.' },
    { title: 'Sofa Sanitization RAK', desc: 'Hospital-grade disinfection kills 99.9% of bacteria and germs. Safe for children and pets.' },
  ],
};

const SERVICE_COLORS = ['var(--accent)', '#1D6A5B', '#1D6A5B', '#059669'];

const nonEmpty = <T,>(a: T[] | undefined | null): T[] | undefined =>
  Array.isArray(a) && a.length > 0 ? a : undefined;

async function getContent() {
  const cms = await getCityPage(SLUG);
  const heroImageUrl =
    (cms?.heroImage && urlForImage(cms.heroImage)?.width(1100).height(800).fit('crop').url()) ||
    defaults.heroImageUrl;
  return {
    metaTitle: cms?.metaTitle || defaults.metaTitle,
    metaDescription: cms?.metaDescription || defaults.metaDescription,
    heroTagline: cms?.heroTagline || defaults.heroTagline,
    heroHeadingLead: cms?.heroHeadingLead || defaults.heroHeadingLead,
    heroHeadingAccent: cms?.heroHeadingAccent || defaults.heroHeadingAccent,
    heroSubtext: cms?.heroSubtext || defaults.heroSubtext,
    heroImageUrl,
    heroImageAlt: cms?.heroImageAlt || defaults.heroImageAlt,
    introHeadingAccent: cms?.introHeadingAccent || defaults.introHeadingAccent,
    introParagraph1: cms?.introParagraph1 || defaults.introParagraph1,
    introParagraph2: cms?.introParagraph2 || defaults.introParagraph2,
    whyChooseBullets: nonEmpty(cms?.whyChooseBullets) ?? defaults.whyChooseBullets,
    areas: nonEmpty(cms?.areas) ?? defaults.areas,
    startingPriceValue: cms?.startingPriceValue || defaults.startingPriceValue,
    startingPriceNote: cms?.startingPriceNote || defaults.startingPriceNote,
    services: nonEmpty(cms?.services?.filter((s) => s.title)) ?? defaults.services,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCityPage(SLUG);
  return {
    title: cms?.metaTitle || defaults.metaTitle,
    description: cms?.metaDescription || defaults.metaDescription,
    keywords: [
      'sofa cleaning Ras Al Khaimah',
      'sofa cleaning RAK',
      'sofa deep cleaning Ras Al Khaimah',
      'sofa shampooing RAK',
      'sofa steam cleaning Ras Al Khaimah',
      'upholstery cleaning RAK',
      'sofa stain removal Ras Al Khaimah',
      'leather sofa cleaning RAK',
      'sofa cleaning Al Hamra Village',
      'sofa cleaning Mina Al Arab',
      'sofa cleaning near me RAK',
      'same day sofa cleaning Ras Al Khaimah',
      'professional sofa cleaning RAK',
      'تنظيف كنب رأس الخيمة',
    ],
    alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah' },
    openGraph: {
      title: 'Sofa Cleaning Ras Al Khaimah | Al Haya Sofa Care UAE',
      description: 'Professional sofa deep shampoo & steam cleaning in Ras Al Khaimah. At-home service, same-day available. Affordable rates. Call +971547199189.',
      url: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah',
      type: 'website',
    },
  };
}

const rakBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Ras Al Khaimah', item: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah' },
  ],
};

const rakSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Ras Al Khaimah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Ras Al Khaimah (RAK), UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Ras Al Khaimah' },
};

export default async function SofaCleaningRasAlKhaimah() {
  const c = await getContent();
  const fallback = CITY_IMAGES['ras-al-khaimah'];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rakBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rakSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="ras-al-khaimah"
          cityName="Ras Al Khaimah"
          tag={c.heroTagline}
          h1Lead={c.heroHeadingLead}
          h1Accent={c.heroHeadingAccent}
          heroPara={c.heroSubtext}
          image={{
            src: c.heroImageUrl,
            alt: c.heroImageAlt || fallback.alt,
            width: fallback.width,
            height: fallback.height,
            name: fallback.name,
          }}
          waText={encodeURIComponent('Hi, I need sofa cleaning in Ras Al Khaimah.')}
          stats={[
            { n: 'Affordable', l: 'Pricing' },
            { n: 'Same Day', l: 'Service' },
            { n: `${c.areas.length}+ Areas`, l: 'Ras Al Khaimah Coverage' },
            { n: 'Certified', l: 'Team' },
          ]}
          whyAccent={c.introHeadingAccent}
          whyParas={[c.introParagraph1, c.introParagraph2]}
          bullets={c.whyChooseBullets}
          areas={c.areas}
          services={c.services.map((s) => ({ title: s.title ?? '', desc: s.desc ?? '' }))}
          priceValue={defaults.startingPriceValue}
          priceNote={defaults.startingPriceNote}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
