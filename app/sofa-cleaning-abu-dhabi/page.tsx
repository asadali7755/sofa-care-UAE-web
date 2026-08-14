import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import QuoteCallSection from '../components/QuoteCallSection';
import { emirates } from '../lib/areas';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Abu Dhabi | Professional Sofa Deep Shampoo & Steam Cleaning',
  description: 'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Abu Dhabi. At-home service covering Khalifa City, Al Reem Island, Yas Island & all areas. Same-day service. Call +971547199189.',
  keywords: [
    'sofa cleaning Abu Dhabi',
    'sofa deep cleaning Abu Dhabi',
    'sofa shampooing Abu Dhabi',
    'sofa steam cleaning Abu Dhabi',
    'sofa sanitization Abu Dhabi',
    'upholstery cleaning Abu Dhabi',
    'sofa stain removal Abu Dhabi',
    'leather sofa cleaning Abu Dhabi',
    'sofa cleaning Khalifa City',
    'sofa cleaning Al Reem Island',
    'sofa cleaning Yas Island',
    'sofa cleaning Saadiyat Island',
    'sofa cleaning Al Muroor Abu Dhabi',
    'sofa cleaning near me Abu Dhabi',
    'same day sofa cleaning Abu Dhabi',
    'professional sofa cleaning Abu Dhabi',
    'تنظيف كنب ابوظبي',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi' },
  openGraph: {
    title: 'Sofa Cleaning Abu Dhabi | Al Haya Sofa Care UAE',
    description: 'Professional sofa deep shampoo & steam cleaning in Abu Dhabi. At-home service, same-day available. Starting AED 40/seat. Call +971547199189.',
    url: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi',
    type: 'website',
  },
};

const abuDhabiAreas = [
  'Khalifa City', 'Al Reem Island', 'Yas Island', 'Saadiyat Island',
  'Al Muroor', 'Al Mushrif', 'Al Khalidiyah', 'Corniche Abu Dhabi',
  'Al Reef', 'Mohammad Bin Zayed City', 'Al Shamkha', 'Masdar City',
  'Tourist Club Area', 'Al Bateen', 'Electra Street', 'Hamdan Street',
];

const abuDhabiBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Abu Dhabi', item: 'https://sofashampooingdubai.com/sofa-cleaning-abu-dhabi' },
  ],
};

const abuDhabiSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Abu Dhabi',
  description: 'Professional sofa deep shampoo and steam cleaning services in Abu Dhabi UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Abu Dhabi' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Abu Dhabi', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Abu Dhabi', price: '79', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Steam Cleaning Abu Dhabi', price: '89', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Leather Sofa Cleaning Abu Dhabi', price: '129', priceCurrency: 'AED' },
  ],
};

export default function SofaCleaningAbuDhabi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(abuDhabiSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(abuDhabiBreadcrumb) }} />
      <Navbar />
      <main>
        <section className="page-hero" style={{ minHeight: '60vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, #8B5CF6 12%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Abu Dhabi</span>
            </div>
            <div className="city-hero-grid">
              <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Abu Dhabi Service</div>
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Abu Dhabi</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              Professional sofa deep shampoo &amp; steam cleaning across Abu Dhabi. Al Haya Sofa Care UAE brings expert technicians and industrial-grade equipment directly to your home — covering Khalifa City, Al Reem Island, Yas Island and all Abu Dhabi areas.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book in Abu Dhabi <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Abu%20Dhabi." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'Same Day', l: 'Service' }, { n: '16+ Areas', l: 'Abu Dhabi Coverage' }, { n: '4.9 ★', l: 'Rating' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="city-hero-img">
                <img src="/cities/abu-dhabi.webp" alt="Professional sofa cleaning service in Abu Dhabi by Al Haya Sofa Care" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Why Abu Dhabi Clients Choose Al Haya</div>
                <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Abu Dhabi&apos;s Trusted <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Sofa Cleaning</span> Experts
                </h2>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  Abu Dhabi&apos;s humid coastal climate and frequent sandstorms create the perfect conditions for dust mites, allergens and bacteria to accumulate deep inside sofa fibers. Regular vacuuming removes only surface dirt — our professional deep cleaning goes all the way in.
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  Al Haya Sofa Care UAE uses a powerful 2-in-1 approach: professional foam shampoo cleaning to lift embedded grime, combined with high-temperature steam cleaning to sanitize and disinfect. The result is a sofa that not only looks clean but is hygienically restored from the inside out.
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  We serve homes, villas, apartments and offices across all Abu Dhabi areas — from luxury residences on Saadiyat Island to family apartments in Khalifa City.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Deep shampoo + steam in one professional visit',
                    'All Abu Dhabi areas covered',
                    'Leather sofa specialist care available',
                    'Removes sand dust, allergens and bacteria',
                    'Child-safe, pet-safe eco-friendly products',
                    'Premium quality at affordable UAE prices',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Abu Dhabi Areas We Cover</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  All Abu Dhabi <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Neighbourhoods</span>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {abuDhabiAreas.map((area) => (
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
                    {emirates['abu-dhabi'].areas.map((a) => (
                      <a key={a.slug} href={`/sofa-cleaning-abu-dhabi/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
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
              <div className="section-tag">Sofa Cleaning Services Abu Dhabi</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Abu Dhabi</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning Abu Dhabi', desc: 'Industrial extraction removes fine sand, dust mites and allergens from all sofa types across Abu Dhabi.', color: 'var(--accent)' },
                { title: 'Sofa Steam Cleaning Abu Dhabi', desc: 'High-temperature steam kills 99.9% of bacteria and germs — critical for Abu Dhabi\'s humid coastal climate.', color: '#8B5CF6' },
                { title: 'Leather Sofa Cleaning Abu Dhabi', desc: 'pH-safe leather conditioning and protective coat restores luxury sofas across Khalifa City and Yas Island.', color: '#3B82F6' },
                { title: 'Sofa Shampooing Abu Dhabi', desc: 'Professional foam shampoo lifts deep grime from fabric sofas. Same-day sofa cleaning Abu Dhabi available.', color: '#0891B2' },
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

        <section className="section-sm">
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>Abu Dhabi</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28 }}>
                Same-day service available. Call or WhatsApp now.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Abu%20Dhabi." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
