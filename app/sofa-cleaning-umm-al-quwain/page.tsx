import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_IMAGES } from '../lib/cityImages';
import { getCityPage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

const SLUG = 'umm-al-quwain';

// Hardcoded fallbacks — used when the Sanity document is empty/unavailable so
// the live page never breaks. The client can override any of these in the Studio.
const defaults = {
  metaTitle: 'Sofa Cleaning Umm Al Quwain | Sofa Deep Shampoo & Steam Cleaning',
  metaDescription:
    'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Umm Al Quwain (UAQ). At-home doorstep service. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  heroTagline: 'Umm Al Quwain Service',
  heroHeadingLead: 'Sofa Cleaning',
  heroHeadingAccent: 'Umm Al Quwain',
  heroSubtext:
    'Expert sofa deep shampoo & steam cleaning in Umm Al Quwain. Al Haya Sofa Care UAE comes to your villa or family home with full professional equipment — affordable, fast, and completely thorough.',
  heroImageUrl: '/sofa-cleaning-dubai-professional.webp',
  heroImageAlt: 'Professional sofa cleaning service in Umm Al Quwain by Al Haya Sofa Care',
  introHeadingAccent: 'in Umm Al Quwain',
  introParagraph1:
    'Al Haya Sofa Care UAE brings the same high-standard professional sofa cleaning trusted across Dubai, Sharjah and Ajman to Umm Al Quwain. Our mobile team arrives equipped with industrial shampoo machines and high-temperature steam cleaners, ready to restore your sofa to like-new condition — from UAQ City and Al Salamah to the quiet family communities of Falaj Al Mualla.',
  introParagraph2:
    "Umm Al Quwain's coastal lagoon humidity and desert dust settle deep into sofa fabric over time. Our 2-in-1 deep shampoo and steam cleaning method removes dust mites, bacteria, stubborn stains and unpleasant odors in a single visit. We handle all sofa types including fabric, leather, velvet, microfiber and suede.",
  whyChooseBullets: [
    'Mobile team comes to your home anywhere in Umm Al Quwain',
    'Ideal for large villa and family-home sofas',
    'All sofa types handled — fabric, leather, velvet, suede',
    'Stain removal for coffee, food, ink and pet stains',
    'Odor and humidity treatment — eliminated, not masked',
    'Affordable rates — transparent pricing, no hidden costs',
  ],
  areas: [
    'UAQ City', 'Al Salamah', 'Al Raas', 'Al Haditha',
    'Al Maidan', 'King Faisal Road', 'Falaj Al Mualla', 'Al Aahad',
    'Al Dar Al Baida', 'Al Humrah', 'Old Town UAQ', 'Al Riqqah',
  ],
  startingPriceValue: 'AED 40 / seat',
  startingPriceNote: 'Sofa shampoo cleaning. Deep cleaning from AED 50/seat.',
  services: [
    { title: 'Sofa Deep Cleaning UAQ', desc: 'Industrial extraction removes embedded dust, allergens and bacteria from every sofa type across Umm Al Quwain.' },
    { title: 'Sofa Shampooing UAQ', desc: 'Professional foam shampoo treatment lifts deep grime and stains. Fast-dry formula — ready in 2–4 hours.' },
    { title: 'Pet Hair Removal UAQ', desc: 'Specialist vacuum and roller treatment removes embedded pet hair from all cushions and seams.' },
    { title: 'Sofa Sanitization UAQ', desc: 'Hospital-grade disinfection kills 99.9% of bacteria and germs. Safe for children and pets.' },
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
      'sofa cleaning Umm Al Quwain',
      'sofa cleaning UAQ',
      'sofa deep cleaning Umm Al Quwain',
      'sofa shampooing UAQ',
      'sofa steam cleaning Umm Al Quwain',
      'upholstery cleaning UAQ',
      'sofa stain removal Umm Al Quwain',
      'leather sofa cleaning UAQ',
      'sofa cleaning Al Salamah',
      'sofa cleaning Al Raas',
      'sofa cleaning near me Umm Al Quwain',
      'same day sofa cleaning UAQ',
      'professional sofa cleaning Umm Al Quwain',
      'تنظيف كنب أم القيوين',
    ],
    alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-umm-al-quwain' },
    openGraph: {
      title: 'Sofa Cleaning Umm Al Quwain | Al Haya Sofa Care UAE',
      description: 'Professional sofa deep shampoo & steam cleaning in Umm Al Quwain. At-home service, same-day available. Starting AED 40/seat. Call +971547199189.',
      url: 'https://sofashampooingdubai.com/sofa-cleaning-umm-al-quwain',
      type: 'website',
    },
  };
}

const uaqBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Umm Al Quwain', item: 'https://sofashampooingdubai.com/sofa-cleaning-umm-al-quwain' },
  ],
};

const uaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Umm Al Quwain',
  description: 'Professional sofa deep shampoo and steam cleaning services in Umm Al Quwain (UAQ), UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Umm Al Quwain' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Umm Al Quwain', price: '50', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Umm Al Quwain', price: '40', priceCurrency: 'AED' },
  ],
};

export default async function SofaCleaningUmmAlQuwain() {
  const c = await getContent();
  const fallback = CITY_IMAGES['umm-al-quwain'];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uaqBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uaqSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="umm-al-quwain"
          cityName="Umm Al Quwain"
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
          waText={encodeURIComponent('Hi, I need sofa cleaning in Umm Al Quwain.')}
          stats={[
            { n: 'AED 40', l: 'Starting Price' },
            { n: 'Same Day', l: 'Service' },
            { n: `${c.areas.length}+ Areas`, l: 'Umm Al Quwain Coverage' },
            { n: 'Certified', l: 'Team' },
          ]}
          whyAccent={c.introHeadingAccent}
          whyParas={[c.introParagraph1, c.introParagraph2]}
          bullets={c.whyChooseBullets}
          areas={c.areas}
          services={c.services.map((s) => ({ title: s.title ?? '', desc: s.desc ?? '' }))}
          priceValue={c.startingPriceValue}
          priceNote={c.startingPriceNote}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
