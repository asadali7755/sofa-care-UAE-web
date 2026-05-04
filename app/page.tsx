import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import ScrollRevealInit from './components/ScrollRevealInit';

// Lazy load everything below the fold
const ServicesPreview      = dynamic(() => import('./components/ServicesPreview'));
const VideoSection         = dynamic(() => import('./components/VideoSection'));
const WhyChooseUs          = dynamic(() => import('./components/WhyChooseUs'));
const ServiceCoverageSection = dynamic(() => import('./components/ServiceCoverageSection'));
const Testimonials         = dynamic(() => import('./components/Testimonials'));
const ServeDubaiSection    = dynamic(() => import('./components/ServeDubaiSection'));
const CTABanner            = dynamic(() => import('./components/CTABanner'));
const Footer               = dynamic(() => import('./components/Footer'));
const WhatsAppButton       = dynamic(() => import('./components/WhatsAppButton'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <ServicesPreview />
        <VideoSection />
        <WhyChooseUs />
        <ServiceCoverageSection />
        <Testimonials />
        <ServeDubaiSection />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}
