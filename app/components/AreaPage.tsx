import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { IconArrow, IconWhatsApp } from './Icons';
import { getEmirate, getArea } from '../lib/areas';

const BASE = 'https://sofashampooingdubai.com';

/** Shared renderer for every /sofa-cleaning-{emirate}/[area] page. */
export default function AreaPage({ emirateKey, slug }: { emirateKey: string; slug: string }) {
  const em = getEmirate(emirateKey);
  const area = getArea(emirateKey, slug);
  if (!em || !area) notFound();

  const url = `${BASE}/${em.citySlug}/${slug}`;
  const waText = encodeURIComponent(`Hi, I need sofa cleaning in ${area.name}, ${em.cityName}.`);
  const others = em.areas.filter((a) => a.slug !== slug);

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `Sofa Cleaning ${area.name}`,
    description: `Professional at-home sofa deep shampoo and steam cleaning in ${area.name}, ${em.cityName}. Stain removal, leather care and pet-hair removal for ${area.propertyType}.`,
    provider: { '@type': 'LocalBusiness', name: 'Al Haya Sofa Care UAE', telephone: '+971547199189', url: BASE },
    areaServed: { '@type': 'Place', name: `${area.name}, ${em.cityName}, UAE` },
    url,
    offers: [
      { '@type': 'Offer', name: 'Sofa Shampooing', price: '79', priceCurrency: 'AED' },
      { '@type': 'Offer', name: 'Sofa Steam Cleaning', price: '89', priceCurrency: 'AED' },
      { '@type': 'Offer', name: 'Sofa Deep Cleaning', price: '99', priceCurrency: 'AED' },
      { '@type': 'Offer', name: 'Leather Sofa Cleaning', price: '129', priceCurrency: 'AED' },
    ],
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: `Sofa Cleaning ${em.cityName}`, item: `${BASE}/${em.citySlug}` },
      { '@type': 'ListItem', position: 3, name: area.name, item: url },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="page-hero" style={{ minHeight: '56vh' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 15%, transparent), transparent 70%)', filter: 'blur(60px)', top: 0, right: 0 }} />
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span>›</span>
              <Link href={`/${em.citySlug}`}>Sofa Cleaning {em.cityName}</Link><span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>{area.short}</span>
            </div>
            <div className="section-tag" style={{ marginBottom: 16 }}>{em.cityName} · {area.short}</div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.04, marginBottom: 20, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Sofa Cleaning in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>{area.name}</span>
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 640, lineHeight: 1.7, marginBottom: 28 }}>{area.intro}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              <Link href="/contact" className="btn btn-primary">Book in {area.short} <IconArrow size={14} /></Link>
              <a href={`https://wa.me/971547199189?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconWhatsApp size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Banner image */}
        <section style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ position: 'relative', width: '100%', height: 'clamp(220px, 38vw, 420px)', borderRadius: 16, overflow: 'hidden', margin: '0 0 -1px' }}>
              <Image
                src="/sofa-cleaning-dubai-professional.webp"
                alt={`Professional at-home sofa cleaning in ${area.name}, ${em.cityName} — Al Haya Sofa Care deep shampoo & steam cleaning for ${area.propertyType}`}
                title={`Sofa Cleaning ${area.name} | Al Haya Sofa Care`}
                fill sizes="(max-width: 768px) 100vw, 1100px" style={{ objectFit: 'cover' }} priority
              />
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="section-tag">Local Coverage</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 16, lineHeight: 1.15 }}>
              Sofa Cleaning Across <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>{area.name}</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 24, maxWidth: 760 }}>{area.localNote}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {area.landmarks.map((lm) => (
                <span key={lm} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)' }}>{lm}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="section-tag">Services</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 12 }}>
                What We Clean in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>{area.short}</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Sofa Deep Cleaning', desc: `Industrial extraction removes fine dust, allergens and deep stains from sofas in ${area.short}.`, color: 'var(--accent)' },
                { title: 'Sofa Shampooing', desc: 'pH-balanced foam shampoo lifts oil and grime. Fast-dry — sofa ready in 2–4 hours.', color: '#0891B2' },
                { title: 'Leather Sofa Cleaning', desc: `Specialist pH-safe leather care and conditioning, ideal for ${area.propertyType}.`, color: '#8B5CF6' },
                { title: 'Stain & Pet-Hair Removal', desc: 'Coffee, wine, food and pet stains removed safely, plus deep pet-hair extraction.', color: '#FF5A3C' },
              ].map((s) => (
                <div key={s.title} style={{ background: '#141210', border: `1px solid ${s.color}30`, borderTop: `3px solid ${s.color}`, borderRadius: 14, padding: '22px 20px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x" style={{ maxWidth: 820 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="section-tag" style={{ margin: '0 auto 16px' }}>FAQs</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>Sofa Cleaning {area.short} — Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {area.faqs.map((f) => (
                <div key={f.q} style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: 'var(--fg)' }}>{f.q}</div>
                  <div style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other areas — internal linking */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="section-tag" style={{ marginBottom: 16 }}>Other {em.cityName} Areas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {others.map((a) => (
                <Link key={a.slug} href={`/${em.citySlug}/${a.slug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
                  Sofa Cleaning {a.short} →
                </Link>
              ))}
              <Link href={`/${em.citySlug}`} style={{ padding: '8px 16px', borderRadius: 999, background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)', textDecoration: 'none' }}>
                All {em.cityName} →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 16 }}>
                Book Sofa Cleaning in <span style={{ color: 'var(--accent)' }}>{area.short}</span> Today
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>
                Same-day at-home service across {area.name}. Starting from AED 79 — eco-friendly, quick-dry.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14} /></Link>
                <a href={`https://wa.me/971547199189?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
