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
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollRevealInit from './components/ScrollRevealInit';

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
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}
