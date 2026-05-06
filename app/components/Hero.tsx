'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrow, IconWhatsApp } from './Icons';

function useTypewriter(words: string[], typingSpeed = 80, deleteSpeed = 40, pauseMs = 1600) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(() => {
        setText((s) => deleting ? s.slice(0, -1) : current.slice(0, s.length + 1));
      }, deleting ? deleteSpeed : typingSpeed);
    }
    return () => { if (t) clearTimeout(t); };
  }, [text, deleting, idx, words, typingSpeed, deleteSpeed, pauseMs]);
  return text;
}

const stats = [
  { n: '500+', l: 'Happy Clients' },
  { n: '5+', l: 'Years Experience' },
  { n: '4.9★', l: 'Client Rating' },
  { n: 'Same Day', l: 'Service Available' },
];

export default function Hero() {
  const role = useTypewriter(['Sofa Deep Cleaning', 'Sofa Shampooing', 'Stain Removal', 'Same Day Service', 'At-Home Service']);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderBottom: '1px solid var(--line)', background: '#0B0B0B' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#0B0B0B' }}>
        <img
          src="/hero-sofa.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(11,11,11,0.45) 0%, rgba(11,11,11,0.25) 55%, rgba(11,11,11,0.10) 100%)' }}/>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }}/>
      </div>

      <div className="container-x" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1, paddingTop: 88, paddingBottom: 24 }}>
        <div>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
            <span className="pulse-dot"/> Trusted by 500+ clients &nbsp;·&nbsp; Dubai, UAE
          </div>

          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.5vw, 80px)', lineHeight: 0.94, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 6 }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.65)', fontWeight: 500, fontSize: 'clamp(14px, 1.4vw, 18px)', letterSpacing: '-0.01em', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>Dubai&apos;s Most Trusted</span>
            <span style={{ display: 'block', color: '#ffffff' }}>Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#89CFF0' }}>Cleaning</span></span>
            <span style={{ display: 'block', color: '#ffffff' }}>Experts</span>
          </h1>

          {/* Typewriter — yellow bg grows with text, black font */}
          <div className="reveal reveal-delay-2" style={{ marginTop: 18, marginBottom: 20, minHeight: '1.5em' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--accent)',
              padding: '6px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(14px, 1.6vw, 22px)',
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '-0.01em',
              borderRadius: 4,
              boxShadow: '0 0 0 2px var(--accent), 0 0 0 4px rgba(255,193,7,0.3)',
              transition: 'width 0.1s ease',
            }}>
              &gt; <span>{role}</span><span className="cursor-blink" style={{ color: '#000' }}>_</span>
            </span>
          </div>

          <h2 className="reveal reveal-delay-3" style={{ fontSize: 'clamp(13px, 1vw, 15px)', fontWeight: 600, color: '#000000', maxWidth: 480, lineHeight: 1.65, marginBottom: 24, fontFamily: 'var(--font-sans)', background: 'rgba(255,255,255,0.82)', padding: '10px 14px', borderRadius: 8, backdropFilter: 'blur(4px)' }}>
            Al Haya Sofa Care UAE brings <em style={{ fontFamily: 'var(--font-serif)', color: '#0a0f1e', fontStyle: 'italic' }}>professional sofa cleaning</em> to your doorstep in Dubai, Sharjah &amp; Ajman. Advanced equipment, eco-friendly solutions, fast-dry results.
          </h2>

          <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
            <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
              <IconWhatsApp size={16}/> WhatsApp Us
            </a>
          </div>

          <div className="reveal reveal-delay-5 hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: 500 }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 1.8vw, 24px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.55)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
