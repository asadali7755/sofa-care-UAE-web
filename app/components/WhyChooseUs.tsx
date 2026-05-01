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
    accent: 'var(--accent)',
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
    accent: 'var(--accent)',
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: 24 }}>
                <div style={{ color: f.accent, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile layout: centered heading + horizontal rows ── */}
        <div className="why-mobile">
          {/* Centered header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}>Why Al Haya</div>
            <h2 style={{ fontSize: 'clamp(26px, 7vw, 36px)', marginBottom: 14, lineHeight: 1.15 }}>
              Why Clients Choose{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.65, maxWidth: 360, margin: '0 auto' }}>
              Dubai&apos;s trusted sofa cleaning experts — 500+ clients, same-day service, guaranteed results.
            </p>
          </div>

          {/* Feature rows — horizontal on mobile */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`why-row-card reveal reveal-delay-${i + 1}`}>
                <div className="why-row-icon" style={{ color: f.accent, background: `color-mix(in oklab, ${f.accent} 12%, transparent)`, border: `1px solid color-mix(in oklab, ${f.accent} 25%, transparent)` }}>
                  {f.icon}
                </div>
                <div className="why-row-text">
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{f.desc}</div>
                </div>
                <div className="why-row-check" style={{ color: f.accent }}>✓</div>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="reveal why-stats-strip" style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { n: '500+', l: 'Happy Clients' },
              { n: '4.9 ★', l: 'Average Rating' },
              { n: 'Same Day', l: 'Service' },
              { n: '5+ Yrs', l: 'Experience' },
            ].map((s) => (
              <div key={s.l} style={{ background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--accent)' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        /* Desktop: show desktop layout, hide mobile */
        .why-desktop { display: grid; }
        .why-mobile  { display: none; }

        /* Mobile: hide desktop layout, show mobile */
        @media (max-width: 768px) {
          .why-desktop { display: none !important; }
          .why-mobile  { display: block !important; }
        }

        /* Mobile row card styles */
        .why-row-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--bg-elev);
          border: 1px solid var(--line);
          border-radius: 14px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .why-row-card:active { transform: scale(0.99); }

        .why-row-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .why-row-text { flex: 1; min-width: 0; }

        .why-row-check {
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
