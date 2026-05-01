import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Services Dubai | Deep Cleaning, Shampooing, Stain Removal',
  description: 'Complete sofa cleaning services in Dubai: deep cleaning (AED 99), shampooing (AED 79), stain removal, leather care, pet hair removal, sanitization. Same-day service across Dubai, Sharjah & Ajman.',
  keywords: [
    'sofa cleaning services Dubai',
    'sofa deep cleaning Dubai price',
    'sofa shampooing service Dubai',
    'leather sofa cleaning Dubai',
    'sofa stain removal Dubai',
    'upholstery cleaning Dubai',
    'sofa sanitization Dubai',
    'pet hair removal sofa Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/services' },
  openGraph: {
    title: 'Sofa Cleaning Services Dubai — Starting AED 79',
    description: 'Deep cleaning, shampooing, stain removal, leather care & more. At-home service across Dubai, Sharjah & Ajman. Same day available.',
    url: 'https://sofashampooingdubai.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
