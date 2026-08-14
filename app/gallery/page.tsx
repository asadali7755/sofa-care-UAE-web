import type { Metadata } from 'next';
import Script from 'next/script';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Before & After Gallery Dubai | Videos & Photos',
  description: 'Watch real before & after sofa cleaning videos and photos from Dubai, Sharjah & Ajman. Deep cleaning, stain removal, leather care results. Al Haya Sofa Care UAE.',
  keywords: [
    'sofa cleaning before after Dubai',
    'sofa cleaning results Dubai',
    'sofa cleaning video Dubai',
    'sofa stain removal before after',
    'leather sofa cleaning results',
    'sofa cleaning gallery Dubai',
    'upholstery cleaning photos Dubai',
    'sofa deep cleaning video',
    'sofa shampooing results',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/gallery' },
  openGraph: {
    title: 'Sofa Cleaning Before & After Gallery — Real Dubai Results',
    description: 'Watch real before & after sofa cleaning videos and photos from Dubai, Sharjah & Ajman. Al Haya Sofa Care UAE.',
    url: 'https://sofashampooingdubai.com/gallery',
    type: 'website',
  },
};

const videoSchemas = [
  { name: 'Sofa Deep Cleaning Result Dubai', file: 'sofa-deep-cleaning-result-dubai-1.mp4', desc: 'Before and after sofa deep cleaning result in Dubai by Al Haya Sofa Care' },
  { name: 'Sofa Shampooing Result Dubai', file: 'sofa-shampooing-result-dubai-2.mp4', desc: 'Before and after sofa shampooing result in Dubai by Al Haya Sofa Care' },
  { name: 'Upholstery Cleaning Before After Dubai', file: 'upholstery-cleaning-before-after-dubai-3.mp4', desc: 'Upholstery cleaning before and after transformation in Dubai by Al Haya' },
  { name: 'Sofa Cleaning Quick Result Dubai', file: 'sofa-cleaning-quick-result-dubai-4.mp4', desc: 'Quick sofa cleaning result showing same-day service in Dubai by Al Haya' },
  { name: 'Fabric Sofa Deep Clean Dubai', file: 'fabric-sofa-deep-clean-dubai-5.mp4', desc: 'Fabric sofa deep clean before and after in Dubai by Al Haya Sofa Care' },
  { name: 'Sofa Steam Cleaning Result Dubai', file: 'sofa-steam-cleaning-result-dubai-6.mp4', desc: 'Sofa steam cleaning sanitization result in Dubai by Al Haya Sofa Care' },
  { name: 'Couch Cleaning Before After Dubai', file: 'couch-cleaning-before-after-dubai-7.mp4', desc: 'Couch cleaning before and after restoration in Dubai by Al Haya Sofa Care' },
  { name: 'Sofa Sanitization Result Dubai', file: 'sofa-sanitization-result-dubai-8.mp4', desc: 'Sofa sanitization and bacteria removal result in Dubai by Al Haya' },
  { name: 'Sofa Stain Removal Before After Dubai', file: 'sofa-stain-removal-before-after-dubai.mp4', desc: 'Sofa stain removal before and after in Dubai by Al Haya Sofa Care' },
  { name: 'Single Seat Sofa Cleaning Dubai', file: 'single-seat-sofa-cleaning-dubai.mp4', desc: 'Single seat sofa cleaning result in Dubai by Al Haya Sofa Care UAE' },
];

const videoJsonLd = videoSchemas.map((v) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.name,
  description: v.desc,
  contentUrl: `https://sofashampooingdubai.com/videos/${v.file}`,
  thumbnailUrl: 'https://sofashampooingdubai.com/sofa-cleaning-dubai-professional.webp',
  uploadDate: '2026-06-29',
  publisher: {
    '@type': 'Organization',
    name: 'Al Haya Sofa Care UAE',
    url: 'https://sofashampooingdubai.com',
  },
}));

const galleryBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://sofashampooingdubai.com/gallery' },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <Script
        id="gallery-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumb) }} />
      <GalleryClient />
    </>
  );
}
