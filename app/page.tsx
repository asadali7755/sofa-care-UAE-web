import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import CoverageSection from './components/CoverageSection';
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
        <WhyChooseUs />
        <CoverageSection />
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
