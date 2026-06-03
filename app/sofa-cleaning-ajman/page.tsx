import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import { emirates } from '../lib/areas';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Ajman | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Ajman. At-home doorstep service. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Ajman',
    'sofa deep cleaning Ajman',
    'sofa shampooing Ajman',
    'sofa steam cleaning Ajman',
    'upholstery cleaning Ajman',
    'sofa stain removal Ajman',
    'leather sofa cleaning Ajman',
    'sofa cleaning Al Nuaimia Ajman',
    'sofa cleaning Al Rashidiya Ajman',
    'sofa cleaning near me Ajman',
    'same day sofa cleaning Ajman',
    'professional sofa cleaning Ajman',
    'تنظيف كنب عجمان',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-ajman' },
  openGraph: {
    title: 'Sofa Cleaning Ajman | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Ajman. At-home service, same-day available. Starting AED 40/seat. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-ajman',
    type: 'website',
  },
};

const ajmanAreas = [
  'Al Nuaimia', 'Al Rashidiya', 'Al Jurf', 'Al Hamidiya',
  'Emirates City', 'Al Bustan', 'Al Mowaihat', 'Al Rumailah',
  'Al Zahra', 'Ajman Downtown', 'Al Helio', 'Corniche Ajman',
];

const ajmanSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Ajman',
  description: 'Professional sofa deep shampoo and steam cleaning services in Ajman UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Ajman' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Ajman', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Ajman', price: '79', priceCurrency: 'AED' },
  ],
};

export default function SofaCleaningAjman() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ajmanSchema) }} />
      <Navbar />
      <main>
        <section className="page-hero" style={{ minHeight: '60vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, #F59E0B 12%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Ajman</span>
            </div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Ajman Service</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Ajman</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              Expert sofa deep shampoo &amp; steam cleaning in Ajman. Al Haya Sofa Care UAE comes to your home with full professional equipment — affordable, fast, and completely thorough.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book in Ajman <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Ajman." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'Same Day', l: 'Service' }, { n: '12+ Areas', l: 'Ajman Coverage' }, { n: '4.9 ★', l: 'Rating' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Our Service in Ajman</div>
                <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Professional Sofa Cleaning <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>in Ajman</span>
                </h2>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  Al Haya Sofa Care UAE proudly serves Ajman with the same high-standard professional sofa cleaning used across Dubai and Sharjah. Our mobile team arrives equipped with industrial shampoo machines and high-temperature steam cleaners, ready to restore your sofa to like-new condition.
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  Our 2-in-1 deep shampoo and steam cleaning method removes dust mites, bacteria, stubborn stains and unpleasant odors — all in a single visit. We handle all sofa types including fabric, leather, velvet, microfiber and suede.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Mobile team comes to your home in Ajman',
                    'All sofa types handled with expert care',
                    'Stain removal for coffee, food, ink and pet stains',
                    'Odor elimination — not just masked',
                    'Eco-friendly, non-toxic products used',
                    'Affordable rates — transparent pricing, no hidden costs',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Areas We Cover</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  All Ajman <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Areas</span>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {ajmanAreas.map((area) => (
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
                    {emirates['ajman'].areas.map((a) => (
                      <a key={a.slug} href={`/sofa-cleaning-ajman/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
                        Sofa Cleaning {a.short} →
                      </a>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line-strong)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Starting Price</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 900, color: 'var(--fg)', marginBottom: 4 }}>AED 40 / seat</div>
                  <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>Sofa shampoo cleaning. Deep cleaning from AED 50/seat.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-tag">Sofa Cleaning Services Ajman</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Ajman</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning Ajman', desc: 'Industrial extraction removes embedded dust, allergens and bacteria from every sofa type across Ajman.', color: 'var(--accent)' },
                { title: 'Sofa Shampooing Ajman', desc: 'Professional foam shampoo treatment lifts deep grime and stains. Fast-dry formula — ready in 2–4 hours.', color: '#F59E0B' },
                { title: 'Pet Hair Removal Ajman', desc: 'Specialist vacuum and roller treatment removes embedded pet hair from all cushions and seams.', color: '#D97706' },
                { title: 'Sofa Sanitization Ajman', desc: 'Hospital-grade disinfection kills 99.9% of bacteria and germs. Safe for children and pets.', color: '#059669' },
              ].map((s) => (
                <div key={s.title} style={{ background: '#141210', border: `1px solid ${s.color}30`, borderTop: `3px solid ${s.color}`, borderRadius: 14, padding: '22px 20px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>Ajman</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28 }}>
                Same-day service available. Call or WhatsApp now.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Ajman." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
