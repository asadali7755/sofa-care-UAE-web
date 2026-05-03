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
    <>
    <section id="hero" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderBottom: '1px solid var(--line)' }}>
      {/* Background video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-sofa.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        >
          <source src="/hero-bg-compressed.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(11,11,11,0.88) 0%, rgba(11,11,11,0.70) 50%, rgba(11,11,11,0.50) 100%)' }}/>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }}/>
      </div>

      {/* Main content — flex:1 fills remaining height after navbar */}
      <div className="container-x hero-grid" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr minmax(280px, 400px)', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1, paddingTop: 88, paddingBottom: 24 }}>
        {/* Left */}
        <div>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
            <span className="pulse-dot"/> Trusted by 500+ clients &nbsp;·&nbsp; Dubai, UAE
          </div>

          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.5vw, 80px)', lineHeight: 0.94, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 6 }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.65)', fontWeight: 500, fontSize: 'clamp(14px, 1.4vw, 18px)', letterSpacing: '-0.01em', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>Dubai&apos;s Most Trusted</span>
            <span style={{ display: 'block', color: '#ffffff' }}>Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Cleaning</span></span>
            <span style={{ display: 'block', color: '#ffffff' }}>Experts</span>
          </h1>

          <div className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(15px, 1.8vw, 26px)', fontWeight: 700, color: 'var(--accent)', marginTop: 18, marginBottom: 16, minHeight: '1.5em', letterSpacing: '-0.01em' }}>
            &gt; <span>{role}</span><span className="cursor-blink">_</span>
          </div>

          <p className="reveal reveal-delay-3" style={{ fontSize: 'clamp(14px, 1vw, 16px)', color: 'rgba(255,255,255,0.72)', maxWidth: 480, lineHeight: 1.6, marginBottom: 24 }}>
            Al Haya Sofa Care UAE brings <em style={{ fontFamily: 'var(--font-serif)', color: '#ffffff' }}>professional sofa cleaning</em> to your doorstep in Dubai, Sharjah &amp; Ajman. Advanced equipment, eco-friendly solutions, fast-dry results.
          </p>

          <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
            <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
              <IconWhatsApp size={16}/> WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-5 hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: 500 }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 1.8vw, 24px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.55)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Card */}
        <div className="hero-right reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(246,241,232,0.15)', backgroundImage: 'url(/home/OIG2.webp)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: 'rgba(11,11,11,0.9)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,11,0.55)', backdropFilter: 'blur(2px)' }}/>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 28 }}>
              <svg width="90" height="64" viewBox="0 0 120 80" fill="none">
                <rect x="10" y="32" width="100" height="30" rx="8" fill="color-mix(in oklab, var(--accent) 20%, transparent)" stroke="var(--accent)" strokeWidth="1.5"/>
                <rect x="20" y="22" width="80" height="14" rx="5" fill="color-mix(in oklab, var(--accent) 15%, transparent)" stroke="rgba(246,241,232,0.2)" strokeWidth="1"/>
                <rect x="4" y="36" width="12" height="20" rx="6" fill="color-mix(in oklab, var(--accent) 20%, transparent)" stroke="var(--accent)" strokeWidth="1.5"/>
                <rect x="104" y="36" width="12" height="20" rx="6" fill="color-mix(in oklab, var(--accent) 20%, transparent)" stroke="var(--accent)" strokeWidth="1.5"/>
                <circle cx="90" cy="20" r="14" fill="var(--accent)"/>
                <path d="M84 20l4 4 8-8" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--fg)', marginBottom: 6 }}>Fresh &amp; Clean</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)' }}>Professional Results, Every Time</div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Eco-Safe', 'Same Day', 'At-Home'].map((tag) => (
                  <span key={tag} className="badge badge-accent" style={{ fontSize: 10 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 9px', borderRadius: 6, background: 'rgba(11,11,11,0.75)', backdropFilter: 'blur(8px)', color: 'var(--fg)', fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>AE · Dubai 2025</div>
            <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, padding: '8px 12px', borderRadius: 8, background: 'rgba(11,11,11,0.72)', backdropFilter: 'blur(10px)', color: 'var(--fg)', fontFamily: 'var(--font-mono)', fontSize: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SOFA_CLEAN.sh</span>
              <span style={{ color: 'var(--green)' }}>● RUNNING</span>
            </div>
          </div>

          {/* Floating badge bottom-left */}
          <div style={{ position: 'absolute', bottom: -16, left: -24, padding: '12px 16px', background: 'var(--ink2)', border: '1px solid var(--line-strong)', borderRadius: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#D9F15A', boxShadow: '0 20px 40px rgba(0,0,0,0.35)', maxWidth: 220 }}>
            <div style={{ color: 'var(--fg-muted)', marginBottom: 3 }}>{'// deep clean in'}</div>
            <div><span style={{ color: 'var(--accent)' }}>const</span> <span style={{ color: 'var(--fg)' }}>time</span> = <span style={{ color: '#D9F15A' }}>&apos;2 hours&apos;</span>;</div>
          </div>

          {/* Floating badge top-right */}
          <div style={{ position: 'absolute', top: -14, right: -14, padding: '8px 12px', background: 'var(--accent)', color: 'var(--ink)', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, boxShadow: '0 12px 28px color-mix(in oklab, var(--accent) 40%, transparent)', transform: 'rotate(5deg)' }}>
            ◆ Same Day
          </div>
        </div>
      </div>


      <style jsx>{`
        @media (max-width: 900px) {
          :global(.hero-grid) { grid-template-columns: 1fr !important; gap: 32px !important; padding-top: 100px !important; }
          :global(.hero-right) { display: none !important; }
        }
      `}</style>
    </section>
    </>
  );
}
