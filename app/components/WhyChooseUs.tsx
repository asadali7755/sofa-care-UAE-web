import { IconLeaf, IconClock, IconHome, IconShield } from './Icons';

const features = [
  {
    icon: <IconLeaf size={28}/>,
    title: 'Eco-Friendly Products',
    desc: 'We use only non-toxic, biodegradable cleaning solutions that are safe for kids, pets, and sensitive skin — no harsh chemicals.',
    accent: '#D9F15A',
  },
  {
    icon: <IconClock size={28}/>,
    title: 'Same Day Service',
    desc: 'Book today, cleaned today. We offer same-day appointments across Dubai, Sharjah & Ajman — fitting your schedule effortlessly.',
    accent: 'var(--accent)',
  },
  {
    icon: <IconHome size={28}/>,
    title: 'At-Home Convenience',
    desc: 'No need to move furniture or drop off your sofa. Our team brings all equipment to your home — complete service on-site.',
    accent: '#FF5A3C',
  },
  {
    icon: <IconShield size={28}/>,
    title: 'Certified Technicians',
    desc: 'Our experienced team is trained in advanced upholstery cleaning techniques. We handle fabric, leather & all sofa types with care.',
    accent: 'var(--accent)',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="section-tag">Why Al Haya</div>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
              Why Clients Choose <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Al Haya</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              For over 5 years, Al Haya Sofa Care UAE has been Dubai&apos;s go-to name for professional sofa cleaning. We combine advanced equipment with genuine care for your home.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['500+ satisfied clients in Dubai & UAE', 'All sofa types: fabric, leather, microfiber', 'Transparent pricing — no hidden fees', '24/7 WhatsApp booking support'].map((item) => (
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
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
