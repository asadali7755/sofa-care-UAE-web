import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import QuoteCallSection from '../components/QuoteCallSection';
import { emirates } from '../lib/areas';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Fujairah | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Fujairah, including Dibba. At-home east-coast service. Stain removal, leather care, eco-friendly products. Call +971547199189.',
  keywords: [
    'sofa cleaning Fujairah',
    'sofa deep cleaning Fujairah',
    'sofa shampooing Fujairah',
    'sofa steam cleaning Fujairah',
    'sofa cleaning Dibba',
    'sofa cleaning Dibba Al Fujairah',
    'sofa cleaning Dibba Al Hisn',
    'upholstery cleaning Fujairah',
    'sofa stain removal Fujairah',
    'leather sofa cleaning Fujairah',
    'sofa cleaning near me Fujairah',
    'professional sofa cleaning east coast UAE',
    'تنظيف كنب الفجيرة',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah' },
  openGraph: {
    title: 'Sofa Cleaning Fujairah | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Fujairah and Dibba. At-home service, eco-friendly, from AED 79. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah',
    type: 'website',
  },
};

const fujairahAreas = [
  'Fujairah City', 'Dibba', 'Al Faseel', 'Khor Fakkan', 'Al Gurfa', 'Mirbah',
];

const fujairahBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Fujairah', item: 'https://sofashampooingdubai.com/sofa-cleaning-fujairah' },
  ],
};

const fujairahSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Fujairah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Fujairah and Dibba, UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Fujairah' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Fujairah', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Fujairah', price: '79', priceCurrency: 'AED' },
  ],
};

export default function SofaCleaningFujairah() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fujairahSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fujairahBreadcrumb) }} />
      <Navbar />
      <main>
        <section className="page-hero" style={{ minHeight: '60vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, #0891B2 15%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Fujairah</span>
            </div>
            <div className="city-hero-grid">
              <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Fujairah / East Coast Service</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Fujairah</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              Professional sofa deep shampoo &amp; steam cleaning across Fujairah and the east coast, including Dibba. Al Haya Sofa Care UAE brings certified technicians and industrial equipment directly to your home.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book in Fujairah <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Fujairah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'East Coast', l: 'Regular Route' }, { n: '6 Areas', l: 'Fujairah Coverage' }, { n: 'Certified', l: 'Team' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="city-hero-img">
                <img src="/locations/dibba-town-center-roundabout.webp" alt="Dibba, Fujairah — Al Haya Sofa Care serves the east coast including Dibba" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Why Choose Al Haya on the East Coast</div>
                <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Trusted Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Across Fujairah</span>
                </h2>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  From Fujairah City to Dibba on the Sharjah border — Al Haya Sofa Care UAE serves the east coast with the same professional sofa cleaning we deliver across the rest of the UAE. Our team arrives equipped with industrial shampoo machines and steam cleaners.
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  East-coast humidity and mountain dust are tougher on upholstery than the drier western emirates, so we use an antimicrobial treatment for musty odors alongside our standard shampoo and steam process — especially useful for villas and holiday homes that sit empty between visits.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Deep shampoo + steam cleaning in one visit',
                    'Regular scheduled route covering the east coast',
                    'Eco-friendly, child & pet safe products',
                    'Leather, fabric, velvet & microfiber specialists',
                    'Antimicrobial treatment for humidity-related odors',
                    '100% satisfaction — we do not leave until done',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Fujairah Areas We Cover</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  East Coast <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Neighbourhoods</span>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {fujairahAreas.map((area) => (
                    <span key={area} style={{
                      padding: '7px 14px', borderRadius: 999,
                      background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
                      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)',
                    }}>{area}</span>
                  ))}
                </div>
                {/* Dedicated area pages — internal linking */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 12 }}>Dedicated area pages</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {emirates['fujairah'].areas.map((a) => (
                      <a key={a.slug} href={`/sofa-cleaning-fujairah/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
                        Sofa Cleaning {a.short} →
                      </a>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line-strong)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Starting Price</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 900, color: 'var(--fg)', marginBottom: 4 }}>AED 40 / seat</div>
                  <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>For sofa shampoo cleaning. Deep cleaning from AED 50/seat.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-tag">Sofa Cleaning Services Fujairah</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Fujairah</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning Fujairah', desc: 'Industrial extraction removes embedded dust, allergens and stains from all sofa types across the east coast.', color: 'var(--accent)' },
                { title: 'Sofa Shampooing Fujairah', desc: 'pH-balanced foam shampoo lifts deep grime. Scheduled east-coast route including Dibba.', color: '#0891B2' },
                { title: 'Leather Sofa Cleaning Fujairah', desc: 'Specialist pH-safe leather conditioning and protective coat. Prevents cracking in coastal humidity.', color: '#8B5CF6' },
                { title: 'Odor & Antimicrobial Treatment', desc: 'Neutralises musty, humidity-related odors at the source — ideal for villas and holiday homes.', color: '#FF5A3C' },
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
        <section className="section-sm">
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>Fujairah</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28 }}>
                Regular east-coast route. Call or WhatsApp now.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Fujairah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
