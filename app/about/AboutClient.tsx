'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCoverageSection from '../components/ServiceCoverageSection';
import { IconArrow, IconLeaf, IconClock, IconHome, IconShield } from '../components/Icons';

function IconTag({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
}

const stats = [
  { n: '500+', l: 'Happy Clients' },
  { n: '5+', l: 'Years in Business' },
  { n: '4.9★', l: 'Average Rating' },
  { n: 'Same Day', l: 'Service Available' },
];

const whyUs = [
  { icon: <IconLeaf size={28}/>, title: 'Eco-Friendly', desc: 'Non-toxic, biodegradable cleaning solutions safe for children, pets & sensitive skin.', accent: '#D9F15A' },
  { icon: <IconClock size={28}/>, title: 'Fast Service', desc: 'Same-day appointments available across Dubai, Sharjah & Ajman.', accent: '#F59E0B' },
  { icon: <IconHome size={28}/>, title: 'At-Home Convenience', desc: 'We come to you with all equipment — no need to move furniture or travel.', accent: '#FF5A3C' },
  { icon: <IconShield size={28}/>, title: 'Certified Team', desc: 'Trained, experienced technicians who handle every sofa type with care.', accent: '#3B82F6' },
  { icon: <IconTag size={28}/>, title: 'Transparent Pricing', desc: 'Starting from AED 79 with no hidden fees — affordable quality cleaning.', accent: '#10B981' },
  { icon: <IconShield size={28}/>, title: 'Satisfaction Guaranteed', desc: "We're not done until your sofa looks and smells exactly as you expect.", accent: '#8B5CF6' },
];

const sofaIcon = (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
    <rect x="6" y="20" width="36" height="16" rx="4"/>
    <rect x="10" y="14" width="28" height="8" rx="3"/>
    <rect x="4" y="22" width="6" height="10" rx="3"/>
    <rect x="38" y="22" width="6" height="10" rx="3"/>
    <line x1="14" y1="36" x2="14" y2="42"/>
    <line x1="34" y1="36" x2="34" y2="42"/>
  </svg>
);

export default function AboutPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
              <span style={{ color: 'var(--fg-muted)' }}>About Us</span>
            </div>
            <div className="section-tag">About Al Haya</div>
            <h1 className="reveal" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, marginBottom: 20 }}>
              About <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span><br/>Cleaning Services
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 560, lineHeight: 1.65 }}>
              Dubai&apos;s trusted name in professional sofa cleaning — delivering exceptional results at your doorstep since 2019.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <div className="reveal section-tag">Our Story</div>
                <h2 className="reveal" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 24 }}>
                  Cleaning Dubai Homes <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Since 2019</span>
                </h2>
                <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75 }}>
                  <p>Al Haya Sofa Care UAE was founded with one simple mission: to provide Dubai families and businesses with a professional, reliable, and convenient sofa cleaning experience — right at their doorstep.</p>
                  <p>We understand that in today&apos;s fast-paced UAE lifestyle, your sofa is the heart of your home. It&apos;s where you relax, entertain guests, and spend quality time. Over time, it accumulates dust, allergens, and stains that regular vacuuming simply cannot remove.</p>
                  <p>That&apos;s why we bring our professional-grade equipment and eco-friendly cleaning solutions directly to you. We handle every sofa type — fabric, leather, microfiber, velvet — with care and expertise, restoring them to a fresh, hygienic condition without disrupting your day.</p>
                  <p>Today, Al Haya Sofa Care UAE proudly serves 500+ happy clients across Dubai, Sharjah, and Ajman with a 4.9-star rating and same-day service availability.</p>
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {stats.map((s) => (
                    <div key={s.l} style={{ background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, padding: '24px', background: 'var(--bg-elev)', borderRadius: 16, border: '1px solid var(--line)', borderLeft: '3px solid var(--accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ color: 'var(--accent)', flexShrink: 0 }}>{sofaIcon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Serving All UAE</div>
                      <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>Dubai · Sharjah · Ajman</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag">Our Promise</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                Why Choose <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{
                    background: '#141210',
                    border: `1px solid ${item.accent}30`,
                    borderTop: `3px solid ${item.accent}`,
                    borderRadius: 16,
                    padding: '28px 24px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                >
                  <div style={{ color: item.accent, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 17, marginBottom: 10, color: '#F6F1E8', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm">
          <div className="container-x" style={{ textAlign: 'center' }}>
            <h2 className="reveal" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Ready to Experience the <span style={{ color: 'var(--accent)' }}>Al Haya Difference</span>?
            </h2>
            <p className="reveal" style={{ color: 'var(--fg-muted)', marginBottom: 32, fontSize: 17 }}>
              Book your sofa cleaning today and see the results for yourself.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary" style={{ fontSize: 15, padding: '16px 32px' }}>Book Now <IconArrow size={14}/></Link>
              <a href="tel:+971547199189" className="btn btn-ghost" style={{ fontSize: 15, padding: '16px 32px' }}>Call Us</a>
            </div>
          </div>
        </section>
        <ServiceCoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
