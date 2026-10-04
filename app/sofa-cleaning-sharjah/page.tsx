import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Sharjah | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Sharjah. At-home service covering all Sharjah areas. Stain removal, leather care, same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Sharjah',
    'sofa deep cleaning Sharjah',
    'sofa shampooing Sharjah',
    'sofa steam cleaning Sharjah',
    'upholstery cleaning Sharjah',
    'sofa stain removal Sharjah',
    'leather sofa cleaning Sharjah',
    'sofa cleaning Al Nahda Sharjah',
    'sofa cleaning Muwaileh Sharjah',
    'sofa cleaning Al Majaz Sharjah',
    'sofa cleaning near me Sharjah',
    'same day sofa cleaning Sharjah',
    'professional sofa cleaning Sharjah',
    'تنظيف كنب الشارقة',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-sharjah' },
  openGraph: {
    title: 'Sofa Cleaning Sharjah | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Sharjah. At-home service, same-day available, eco-friendly. Affordable rates. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-sharjah',
    type: 'website',
  },
};

const sharjahBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Sharjah', item: 'https://sofashampooingdubai.com/sofa-cleaning-sharjah' },
  ],
};

const sharjahSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Sharjah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Sharjah UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Sharjah' },
};

const content = CITY_CONTENT['sharjah'];

export default function SofaCleaningSharjah() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharjahBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharjahSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="sharjah"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['sharjah']}
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
