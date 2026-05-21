'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconArrow, IconWhatsApp, IconCheck } from '../components/Icons';
import ServiceCoverageSection from '../components/ServiceCoverageSection';

/* ─── Reusable Section Component ─── */
type ServiceSectionProps = {
  id: string;
  badge: string;
  badgeColor: string;
  title: React.ReactNode;
  desc1: string;
  desc2?: string;
  keywords: string[];
  priceLabel: string;
  price: string;
  timeLabel: string;
  time: string;
  waText: string;
  image: string;
  imageAlt: string;
  features: string[];
  flip?: boolean;
  bg?: string;
};

function ServiceSection({
  id, badge, badgeColor, title, desc1, desc2, keywords,
  priceLabel, price, timeLabel, time, waText,
  image, imageAlt, features, flip = false, bg,
}: ServiceSectionProps) {
  const textBlock = (
    <div className="reveal">
      <span className="badge" style={{ marginBottom: 20, display: 'inline-flex', background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}55` }}>
        {badge}
      </span>
      <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 46px)', marginBottom: 16, fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: desc2 ? 16 : 28 }}>{desc1}</p>
      {desc2 && <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>{desc2}</p>}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        {keywords.map((kw) => (
          <span key={kw} className="badge" style={{ fontSize: 11 }}>{kw}</span>
        ))}
      </div>
      <div style={{ padding: '18px 22px', background: 'var(--bg-elev)', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{priceLabel}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: badgeColor }}>{price}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 4 }}>{timeLabel}</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{time}</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
        <a href={`https://wa.me/971547199189?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconWhatsApp size={16}/> WhatsApp
        </a>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="reveal reveal-delay-2">
      <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)', aspectRatio: '4/3', position: 'relative' }}>
        <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ marginTop: 20, background: 'var(--bg-elev)', borderRadius: 16, padding: 22, border: '1px solid var(--line)', borderLeft: `3px solid ${badgeColor}` }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: badgeColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>What&apos;s Included</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <div style={{ color: badgeColor, marginTop: 2, flexShrink: 0 }}><IconCheck size={14}/></div>
              <span style={{ color: 'var(--fg-muted)', fontSize: 13, lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id={id} className="section" style={{ borderBottom: '1px solid var(--line)', background: bg }}>
      <div className="container-x">
        <div className="service-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {flip ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Data ─── */
const services: ServiceSectionProps[] = [
  {
    id: 'deep-cleaning',
    badge: 'Most Popular',
    badgeColor: 'var(--accent)',
    title: <>Sofa Deep Cleaning &amp; <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Steam Extraction</span></>,
    desc1: "Dubai's fine micro-dust particles act like sandpaper deep inside fabric fibers, wearing down your sofa over time. Al Haya's industrial extraction removes embedded desert dust, dust mites and allergens — while our pH-tested steam kills 99.9% of bacteria.",
    desc2: "We combine two of the most effective techniques: premium eco-friendly shampoos that break down grease and lift heavy stains without damaging the fabric, plus industrial-grade high-temperature steam that penetrates deep into the cushions.",
    keywords: ['sofa cleaning Dubai', 'sofa deep clean', 'steam extraction', 'allergen removal', 'same day service'],
    priceLabel: 'Starting Price',
    price: 'AED 50 / seat',
    timeLabel: 'Service Time',
    time: '1.5 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20sofa%20deep%20cleaning%20in%20Dubai.',
    image: '/home/sofa-deep-cleaning.webp',
    imageAlt: 'Professional sofa deep cleaning Dubai — Al Haya Sofa Care UAE',
    features: ['Industrial power vacuuming', 'Allergen & bacteria extraction', 'Deep stain treatment', 'pH-steam sanitization', 'Fabric protection coat', 'Eco-friendly agents', 'All fabric types safe', 'Same-day service'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'shampooing',
    badge: 'Fast-Dry Formula',
    badgeColor: '#06B6D4',
    title: <>Professional <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Shampooing</span> Dubai</>,
    desc1: "Professional foam shampoo treatment that goes deep into your sofa's fabric, lifting dirt, grime, and stains that regular vacuuming can't touch. Our shampoo service is perfect for fabric sofas that need a thorough refresh.",
    desc2: "Keep your sofa fresh, hygienic, and guest-ready. Experts inspect the fabric, treat stains, and deep clean — no need to move furniture. Fast-drying, same-day service ideal for busy families.",
    keywords: ['sofa shampooing Dubai', 'couch cleaning Dubai', 'eco-friendly sofa cleaning', 'sofa dry cleaning Dubai'],
    priceLabel: 'Starting Price',
    price: 'AED 40 / seat',
    timeLabel: 'Dry Time',
    time: '2 – 4 hrs',
    waText: 'Hi%2C%20I%20need%20sofa%20shampooing%20in%20Dubai.',
    image: '/home/sofa-shampoo.webp',
    imageAlt: 'Professional sofa shampooing service Dubai — Al Haya Sofa Care UAE',
    features: ['pH-balanced shampoo', 'Oil & grease breakdown', 'Fast-dry technology', 'Sanitization included', 'Deodorizing treatment', 'No fading guarantee', 'Pet hair removal', 'Same-day service'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'stain-removal',
    badge: 'Specialist',
    badgeColor: '#FF5A3C',
    title: <>Professional <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#FF5A3C' }}>Stain Removal</span> Dubai</>,
    desc1: "Targeted treatment for coffee, food, ink, wine, and other stubborn stains that regular cleaning simply cannot remove. Our specialist formula penetrates deep into fibers and works on even old, set-in stains without damaging fabric.",
    keywords: ['stain removal Dubai', 'sofa stain removal', 'coffee stain removal', 'ink stain sofa', 'pet stain removal'],
    priceLabel: 'Starting Price',
    price: 'AED 100',
    timeLabel: 'Service Time',
    time: '30 – 60 min',
    waText: 'Hi%2C%20I%20need%20stain%20removal%20service%20for%20my%20sofa.',
    image: '/coffee/after.webp',
    imageAlt: 'Sofa stain removal service Dubai — Al Haya Sofa Care UAE',
    features: ['Coffee & tea stains', 'Ink & dye removal', 'Food & grease stains', 'Wine & juice stains', 'Old set-in stains', 'Blood & protein stains', 'No discoloration', 'All fabric types'],
    flip: false,
    bg: 'var(--bg-raised)',
  },
  {
    id: 'leather-cleaning',
    badge: 'Premium',
    badgeColor: '#8B5CF6',
    title: <>Leather Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#8B5CF6' }}>Deep Cleaning</span> Dubai</>,
    desc1: "Specialist pH-safe leather care prevents cracking in Dubai's harsh climate. We deep clean, condition, restore suppleness and apply a protective coat — preserving your leather sofa for years.",
    desc2: "Dubai's dry heat causes leather to crack and fade faster than anywhere else. Our conditioning treatment replenishes lost moisture and creates a barrier against UV damage and everyday wear.",
    keywords: ['leather sofa cleaning Dubai', 'leather couch cleaning', 'leather conditioning UAE', 'leather sofa care Dubai'],
    priceLabel: 'Starting Price',
    price: 'AED 50 / seat',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20leather%20sofa%20cleaning%20in%20Dubai.',
    image: '/home/leather.webp',
    imageAlt: 'Leather sofa cleaning and conditioning Dubai — Al Haya Sofa Care UAE',
    features: ['pH-safe leather cleaner', 'Deep conditioning treatment', 'Crack & peel prevention', 'Stain & scuff removal', 'UV fade protection', 'Protective coat finish', 'Colour restoration', 'Same-day service'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'odor-treatment',
    badge: 'Freshness',
    badgeColor: '#0891B2',
    title: <>Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#0891B2' }}>Odor Treatment</span> Dubai</>,
    desc1: "Dubai's humid climate lets odors linger deep within fabric fibers for months. Our eco-friendly deodorizers neutralize pet, smoke, food and moisture odors at the molecular source — not just mask them.",
    keywords: ['sofa odor removal Dubai', 'couch smell removal', 'pet odor sofa', 'smoke smell sofa UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 59',
    timeLabel: 'Service Time',
    time: '1 – 2 hrs',
    waText: 'Hi%2C%20I%20need%20sofa%20odor%20treatment%20service.',
    image: '/home/Odor-Treatment.webp',
    imageAlt: 'Sofa odor treatment and deodorizing Dubai — Al Haya Sofa Care UAE',
    features: ['Pet odor elimination', 'Smoke & cigarette odors', 'Food & cooking odors', 'Moisture & mold odors', 'Anti-bacterial treatment', 'Long-lasting freshness', 'Eco-friendly formula', 'Humidity-proof result'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'pet-hair',
    badge: 'Pet-Friendly',
    badgeColor: '#D97706',
    title: <>Pet Hair <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#D97706' }}>Removal</span> Service</>,
    desc1: "Specialized vacuum and roller treatment removes embedded pet hair from every cushion, seam and corner of your sofa. Includes anti-allergen treatment completely safe for your pets and family members.",
    keywords: ['pet hair removal sofa Dubai', 'dog hair sofa cleaning', 'cat hair sofa Dubai', 'pet dander removal UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 39',
    timeLabel: 'Service Time',
    time: '45 – 90 min',
    waText: 'Hi%2C%20I%20need%20pet%20hair%20removal%20from%20my%20sofa.',
    image: '/home/pet.webp',
    imageAlt: 'Pet hair removal from sofa Dubai — Al Haya Sofa Care UAE',
    features: ['Deep pet hair extraction', 'Anti-allergen treatment', 'Safe for all fabrics', 'Deodorizing included', 'Seam & corner cleaning', 'Post-treatment sanitization', 'Child & pet safe', 'Same-day service'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'sanitization',
    badge: 'Hygienic',
    badgeColor: '#059669',
    title: <>Sofa <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#059669' }}>Sanitization</span> &amp; Disinfection</>,
    desc1: "Hospital-grade disinfection kills 99.9% of bacteria, viruses and germs lurking deep in your sofa — completely safe for children and pets. Ideal after illness, for allergy sufferers, or for a seasonal deep clean.",
    keywords: ['sofa sanitization Dubai', 'sofa disinfection UAE', 'bacteria removal sofa', 'allergy sofa cleaning Dubai'],
    priceLabel: 'Starting Price',
    price: 'AED 49',
    timeLabel: 'Service Time',
    time: '30 – 60 min',
    waText: 'Hi%2C%20I%20need%20sofa%20sanitization%20service.',
    image: '/home/Sofa-Sanitization.webp',
    imageAlt: 'Sofa sanitization and disinfection Dubai — Al Haya Sofa Care UAE',
    features: ['99.9% bacteria kill rate', 'Child & pet safe formula', 'Virus & germ elimination', 'WHO-approved solutions', 'No harsh chemicals', 'Allergy sufferer safe', 'High-temp steam', 'Same-day service'],
    flip: false,
    bg: 'var(--bg-raised)',
  },
  {
    id: 'velvet-microfiber',
    badge: 'Delicate Care',
    badgeColor: '#EC4899',
    title: <>Velvet &amp; Microfiber <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#EC4899' }}>Cleaning</span></>,
    desc1: "Gentle specialist cleaning for delicate velvet, microfiber and suede upholstery. Our low-moisture technique restores pile without any damage, shrinkage or colour fading — specialist tools for every curve.",
    keywords: ['velvet sofa cleaning Dubai', 'microfiber sofa clean', 'suede sofa UAE', 'delicate fabric cleaning Dubai'],
    priceLabel: 'Starting Price',
    price: 'AED 99',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20velvet%20or%20microfiber%20sofa%20cleaning.',
    image: '/home/Velvet-Microfiber.webp',
    imageAlt: 'Velvet and microfiber sofa cleaning Dubai — Al Haya Sofa Care UAE',
    features: ['Velvet-safe technique', 'Microfiber deep clean', 'Suede restoration', 'Pile direction restored', 'No shrinkage guarantee', 'No fading guarantee', 'Low-moisture method', 'Specialist tools'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'fabric-protection',
    badge: 'Protection',
    badgeColor: '#3B82F6',
    title: <>Fabric <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#3B82F6' }}>Protection</span> Coat</>,
    desc1: "Invisible shield coating repels future stains, spills and desert dust — keeping your sofa cleaner for up to 12+ months. Best applied immediately after a deep clean for maximum penetration and effect.",
    keywords: ['fabric protection Dubai', 'sofa stain protection UAE', 'scotchgard sofa Dubai', 'sofa shield coating'],
    priceLabel: 'Starting Price',
    price: 'AED 69',
    timeLabel: 'Service Time',
    time: '30 – 45 min',
    waText: 'Hi%2C%20I%20need%20fabric%20protection%20for%20my%20sofa.',
    image: '/home/Fabric-Protection.webp',
    imageAlt: 'Fabric protection coat for sofa Dubai — Al Haya Sofa Care UAE',
    features: ['Invisible stain shield', 'Spill repellent coating', 'UV fade protection', 'Dust repellent barrier', 'Lasts 12+ months', 'Safe for all fabrics', 'No texture change', 'Same-day add-on'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'ikea-lshape',
    badge: 'IKEA Special',
    badgeColor: '#0058A3',
    title: <>IKEA <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>L-Shape Sofa</span> Cleaning Dubai</>,
    desc1: "IKEA L-shape sofas are among the most common in UAE homes — but their size and multi-section design makes them difficult to clean thoroughly. Our specialist team covers every corner, seam, cushion and armrest.",
    desc2: "We are trained on all IKEA fabric types including KIVIK, EKTORP, VIMLE and FRIHETEN. Safe, eco-friendly cleaning agents, fast dry time, and complete allergen removal — all at your doorstep.",
    keywords: ['IKEA sofa cleaning Dubai', 'L-shape sofa cleaning', 'IKEA KIVIK cleaning', 'IKEA EKTORP cleaning'],
    priceLabel: 'Fixed Price',
    price: 'AED 150',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20IKEA%20L-shape%20sofa%20cleaning%20in%20Dubai.',
    image: '/L-shape/after.webp',
    imageAlt: 'IKEA L-Shape Sofa Cleaning Dubai — Al Haya Sofa Care UAE',
    features: ['Full L-shape coverage', 'All IKEA fabric types', 'Corner & seam deep clean', 'Allergen & dust extraction', 'Sanitization included', 'Fast-dry formula', 'Deodorizing treatment', 'Same-day service'],
    flip: true,
    bg: 'var(--bg-raised)',
  },
];

/* ─── Page ─── */
export default function ServicesPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
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
              Professional Sofa Cleaning Services in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Dubai &amp; UAE</span>
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 620, lineHeight: 1.65 }}>
              In Dubai, where luxury meets the desert, your sofa acts as a filter for fine sand, allergens and bacteria. Al Haya Sofa Care UAE uses industrial-grade extraction and pH-balanced cleaners to restore your upholstery — at your doorstep, same-day, across Dubai, Sharjah, Ajman &amp; Abu Dhabi.
            </p>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              {['Dubai', 'Sharjah', 'Ajman', 'Abu Dhabi', 'Al Ain', 'RAK'].map((city) => (
                <span key={city} style={{ padding: '5px 14px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 11, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}>
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section heading */}
        <section className="section-sm" style={{ paddingBottom: 0, borderTop: '1px solid var(--line)' }}>
          <div className="container-x" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Core Services</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', marginBottom: 12 }}>
              Our Comprehensive <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Upholstery Care</span> Solutions
            </h2>
            <p style={{ color: 'var(--fg-muted)', maxWidth: 560, margin: '0 auto', fontSize: 16, lineHeight: 1.65 }}>
              From deep extraction to steam sanitization — every method tailored to your fabric type and cleaning need.
            </p>
          </div>
        </section>

        {/* All Service Sections */}
        {services.map((s) => <ServiceSection key={s.id} {...s} />)}

        {/* 3-Step Process */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag">Technical Protocol</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                The Al Haya <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Technical Cleaning</span> Process
              </h2>
              <p style={{ color: 'var(--fg-muted)', maxWidth: 520, margin: '12px auto 0', fontSize: 16, lineHeight: 1.65 }}>
                Transparency builds trust. Here is the exact protocol our certified technicians follow — designed to achieve like-new results on every sofa type.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {[
                { n: '01', title: 'Inspection', color: '#F59E0B', desc: 'Our technician inspects your sofa fabric, identifies stains, and selects the ideal cleaning method and products for your specific upholstery.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
                { n: '02', title: 'Deep Clean', color: '#3B82F6', desc: 'Using professional equipment, we deep clean your sofa — extracting dust, treating every stain, and sanitizing the fabric from top to bottom.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg> },
                { n: '03', title: 'Fast Dry', color: '#10B981', desc: 'High-power drying equipment reduces drying time to just 2-4 hours. Your sofa is clean, fresh, and ready to use the same day.', svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg> },
              ].map((step, i) => (
                <div key={step.n} className={`reveal reveal-delay-${i + 1}`} style={{ position: 'relative', overflow: 'hidden', background: '#141210', border: `1px solid ${step.color}30`, borderTop: `3px solid ${step.color}`, borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <div style={{ position: 'absolute', top: -10, right: -10, fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 900, color: `${step.color}15`, lineHeight: 1 }}>{step.n}</div>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${step.color}20`, border: `1px solid ${step.color}40`, color: step.color, fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>{step.n}</div>
                  <div style={{ color: step.color, marginBottom: 12 }}>{step.svg}</div>
                  <h3 style={{ fontSize: 20, marginBottom: 12, color: step.color, fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.70)', fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="section-tag">FAQs</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Sofa Cleaning <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>FAQs</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 800, margin: '0 auto' }}>
              {[
                { q: 'How much does sofa cleaning cost in Dubai?', a: 'Sofa cleaning in Dubai starts from AED 40/seat for shampooing, AED 50/seat for deep cleaning, AED 100 for stain removal, and AED 50/seat for leather sofa cleaning. All prices include at-home doorstep service with no hidden fees.' },
                { q: 'How often should I professionally clean my couch in Dubai?', a: "Due to Dubai's high dust levels and humidity, we recommend a professional deep clean every 6 to 12 months. If you have pets or children, a 6-month interval is ideal to remove allergens, dust mites and embedded desert dust that standard vacuums cannot reach." },
                { q: 'Is professional sofa cleaning safe for all sofa materials?', a: 'Yes. Our technicians perform a fabric inspection and pH test before selecting cleaners. We use pH-neutral solutions for delicate natural fibers (wool, silk, linen) to prevent browning or dye bleeding, and specialist low-moisture techniques for velvet and microfiber.' },
                { q: 'Will deep cleaning remove bad odors from my sofa?', a: "Yes. Our eco-friendly deodorizers neutralize pet, smoke, food and moisture odors at the molecular source — not just mask them. This is especially effective in Dubai's humid climate where odors can linger deep within fabric fibers." },
              ].map((item, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ background: '#141210', border: '1px solid rgba(246,241,232,0.10)', borderLeft: '3px solid var(--accent)', borderRadius: 14, padding: '24px 28px' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg)', marginBottom: 12 }}>{item.q}</h3>
                  <p style={{ color: 'rgba(246,241,232,0.68)', fontSize: 15, lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Locations</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 16 }}>
              Serving All Communities Across <span style={{ color: 'var(--accent)' }}>Dubai &amp; UAE</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 580, margin: '0 auto 28px', lineHeight: 1.65 }}>
              Dubai Marina · Business Bay · Palm Jumeirah · Downtown · Al Barsha · JVC · Arabian Ranches · Mirdif · JLT · Abu Dhabi · Sharjah · Ajman
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Book Now <IconArrow size={14}/></Link>
              <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><IconWhatsApp size={16}/> WhatsApp</a>
            </div>
          </div>
        </section>

        <ServiceCoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  );
}
