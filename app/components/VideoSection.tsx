'use client';
import { useState, useRef, useEffect } from 'react';

export default function VideoSection() {
  const videoId = 'oobnDS9Bj20';
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On mobile, load immediately (no lazy load delay)
    if (window.innerWidth <= 768) { setLoaded(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setLoaded(true); io.disconnect(); }
    }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
      <div className="container-x">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">Watch &amp; See</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            See the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Transformation</span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 480, margin: '0 auto', fontSize: 16, lineHeight: 1.65 }}>
            Watch how we restore your sofa to brand-new condition — from dirty &amp; stained to fresh &amp; clean.
          </p>
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div
            ref={ref}
            style={{
              position: 'relative', width: '100%', maxWidth: 380,
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid var(--line-strong)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
              aspectRatio: '9/16', background: '#000',
            }}
          >
            {loaded ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`}
                title="Al Haya Sofa Care — Sofa Cleaning Dubai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #0f1a1a, #0f0f0f)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 16,
              }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>Loading video...</span>
              </div>
            )}
          </div>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 700, margin: '0 auto' }}>
          {[
            { n: '2 hrs', l: 'Avg service time' },
            { n: '100%', l: 'Satisfaction' },
            { n: 'Eco', l: 'Safe products' },
            { n: 'Fast', l: 'Same-day dry' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--bg-raised)', borderRadius: 12, border: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 800, color: 'var(--accent)' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
