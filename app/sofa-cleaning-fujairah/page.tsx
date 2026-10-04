import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Fujairah | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Fujairah, including Dibba. At-home east-coast service. Stain removal, leather care, eco-friendly products. Call +971547199189.',
  keywords: [
    'sofa cleaning Fujairah',
    'sofa deep cleaning Fujairah',
    'sofa shampooing Fujairah',
    'sofa steam cleaning Fujairah',
    'sofa cleaning Dibba',
    'sofa cleaning Dibba Al Fujairah',
    'sofa cleaning Dibba Al Hisn',
    'upholstery cleaning Fujairah',
    'sofa stain removal Fujairah',
    'leather sofa cleaning Fujairah',
    'sofa cleaning near me Fujairah',
    'professional sofa cleaning east coast UAE',
    'تنظيف كنب الفجيرة',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah' },
  openGraph: {
    title: 'Sofa Cleaning Fujairah | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Fujairah and Dibba. At-home service, eco-friendly, affordable rates. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah',
    type: 'website',
  },
};

const fujairahBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Fujairah', item: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah' },
  ],
};

const fujairahSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Fujairah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Fujairah and Dibba, UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Fujairah' },
};

const content = CITY_CONTENT['fujairah'];

export default function SofaCleaningFujairah() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fujairahBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fujairahSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="fujairah"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['fujairah']}
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
