import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Before & After Gallery Dubai | Real Results',
  description: 'See real before & after photos of sofa cleaning jobs in Dubai, Sharjah & Ajman. Stain removal, leather cleaning, deep cleaning results. Al Haya Sofa Care UAE.',
  keywords: [
    'sofa cleaning before after Dubai',
    'sofa cleaning results Dubai',
    'sofa stain removal before after',
    'leather sofa cleaning results',
    'sofa cleaning gallery Dubai',
    'upholstery cleaning photos Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/gallery' },
  openGraph: {
    title: 'Sofa Cleaning Before & After Gallery — Real Dubai Results',
    description: 'Real before & after sofa cleaning results from Dubai, Sharjah & Ajman. Tap images to see the transformation.',
    url: 'https://sofashampooingdubai.com/gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
