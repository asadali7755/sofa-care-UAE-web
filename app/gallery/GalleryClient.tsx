'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCoverageSection from '../components/ServiceCoverageSection';

const categories = ['All', 'Sofa Cleaning', 'Stain Removal', 'Leather', 'Shampooing'];

const videoResults = [
  { src: '/videos/sofa-deep-cleaning-result-dubai-1.mp4', title: 'Sofa Deep Cleaning Result Dubai', alt: 'Before and after sofa deep cleaning result in Dubai — professional fabric sofa restored by Al Haya Sofa Care UAE', label: 'Deep Cleaning Result' },
  { src: '/videos/sofa-shampooing-result-dubai-2.mp4', title: 'Sofa Shampooing Result Dubai', alt: 'Before and after sofa shampooing result in Dubai — stained sofa cleaned with eco-friendly shampoo by Al Haya', label: 'Shampooing Result' },
  { src: '/videos/upholstery-cleaning-before-after-dubai-3.mp4', title: 'Upholstery Cleaning Before After Dubai', alt: 'Upholstery cleaning before and after in Dubai — complete fabric transformation by Al Haya Sofa Care', label: 'Upholstery Cleaning' },
  { src: '/videos/sofa-cleaning-quick-result-dubai-4.mp4', title: 'Sofa Cleaning Quick Result Dubai', alt: 'Quick sofa cleaning result in Dubai — fast same-day sofa restoration by Al Haya professionals', label: 'Quick Result' },
  { src: '/videos/fabric-sofa-deep-clean-dubai-5.mp4', title: 'Fabric Sofa Deep Clean Dubai', alt: 'Fabric sofa deep clean before and after in Dubai — heavy stain removal by Al Haya Sofa Care UAE', label: 'Fabric Deep Clean' },
  { src: '/videos/sofa-steam-cleaning-result-dubai-6.mp4', title: 'Sofa Steam Cleaning Result Dubai', alt: 'Sofa steam cleaning result in Dubai — high-temperature sanitization and deep clean by Al Haya', label: 'Steam Cleaning' },
  { src: '/videos/couch-cleaning-before-after-dubai-7.mp4', title: 'Couch Cleaning Before After Dubai', alt: 'Couch cleaning before and after in Dubai — dirty couch restored to like-new condition by Al Haya', label: 'Couch Cleaning' },
  { src: '/videos/sofa-sanitization-result-dubai-8.mp4', title: 'Sofa Sanitization Result Dubai', alt: 'Sofa sanitization result in Dubai — bacteria and allergen removal with eco-friendly products by Al Haya', label: 'Sanitization Result' },
  { src: '/videos/sofa-stain-removal-before-after-dubai.mp4', title: 'Sofa Stain Removal Before After Dubai', alt: 'Sofa stain removal before and after in Dubai — tough stains eliminated by Al Haya professional cleaning', label: 'Stain Removal' },
  { src: '/videos/single-seat-sofa-cleaning-dubai.mp4', title: 'Single Seat Sofa Cleaning Dubai', alt: 'Single seat sofa cleaning in Dubai — individual cushion deep cleaning result by Al Haya Sofa Care UAE', label: 'Single Seat Clean' },
];

function VideoCard({ video, index }: { video: typeof videoResults[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const vid = videoRef.current;
    if (!card || !vid) return;
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
      { threshold: 0.3 }
    );
    io.observe(card);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card reveal"
      style={{ padding: 0, overflow: 'hidden', position: 'relative' }}
    >
      <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: 480, overflow: 'hidden', background: '#0a0a0a' }}>
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

        {/* Play state indicator */}
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
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 9,
            color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em',
          }}>
            {isPlaying ? 'PLAYING' : 'PAUSED'}
          </span>
        </div>

        {/* Video number badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '4px 12px', borderRadius: 999,
          background: 'var(--accent)', color: '#fff',
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.06em',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{video.label}</span>
        <span className="badge" style={{ fontSize: 10 }}>Before &amp; After</span>
      </div>
    </div>
  );
}

const galleryItems = [
  { id: 1, cat: 'Sofa Cleaning', label: '3-Seater Sofa — Before & After', altBefore: 'Dirty 3-seater sofa before professional deep shampoo cleaning in Dubai UAE', altAfter: 'Clean 3-seater sofa after professional deep shampoo cleaning in Dubai UAE by Al Haya Sofa Care', before: '/3seater/before.webp', after: '/3seater/after.webp' },
  { id: 2, cat: 'Stain Removal', label: 'Coffee Stain Removal — JVC', altBefore: 'Sofa with coffee stain before removal — JVC Dubai', altAfter: 'Sofa after coffee stain removal in JVC Dubai — Al Haya Sofa Care UAE', before: '/coffee/before.webp', after: '/coffee/after.webp' },
  { id: 3, cat: 'Leather', label: 'Leather Sofa Deep Clean — Business Bay', altBefore: 'Dirty leather sofa before deep cleaning in Business Bay Dubai', altAfter: 'Restored leather sofa after deep cleaning in Business Bay Dubai — Al Haya', before: '/leather/before.webp', after: '/leather/after.webp' },
  { id: 4, cat: 'Shampooing', label: 'Fabric Shampoo — Sharjah', altBefore: 'Fabric sofa before professional shampoo cleaning in Sharjah UAE', altAfter: 'Fresh fabric sofa after professional shampoo cleaning in Sharjah — Al Haya Sofa Care', before: '/shampoo/before.webp', after: '/shampoo/after.webp' },
  { id: 5, cat: 'Sofa Cleaning', label: 'L-Shaped Sofa — Downtown Dubai', altBefore: 'L-shaped sofa before deep cleaning in Downtown Dubai', altAfter: 'Clean L-shaped sofa after deep cleaning in Downtown Dubai — Al Haya', before: '/L-shape/before.webp', after: '/L-shape/after.webp' },
  { id: 6, cat: 'Stain Removal', label: 'Pet Stain Removal — Ajman', altBefore: 'Sofa with pet stain before cleaning in Ajman UAE', altAfter: 'Sofa after pet stain removal in Ajman UAE — Al Haya Sofa Care', before: '/pet-stain/before.webp', after: '/pet-stain/after.webp' },
  { id: 7, cat: 'Leather', label: 'Leather Sofa Dust & Powder Stain — Dubai Marina', altBefore: 'Leather sofa with dust and powder stains before professional cleaning in Dubai Marina UAE', altAfter: 'Leather sofa fully restored after dust and powder stain removal in Dubai Marina — Al Haya Sofa Care', before: '/leather-dust-stain/before.webp', after: '/leather-dust-stain/after.webp' },
  { id: 8, cat: 'Leather', label: 'Leather Sofa Dirt & Marks Removal — JBR Dubai', altBefore: 'Leather sofa covered in dirt and marks before deep cleaning in JBR Dubai UAE', altAfter: 'Spotless leather sofa after professional dirt and marks removal in JBR Dubai — Al Haya Sofa Care UAE', before: '/leather-dirt-marks/before.webp', after: '/leather-dirt-marks/after.webp' },
  { id: 9, cat: 'Leather', label: 'Leather Sofa Scratch & Scuff Cleaning — Downtown Dubai', altBefore: 'Leather sofa with scratches and scuff marks before cleaning service in Downtown Dubai UAE', altAfter: 'Leather sofa restored from scratches and scuffs in Downtown Dubai — Al Haya professional leather cleaning', before: '/leather-scratch-scuff/before.webp', after: '/leather-scratch-scuff/after.webp' },
  { id: 10, cat: 'Leather', label: 'Leather Sofa Mould & Stain Treatment — Palm Jumeirah', altBefore: 'Severe mould and deep stains on leather sofa before Al Haya treatment in Palm Jumeirah Dubai', altAfter: 'Leather sofa completely cleaned and mould-free after Al Haya Sofa Care treatment in Palm Jumeirah Dubai', before: '/leather-mold-clean/before.webp', after: '/leather-mold-clean/after.webp' },
  { id: 11, cat: 'Leather', label: 'Leather Sofa Water Stain Removal — Deira Dubai', altBefore: 'Leather sofa with water and liquid stains before professional cleaning in Deira Dubai UAE', altAfter: 'Leather sofa with all water stains removed by Al Haya Sofa Care in Deira Dubai UAE', before: '/leather-water-stain/before.webp', after: '/leather-water-stain/after.webp' },
  { id: 12, cat: 'Sofa Cleaning', label: 'Grey Fabric Sofa Deep Clean — Dubai Marina', altBefore: 'Grey fabric 2-seater sofa with embedded dust and dirt before professional deep cleaning in Dubai Marina UAE', altAfter: 'Grey fabric sofa restored and fresh after Al Haya Sofa Care deep cleaning service in Dubai Marina', before: '/fabric-sofa-deep-clean/before.webp', after: '/fabric-sofa-deep-clean/after.webp' },
  { id: 13, cat: 'Stain Removal', label: 'Microfiber Sofa Spot Removal — Sharjah', altBefore: 'Beige microfiber sofa with multiple dark spot stains before professional stain removal service in Sharjah UAE', altAfter: 'Beige microfiber sofa perfectly clean after spot stain removal by Al Haya Sofa Care Sharjah UAE', before: '/microfiber-spot-removal/before.webp', after: '/microfiber-spot-removal/after.webp' },
  { id: 14, cat: 'Shampooing', label: 'Suede Fabric Sofa Deep Shampoo — Abu Dhabi', altBefore: 'Dirty beige suede fabric sofa with stains and grime before deep shampoo cleaning in Abu Dhabi UAE', altAfter: 'Beige suede sofa fully refreshed after professional deep shampoo treatment by Al Haya in Abu Dhabi UAE', before: '/suede-sofa-shampooing/before.webp', after: '/suede-sofa-shampooing/after.webp' },
  { id: 15, cat: 'Leather', label: 'White Leather Sofa Stain Removal — Palm Jumeirah', altBefore: 'White leather sofa with large dust and sand stain before professional leather cleaning in Palm Jumeirah Dubai', altAfter: 'White leather sofa completely restored after stain removal by Al Haya Sofa Care Palm Jumeirah Dubai', before: '/white-leather-stain-removal/before.webp', after: '/white-leather-stain-removal/after.webp' },
  { id: 16, cat: 'Sofa Cleaning', label: 'Fabric Sofa Dust & Seam Extraction — Ajman', altBefore: 'Beige fabric sofa with heavy dust and black dirt in seams before deep extraction cleaning in Ajman UAE', altAfter: 'Beige fabric sofa completely clean after professional dust and seam extraction by Al Haya in Ajman UAE', before: '/fabric-seam-extraction/before.webp', after: '/fabric-seam-extraction/after.webp' },
];

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
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-tag reveal">Real Results</div>
              <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.05, marginBottom: 16 }}>
                Magic <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Results</span>
              </h2>
              <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
                Watch real before &amp; after sofa cleaning transformations from our projects across Dubai, Sharjah &amp; Ajman. Every video is from a real client job.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
              {videoResults.map((video, i) => (
                <VideoCard key={video.src} video={video} index={i} />
              ))}
            </div>
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
