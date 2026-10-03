import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Abu Dhabi | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Abu Dhabi. At-home service covering Khalifa City, Al Reem Island, Yas Island & all areas. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Abu Dhabi',
    'sofa deep cleaning Abu Dhabi',
    'sofa shampooing Abu Dhabi',
    'sofa steam cleaning Abu Dhabi',
    'sofa sanitization Abu Dhabi',
    'upholstery cleaning Abu Dhabi',
    'sofa stain removal Abu Dhabi',
    'leather sofa cleaning Abu Dhabi',
    'sofa cleaning Khalifa City',
    'sofa cleaning Al Reem Island',
    'sofa cleaning Yas Island',
    'sofa cleaning Saadiyat Island',
    'sofa cleaning Al Muroor Abu Dhabi',
    'sofa cleaning near me Abu Dhabi',
    'same day sofa cleaning Abu Dhabi',
    'professional sofa cleaning Abu Dhabi',
    'تنظيف كنب ابوظبي',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi' },
  openGraph: {
    title: 'Sofa Cleaning Abu Dhabi | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Abu Dhabi. At-home service, same-day available. Starting AED 40/seat. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi',
    type: 'website',
  },
};

const abuDhabiBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Abu Dhabi', item: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi' },
  ],
};

const abuDhabiSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Abu Dhabi',
  description: 'Professional sofa deep shampoo and steam cleaning services in Abu Dhabi UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Abu Dhabi' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Abu Dhabi', price: '50', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Abu Dhabi', price: '40', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Steam Cleaning Abu Dhabi', price: '50', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Leather Sofa Cleaning Abu Dhabi', price: '50', priceCurrency: 'AED' },
  ],
};

const content = CITY_CONTENT['abu-dhabi'];

export default function SofaCleaningAbuDhabi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(abuDhabiBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(abuDhabiSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="abu-dhabi"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['abu-dhabi']}
          waText={content.wa}
          stats={content.stats}
          whyParas={content.whyParas}
          bullets={content.bullets}
          areas={content.areas}
          areasIntro={content.areasIntro}
          services={content.services}
          priceValue="AED 40 / seat"
          priceNote="Sofa shampoo cleaning. Deep cleaning from AED 50/seat."
          ctaText={content.ctaText}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
