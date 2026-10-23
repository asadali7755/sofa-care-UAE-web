import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
import ClientProviders from '@/app/components/ClientProviders';

const fontDisplay = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
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
  // Small labels only; don't let it compete with the hero fonts.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sofashampooingdubai.com'),
  title: {
    default: 'Sofa Cleaning & Shampooing in Dubai & UAE | Al Haya',
    template: '%s | Al Haya Sofa Care UAE',
  },
  description: 'At-home sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Stain, odour & pet-hair removal, same-day slots. Free WhatsApp quote.',
  // Focused UAE keyword set (the 4 emirates we actually serve). Meta keywords
  // carry little SEO weight, so we keep a tight, relevant list rather than a
  // bloated 140+ one that dilutes focus and lists uncovered areas.
  keywords: [
    // Core service — Dubai (primary market)
    'sofa cleaning Dubai',
    'sofa shampooing Dubai',
    'sofa deep cleaning Dubai',
    'sofa steam cleaning Dubai',
    'upholstery cleaning Dubai',
    'couch cleaning Dubai',
    'leather sofa cleaning Dubai',
    'sofa stain removal Dubai',
    'same day sofa cleaning Dubai',
    'at home sofa cleaning Dubai',
    'sofa cleaning near me Dubai',
    // Other emirates we serve
    'sofa cleaning Sharjah',
    'sofa cleaning Ajman',
    'sofa cleaning Abu Dhabi',
    'upholstery cleaning Sharjah',
    'sofa deep cleaning Abu Dhabi',
    // UAE-wide + brand
    'professional sofa cleaning UAE',
    'sofa deep shampoo cleaning UAE',
    'sofa sanitization UAE',
    'pet hair removal sofa UAE',
    'Al Haya Sofa Care UAE',
    // Arabic (UAE market)
    'تنظيف كنب دبي',
    'غسيل كنب دبي',
    'تنظيف كنب الشارقة',
    'تنظيف كنب ابوظبي',
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
    title: 'Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya Sofa Care',
    description: 'Professional sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Same-day at-home service, eco-friendly, at affordable rates. Call +971547199189.',
    url: 'https://sofashampooingdubai.com',
    siteName: 'Al Haya Sofa Care UAE',
    locale: 'en_AE',
    type: 'website',
    images: [{ url: '/sofa-cleaning-dubai-professional.webp', width: 1200, height: 630, alt: 'Al Haya Sofa Deep Cleaning UAE — Professional At-Home Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya',
    description: 'Professional sofa cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Same-day service. Call +971547199189.',
    images: ['/sofa-cleaning-dubai-professional.webp'],
  },
  alternates: {
    canonical: 'https://sofashampooingdubai.com',
  },
  verification: {
    google: '0A5EubbkI_w7hewd0KWmtwVyVIVpTHiIDuCm4brgHoQ',
  },
};

// Must match the verified Google Business Profile ("AL HAYA cleaning services",
// 4th St, Al Nahda First, Dubai) so Google and AI assistants see one entity.
const GBP_LAT = 25.2959258;
const GBP_LNG = 55.360045;
const GBP_MAPS_URL = 'https://www.google.com/maps?cid=178186783724513623';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sofashampooingdubai.com',
  name: 'Al Haya Sofa Care UAE',
  alternateName: [
    'Al Haya Sofa Cleaning Dubai',
    'Al Haya Cleaning Services UAE',
    'Alhaya Sofa Care',
  ],
  description: 'Professional sofa deep shampoo & steam cleaning services across UAE. Specializing in sofa cleaning, stain removal, leather care, pet hair removal and upholstery sanitization in Dubai, Sharjah, Ajman, Abu Dhabi, Al Ain and Ras Al Khaimah.',
  url: 'https://sofashampooingdubai.com',
  telephone: '+971547199189',
  email: 'info@sofashampooingdubai.com',
  image: 'https://sofashampooingdubai.com/sofa-cleaning-dubai-professional.webp',
  logo: 'https://sofashampooingdubai.com/al-haya-sofa-care-logo.webp',
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  // Open 24 hours, closed on Fridays (matches the Google Business Profile).
  openingHours: ['Mo-Th 00:00-23:59', 'Sa-Su 00:00-23:59'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['https://schema.org/Saturday','https://schema.org/Sunday','https://schema.org/Monday','https://schema.org/Tuesday','https://schema.org/Wednesday','https://schema.org/Thursday'], opens: '00:00', closes: '23:59' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4th Street, Al Nahda First',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GBP_LAT, longitude: GBP_LNG },
  hasMap: GBP_MAPS_URL,
  areaServed: [
    { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
    { '@type': 'City', name: 'Sharjah', '@id': 'https://www.wikidata.org/wiki/Q182888' },
    { '@type': 'City', name: 'Ajman', '@id': 'https://www.wikidata.org/wiki/Q171677' },
    { '@type': 'City', name: 'Abu Dhabi', '@id': 'https://www.wikidata.org/wiki/Q61750' },
    { '@type': 'City', name: 'Umm Al Quwain' },
    { '@type': 'City', name: 'Ras Al Khaimah' },
    { '@type': 'City', name: 'Fujairah' },
    { '@type': 'City', name: 'Al Ain' },
    { '@type': 'Place', name: 'Al Nahda, Dubai' },
    { '@type': 'Place', name: 'Al Qusais, Dubai' },
    { '@type': 'Place', name: 'Muhaisnah, Dubai' },
    { '@type': 'Place', name: 'Deira, Dubai' },
    { '@type': 'Place', name: 'Al Warqa, Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sofa Cleaning Services UAE',
    itemListElement: [
      { '@type': 'Service', name: 'Sofa Deep Cleaning UAE', description: 'Professional deep shampoo cleaning for all sofa types across UAE' },
      { '@type': 'Service', name: 'Sofa Shampooing UAE', description: 'Professional foam shampoo treatment with quick dry technology' },
      { '@type': 'Service', name: 'Sofa Steam Cleaning UAE', description: 'High-temperature steam cleaning that kills bacteria and dust mites' },
      { '@type': 'Service', name: 'Sofa Stain Removal UAE', description: 'Coffee, food, ink and pet stain removal from all upholstery types' },
      { '@type': 'Service', name: 'Leather Sofa Cleaning UAE', description: 'Specialist pH-safe leather care and conditioning' },
      { '@type': 'Service', name: 'Pet Hair Removal UAE', description: 'Deep pet hair extraction from all fabric types' },
      { '@type': 'Service', name: 'Sofa Sanitization UAE', description: 'Steam disinfection that kills bacteria and dust mites' },
      { '@type': 'Service', name: 'Velvet & Microfiber Sofa Cleaning UAE', description: 'Specialist cleaning for delicate velvet and microfiber upholstery' },
    ],
  },
  // NOTE: aggregateRating + review removed — they were placeholder/demo data.
  // Fabricated review markup risks a Google manual action. Re-add real
  // AggregateRating only once genuine, verifiable reviews exist (e.g. from GBP).
  // sameAs must only list THIS business's own official profiles. It
  // previously included www.servedubai.com -- a different Al Haya company
  // (general/villa cleaning, different phone number) -- which falsely told
  // Google's Knowledge Graph these two separate businesses are the same
  // entity. Removed rather than left in.
  sameAs: [
    GBP_MAPS_URL,
    'https://www.facebook.com/profile.php?id=61580647541867',
    'https://wa.me/971547199189',
  ],
};
// FAQPage schema is emitted per page next to the visible FAQs it describes
// (HomeFaq, AreaPage, services, blog posts) — never site-wide.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F3F7F4" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content={`${GBP_LAT};${GBP_LNG}`} />
        <meta name="ICBM" content={`${GBP_LAT}, ${GBP_LNG}`} />
        <meta name="coverage" content="United Arab Emirates" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        {/* The inline stub below queues events in dataLayer, so the library can load after the page. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YPV76TBPNB" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YPV76TBPNB');
        `}</Script>
        <ClientProviders>
          <div id="page-wrapper" style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>{children}</div>
        </ClientProviders>
      </body>
    </html>
  );
}
