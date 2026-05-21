'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrow, IconSofa, IconDrop, IconShield, IconSpray, IconWind, IconPaw, IconSparkle, IconDiamond, IconFabric } from './Icons';

const cyclingLines = [
  'Sofa Deep Cleaning',
  'Stain Removal',
  'Leather Care',
  'Odor Treatment',
  'Pet Hair Removal',
  'Sofa Shampooing',
  'Fabric Protection',
  'At-Home Service',
  'Same Day Available',
  'Eco-Friendly Products',
  'Certified Technicians',
  'Dubai · Sharjah · Ajman',
];

function useTypewriter(words: string[], speed = 75, deleteSpeed = 40, pause = 1400) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[idx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => (i + 1) % words.length);
    } else {
      t = setTimeout(() => {
        setText(s => deleting ? s.slice(0, -1) : current.slice(0, s.length + 1));
      }, deleting ? deleteSpeed : speed);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, deleteSpeed, pause]);
  return text;
}

function AnimatedServiceContent() {
  const typed = useTypewriter(cyclingLines);

  return (
    <div className="reveal" style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      {/* Section tag */}
      <div className="section-tag" style={{ marginBottom: 28, display: 'inline-flex' }}>Why Al Haya</div>

      {/* Big heading */}
      <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
        United Arab Emirates <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Most Trusted</span><br/>Sofa Experts
      </h2>

      {/* Animated typewriter */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(16px, 2vw, 26px)',
        fontWeight: 700,
        color: 'var(--accent)',
        marginBottom: 32,
        minHeight: '1.5em',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ color: 'var(--fg-dim)' }}>&gt;</span>
        <span>{typed}</span>
        <span className="cursor-blink">_</span>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
        Dubai&apos;s micro-dust particles settle deep into fabric fibers, acting like sandpaper on your upholstery. Al Haya&apos;s certified technicians use industrial-grade extraction and pH-balanced cleaners tailored to your specific fabric — protecting your investment and ensuring a healthy home across Dubai, Sharjah, Ajman &amp; Abu Dhabi.
      </p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 36 }}>
        {[
          { val: '500+', label: 'Happy Clients' },
          { val: '4.9 ★', label: 'Average Rating' },
          { val: 'Same Day', label: 'Service Available' },
          { val: '5+ Yrs', label: 'Experience' },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: 'var(--fg)', letterSpacing: '-0.02em' }}>{s.val}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link href="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>
          Book Now <IconArrow size={13}/>
        </Link>
        <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer"
          className="btn btn-wa" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <IconSofa size={36}/>,
    tag: 'Most Popular',
    tagColor: 'var(--accent)',
    title: 'Sofa Deep Cleaning',
    desc: 'Dubai\'s fine micro-dust particles act like sandpaper deep inside fabric fibers. Our industrial extraction removes embedded desert dust, allergens & tough stains — restoring your sofa and extending its lifespan.',
    features: ['Industrial power vacuuming', 'Allergen & bacteria extraction', 'Deep stain treatment', 'Fabric protection coat'],
    price: 'AED 50 / seat',
    href: '/services#deep-cleaning',
    bgImage: '/home/sofa-deep-cleaning.webp',
  },
  {
    icon: <IconDrop size={36}/>,
    tag: 'Fast-Dry',
    tagColor: 'var(--accent)',
    title: 'Sofa Shampooing',
    desc: 'pH-balanced foam shampoo breaks down oils, grease and grime from skin contact deep within the fabric. Sofa ready within 2–4 hours — ideal for regular deep cleaning in UAE homes.',
    features: ['pH-balanced shampoo formula', 'Oil & grease breakdown', 'Sanitization & deodorizing', 'Fast-dry technology'],
    price: 'AED 40 / seat',
    href: '/services#shampooing',
    bgImage: '/home/sofa-shampoo.webp',
  },
  {
    icon: <IconSpray size={36}/>,
    tag: 'Specialist',
    tagColor: '#FF5A3C',
    title: 'Stain Removal',
    desc: 'pH-balanced cleaners tailored to your specific fabric type lift coffee, food, ink and pet stains without causing discoloration or dye bleeding — for all upholstery types.',
    features: ['Coffee, tea & food stains', 'Ink & dye removal', 'Pet accident treatment', 'Old set-in stains'],
    price: 'AED 100',
    href: '/contact',
    bgImage: '/home/stain.webp',
  },
  {
    icon: <IconDiamond size={36}/>,
    tag: 'Premium',
    tagColor: '#8B5CF6',
    title: 'Leather Sofa Cleaning',
    desc: 'Specialist pH-safe leather care prevents cracking in Dubai\'s climate. We condition, restore suppleness and apply a protective coat — preserving your leather sofa for years.',
    features: ['pH-safe leather cleaner', 'Deep conditioning treatment', 'Crack & dryness prevention', 'Protective coat finish'],
    price: 'AED 50 / seat',
    href: '/contact',
    bgImage: '/home/leather.webp',
  },
  {
    icon: <IconWind size={36}/>,
    tag: 'Freshness',
    tagColor: '#0891B2',
    title: 'Odor Treatment',
    desc: 'Dubai\'s humid climate lets odors linger deep within fabric fibers. Our eco-friendly deodorizers neutralize pet, smoke and food odors at the source — not just masked with perfume.',
    features: ['Pet odor elimination', 'Smoke & food odors', 'Anti-bacterial treatment', 'Humidity-proof freshness'],
    price: 'AED 59',
    href: '/contact',
    bgImage: '/home/Odor-Treatment.webp',
  },
  {
    icon: <IconPaw size={36}/>,
    tag: 'Pet-Friendly',
    tagColor: '#D97706',
    title: 'Pet Hair Removal',
    desc: 'Specialized vacuum and roller treatment removes embedded pet hair from every cushion, seam and corner.',
    features: ['Deep pet hair extraction', 'Anti-allergen treatment', 'Safe for all fabrics', 'Deodorizing included'],
    price: 'AED 39',
    href: '/contact',
    bgImage: '/home/pet.webp',
  },
  {
    icon: <IconSparkle size={36}/>,
    tag: 'Hygienic',
    tagColor: '#059669',
    title: 'Sofa Sanitization',
    desc: 'High-temperature steam extraction kills 99.9% of bacteria, dust mites and germs — critical in Dubai\'s humid climate. WHO-approved solutions, completely safe for children and pets.',
    features: ['99.9% bacteria kill rate', 'High-temp steam extraction', 'Child & pet safe', 'WHO-approved solutions'],
    price: 'AED 49',
    href: '/contact',
    bgImage: '/home/Sofa-Sanitization.webp',
  },
  {
    icon: <IconFabric size={36}/>,
    tag: 'Delicate Care',
    tagColor: '#EC4899',
    title: 'Velvet & Microfiber',
    desc: 'Low-moisture techniques preserve velvet\'s soft texture, while microfiber gets a thorough deep clean. Specialist tools reach every curve of complex, sculptural sofa designs without shrinkage.',
    features: ['Low-moisture velvet care', 'Microfiber deep clean', 'Pile restoration', 'No shrinkage or fading'],
    price: 'AED 99',
    href: '/contact',
    bgImage: '/home/Velvet-Microfiber.webp',
  },
  {
    icon: <IconShield size={36}/>,
    tag: 'Protection',
    tagColor: '#3B82F6',
    title: 'Fabric Protection',
    desc: 'Invisible shield coating repels future stains, spills and dirt — keeps your sofa cleaner for much longer.',
    features: ['Invisible stain shield', 'Spill repellent coat', 'UV fade protection', 'Lasts 12+ months'],
    price: 'AED 69',
    href: '/contact',
    bgImage: '/home/Fabric-Protection.webp',
  },
  {
    icon: <IconSofa size={36}/>,
    tag: 'IKEA Special',
    tagColor: '#0058A3',
    title: 'IKEA L-Shape Sofa Cleaning',
    desc: 'Complete deep cleaning for IKEA L-shape sofas — the most popular sofa style in UAE homes. Full coverage of all sections, cushions, corners and seams with our specialist equipment.',
    features: ['Full L-shape coverage', 'All IKEA fabric types', 'Corner & seam cleaning', 'Same-day service'],
    price: 'AED 150',
    href: '/contact',
    bgImage: '/L-shape/L-shape.webp',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-tag">Our Services</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 16 }}>
            Professional <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Cleaning</span> Services in Dubai
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 580, margin: '0 auto', fontSize: 17, lineHeight: 1.65 }}>
            In Dubai, &ldquo;surface cleaning&rdquo; isn&apos;t enough. Fine desert dust settles deep into fabric fibers, while humidity locks in allergens and bacteria. Our certified technicians use industrial-grade extraction and pH-balanced cleaners to restore every sofa type across Dubai, Sharjah, Ajman &amp; Abu Dhabi.
          </p>
        </div>

        {/* 2-column grid — all cards large size */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`card reveal reveal-delay-${(i % 3) + 1} card-slide-${i % 2 === 0 ? 'left' : 'right'}${('bgImage' in s && s.bgImage) ? ' card-dark-bg' : ''}`}
              style={{ position: 'relative', padding: '40px 36px', borderLeft: `3px solid ${s.tagColor}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {('bgImage' in s && s.bgImage) && (
                <>
                  <Image src={s.bgImage} alt={`${s.title} in Dubai UAE — Al Haya Sofa Care professional at-home service`} fill loading={i < 2 ? 'eager' : 'lazy'} sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', zIndex: 0 }} />
                  <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(11,11,11,0.55), rgba(11,11,11,0.65))", zIndex: 1 }} />
                </>
              )}
              {/* Badge */}
              <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
                <span style={{
                  padding: '4px 12px', borderRadius: 999,
                  fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  background: `${s.tagColor}20`,
                  color: s.tagColor,
                  border: `1px solid ${s.tagColor}50`,
                }}>{s.tag}</span>
              </div>

              {/* Icon */}
              <div style={{ color: s.tagColor, marginBottom: 24, position: 'relative', zIndex: 2 }}>{s.icon}</div>

              {/* Title */}
              <h3 style={{ fontSize: 24, marginBottom: 14, position: 'relative', zIndex: 2 }}>{s.title}</h3>

              {/* Desc */}
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 24, position: 'relative', zIndex: 2 }}>{s.desc}</p>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, position: 'relative', zIndex: 2 }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 15 }}>
                    <span style={{ color: s.tagColor, fontWeight: 700, flexShrink: 0, fontSize: 16 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', marginBottom: 5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Starting from</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: s.tagColor }}>{s.price}</div>
                </div>
                <Link href={s.href} className="btn btn-ghost" style={{ padding: '12px 22px', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Book Now <IconArrow size={13}/>
                </Link>
              </div>
            </div>
          ))}

          {/* 10th slot — open animated content, no card */}
          <AnimatedServiceContent />
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ color: 'var(--fg-muted)', marginBottom: 20, fontSize: 15 }}>
            Not sure which service you need? WhatsApp us — we&apos;ll recommend the best option for your sofa.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary" style={{ fontSize: 14 }}>
              View Full Details <IconArrow size={14}/>
            </Link>
            <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer"
              className="btn btn-wa" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
