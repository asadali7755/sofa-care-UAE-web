'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCoverageSection from '../components/ServiceCoverageSection';

const categories = ['All', 'Sofa Cleaning', 'Stain Removal', 'Leather', 'Shampooing'];

const galleryItems = [
  { id: 1, cat: 'Sofa Cleaning', label: '3-Seater Sofa — Before & After', altBefore: 'Dirty 3-seater sofa before professional deep shampoo cleaning in Dubai UAE', altAfter: 'Clean 3-seater sofa after professional deep shampoo cleaning in Dubai UAE by Al Haya Sofa Care', before: '/3seater/before.webp', after: '/3seater/after.webp' },
  { id: 2, cat: 'Stain Removal', label: 'Coffee Stain Removal — JVC', altBefore: 'Sofa with coffee stain before removal — JVC Dubai', altAfter: 'Sofa after coffee stain removal in JVC Dubai — Al Haya Sofa Care UAE', before: '/coffee/before.webp', after: '/coffee/after.webp' },
  { id: 3, cat: 'Leather', label: 'Leather Sofa Deep Clean — Business Bay', altBefore: 'Dirty leather sofa before deep cleaning in Business Bay Dubai', altAfter: 'Restored leather sofa after deep cleaning in Business Bay Dubai — Al Haya', before: '/leather/before.webp', after: '/leather/after.webp' },
  { id: 4, cat: 'Shampooing', label: 'Fabric Shampoo — Sharjah', altBefore: 'Fabric sofa before professional shampoo cleaning in Sharjah UAE', altAfter: 'Fresh fabric sofa after professional shampoo cleaning in Sharjah — Al Haya Sofa Care', before: '/shampoo/before.webp', after: '/shampoo/after.webp' },
  { id: 5, cat: 'Sofa Cleaning', label: 'L-Shaped Sofa — Downtown Dubai', altBefore: 'L-shaped sofa before deep cleaning in Downtown Dubai', altAfter: 'Clean L-shaped sofa after deep cleaning in Downtown Dubai — Al Haya', before: '/L-shape/before.webp', after: '/L-shape/after.webp' },
  { id: 6, cat: 'Stain Removal', label: 'Pet Stain Removal — Ajman', altBefore: 'Sofa with pet stain before cleaning in Ajman UAE', altAfter: 'Sofa after pet stain removal in Ajman UAE — Al Haya Sofa Care', before: '/pet-stain/before.webp', after: '/pet-stain/after.webp' },
];

const SWITCH_MS = 2500;

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  const [showAfter, setShowAfter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const start = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => setShowAfter((p) => !p), SWITCH_MS);
    };
    const stop = () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    };

    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => { io.disconnect(); stop(); };
  }, []);

  return (
    <div ref={cardRef} className="card reveal" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>

        {/* Before image */}
        <img
          src={item.before}
          alt={item.altBefore}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            opacity: showAfter ? 0 : 1, transition: 'opacity 0.75s ease-in-out',
          }}
        />
        {/* After image */}
        <img
          src={item.after}
          alt={item.altAfter}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            opacity: showAfter ? 1 : 0, transition: 'opacity 0.75s ease-in-out',
          }}
        />

        {/* BEFORE / AFTER badge */}
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <span style={{
            padding: '4px 12px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
            background: showAfter ? 'var(--accent)' : 'rgba(11,11,11,0.78)',
            color: showAfter ? 'var(--ink)' : 'var(--fg)',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.5s, color 0.5s',
            letterSpacing: '0.06em',
          }}>
            {showAfter ? 'AFTER ✓' : 'BEFORE'}
          </span>
        </div>

        {/* Auto-play indicator */}
        <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 5,
          padding: '4px 10px', borderRadius: 999, background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(8px)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block',
            animation: 'gallery-pulse 1.2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(246,241,232,0.7)', letterSpacing: '0.05em' }}>AUTO</span>
        </div>

        {/* Progress bar — restarts on each toggle via key prop */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.12)' }}>
          <div
            key={`${item.id}-${String(showAfter)}`}
            style={{
              height: '100%', background: 'var(--accent)',
              animation: `gallery-progress ${SWITCH_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{item.label}</span>
        <span className="badge" style={{ fontSize: 10 }}>{item.cat}</span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState('All');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.cat === active);

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
              <span style={{ color: 'var(--fg-muted)' }}>Gallery</span>
            </div>
            <div className="section-tag">Our Work</div>
            <h1 className="reveal" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, marginBottom: 20 }}>
              Before &amp; <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>After</span> Gallery
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 520, lineHeight: 1.65 }}>
              See real results from our sofa cleaning jobs across Dubai, Sharjah &amp; Ajman. Images auto-play before &amp; after — just scroll down.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="container-x">
            {/* Filter tabs */}
            <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, justifyContent: 'center' }}>
              {categories.map((cat) => (
                <button key={cat} className={`filter-tab${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {filtered.map((item) => <GalleryCard key={item.id} item={item} />)}
            </div>

            {/* CTA */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: 56, padding: '40px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>Want results like these for your sofa?</h3>
              <p style={{ color: 'var(--fg-muted)', marginBottom: 28 }}>Book your appointment today — same-day service available.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Book Now →</Link>
                <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" className="btn btn-wa">WhatsApp</a>
              </div>
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
