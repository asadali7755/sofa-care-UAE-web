import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

const URL = 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah';

export const metadata: Metadata = {
  title: { absolute: 'Sofa Cleaning Ras Al Khaimah | Deep Shampoo at Home | Al Haya' },
  description: 'At-home sofa shampoo & steam cleaning in Ras Al Khaimah: Al Hamra, Mina Al Arab, Al Marjan Island, Khuzam & more. Free WhatsApp quote.',
  keywords: [
    'sofa cleaning Ras Al Khaimah',
    'sofa cleaning RAK',
    'sofa shampoo Ras Al Khaimah',
    'sofa deep cleaning RAK',
    'upholstery cleaning Ras Al Khaimah',
    'sofa cleaning Al Hamra Village',
    'sofa cleaning Mina Al Arab',
    'sofa cleaning Al Marjan Island',
    'sofa cleaning near me RAK',
    'تنظيف كنب رأس الخيمة',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Sofa Cleaning Ras Al Khaimah | Al Haya Sofa Care UAE',
    description: 'At-home sofa shampoo & steam cleaning in Ras Al Khaimah: Al Hamra, Mina Al Arab, Al Marjan Island, Khuzam & more. Free WhatsApp quote.',
    url: URL,
    type: 'website',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Ras Al Khaimah', item: URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Ras Al Khaimah',
  description: 'At-home sofa shampoo, deep extraction, leather care and odour removal in Ras Al Khaimah (RAK), UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Ras Al Khaimah' },
};

const content = CITY_CONTENT['ras-al-khaimah'];

export default function SofaCleaningRasAlKhaimah() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="ras-al-khaimah"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['ras-al-khaimah']}
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
