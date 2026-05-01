'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const categories = ['All', 'Sofa Cleaning', 'Stain Removal', 'Leather', 'Shampooing'];

const galleryItems = [
  { id: 1, cat: 'Sofa Cleaning', label: '3-Seater Sofa — Before & After', before: '/3seater/before.jpg', after: '/3seater/after.jpg' },
  { id: 2, cat: 'Stain Removal', label: 'Coffee Stain Removal — JVC', before: '/coffee/before.jpg', after: '/coffee/after.jpg' },
  { id: 3, cat: 'Leather', label: 'Leather Sofa Deep Clean — Business Bay', before: '/leather/before.jpg', after: '/leather/after.jpg' },
  { id: 4, cat: 'Shampooing', label: 'Fabric Shampoo — Sharjah', before: '/shampoo/before.jpg', after: '/shampoo/after.jpg' },
  { id: 5, cat: 'Sofa Cleaning', label: 'L-Shaped Sofa — Downtown Dubai', before: '/L-shape/before.jpg', after: '/L-shape/after.jpg' },
  { id: 6, cat: 'Stain Removal', label: 'Pet Stain Removal — Ajman', before: '/pet-stain/before.jpg', after: '/pet-stain/after.jpg' },
];

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="card reveal" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setShowAfter(!showAfter)}>
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={showAfter ? item.after : item.before}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s' }}
        />
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 8 }}>
          <span style={{
            padding: '4px 10px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
            background: showAfter ? 'var(--accent)' : 'rgba(11,11,11,0.75)',
            color: showAfter ? 'var(--ink)' : 'var(--fg)',
            backdropFilter: 'blur(8px)',
          }}>
            {showAfter ? 'AFTER ✓' : 'BEFORE'}
          </span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 16px 16px', background: 'linear-gradient(transparent, rgba(11,11,11,0.8))' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(246,241,232,0.6)', marginBottom: 4 }}>Tap to toggle</div>
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
              See real results from our sofa cleaning jobs across Dubai, Sharjah &amp; Ajman. Tap any image to see the transformation.
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
