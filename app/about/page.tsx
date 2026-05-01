import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Al Haya Sofa Care UAE | Trusted Sofa Cleaning Dubai',
  description: 'Al Haya Sofa Care UAE — Dubai\'s trusted sofa cleaning experts with 5+ years experience, 500+ happy clients & 4.9★ rating. Professional, eco-friendly at-home service across UAE.',
  keywords: [
    'Al Haya Sofa Care UAE Dubai',
    'best sofa cleaning company Dubai',
    'trusted sofa cleaning Dubai',
    'professional sofa cleaners Dubai',
    'sofa cleaning experts UAE',
    'eco-friendly sofa cleaning Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/about' },
  openGraph: {
    title: 'About Al Haya — Dubai\'s Trusted Sofa Cleaning Experts',
    description: '5+ years, 500+ clients, 4.9★ rating. Professional sofa cleaning across Dubai, Sharjah & Ajman.',
    url: 'https://sofashampooingdubai.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
