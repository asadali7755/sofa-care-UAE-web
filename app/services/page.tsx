import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Sofa Deep Shampoo & Steam Cleaning Services UAE',
  description: 'Professional sofa deep shampoo & steam cleaning services across UAE. Deep cleaning (AED 99), shampooing (AED 79), steam cleaning, stain removal, leather care, pet hair removal. Same-day at-home service in Dubai, Sharjah, Ajman & Abu Dhabi.',
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
    title: 'Sofa Deep Shampoo & Steam Cleaning Services UAE | Al Haya',
    description: 'Complete sofa cleaning services across UAE: deep shampoo, steam cleaning, stain removal, leather care & more. At-home same-day service. Starting AED 79.',
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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }} />
      <ServicesClient />
    </>
  );
}
