import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CityLanding from '../components/CityLanding';
import { CITY_CONTENT } from '../lib/cityContent';
import { CITY_IMAGES } from '../lib/cityImages';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Dubai | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — #1 sofa cleaning in Dubai. Professional sofa deep shampoo & steam cleaning at your doorstep. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Dubai',
    'sofa deep cleaning Dubai',
    'sofa shampooing Dubai',
    'sofa steam cleaning Dubai',
    'professional sofa cleaning Dubai',
    'sofa stain removal Dubai',
    'leather sofa cleaning Dubai',
    'sofa cleaning near me Dubai',
    'same day sofa cleaning Dubai',
    'sofa cleaning JVC Dubai',
    'sofa cleaning Downtown Dubai',
    'sofa cleaning Business Bay',
    'sofa cleaning Marina Dubai',
    'sofa cleaning Al Barsha',
    'sofa cleaning Jumeirah',
    'sofa cleaning Palm Jumeirah',
    'upholstery cleaning Dubai',
    'couch cleaning Dubai',
    'at home sofa cleaning Dubai',
    'تنظيف كنب دبي',
    // Hyper-local long-tail
    'best sofa cleaning services in Dubai Marina',
    'professional upholstery cleaning Business Bay Dubai',
    'sofa deep cleaning price in JLT',
    'eco-friendly sofa shampooing Palm Jumeirah',
    'top-rated couch cleaners Arabian Ranches Dubai',
    'same day sofa cleaning Al Barsha',
    'sofa cleaning company Mirdif Dubai',
    'professional furniture cleaning Downtown Dubai',
    'sofa cleaning JBR Dubai',
    'sofa cleaning Dubai Hills Estate',
    'sofa cleaning Silicon Oasis Dubai',
    // Service + location long-tail
    'steam sofa cleaning for dust mites Dubai',
    'furniture deep cleaning allergy sufferers Dubai',
    'non-toxic sofa cleaning for kids Dubai',
    'emergency sofa cleaning red wine stains Dubai',
    'professional coffee stain removal upholstery Dubai',
    'leather sofa cleaning and conditioning Dubai',
    'microfiber sofa deep cleaning Dubai',
    'L-shaped sofa deep cleaning Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-dubai' },
  openGraph: {
    title: 'Sofa Cleaning Dubai | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Dubai. At-home service, same-day available, eco-friendly. Affordable rates. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-dubai',
    type: 'website',
  },
};

const dubaiBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Dubai', item: 'https://sofashampooingdubai.com/sofa-cleaning-dubai' },
  ],
};

const dubaiLocalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Dubai',
  description: 'Professional sofa deep shampoo and steam cleaning services in Dubai UAE. At-home service covering all Dubai areas.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Dubai' },
};

const content = CITY_CONTENT['dubai'];

export default function SofaCleaningDubai() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiLocalSchema) }} />
      <Navbar />
      <main>
        <CityLanding
          cityKey="dubai"
          cityName={content.cityName}
          tag={content.tag}
          heroPara={content.heroPara}
          image={CITY_IMAGES['dubai']}
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
