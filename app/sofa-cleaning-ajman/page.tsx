import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Ajman | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Ajman. At-home doorstep service. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Ajman',
    'sofa deep cleaning Ajman',
    'sofa shampooing Ajman',
    'sofa steam cleaning Ajman',
    'upholstery cleaning Ajman',
    'sofa stain removal Ajman',
    'leather sofa cleaning Ajman',
    'sofa cleaning Al Nuaimia Ajman',
    'sofa cleaning Al Rashidiya Ajman',
    'sofa cleaning near me Ajman',
    'same day sofa cleaning Ajman',
    'professional sofa cleaning Ajman',
    'تنظيف كنب عجمان',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-ajman' },
  openGraph: {
    title: 'Sofa Cleaning Ajman | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Ajman. At-home service, same-day available. Affordable rates. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-ajman',
    type: 'website',
  },
};

const ajmanBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Ajman', item: 'https://sofashampooingdubai.com/sofa-cleaning-ajman' },
  ],
};

const ajmanSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Ajman',
  description: 'Professional sofa deep shampoo and steam cleaning services in Ajman UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Ajman' },
};

const content = CITY_CONTENT['ajman'];

export default function SofaCleaningAjman() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ajmanBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ajmanSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="ajman"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['ajman']}
          waText={content.wa}
          stats={content.stats}
          whyParas={content.whyParas}
          bullets={content.bullets}
          areas={content.areas}
          areasIntro={content.areasIntro}
          services={content.services}
          priceValue="Affordable Pricing"
          priceNote="Free quote on WhatsApp — no hidden fees."
          ctaText={content.ctaText}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
