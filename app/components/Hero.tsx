'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrow, IconWhatsApp } from './Icons';
import HeroEnquiryCard from './HeroEnquiryCard';

function useTypewriter(words: string[], typingSpeed = 70, deleteSpeed = 35, pauseMs = 1500) {
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
        setText((s) => (deleting ? s.slice(0, -1) : current.slice(0, s.length + 1)));
      }, deleting ? deleteSpeed : typingSpeed);
    }
    return () => { if (t) clearTimeout(t); };
  }, [text, deleting, idx, words, typingSpeed, deleteSpeed, pauseMs]);
  return text;
}

const Ico = ({ d }: { d: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

const stats = [
  { n: 'Eco-Friendly', l: 'Products Used', d: 'M12 22c4-3 7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 3 8 7 11zM12 7v6M9 10h6' },
  { n: '5+ Years', l: 'Experience', d: 'M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
  { n: 'Certified', l: 'Technicians', d: 'M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.6 6.5 19.5l1-6.3L3 8.9 9 8z' },
  { n: 'Same Day', l: 'Service Available', d: 'M13 2L4 14h7l-1 8 9-12h-7z' },
];

const emirates = [
  { name: 'Dubai', href: '/sofa-cleaning-dubai' },
  { name: 'Abu Dhabi', href: '/sofa-cleaning-abu-dhabi' },
  { name: 'Sharjah', href: '/sofa-cleaning-sharjah' },
  { name: 'Ajman', href: '/sofa-cleaning-ajman' },
  { name: 'Ras Al Khaimah', href: '/sofa-cleaning-ras-al-khaimah' },
  { name: 'Fujairah', href: '/sofa-cleaning-fujairah' },
  { name: 'Umm Al Quwain', href: '/sofa-cleaning-umm-al-quwain' },
];

export default function Hero() {
  const role = useTypewriter(['Sofa Deep Cleaning', 'Sofa Shampooing', 'Stain Removal', 'Leather Care', 'Same Day Service', 'At-Home Service']);

  return (
    <section id="hero" className="hx">
      {/* ── media layers ── */}
      <div className="hx-media">
        <img
          src="/hero-mobile.webp"
          alt="Professional at-home sofa cleaning service across the UAE — Al Haya Sofa Care deep shampoo and steam cleaning"
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          width={768}
          height={1376}
          className="hero-img-mobile"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <video
          autoPlay muted loop playsInline preload="none"
          poster="/sofa-cleaning-dubai-professional.webp"
          className="hero-video-desktop"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hx-shade" />
        <div className="hx-mesh" />
        <span className="hx-orb hx-orb-1" />
        <span className="hx-orb hx-orb-2" />
        <div className="grid-bg hx-grid" />
      </div>

      {/* ── content ── */}
      <div className="hx-wrap">
        <div className="hx-left">
          <div className="hx-eyebrow hx-in" style={{ ['--d' as string]: '0s' }}>
            <span className="pulse-dot" /> Same-Day At-Home Service
            <i className="hx-sep" /> All 7 Emirates
          </div>

          <h1 className="hx-h1 hx-in" style={{ ['--d' as string]: '.08s' }}>
            <span className="hx-h1-sub">Professional &amp; Trusted</span>
            <span className="hx-h1-main">Sofa <em>Cleaning</em></span>
            <span className="hx-h1-main hx-h1-line2">Across the UAE</span>
          </h1>

          <div className="hx-type hx-in" style={{ ['--d' as string]: '.16s' }}>
            <span className="hx-type-dot" />
            <span className="hx-type-text">{role}</span>
            <span className="cursor-blink hx-type-cursor">|</span>
          </div>

          <h2 className="hx-lead hx-in" style={{ ['--d' as string]: '.24s' }}>
            Desert dust, coastal humidity and daily use turn your sofa into a filter for allergens. Al Haya brings{' '}
            <strong>certified deep cleaning</strong>{' '}to your doorstep — eco-friendly solutions, fast-dry results and same-day service in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah &amp; Umm Al Quwain.
          </h2>

          <div className="hx-cta hx-in" style={{ ['--d' as string]: '.32s' }}>
            <Link href="/contact" className="hx-btn hx-btn-main">Book Now <IconArrow size={15} /></Link>
            <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning." target="_blank" rel="noopener noreferrer" className="hx-btn hx-btn-glass">
              <IconWhatsApp size={17} /> WhatsApp Us
            </a>
            <Link href="/services" className="hx-link">View all services <IconArrow size={13} /></Link>
          </div>

          <ul className="hx-stats hx-in" style={{ ['--d' as string]: '.4s' }}>
            {stats.map((s) => (
              <li key={s.l} className="hx-stat">
                <span className="hx-stat-ico"><Ico d={s.d} /></span>
                <span><b>{s.n}</b><small>{s.l}</small></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hx-right hx-in" style={{ ['--d' as string]: '.3s' }}>
          <div className="hero-enquiry-wrapper" style={{ flexShrink: 0 }}>
            <HeroEnquiryCard />
          </div>
        </div>
      </div>

      {/* ── emirate quick links ── */}
      <nav className="hx-bar" aria-label="Sofa cleaning by emirate">
        <span className="hx-bar-label">Choose your emirate</span>
        <div className="hx-bar-row">
          {emirates.map((e) => (
            <Link key={e.href} href={e.href} className="hx-chip" title={`Sofa cleaning ${e.name}`}>{e.name}</Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
