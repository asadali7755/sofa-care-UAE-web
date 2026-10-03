'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp, IconCheck } from '../components/Icons';
import ServiceCoverageSection from '../components/ServiceCoverageSection';
import QuoteCallSection from '../components/QuoteCallSection';
import { useRequestCall } from '../components/RequestCallModal';
import { SERVICES, SERVICE_FAQS, EMIRATE_LINKS, serviceAreaLinks, type ServiceItem } from './servicesData';

type ServiceSectionProps = ServiceItem & { index: number };

function ServiceCTAButtons({ waText }: { waText: string }) {
  const { open } = useRequestCall();
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
      <a href={`https://wa.me/971547199189?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <IconWhatsApp size={16}/> WhatsApp
      </a>
      <button onClick={open} className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Request a Call
      </button>
    </div>
  );
}

function ServiceSection({
  id, badge, badgeColor, titlePre, titleEm, titlePost, emColor, desc1, desc2, keywords,
  priceLabel, price, timeLabel, time, waText,
  image, imageAlt, features, flip = false, bg, linkLabel, index,
}: ServiceSectionProps) {
  const areaLinks = serviceAreaLinks(index, linkLabel);
  const title = (
    <>
      {titlePre}
      <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: emColor ?? badgeColor }}>{titleEm}</span>
      {titlePost}
    </>
  );
  const textBlock = (
    <div className="reveal">
      <span className="badge" style={{ marginBottom: 20, display: 'inline-flex', background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}55` }}>
        {badge}
      </span>
      <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 46px)', marginBottom: 16, fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: desc2 ? 16 : 28 }}>{desc1}</p>
      {desc2 && <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>{desc2}</p>}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        {keywords.map((kw) => (
          <span key={kw} className="badge" style={{ fontSize: 11 }}>{kw}</span>
        ))}
      </div>
      <nav aria-label={`${linkLabel} by emirate`} style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Available in these emirates</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {areaLinks.map((l) => (
            <Link key={l.href} href={l.href} title={`${linkLabel} in ${l.emirate}`} style={{ padding: '5px 12px', borderRadius: 999, fontSize: 12, textDecoration: 'none', color: badgeColor, background: `${badgeColor}12`, border: `1px solid ${badgeColor}40` }}>
              {l.text}
            </Link>
          ))}
        </div>
      </nav>
      <div style={{ padding: '18px 22px', background: 'var(--bg-elev)', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{priceLabel}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: badgeColor }}>{price}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4 }}>{timeLabel}</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{time}</div>
        </div>
      </div>
      <ServiceCTAButtons waText={waText} />
    </div>
  );

  const imageBlock = (
    <div className="reveal reveal-delay-2">
      <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)', aspectRatio: '4/3', position: 'relative' }}>
        <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ marginTop: 20, background: 'var(--bg-elev)', borderRadius: 16, padding: 22, border: '1px solid var(--line)', borderLeft: `3px solid ${badgeColor}` }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: badgeColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>What&apos;s Included</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <div style={{ color: badgeColor, marginTop: 2, flexShrink: 0 }}><IconCheck size={14}/></div>
              <span style={{ color: 'var(--fg-muted)', fontSize: 13, lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id={id} className="section" style={{ borderBottom: '1px solid var(--line)', background: bg }}>
      <div className="container-x">
        <div className="service-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {flip ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function ServicesPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg"/>
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)', filter: 'blur(50px)', top: 0, right: 0 }}/>
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Services</span>
            </div>
            <div className="section-tag">Our Services</div>
            <h1 className="reveal" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, marginBottom: 20 }}>
              Professional Sofa Cleaning Services Across <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>All 7 Emirates</span>
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 620, lineHeight: 1.65 }}>
              Wherever you live in the UAE, your sofa acts as a filter for fine sand, humidity, allergens and bacteria. Al Haya Sofa Care UAE uses industrial-grade extraction and pH-balanced cleaners to restore your upholstery at your doorstep — in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.
            </p>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              {EMIRATE_LINKS.map((e) => (
                <Link key={e.key} href={`/${e.slug}`} style={{ padding: '5px 14px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 11, textDecoration: 'none', background: 'rgba(12,17,14,0.06)', border: '1px solid rgba(12,17,14,0.12)', color: 'rgba(12,17,14,0.60)' }}>
                  {e.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section heading */}
        <section className="section-sm" style={{ paddingBottom: 0, borderTop: '1px solid var(--line)' }}>
          <div className="container-x" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Core Services</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', marginBottom: 12 }}>
              Our Comprehensive <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Upholstery Care</span> Solutions
            </h2>
            <p style={{ color: 'var(--fg-muted)', maxWidth: 560, margin: '0 auto', fontSize: 16, lineHeight: 1.65 }}>
              From deep extraction to steam sanitization — every method tailored to your fabric type and cleaning need.
            </p>
          </div>
        </section>

        {/* All Service Sections */}
        {SERVICES.map((s, i) => <ServiceSection key={s.id} {...s} index={i} />)}

        {/* 3-Step Process */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag">Technical Protocol</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                The Al Haya <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Technical Cleaning</span> Process
              </h2>
              <p style={{ color: 'var(--fg-muted)', maxWidth: 520, margin: '12px auto 0', fontSize: 16, lineHeight: 1.65 }}>
                Transparency builds trust. Here is the exact protocol our certified technicians follow — designed to achieve like-new results on every sofa type.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {[
                { n: '01', title: 'Inspection', color: '#1D6A5B', desc: 'Our technician inspects your sofa fabric, identifies stains, and selects the ideal cleaning method and products for your specific upholstery.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
                { n: '02', title: 'Deep Clean', color: '#3B82F6', desc: 'Using professional equipment, we deep clean your sofa — extracting dust, treating every stain, and sanitizing the fabric from top to bottom.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg> },
                { n: '03', title: 'Fast Dry', color: '#10B981', desc: 'High-power drying equipment reduces drying time to just 2-4 hours. Your sofa is clean, fresh, and ready to use the same day.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg> },
              ].map((step, i) => (
                <div key={step.n} className={`reveal reveal-delay-${i + 1}`} style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', border: `1px solid ${step.color}30`, borderTop: `3px solid ${step.color}`, borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <div style={{ position: 'absolute', top: -10, right: -10, fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 900, color: `${step.color}15`, lineHeight: 1 }}>{step.n}</div>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${step.color}20`, border: `1px solid ${step.color}40`, color: step.color, fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>{step.n}</div>
                  <div style={{ color: step.color, marginBottom: 12 }}>{step.svg}</div>
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: step.color, fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(12,17,14,0.60)', fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-tag">FAQs</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Sofa Cleaning <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>FAQs</span> — UAE-Wide
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800, margin: '0 auto' }}>
              {SERVICE_FAQS.map((item, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ background: '#FFFFFF', border: '1px solid rgba(12,17,14,0.10)', borderLeft: '3px solid var(--accent)', borderRadius: 14, padding: '24px 28px' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg)', marginBottom: 12 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(12,17,14,0.56)', fontSize: 15, lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Locations</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 16 }}>
              Serving Homes in <span style={{ color: 'var(--accent)' }}>Every Emirate</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 580, margin: '0 auto 28px', lineHeight: 1.65 }}>
              Dubai Marina · Business Bay · Khalifa City · Yas Island · Al Nahda Sharjah · Al Majaz · Ajman Corniche · Al Nuaimiya · Ras Al Khaimah · Dibba, Fujairah · Umm Al Quwain
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
              <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><IconWhatsApp size={16}/> WhatsApp</a>
            </div>
          </div>
        </section>

        <QuoteCallSection />
        <ServiceCoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  );
}
