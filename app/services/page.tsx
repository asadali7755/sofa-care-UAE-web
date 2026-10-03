import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import { SERVICES, SERVICE_FAQS, EMIRATE_LINKS, SITE } from './servicesData';

export const metadata: Metadata = {
  title: 'Sofa Cleaning in All 7 UAE Emirates',
  description: 'Sofa cleaning in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah & Umm Al Quwain. Shampooing from AED 40, deep cleaning, stain removal, leather & pet hair care at home.',
  keywords: [
    // Service keywords
    'sofa deep shampoo cleaning UAE',
    'sofa steam cleaning UAE',
    'professional sofa cleaning UAE',
    'sofa cleaning services Dubai',
    'sofa deep cleaning Dubai',
    'sofa shampooing service UAE',
    'sofa steam cleaning Dubai',
    'leather sofa cleaning UAE',
    'sofa stain removal UAE',
    'upholstery cleaning UAE',
    'sofa sanitization UAE',
    'pet hair removal sofa UAE',
    'velvet sofa cleaning UAE',
    'microfiber sofa cleaning UAE',
    'sofa odor removal UAE',
    'sofa fabric protection UAE',
    // Location + service combos
    'sofa cleaning services Abu Dhabi',
    'sofa cleaning services Sharjah',
    'sofa cleaning services Ajman',
    'sofa cleaning Ras Al Khaimah',
    'sofa cleaning Fujairah',
    'sofa cleaning Umm Al Quwain',
    'sofa deep cleaning Abu Dhabi',
    'sofa shampooing Sharjah',
    'leather sofa cleaning Ras Al Khaimah',
    'sofa stain removal Abu Dhabi',
    'velvet sofa cleaning Abu Dhabi',
    'sofa odor removal Fujairah',
    'sofa cleaning price UAE',
    // Service & technique long-tail
    'steam sofa cleaning for dust mites Dubai',
    'furniture deep cleaning for allergy sufferers Dubai',
    'non-toxic sofa cleaning for homes with kids UAE',
    'sofa sanitization and disinfection service Dubai',
    'industrial power vacuuming for sofas Dubai',
    'professional couch dry cleaning for delicate fabrics',
    // Fabric-specific long-tail
    'professional leather sofa cleaning and conditioning Dubai',
    'microfiber couch deep cleaning service UAE',
    'velvet sofa cleaning specialist Dubai',
    'L-shaped sofa deep cleaning cost Dubai',
    '7 seater sofa shampooing price UAE',
    'safe cleaning for silk and wool upholstery Dubai',
    // Problem-solving long-tail
    'how to remove pet urine smell from sofa Dubai',
    'professional coffee stain removal upholstery Dubai',
    'emergency sofa cleaning red wine stains Dubai',
    'sofa odor treatment cigarette smoke UAE',
    'restoring old leather sofa shine Dubai',
    // Intent-based
    'compare sofa cleaning prices Dubai 2026',
    'is professional sofa cleaning worth it Dubai',
    'sofa fabric protection vs DIY sprays Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/services' },
  openGraph: {
    title: 'Sofa Cleaning Services in All 7 UAE Emirates | Al Haya',
    description: 'Sofa shampooing, steam deep cleaning, stain removal, leather care & more at your door in Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ. Shampooing from AED 40.',
    url: 'https://sofashampooingdubai.com/services',
    type: 'website',
  },
};

const servicesBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sofashampooingdubai.com/services' },
  ],
};

const emirateServed = EMIRATE_LINKS.map((e) => ({ '@type': 'State', name: e.name }));

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sofa cleaning services across the UAE',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      '@id': `${SITE}/services#${s.id}`,
      name: s.name,
      serviceType: s.name,
      url: `${SITE}/services#${s.id}`,
      description: s.desc1,
      provider: { '@type': 'LocalBusiness', '@id': SITE, name: 'Al Haya Sofa Care UAE', telephone: '+971547199189' },
      areaServed: emirateServed,
    },
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICE_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicesClient />
    </>
  );
}
