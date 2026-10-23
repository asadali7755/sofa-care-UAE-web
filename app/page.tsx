import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceCoverageSection from './components/ServiceCoverageSection';
import CTABanner from './components/CTABanner';
import MarqueeBanner from './components/MarqueeBanner';
import ServeDubaiSection from './components/ServeDubaiSection';
import MapSection from './components/MapSection';
import CitiesSection from './components/CitiesSection';
import AreasCovered from './components/AreasCovered';
import HomeFaq from './components/HomeFaq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollRevealInit from './components/ScrollRevealInit';

import type { Metadata } from 'next';

// Homepage keeps the root title/description; this adds the Arabic hreflang pair.
export const metadata: Metadata = {
  alternates: { canonical: 'https://sofashampooingdubai.com', languages: { 'en-AE': '/', 'ar-AE': '/ar', 'x-default': '/' } },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <ServicesPreview />
        <WhyChooseUs />
        <CitiesSection />
        <AreasCovered />
        <ServiceCoverageSection />
        <ServeDubaiSection />
        <MapSection />
        <HomeFaq />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}
