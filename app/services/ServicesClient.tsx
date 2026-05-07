'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp, IconCheck } from '../components/Icons';
import ServiceCoverageSection from '../components/ServiceCoverageSection';

const deepCleanFeatures = [
  'Powerful dust & allergen extraction from deep within fibers',
  'Advanced stain treatment — removes old, stubborn stains',
  'Odor elimination & neutralization',
  'Fabric protection coat applied after cleaning',
  'Safe for all fabric types: velvet, cotton, polyester, microfiber',
  'Leather sofa deep conditioning available',
  'Eco-friendly, non-toxic cleaning agents',
];

const shampooFeatures = [
  'Professional foam shampoo treatment',
  'Lifts embedded dirt and grime from fabric',
  'Fast-dry formula — sofa ready within 2-4 hours',
  'Sanitization & bacteria elimination',
  'Deodorizing for a fresh, clean scent',
  'Safe for colored fabrics — no fading',
  'Pet hair removal included',
];

export default function ServicesPage() {
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
              <span style={{ color: 'var(--fg-muted)' }}>Services</span>
            </div>
            <div className="section-tag">Our Services</div>
            <h1 className="reveal" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, marginBottom: 20 }}>
              Professional <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Cleaning</span><br/>Services in Dubai
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 580, lineHeight: 1.65 }}>
              Expert upholstery cleaning at your doorstep across Dubai, Sharjah &amp; Ajman. Advanced equipment, eco-safe solutions, guaranteed results.
            </p>
          </div>
        </section>

        {/* Sofa Deep Cleaning */}
        <section id="deep-cleaning" className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="service-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div className="reveal">
                  <span className="badge badge-accent" style={{ marginBottom: 20, display: 'inline-flex' }}>Most Popular</span>
                  <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 16 }}>
                    Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Deep Cleaning</span> Dubai
                  </h2>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    If your sofa has become dusty, stained, or develops an unpleasant smell, you no longer need to replace the fabric. Al Haya Sofa Care UAE arrives at your home within hours with all the professional tools needed to deep clean and dry your sofa — restoring it to a fresh, hygienic condition.
                  </p>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                    Using advanced equipment and fabric-safe solutions, we deep clean your sofa on-site, carefully treating each cushion and corner. Stain treatment, odor control, and gentle handling ensure your upholstery is cleaned thoroughly without damage.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                    {['sofa cleaning Dubai', 'leather sofa cleaning', 'sofa stain removal', 'pet hair removal', 'fabric sofa cleaning', 'same day service'].map((kw) => (
                      <span key={kw} className="badge" style={{ fontSize: 11 }}>{kw}</span>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Starting Price</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: 'var(--accent)' }}>AED 99</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4 }}>Service Time</div>
                      <div style={{ fontSize: 18, fontWeight: 700 }}>1.5 – 3 hrs</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
                    <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20deep%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <IconWhatsApp size={16}/> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div style={{ background: 'var(--bg-elev)', borderRadius: 20, padding: 32, border: '1px solid var(--line)', borderLeft: '3px solid var(--accent)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>What&apos;s Included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {deepCleanFeatures.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}><IconCheck size={16}/></div>
                        <span style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sofa Shampooing */}
        <section id="shampooing" className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div className="service-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div className="reveal">
                <div style={{ background: 'var(--bg-raised)', borderRadius: 20, padding: 32, border: '1px solid var(--line)', borderLeft: '3px solid var(--accent)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>What&apos;s Included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {shampooFeatures.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}><IconCheck size={16}/></div>
                        <span style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="reveal reveal-delay-1">
                  <span className="badge badge-accent" style={{ marginBottom: 20, display: 'inline-flex' }}>Fast-Dry Formula</span>
                  <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 16 }}>
                    Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Shampooing</span> Dubai
                  </h2>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    Professional foam shampoo treatment that goes deep into your sofa&apos;s fabric, lifting dirt, grime, and stains that regular vacuuming can&apos;t touch. Our shampoo service is perfect for fabric sofas that need a thorough refresh without the wait.
                  </p>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                    Keep your sofa fresh, hygienic, and guest-ready. Experts inspect the fabric, treat stains, and deep clean using sofa shampooing — no need to move furniture. Fast-drying, same-day service ideal for busy families.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                    {['sofa shampooing Dubai', 'couch cleaning Dubai', 'eco-friendly sofa cleaning', 'sofa dry cleaning Dubai', 'sofa cleaning Sharjah'].map((kw) => (
                      <span key={kw} className="badge" style={{ fontSize: 11 }}>{kw}</span>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', background: 'var(--bg-raised)', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Starting Price</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: 'var(--accent)' }}>AED 79</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4 }}>Dry Time</div>
                      <div style={{ fontSize: 18, fontWeight: 700 }}>2 – 4 hrs</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
                    <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20shampooing%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <IconWhatsApp size={16}/> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Other Services */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag">More Services</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 16 }}>
                Complete <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Care</span> Range
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
                Every sofa problem has a solution — from stubborn stains to pet odors, leather care to fabric protection.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 28 }}>
              {[
                {
                  id: 'stain-removal',
                  tag: 'Specialist', tagColor: '#FF5A3C',
                  title: 'Stain Removal',
                  price: 'AED 49', time: '30–60 min',
                  desc: 'Targeted treatment for coffee, food, ink, wine, and other stubborn stains that regular cleaning simply cannot remove. Our specialist formula works on even old, set-in stains.',
                  features: ['Coffee & tea stains', 'Ink & dye removal', 'Food & grease stains', 'Wine & juice stains', 'Old set-in stains', 'Blood & protein stains'],
                  waText: 'Hi%2C%20I%20need%20stain%20removal%20service%20for%20my%20sofa.',
                },
                {
                  id: 'leather-cleaning',
                  tag: 'Premium', tagColor: '#8B5CF6',
                  title: 'Leather Sofa Cleaning',
                  price: 'AED 129', time: '2–3 hrs',
                  desc: 'Specialist leather care using pH-balanced solutions, deep conditioning treatment and protective coating to restore your leather sofa to its original shine and softness.',
                  features: ['pH-safe leather cleaner', 'Deep conditioning treatment', 'Crack & peel prevention', 'Stain & scuff removal', 'UV fade protection', 'Protective coat finish'],
                  waText: 'Hi%2C%20I%20need%20leather%20sofa%20cleaning%20in%20Dubai.',
                },
                {
                  id: 'odor-treatment',
                  tag: 'Freshness', tagColor: '#0891B2',
                  title: 'Odor Treatment',
                  price: 'AED 59', time: '1–2 hrs',
                  desc: 'Eliminates deep-seated odors from pets, smoke, food and moisture permanently — not just masks them. Our anti-bacterial treatment leaves your sofa smelling fresh for months.',
                  features: ['Pet odor elimination', 'Smoke & cigarette odors', 'Food & cooking odors', 'Moisture & mold odors', 'Anti-bacterial treatment', 'Long-lasting freshness'],
                  waText: 'Hi%2C%20I%20need%20sofa%20odor%20treatment%20service.',
                },
                {
                  id: 'pet-hair',
                  tag: 'Pet-Friendly', tagColor: '#D97706',
                  title: 'Pet Hair Removal',
                  price: 'AED 39', time: '45–90 min',
                  desc: 'Specialized vacuum and roller treatment removes embedded pet hair from every cushion, seam and corner. Includes anti-allergen treatment safe for your pets and family.',
                  features: ['Deep pet hair extraction', 'Anti-allergen treatment', 'Safe for all fabrics', 'Deodorizing included', 'Seam & corner cleaning', 'Post-treatment sanitization'],
                  waText: 'Hi%2C%20I%20need%20pet%20hair%20removal%20from%20my%20sofa.',
                },
                {
                  id: 'sanitization',
                  tag: 'Hygienic', tagColor: '#059669',
                  title: 'Sofa Sanitization',
                  price: 'AED 49', time: '30–60 min',
                  desc: 'Hospital-grade disinfection kills 99.9% of bacteria, viruses and germs lurking in your sofa — completely safe for children and pets. Ideal after illness or for allergy sufferers.',
                  features: ['99.9% bacteria kill rate', 'Child & pet safe formula', 'Virus & germ elimination', 'WHO-approved solutions', 'No harsh chemicals', 'Allergy sufferer safe'],
                  waText: 'Hi%2C%20I%20need%20sofa%20sanitization%20service.',
                },
                {
                  id: 'velvet-microfiber',
                  tag: 'Delicate Care', tagColor: '#EC4899',
                  title: 'Velvet & Microfiber Cleaning',
                  price: 'AED 99', time: '2–3 hrs',
                  desc: 'Gentle specialist cleaning for delicate velvet, microfiber and suede upholstery. Our low-moisture technique restores pile without any damage, shrinkage or colour fading.',
                  features: ['Velvet-safe technique', 'Microfiber deep clean', 'Suede restoration', 'Pile direction restoration', 'No shrinkage guarantee', 'No fading or discolouration'],
                  waText: 'Hi%2C%20I%20need%20velvet%20or%20microfiber%20sofa%20cleaning.',
                },
                {
                  id: 'fabric-protection',
                  tag: 'Protection', tagColor: '#3B82F6',
                  title: 'Fabric Protection Coat',
                  price: 'AED 69', time: '30–45 min',
                  desc: 'Invisible shield coating repels future stains, spills and dirt — keeping your sofa cleaner for much longer. Best applied after a deep clean for maximum effect.',
                  features: ['Invisible stain shield', 'Spill repellent coating', 'UV fade protection', 'Dust repellent barrier', 'Lasts 12+ months', 'Safe for all fabric types'],
                  waText: 'Hi%2C%20I%20need%20fabric%20protection%20for%20my%20sofa.',
                },
              ].map((s, i) => (
                <div key={s.id} id={s.id} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{
                  position: 'relative', padding: '36px 32px', display: 'flex', flexDirection: 'column',
                  background: '#141210',
                  border: `1px solid ${s.tagColor}30`,
                  borderTop: `3px solid ${s.tagColor}`,
                  borderRadius: 16,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  {/* Badge */}
                  <div style={{ position: 'absolute', top: 20, right: 20 }}>
                    <span style={{ padding: '4px 12px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', background: `${s.tagColor}25`, color: s.tagColor, border: `1px solid ${s.tagColor}60` }}>{s.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: 22, marginBottom: 12, paddingRight: 60, color: s.tagColor, fontWeight: 700 }}>{s.title}</h3>

                  {/* Desc */}
                  <p style={{ color: 'rgba(246,241,232,0.72)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>

                  {/* Features */}
                  <div className="service-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', marginBottom: 28, flex: 1 }}>
                    {s.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: s.tagColor, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                        <span style={{ color: 'rgba(246,241,232,0.60)', fontSize: 13, lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div style={{ borderTop: '1px solid rgba(246,241,232,0.10)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(246,241,232,0.40)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Starting from · {s.time}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: s.tagColor }}>{s.price}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <a href={`https://wa.me/971547199189?text=${s.waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ padding: '10px 16px', fontSize: 13 }}>WhatsApp</a>
                      <Link href="/contact" className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, borderColor: 'rgba(246,241,232,0.25)', color: '#F6F1E8' }}>Book <IconArrow size={12}/></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag">How It Works</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Our <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>3-Step</span> Process
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {[
                { n: '01', title: 'Inspection', color: '#F59E0B', desc: 'Our technician inspects your sofa fabric, identifies stains, and selects the ideal cleaning method and products for your specific upholstery.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
                { n: '02', title: 'Deep Clean', color: '#3B82F6', desc: 'Using professional equipment, we deep clean your sofa — extracting dust, treating every stain, and sanitizing the fabric from top to bottom.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg> },
                { n: '03', title: 'Fast Dry', color: '#10B981', desc: 'High-power drying equipment reduces drying time to just 2-4 hours. Your sofa is clean, fresh, and ready to use the same day.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg> },
              ].map((step, i) => (
                <div key={step.n} className={`reveal reveal-delay-${i + 1}`} style={{
                  position: 'relative', overflow: 'hidden',
                  background: '#141210',
                  border: `1px solid ${step.color}30`,
                  borderTop: `3px solid ${step.color}`,
                  borderRadius: 16,
                  padding: 28,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  <div style={{ position: 'absolute', top: -10, right: -10, fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 900, color: `${step.color}15`, lineHeight: 1 }}>{step.n}</div>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${step.color}20`, border: `1px solid ${step.color}40`, color: step.color, fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>{step.n}</div>
                  <div style={{ color: step.color, marginBottom: 12 }}>{step.svg}</div>
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: step.color, fontWeight: 700 }}>{step.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.70)', fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
