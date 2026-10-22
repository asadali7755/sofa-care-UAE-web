'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCoverageSection from '../components/ServiceCoverageSection';
import QuoteCallSection from '../components/QuoteCallSection';
import { useRequestCall } from '../components/RequestCallModal';
import { IconWhatsApp } from '../components/Icons';
import { videoResults, galleryItems } from '../lib/galleryData';

const categories = ['All', 'Sofa Cleaning', 'Stain Removal', 'Leather', 'Shampooing'];



function BottomCTACallButton() {
  const { open } = useRequestCall();
  return (
    <button onClick={open} className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Request a Call
    </button>
  );
}

function VideoCTAButtons() {
  const { open } = useRequestCall();
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <IconWhatsApp size={16} /> WhatsApp
      </a>
      <button onClick={open} className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Request a Call
      </button>
      <Link href="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Get a Quote</Link>
    </div>
  );
}

function VideoSection({ video, index }: { video: typeof videoResults[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isReversed = index % 2 === 1;

  useEffect(() => {
    const section = sectionRef.current;
    const vid = videoRef.current;
    if (!section || !vid) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
          setIsPlaying(true);
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="reveal video-row"
      style={{
        display: 'flex',
        flexDirection: isReversed ? 'row-reverse' : 'row',
        gap: 'clamp(24px, 4vw, 48px)',
        alignItems: 'center',
        padding: 'clamp(32px, 5vw, 64px) 0',
        borderBottom: index < videoResults.length - 1 ? '1px solid var(--line)' : 'none',
      }}
    >
      {/* Video side */}
      <div style={{ flex: '0 0 auto', width: 'clamp(260px, 35vw, 380px)', position: 'relative' }}>
        <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: 560, overflow: 'hidden', background: '#0a0a0a', borderRadius: 'inherit' }}>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              title={video.title}
              aria-label={video.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={video.src} type="video/mp4" />
            </video>

            <div style={{
              position: 'absolute', top: 12, left: 12,
              padding: '4px 12px', borderRadius: 999,
              background: 'var(--accent)', color: '#fff',
              fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.06em',
            }}>
              {String(index + 1).padStart(2, '0')} / {videoResults.length}
            </div>

            <div style={{
              position: 'absolute', top: 12, right: 12,
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 10px', borderRadius: 999,
              background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(8px)',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: isPlaying ? '#6DD5C2' : 'rgba(255,255,255,0.4)',
                display: 'inline-block',
                animation: isPlaying ? 'gallery-pulse 1.2s ease-in-out infinite' : 'none',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                {isPlaying ? 'PLAYING' : 'PAUSED'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span className="badge" style={{ fontSize: 10, marginBottom: 12, display: 'inline-block' }}>Before &amp; After</span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 16, color: 'var(--fg)' }}>
          {video.heading}
        </h3>
        <p style={{ color: 'var(--fg-muted)', fontSize: 'clamp(14px, 1.2vw, 16px)', lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
          {video.desc}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {video.highlights.map((h) => (
            <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--fg)' }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'color-mix(in oklab, var(--accent) 15%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
        <VideoCTAButtons />
      </div>
    </div>
  );
}



const SWITCH_MS = 2500;

// Single shared showAfter prop — all cards sync to same timer in parent
function GalleryCard({ item, showAfter }: { item: typeof galleryItems[0]; showAfter: boolean }) {
  return (
    <div className="card reveal" style={{ padding: 0, overflow: 'hidden' }}>
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

        {/* Progress bar — key resets animation on every toggle */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.12)' }}>
          <div
            key={String(showAfter)}
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
  const [showAfter, setShowAfter] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Reveal animation observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  // Single shared timer — starts when grid is visible, all cards sync together
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const start = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => setShowAfter((p) => !p), SWITCH_MS);
    };
    const stop = () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    };

    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0.1 }
    );
    io.observe(grid);
    return () => { io.disconnect(); stop(); };
  }, []);

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
              Before &amp; <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>After</span> Gallery
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 520, lineHeight: 1.65 }}>
              See real results from our sofa cleaning jobs across Dubai, Sharjah &amp; Ajman. Images auto-play before &amp; after — just scroll down.
            </p>
          </div>
        </section>

        {/* Magic Results — Video Section */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container-x">
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div className="section-tag reveal">Real Results</div>
              <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.05, marginBottom: 16 }}>
                Magic <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Results</span>
              </h2>
              <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
                Watch real before &amp; after sofa cleaning transformations from our projects across Dubai, Sharjah &amp; Ajman. Every video is from a real client job.
              </p>
            </div>

            {videoResults.map((video, i) => (
              <VideoSection key={video.src} video={video} index={i} />
            ))}
          </div>
        </section>

        {/* Before & After Images Gallery */}
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

            {/* Grid — ref used for single shared timer */}
            <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {filtered.map((item) => <GalleryCard key={item.id} item={item} showAfter={showAfter} />)}
            </div>

            {/* CTA */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: 56, padding: '40px', background: 'var(--bg-elev)', borderRadius: 20, border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>Want results like these for your sofa?</h3>
              <p style={{ color: 'var(--fg-muted)', marginBottom: 28 }}>Book your appointment today — same-day service available.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconWhatsApp size={16} /> WhatsApp</a>
                <BottomCTACallButton />
                <Link href="/contact" className="btn btn-primary">Get a Quote →</Link>
              </div>
            </div>
          </div>
        </section>
        <QuoteCallSection />
        <ServiceCoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
