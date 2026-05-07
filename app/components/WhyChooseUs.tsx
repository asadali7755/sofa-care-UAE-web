import { IconLeaf, IconClock, IconHome, IconShield } from './Icons';

const features = [
  {
    icon: <IconLeaf size={26}/>,
    title: 'Eco-Friendly Products',
    desc: 'Non-toxic, biodegradable solutions — safe for kids, pets & sensitive skin.',
    accent: '#D9F15A',
  },
  {
    icon: <IconClock size={26}/>,
    title: 'Same Day Service',
    desc: 'Book today, cleaned today. Same-day appointments across all UAE.',
    accent: '#F59E0B',
  },
  {
    icon: <IconHome size={26}/>,
    title: 'At-Home Convenience',
    desc: 'We come to you with all equipment — no moving furniture, no travel.',
    accent: '#FF5A3C',
  },
  {
    icon: <IconShield size={26}/>,
    title: 'Certified Technicians',
    desc: 'Trained professionals handling every sofa type with care and expertise.',
    accent: '#3B82F6',
  },
];

const checklist = [
  '500+ satisfied clients in Dubai & UAE',
  'All sofa types: fabric, leather, microfiber',
  'Transparent pricing — no hidden fees',
  '24/7 WhatsApp booking support',
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">

        {/* ── Desktop layout: 2-col ── */}
        <div className="why-desktop reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="section-tag">Why Al Haya</div>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
              Why Clients Choose <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              For over 5 years, Al Haya Sofa Care UAE has been Dubai&apos;s go-to name for professional sofa cleaning. We combine advanced equipment with genuine care for your home.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checklist.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 15 }}>
                  <span style={{ color: 'var(--accent)', fontSize: 18, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 2x2 feature cards — dark background */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`reveal reveal-delay-${i + 1}`} style={{
                background: '#141210',
                border: `1px solid ${f.accent}30`,
                borderTop: `3px solid ${f.accent}`,
                borderRadius: 14,
                padding: 24,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <div style={{ color: f.accent, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: f.accent }}>{f.title}</h3>
                <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile layout: centered heading + horizontal rows ── */}
        <div className="why-mobile">
          {/* Centered header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Why Al Haya</div>
            <h2 style={{ fontSize: 'clamp(26px, 7vw, 36px)', marginBottom: 14, lineHeight: 1.15 }}>
              Why Clients Choose{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.65, maxWidth: 360, margin: '0 auto' }}>
              Dubai&apos;s trusted sofa cleaning experts — 500+ clients, same-day service, guaranteed results.
            </p>
          </div>

          {/* Feature rows — horizontal cards with dark background */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`reveal reveal-delay-${i + 1}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 16,
                background: '#141210',
                border: `1px solid ${f.accent}30`,
                borderLeft: `3px solid ${f.accent}`,
                borderRadius: 14,
              }}>
                {/* Icon box */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: f.accent,
                  background: `${f.accent}18`,
                  border: `1px solid ${f.accent}35`,
                }}>
                  {f.icon}
                </div>
                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: f.accent, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(246,241,232,0.65)', lineHeight: 1.5 }}>{f.desc}</div>
                </div>
                {/* Check */}
                <div style={{ color: f.accent, fontSize: 18, fontWeight: 700, flexShrink: 0 }}>✓</div>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="reveal" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { n: '500+', l: 'Happy Clients' },
              { n: '4.9 ★', l: 'Average Rating' },
              { n: 'Same Day', l: 'Service' },
              { n: '5+ Yrs', l: 'Experience' },
            ].map((s) => (
              <div key={s.l} style={{ background: '#141210', border: '1px solid rgba(246,241,232,0.10)', borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(246,241,232,0.55)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
