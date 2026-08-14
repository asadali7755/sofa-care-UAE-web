import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Archivo, Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
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
});
const fontGrot = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-grot',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sofashampooingdubai.com'),
  title: {
    default: 'Sofa Cleaning Dubai | Sofa Deep Shampoo & Steam Cleaning UAE | Al Haya',
    template: '%s | Al Haya Sofa Care UAE',
  },
  description: 'Al Haya Sofa Care UAE — Professional sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Stain removal, leather care, pet hair removal, same-day at-home service. Call +971547199189.',
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
    description: 'Professional sofa deep shampoo & steam cleaning in Dubai, Sharjah, Ajman & Abu Dhabi. Same-day at-home service, eco-friendly, starting AED 79. Call +971547199189.',
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
    // TODO: Replace with your actual Google Search Console verification code
    // Get it from: https://search.google.com/search-console → Add property → HTML tag method
    google: '0A5EubbkI_w7hewd0KWmtwVyVIVpTHiIDuCm4brgHoQ',
  },
};

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
  logo: 'https://sofashampooingdubai.com/favicon.svg',
  priceRange: 'AED 39 - AED 299',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  openingHours: 'Mo-Su 07:00-22:00',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['https://schema.org/Monday','https://schema.org/Tuesday','https://schema.org/Wednesday','https://schema.org/Thursday','https://schema.org/Friday','https://schema.org/Saturday','https://schema.org/Sunday'], opens: '07:00', closes: '22:00' },
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
    { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
    { '@type': 'City', name: 'Sharjah', '@id': 'https://www.wikidata.org/wiki/Q182888' },
    { '@type': 'City', name: 'Ajman', '@id': 'https://www.wikidata.org/wiki/Q171677' },
    { '@type': 'City', name: 'Abu Dhabi', '@id': 'https://www.wikidata.org/wiki/Q61750' },
    { '@type': 'City', name: 'Al Ain' },
    { '@type': 'City', name: 'Ras Al Khaimah' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sofa Cleaning Services UAE',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Deep Cleaning UAE', description: 'Professional deep shampoo cleaning for all sofa types across UAE' }, price: '99', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Shampooing UAE', description: 'Professional foam shampoo treatment with quick dry technology' }, price: '79', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Steam Cleaning UAE', description: 'High-temperature steam cleaning that kills 99.9% of bacteria and germs' }, price: '89', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Stain Removal UAE', description: 'Coffee, food, ink and pet stain removal from all upholstery types' }, price: '49', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leather Sofa Cleaning UAE', description: 'Specialist pH-safe leather care and conditioning' }, price: '129', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Hair Removal UAE', description: 'Deep pet hair extraction from all fabric types' }, price: '39', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Sanitization UAE', description: 'Hospital-grade disinfection service — 99.9% bacteria removal' }, price: '49', priceCurrency: 'AED' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Velvet & Microfiber Sofa Cleaning UAE', description: 'Specialist cleaning for delicate velvet and microfiber upholstery' }, price: '99', priceCurrency: 'AED' },
    ],
  },
  // NOTE: aggregateRating + review removed — they were placeholder/demo data.
  // Fabricated review markup risks a Google manual action. Re-add real
  // AggregateRating only once genuine, verifiable reviews exist (e.g. from GBP).
  sameAs: [
    'https://wa.me/971547199189',
    'https://www.servedubai.com',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a sofa be professionally cleaned in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Due to Dubai\'s high dust levels and humidity, we recommend a professional deep clean every 6 to 12 months. If you have pets or children, a 6-month interval is ideal to remove allergens, bacteria and embedded desert dust.' },
    },
    {
      '@type': 'Question',
      name: 'Is professional sofa cleaning worth it in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Professional sofa cleaning in Dubai removes the abrasive micro-dust particles that break down fabric fibers over time, extending your furniture\'s lifespan by years. It also eliminates allergens and bacteria that standard household vacuums cannot reach.' },
    },
    {
      '@type': 'Question',
      name: 'How long does sofa cleaning take to dry in UAE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Thanks to our high-powered extraction systems, most sofas are dry and ready to use within 4 to 8 hours. For thicker materials or natural fibers, it may take up to 12 hours depending on airflow and AC settings in your home.' },
    },
    {
      '@type': 'Question',
      name: 'Can you clean delicate fabrics like velvet or leather?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We use specialist low-moisture techniques for velvet to maintain its soft texture, and pH-balanced conditioning treatments for leather to prevent cracking and dryness. All delicate fabric types are handled with expert care.' },
    },
    {
      '@type': 'Question',
      name: 'How much does sofa cleaning cost in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sofa cleaning in Dubai starts from AED 39 for pet hair removal, AED 79 for shampooing, AED 89 for steam cleaning, and AED 99 for deep cleaning. Leather sofa cleaning starts from AED 129. All prices include at-home doorstep service.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day sofa cleaning across UAE?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! Al Haya Sofa Care UAE offers same-day sofa cleaning across Dubai, Sharjah, Ajman and Abu Dhabi. WhatsApp us at +971547199189 to book your same-day slot.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sofa shampoo cleaning and steam cleaning?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sofa shampoo cleaning uses pH-balanced foam shampoo to break down oils, grease and embedded dirt — ideal for general deep cleaning. Steam cleaning uses high-temperature vapor to sanitize and disinfect, killing 99.9% of bacteria and dust mites — ideal for hygiene-focused cleaning or homes with babies and pets. Al Haya Sofa Care UAE offers both methods and can combine them for best results.' },
    },
    {
      '@type': 'Question',
      name: 'Are your sofa cleaning products safe for children and pets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, all our cleaning products are eco-friendly, non-toxic and completely safe for children and pets. We use premium, biodegradable shampoos specifically formulated for delicate upholstery fabrics.' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontGrot.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/hero-mobile.webp" as="image" type="image/webp" media="(max-width: 768px)" />
        <link rel="preload" href="/sofa-cleaning-dubai-professional.webp" as="image" type="image/webp" media="(min-width: 769px)" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F3F7F4" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="coverage" content="United Arab Emirates" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YPV76TBPNB" strategy="afterInteractive" />
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
