import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../components/Icons';
import { getCityPage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

const SLUG = 'ras-al-khaimah';

// Hardcoded fallbacks — used when the Sanity document is empty/unavailable so
// the live page never breaks. The client can override any of these in the Studio.
const defaults = {
  metaTitle: 'Sofa Cleaning Ras Al Khaimah | Sofa Deep Shampoo & Steam Cleaning',
  metaDescription:
    'Al Haya Sofa Care — professional sofa deep shampoo & steam cleaning in Ras Al Khaimah (RAK). At-home doorstep service. Stain removal, leather care, pet hair removal. Same-day service. Call +971547199189.',
  heroTagline: 'Ras Al Khaimah Service',
  heroHeadingLead: 'Sofa Cleaning',
  heroHeadingAccent: 'Ras Al Khaimah',
  heroSubtext:
    'Expert sofa deep shampoo & steam cleaning in Ras Al Khaimah. Al Haya Sofa Care UAE comes to your home or beachfront apartment with full professional equipment — affordable, fast, and completely thorough.',
  heroImageUrl: '/sofa-cleaning-dubai-professional.webp',
  heroImageAlt: 'Professional sofa cleaning service in Ras Al Khaimah by Al Haya Sofa Care',
  introHeadingAccent: 'in Ras Al Khaimah',
  introParagraph1:
    'Al Haya Sofa Care UAE brings the same high-standard professional sofa cleaning trusted across Dubai and Sharjah to Ras Al Khaimah. Our mobile team arrives equipped with industrial shampoo machines and high-temperature steam cleaners, ready to restore your sofa to like-new condition — whether you live in RAK City, a Mina Al Arab apartment or an Al Hamra Village villa.',
  introParagraph2:
    "RAK's coastal humidity and fine desert dust settle deep into sofa fabric over time. Our 2-in-1 deep shampoo and steam cleaning method removes dust mites, bacteria, stubborn stains and unpleasant odors in a single visit. We handle all sofa types including fabric, leather, velvet, microfiber and suede.",
  whyChooseBullets: [
    'Mobile team comes to your home anywhere in Ras Al Khaimah',
    'Specialist care for beachfront and Al Marjan Island apartments',
    'All sofa types handled — fabric, leather, velvet, suede',
    'Stain removal for coffee, food, ink and pet stains',
    'Odor and humidity treatment — eliminated, not masked',
    'Affordable rates — transparent pricing, no hidden costs',
  ],
  areas: [
    'RAK City', 'Al Hamra Village', 'Mina Al Arab', 'Al Nakheel',
    'Al Marjan Island', 'Al Rams', 'Khuzam', 'Al Qusaidat',
    'Al Dhait', 'Julphar', 'Dafan Al Khor', 'Al Jazeera Al Hamra',
  ],
  startingPriceValue: 'AED 40 / seat',
  startingPriceNote: 'Sofa shampoo cleaning. Deep cleaning from AED 50/seat.',
  services: [
    { title: 'Sofa Deep Cleaning RAK', desc: 'Industrial extraction removes embedded dust, allergens and bacteria from every sofa type across Ras Al Khaimah.' },
    { title: 'Sofa Shampooing RAK', desc: 'Professional foam shampoo treatment lifts deep grime and stains. Fast-dry formula — ready in 2–4 hours.' },
    { title: 'Pet Hair Removal RAK', desc: 'Specialist vacuum and roller treatment removes embedded pet hair from all cushions and seams.' },
    { title: 'Sofa Sanitization RAK', desc: 'Hospital-grade disinfection kills 99.9% of bacteria and germs. Safe for children and pets.' },
  ],
};

const SERVICE_COLORS = ['var(--accent)', '#1D6A5B', '#1D6A5B', '#059669'];

const nonEmpty = <T,>(a: T[] | undefined | null): T[] | undefined =>
  Array.isArray(a) && a.length > 0 ? a : undefined;

async function getContent() {
  const cms = await getCityPage(SLUG);
  const heroImageUrl =
    (cms?.heroImage && urlForImage(cms.heroImage)?.width(1100).height(800).fit('crop').url()) ||
    defaults.heroImageUrl;
  return {
    metaTitle: cms?.metaTitle || defaults.metaTitle,
    metaDescription: cms?.metaDescription || defaults.metaDescription,
    heroTagline: cms?.heroTagline || defaults.heroTagline,
    heroHeadingLead: cms?.heroHeadingLead || defaults.heroHeadingLead,
    heroHeadingAccent: cms?.heroHeadingAccent || defaults.heroHeadingAccent,
    heroSubtext: cms?.heroSubtext || defaults.heroSubtext,
    heroImageUrl,
    heroImageAlt: cms?.heroImageAlt || defaults.heroImageAlt,
    introHeadingAccent: cms?.introHeadingAccent || defaults.introHeadingAccent,
    introParagraph1: cms?.introParagraph1 || defaults.introParagraph1,
    introParagraph2: cms?.introParagraph2 || defaults.introParagraph2,
    whyChooseBullets: nonEmpty(cms?.whyChooseBullets) ?? defaults.whyChooseBullets,
    areas: nonEmpty(cms?.areas) ?? defaults.areas,
    startingPriceValue: cms?.startingPriceValue || defaults.startingPriceValue,
    startingPriceNote: cms?.startingPriceNote || defaults.startingPriceNote,
    services: nonEmpty(cms?.services?.filter((s) => s.title)) ?? defaults.services,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCityPage(SLUG);
  return {
    title: cms?.metaTitle || defaults.metaTitle,
    description: cms?.metaDescription || defaults.metaDescription,
    keywords: [
      'sofa cleaning Ras Al Khaimah',
      'sofa cleaning RAK',
      'sofa deep cleaning Ras Al Khaimah',
      'sofa shampooing RAK',
      'sofa steam cleaning Ras Al Khaimah',
      'upholstery cleaning RAK',
      'sofa stain removal Ras Al Khaimah',
      'leather sofa cleaning RAK',
      'sofa cleaning Al Hamra Village',
      'sofa cleaning Mina Al Arab',
      'sofa cleaning near me RAK',
      'same day sofa cleaning Ras Al Khaimah',
      'professional sofa cleaning RAK',
      'تنظيف كنب رأس الخيمة',
    ],
    alternates: { canonical: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah' },
    openGraph: {
      title: 'Sofa Cleaning Ras Al Khaimah | Al Haya Sofa Care UAE',
      description: 'Professional sofa deep shampoo & steam cleaning in Ras Al Khaimah. At-home service, same-day available. Starting AED 40/seat. Call +971547199189.',
      url: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah',
      type: 'website',
    },
  };
}

const rakBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofashampooingdubai.com' },
    { '@type': 'ListItem', position: 2, name: 'Sofa Cleaning Ras Al Khaimah', item: 'https://sofashampooingdubai.com/sofa-cleaning-ras-al-khaimah' },
  ],
};

const rakSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sofa Cleaning Ras Al Khaimah',
  description: 'Professional sofa deep shampoo and steam cleaning services in Ras Al Khaimah (RAK), UAE.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Al Haya Sofa Care UAE',
    telephone: '+971547199189',
    url: 'https://sofashampooingdubai.com',
  },
  areaServed: { '@type': 'City', name: 'Ras Al Khaimah' },
  offers: [
    { '@type': 'Offer', name: 'Sofa Deep Cleaning Ras Al Khaimah', price: '99', priceCurrency: 'AED' },
    { '@type': 'Offer', name: 'Sofa Shampooing Ras Al Khaimah', price: '79', priceCurrency: 'AED' },
  ],
};

export default async function SofaCleaningRasAlKhaimah() {
  const c = await getContent();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rakSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rakBreadcrumb) }} />
      <Navbar />
      <main>
        <section className="page-hero" style={{ minHeight: '60vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, #1D6A5B 12%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Sofa Cleaning Ras Al Khaimah</span>
            </div>
            <div className="city-hero-grid">
              <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>{c.heroTagline}</div>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 68px)', lineHeight: 1.0, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              {c.heroHeadingLead} <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>{c.heroHeadingAccent}</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>
              {c.heroSubtext}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link href="/contact" className="btn btn-primary">Book in RAK <IconArrow size={14} /></Link>
              <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Ras%20Al%20Khaimah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[{ n: 'AED 40', l: 'Starting Price' }, { n: 'Same Day', l: 'Service' }, { n: '12+ Areas', l: 'RAK Coverage' }, { n: '4.9 ★', l: 'Rating' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="city-hero-img">
                <img src={c.heroImageUrl} alt={c.heroImageAlt} loading="eager" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="section-tag">Our Service in RAK</div>
                <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', marginBottom: 20, lineHeight: 1.15 }}>
                  Professional Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>{c.introHeadingAccent}</span>
                </h2>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
                  {c.introParagraph1}
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                  {c.introParagraph2}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {c.whyChooseBullets.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-tag">Areas We Cover</div>
                <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 20, lineHeight: 1.15 }}>
                  All Ras Al Khaimah <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Areas</span>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {c.areas.map((area) => (
                    <span key={area} style={{
                      padding: '7px 14px', borderRadius: 999,
                      background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
                      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)',
                    }}>{area}</span>
                  ))}
                </div>
                <div style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line-strong)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Starting Price</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 900, color: 'var(--fg)', marginBottom: 4 }}>{c.startingPriceValue}</div>
                  <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>{c.startingPriceNote}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-tag">Sofa Cleaning Services RAK</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                Our Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>{c.heroHeadingAccent}</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {c.services.map((s, i) => {
                const color = SERVICE_COLORS[i % SERVICE_COLORS.length];
                return (
                  <div key={s.title ?? i} style={{ background: '#FFFFFF', border: `1px solid ${color}30`, borderTop: `3px solid ${color}`, borderRadius: 14, padding: '22px 20px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ color: 'rgba(12,17,14,0.56)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>{c.heroHeadingAccent}</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28 }}>
                Same-day service available. Call or WhatsApp now.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Ras%20Al%20Khaimah." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
