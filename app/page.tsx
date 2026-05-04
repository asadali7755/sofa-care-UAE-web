import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceCoverageSection from './components/ServiceCoverageSection';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import MarqueeBanner from './components/MarqueeBanner';
import ServeDubaiSection from './components/ServeDubaiSection';
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
