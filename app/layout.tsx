import type { Metadata } from 'next';
import './globals.css';
import { Archivo, Inter, JetBrains_Mono, Fraunces } from 'next/font/google';

const fontDisplay = Archivo({
  subsets: ['latin'],
  weight: ['500', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});
const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
const fontSerif = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sofashampooingdubai.com'),
  title: {
    default: 'Sofa Cleaning Dubai | Sofa Shampooing Dubai | Al Haya Sofa Care UAE',
    template: '%s | Al Haya Sofa Cleaning Dubai',
  },
  description: 'Al Haya Sofa Care UAE — #1 sofa cleaning & shampooing in Dubai, Sharjah & Ajman. Professional sofa deep cleaning, stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Dubai',
    'sofa shampooing Dubai',
    'sofa deep cleaning Dubai',
    'sofa cleaning Sharjah',
    'sofa cleaning Ajman',
    'upholstery cleaning Dubai',
    'couch cleaning Dubai',
    'sofa stain removal Dubai',
    'leather sofa cleaning Dubai',
    'sofa cleaning near me Dubai',
    'best sofa cleaning Dubai',
    'cheap sofa cleaning Dubai',
    'professional sofa cleaning UAE',
    'at home sofa cleaning Dubai',
    'same day sofa cleaning Dubai',
    'fabric sofa cleaning Dubai',
    'velvet sofa cleaning Dubai',
    'sofa sanitization Dubai',
    'sofa odor removal Dubai',
    'pet hair removal sofa Dubai',
    'sofa washing service Dubai',
    'sofa cleaning price Dubai',
    'Al Haya Sofa Care UAE',
    'sofa cleaning JVC Dubai',
    'sofa cleaning Downtown Dubai',
    'sofa cleaning Business Bay',
    'sofa cleaning Deira',
    'sofa cleaning Bur Dubai',
    'sofa cleaning Al Barsha',
    'sofa cleaning Jumeirah',
    'تنظيف كنب دبي',
    'غسيل كنب دبي',
  ],
  authors: [{ name: 'Al Haya Sofa Care UAE', url: 'https://sofashampooingdubai.com' }],
  creator: 'Al Haya Sofa Care UAE',
  publisher: 'Al Haya Sofa Care UAE',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Sofa Cleaning Dubai | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep cleaning & shampooing in Dubai, Sharjah & Ajman. Same-day service, eco-friendly, at-home. Starting from AED 79. Call +971547199189.',
    url: 'https://sofashampooingdubai.com',
    siteName: 'Al Haya Sofa Cleaning Dubai',
    locale: 'en_AE',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Al Haya Sofa Cleaning Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofa Cleaning Dubai | Al Haya Sofa Care UAE',
    description: 'Professional sofa cleaning & shampooing in Dubai. Same-day service. Call +971547199189.',
  },
  alternates: {
    canonical: 'https://sofashampooingdubai.com',
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sofashampooingdubai.com',
  name: 'Al Haya Sofa Care UAE',
  alternateName: 'Al Haya Sofa Cleaning Dubai',
  description: 'Professional sofa cleaning, shampooing, stain removal, leather care, and upholstery cleaning services in Dubai, Sharjah and Ajman UAE.',
  url: 'https://sofashampooingdubai.com',
  telephone: '+971547199189',
  email: 'info@sofashampooingdubai.com',
  image: 'https://sofashampooingdubai.com/og-image.jpg',
  logo: 'https://sofashampooingdubai.com/favicon.svg',
  priceRange: 'AED 39 - AED 299',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  openingHours: 'Mo-Su 07:00-22:00',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:00', closes: '22:00' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 25.2048, longitude: 55.2708 },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Sharjah' },
    { '@type': 'City', name: 'Ajman' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sofa Cleaning Services Dubai',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Deep Cleaning Dubai', description: 'Professional deep cleaning for all sofa types' }, price: '99', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Shampooing Dubai', description: 'Foam shampoo treatment with quick dry technology' }, price: '79', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stain Removal Dubai', description: 'Coffee, food, ink and pet stain removal' }, price: '49', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leather Sofa Cleaning Dubai', description: 'Specialist leather care and conditioning' }, price: '129', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Hair Removal Dubai', description: 'Deep pet hair extraction from all fabrics' }, price: '39', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Sanitization Dubai', description: 'Hospital-grade disinfection service' }, price: '49', priceCurrency: 'AED' },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Ahmed Al Mansouri' }, reviewBody: 'Best sofa cleaning service in Dubai. My sofa looks brand new!' },
    { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Sarah Johnson' }, reviewBody: 'Amazing results! Removed all stains from my leather sofa.' },
  ],
  sameAs: [
    'https://wa.me/971547199189',
    'https://www.servedubai.com',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does sofa cleaning cost in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Sofa cleaning in Dubai starts from AED 39 for pet hair removal, AED 79 for shampooing, and AED 99 for deep cleaning. Leather sofa cleaning starts from AED 129.' } },
    { '@type': 'Question', name: 'How long does sofa cleaning take in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Most sofa cleaning jobs take 1-3 hours. Your sofa will be dry and ready to use within 2-4 hours after shampooing.' } },
    { '@type': 'Question', name: 'Do you offer same-day sofa cleaning in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Al Haya Sofa Care UAE offers same-day sofa cleaning across Dubai, Sharjah and Ajman. WhatsApp us at +971547199189 to book.' } },
    { '@type': 'Question', name: 'Which areas in Dubai do you cover for sofa cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'We cover all areas of Dubai including JVC, Downtown Dubai, Business Bay, Al Barsha, Jumeirah, Deira, Bur Dubai, Marina, JBR, and all of Sharjah and Ajman.' } },
    { '@type': 'Question', name: 'Are your sofa cleaning products safe for children and pets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all our cleaning products are eco-friendly, non-toxic and completely safe for children and pets.' } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/hero-sofa.webp" as="image" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
