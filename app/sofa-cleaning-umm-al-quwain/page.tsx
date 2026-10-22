import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

const URL = 'https://sofashampooingdubai.com/sofa-cleaning-umm-al-quwain';

export const metadata: Metadata = {
  title: { absolute: 'Sofa Cleaning Umm Al Quwain | Deep Shampoo at Home | Al Haya' },
  description: 'At-home sofa shampoo, majlis & steam cleaning in Umm Al Quwain: Al Salamah, Al Raudah, Old Town & Falaj Al Mualla. Free WhatsApp quote.',
  keywords: [
    'sofa cleaning Umm Al Quwain',
    'sofa cleaning UAQ',
    'sofa shampoo Umm Al Quwain',
    'majlis cleaning Umm Al Quwain',
    'sofa deep cleaning UAQ',
    'upholstery cleaning Umm Al Quwain',
    'sofa cleaning Al Salamah',
    'sofa cleaning near me UAQ',
    'تنظيف كنب أم القيوين',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Sofa Cleaning Umm Al Quwain | Al Haya Sofa Care UAE',
    description: 'At-home sofa shampoo, majlis & steam cleaning in Umm Al Quwain: Al Salamah, Al Raudah, Old Town & Falaj Al Mualla. Free WhatsApp quote.',
    url: URL,
    type: 'website',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Umm Al Quwain', item: URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Umm Al Quwain',
  description: 'At-home sofa shampoo, majlis cleaning, stain and odour removal in Umm Al Quwain (UAQ), UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Umm Al Quwain' },
};

const content = CITY_CONTENT['umm-al-quwain'];

export default function SofaCleaningUmmAlQuwain() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="umm-al-quwain"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['umm-al-quwain']}
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
