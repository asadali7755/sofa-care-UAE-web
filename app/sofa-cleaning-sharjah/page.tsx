import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import { emirates } from '../lib/areas';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Sharjah | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Sharjah. At-home service covering all Sharjah areas. Stain removal, leather care, same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Sharjah',
    'sofa deep cleaning Sharjah',
    'sofa shampooing Sharjah',
    'sofa steam cleaning Sharjah',
    'upholstery cleaning Sharjah',
    'sofa stain removal Sharjah',
    'leather sofa cleaning Sharjah',
    'sofa cleaning Al Nahda Sharjah',
    'sofa cleaning Muwaileh Sharjah',
    'sofa cleaning Al Majaz Sharjah',
    'sofa cleaning near me Sharjah',
    'same day sofa cleaning Sharjah',
    'professional sofa cleaning Sharjah',
    'تنظيف كنب الشارقة',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-sharjah' },
  openGraph: {
    title: 'Sofa Cleaning Sharjah | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Sharjah. At-home service, same-day available, eco-friendly. Starting AED 40/seat. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-sharjah',
    type: 'website',
  },
};

const sharjahAreas = [
  'Al Nahda', 'Al Qasimia', 'Al Majaz', 'Al Taawun', 'Muwaileh',
  'Al Khan', 'University City', 'Al Mareija', 'Al Layyeh', 'Industrial Area',
  'Al Yarmook', 'Al Gharb', 'Al Nud', 'Halwan', 'Rolla',
];

const sharjahSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Sharjah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Sharjah UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Sharjah' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Sharjah', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Sharjah', price: '79', priceCurrency: 'AED' },
  ],
};

export default function SofaCleaningSharjah() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharjahSchema) }} />
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
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Sharjah</span>
            </div>
            <div className="city-hero-grid">
              <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Sharjah Service</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sharjah</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              Professional sofa deep shampoo &amp; steam cleaning across all Sharjah areas. Al Haya Sofa Care UAE brings certified technicians and industrial equipment directly to your home — no fuss, no transport.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book in Sharjah <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Sharjah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'Same Day', l: 'Service' }, { n: '10+ Areas', l: 'Sharjah Coverage' }, { n: '4.9 ★', l: 'Rating' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="city-hero-img">
                <img src="/cities/sharjah.webp" alt="Professional sofa cleaning service in Sharjah by Al Haya Sofa Care" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Why Choose Al Haya in Sharjah</div>
                <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Trusted Sofa Cleaning <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Across Sharjah</span>
                </h2>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  From Al Nahda to Muwaileh and University City — Al Haya Sofa Care UAE serves all of Sharjah with professional sofa cleaning that goes deep beyond the surface. Our team arrives equipped with industrial shampoo machines and steam cleaners, ready to restore your sofa.
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  Whether it&apos;s a fabric sofa caked in Sharjah&apos;s fine desert dust, a leather sofa needing conditioning, or stubborn pet stains — our advanced 2-in-1 shampoo and steam method tackles every case, leaving your sofa fresh, hygienic and looking new.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Deep shampoo + steam cleaning in one visit',
                    'All Sharjah areas covered — same day possible',
                    'Eco-friendly, child & pet safe products',
                    'Leather, fabric, velvet & microfiber specialists',
                    'Fast drying — ready in 2 to 4 hours',
                    '100% satisfaction — we do not leave until done',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Sharjah Areas We Cover</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  All Sharjah <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Neighbourhoods</span>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {sharjahAreas.map((area) => (
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
                    {emirates['sharjah'].areas.map((a) => (
                      <a key={a.slug} href={`/sofa-cleaning-sharjah/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
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
              <div className="section-tag">Sofa Cleaning Services Sharjah</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sharjah</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning Sharjah', desc: 'Industrial extraction removes embedded dust, allergens and stains from all sofa types across Sharjah.', color: 'var(--accent)' },
                { title: 'Sofa Shampooing Sharjah', desc: 'pH-balanced foam shampoo lifts deep grime. Sofa ready in 2–4 hours. Available same-day in Sharjah.', color: '#0891B2' },
                { title: 'Leather Sofa Cleaning Sharjah', desc: 'Specialist pH-safe leather conditioning and protective coat. Prevents cracking in Sharjah\'s climate.', color: '#8B5CF6' },
                { title: 'Sofa Stain Removal Sharjah', desc: 'Coffee, food, ink and pet stains removed safely from all fabric types across all Sharjah areas.', color: '#FF5A3C' },
              ].map((s) => (
                <div key={s.title} style={{ background: '#141210', border: `1px solid ${s.color}30`, borderTop: `3px solid ${s.color}`, borderRadius: 14, padding: '22px 20px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm">
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>Sharjah</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28 }}>
                Same-day service available. Call or WhatsApp now.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Sharjah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
