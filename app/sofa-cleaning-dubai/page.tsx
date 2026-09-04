import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import { emirates } from '../lib/areas';
import QuoteCallSection from '../components/QuoteCallSection';
const dubaiAreaPages = emirates.dubai.areas;

export const metadata: Metadata = {
  title: 'Sofa Cleaning Dubai | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — #1 sofa cleaning in Dubai. Professional sofa deep shampoo & steam cleaning at your doorstep. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Dubai',
    'sofa deep cleaning Dubai',
    'sofa shampooing Dubai',
    'sofa steam cleaning Dubai',
    'professional sofa cleaning Dubai',
    'sofa stain removal Dubai',
    'leather sofa cleaning Dubai',
    'sofa cleaning near me Dubai',
    'same day sofa cleaning Dubai',
    'sofa cleaning JVC Dubai',
    'sofa cleaning Downtown Dubai',
    'sofa cleaning Business Bay',
    'sofa cleaning Marina Dubai',
    'sofa cleaning Al Barsha',
    'sofa cleaning Jumeirah',
    'sofa cleaning Palm Jumeirah',
    'upholstery cleaning Dubai',
    'couch cleaning Dubai',
    'at home sofa cleaning Dubai',
    'تنظيف كنب دبي',
    // Hyper-local long-tail
    'best sofa cleaning services in Dubai Marina',
    'professional upholstery cleaning Business Bay Dubai',
    'sofa deep cleaning price in JLT',
    'eco-friendly sofa shampooing Palm Jumeirah',
    'top-rated couch cleaners Arabian Ranches Dubai',
    'same day sofa cleaning Al Barsha',
    'sofa cleaning company Mirdif Dubai',
    'professional furniture cleaning Downtown Dubai',
    'sofa cleaning JBR Dubai',
    'sofa cleaning Dubai Hills Estate',
    'sofa cleaning Silicon Oasis Dubai',
    // Service + location long-tail
    'steam sofa cleaning for dust mites Dubai',
    'furniture deep cleaning allergy sufferers Dubai',
    'non-toxic sofa cleaning for kids Dubai',
    'emergency sofa cleaning red wine stains Dubai',
    'professional coffee stain removal upholstery Dubai',
    'leather sofa cleaning and conditioning Dubai',
    'microfiber sofa deep cleaning Dubai',
    'L-shaped sofa deep cleaning Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-dubai' },
  openGraph: {
    title: 'Sofa Cleaning Dubai | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Dubai. At-home service, same-day available, eco-friendly. Starting AED 40/seat. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-dubai',
    type: 'website',
  },
};

const dubaiAreas = [
  'JVC (Jumeirah Village Circle)',
  'Downtown Dubai',
  'Business Bay',
  'Dubai Marina',
  'Jumeirah Beach Residence (JBR)',
  'Al Barsha',
  'Jumeirah',
  'Palm Jumeirah',
  'Deira',
  'Bur Dubai',
  'Dubai Hills Estate',
  'Silicon Oasis',
  'Mirdif',
  'Al Qusais',
  'International City',
  'Discovery Gardens',
  'Sports City',
  'Motor City',
  'Jumeirah Lakes Towers (JLT)',
  'Sheikh Zayed Road',
];

const dubaiBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Dubai', item: 'https://sofashampooingdubai.com/sofa-cleaning-dubai' },
  ],
};

const dubaiLocalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Dubai',
  description: 'Professional sofa deep shampoo and steam cleaning services in Dubai UAE. At-home service covering all Dubai areas.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Dubai' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Dubai', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Dubai', price: '79', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Steam Cleaning Dubai', price: '89', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Leather Sofa Cleaning Dubai', price: '129', priceCurrency: 'AED' },
  ],
};

export default function SofaCleaningDubai() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiLocalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiBreadcrumb) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="page-hero" style={{ minHeight: '60vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 15%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Dubai</span>
            </div>
            <div className="city-hero-grid">
              <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Dubai Service</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Dubai</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              Dubai&apos;s most trusted sofa deep shampoo &amp; steam cleaning service. Al Haya Sofa Care UAE brings professional equipment directly to your home — covering all Dubai areas, same-day available.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book Now in Dubai <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'Same Day', l: 'Service' }, { n: '20+ Areas', l: 'Dubai Coverage' }, { n: 'Certified', l: 'Team' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="city-hero-img">
                <img src="/cities/dubai.webp" alt="Professional sofa cleaning service in Dubai by Al Haya Sofa Care" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Dubai needs professional sofa cleaning */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Why Professional Cleaning</div>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Why Your Dubai Sofa Needs <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Deep Cleaning</span>
                </h2>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>Combatting Desert Dust</h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  Dubai&apos;s micro-dust particles are incredibly fine. They settle deep into fabric fibers, acting like sandpaper that wears down your sofa over time. Air conditioning systems circulate this dust constantly — regular vacuuming cannot reach these deep layers.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#3B82F6', marginBottom: 8 }}>Allergen &amp; Bacteria Removal</h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  Professional-grade extraction removes dust mites, pet dander and bacteria that standard household vacuums leave behind — essential for families with children or anyone with respiratory sensitivities.
                </p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#10B981', marginBottom: 8 }}>Stubborn Stain Removal</h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  Whether it&apos;s a coffee spill, pet accident or food stain, our technicians use pH-balanced cleaners tailored to your specific fabric type — lifting stains without causing discoloration or dye bleeding.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Removes deep-rooted dust mites and allergens',
                    'Eliminates stubborn food, coffee and pet stains',
                    'Kills 99.9% of bacteria with steam treatment',
                    'Eco-friendly products — safe for kids and pets',
                    'Fast drying — sofa ready in 2–4 hours',
                    'All sofa types: fabric, leather, velvet, microfiber',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Our Method</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Advanced 2-in-1 Cleaning Method
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { step: '01', title: 'Deep Shampoo Cleaning', desc: 'We use premium, eco-friendly shampoos specifically formulated for delicate upholstery. This process breaks down grease and lifts heavy stains from the fabric fibers without damaging the material.' },
                    { step: '02', title: 'High-Temperature Steam Cleaning', desc: 'Our industrial-grade steam cleaning uses high-temperature vapor to penetrate deep into the cushions. This not only removes dirt but also sanitizes and disinfects your sofa, killing 99.9% of bacteria and germs.' },
                    { step: '03', title: 'High-Suction Extraction', desc: 'Powerful vacuum extraction removes all dissolved dirt and moisture, leaving your sofa 90% dry and ready to use within hours.' },
                    { step: '04', title: 'Deodorizing & Protection', desc: 'A final deodorizing treatment leaves your sofa smelling fresh, with an optional fabric protection coat to repel future stains.' },
                  ].map((s) => (
                    <div key={s.step} style={{ display: 'flex', gap: 20, padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, color: 'var(--accent)', opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{s.step}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: 'var(--fg)' }}>{s.title}</div>
                        <div style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dubai Areas */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-tag" style={{ margin: '0 auto 16px' }}>Coverage</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 16 }}>
                Sofa Cleaning Across All <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Dubai Areas</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
                We cover every neighbourhood in Dubai — from Downtown and Marina to the newest communities in Dubai South.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 40 }}>
              {dubaiAreas.map((area) => (
                <span key={area} style={{
                  padding: '8px 16px', borderRadius: 999,
                  background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)',
                }}>{area}</span>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 14 }}>Dedicated area pages</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {dubaiAreaPages.map((a) => (
                  <Link key={a.slug} href={`/sofa-cleaning-dubai/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
                    Sofa Cleaning {a.short} →
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--fg-muted)', fontSize: 14, marginBottom: 20 }}>Don&apos;t see your area? WhatsApp us — we most likely cover it.</p>
              <a href="https://wa.me/971547199189?text=Hi%2C%20do%20you%20cover%20sofa%20cleaning%20in%20my%20area%20in%20Dubai%3F" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> Check Your Area
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-tag">Sofa Cleaning Services Dubai</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Dubai</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning Dubai', desc: 'Industrial extraction removes Dubai\'s fine micro-dust, allergens and deep stains. Most popular sofa cleaning Dubai service.', color: 'var(--accent)' },
                { title: 'Sofa Shampooing Dubai', desc: 'pH-balanced foam shampoo lifts oil, grease and grime. Fast-dry formula — sofa ready in 2–4 hours across Dubai.', color: '#0891B2' },
                { title: 'Leather Sofa Cleaning Dubai', desc: 'Specialist pH-safe leather care prevents cracking in Dubai\'s heat. Conditioning and protective coat finish.', color: '#8B5CF6' },
                { title: 'Sofa Stain Removal Dubai', desc: 'Coffee, red wine, pet stains — removed safely without discoloration from all sofa fabrics across Dubai.', color: '#FF5A3C' },
              ].map((s) => (
                <div key={s.title} style={{ background: '#FFFFFF', border: `1px solid ${s.color}30`, borderTop: `3px solid ${s.color}`, borderRadius: 14, padding: '22px 20px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(12,17,14,0.56)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteCallSection />

        {/* CTA */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>Dubai</span> Today
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
                Same-day service available. Al Haya Sofa Care UAE comes to you with all equipment — starting from AED 40/seat.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <IconWhatsApp size={16} /> WhatsApp
                </a>
                <a href="tel:+971547199189" className="btn btn-ghost">📞 Call Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
