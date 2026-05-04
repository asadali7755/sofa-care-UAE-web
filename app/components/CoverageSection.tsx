import Link from 'next/link';

const areas = [
  {
    city: 'Dubai',
    emoji: '🏙️',
    desc: 'All Dubai areas — Marina, JVC, Downtown, Deira, Bur Dubai, Jumeirah & more.',
    tags: ['Marina', 'JVC', 'Downtown', 'Jumeirah', 'Deira'],
    accent: 'var(--accent)',
    gradient: 'linear-gradient(135deg, #003d4a 0%, #0B0B0B 100%)',
  },
  {
    city: 'Sharjah',
    emoji: '🌆',
    desc: 'Covering all Sharjah neighborhoods — Al Nahda, Al Majaz, Al Qasimia & surrounding areas.',
    tags: ['Al Nahda', 'Al Majaz', 'Al Qasimia', 'Muwaileh'],
    accent: '#D9F15A',
    gradient: 'linear-gradient(135deg, #2a3000 0%, #0B0B0B 100%)',
  },
  {
    city: 'Ajman',
    emoji: '🏘️',
    desc: 'Full coverage in Ajman — Al Nuaimiya, Al Rashidiya, Al Jurf & all residential areas.',
    tags: ['Al Nuaimiya', 'Al Rashidiya', 'Al Jurf', 'Al Hamidiya'],
    accent: '#FF5A3C',
    gradient: 'linear-gradient(135deg, #3d0f00 0%, #0B0B0B 100%)',
  },
];

export default function CoverageSection() {
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
      <div className="container-x">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-tag">Service Areas</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            We Cover <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>All of UAE</span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 480, margin: '0 auto', fontSize: 17, lineHeight: 1.65 }}>
            Professional sofa cleaning delivered directly to your doorstep — wherever you are in the UAE.
          </p>
        </div>

        {/* City Cards */}
        <div className="coverage-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
          {areas.map((area, i) => (
            <div
              key={area.city}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                borderRadius: 20,
                background: area.gradient,
                border: `1px solid ${area.accent}30`,
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 50px ${area.accent}20`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Glow orb */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 160, height: 160, borderRadius: '50%',
                background: `radial-gradient(circle, ${area.accent}25, transparent 70%)`,
                pointerEvents: 'none',
              }}/>

              {/* Emoji + City */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `${area.accent}18`,
                  border: `1px solid ${area.accent}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                }}>
                  {area.emoji}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 26, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1,
                  }}>{area.city}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: area.accent, letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginTop: 4,
                  }}>UAE ◆ Available Now</div>
                </div>
              </div>

              {/* Desc */}
              <p style={{ color: 'rgba(246,241,232,0.65)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                {area.desc}
              </p>

              {/* Area tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {area.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                    padding: '3px 10px', borderRadius: 999,
                    background: `${area.accent}15`,
                    border: `1px solid ${area.accent}35`,
                    color: area.accent,
                    letterSpacing: '0.04em',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Bottom status */}
              <div style={{
                marginTop: 24, paddingTop: 16,
                borderTop: `1px solid ${area.accent}20`,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', display: 'inline-block', flexShrink: 0 }}/>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(246,241,232,0.5)' }}>Same-day service available</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 20,
          padding: '28px 36px', borderRadius: 16,
          background: 'var(--bg-raised)', border: '1px solid var(--line-strong)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 32 }}>📍</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--fg)', marginBottom: 4 }}>
                Not sure if we cover your area?
              </div>
              <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>
                WhatsApp us your location — we'll confirm in minutes.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/971547199189?text=Hi%2C%20do%20you%20cover%20my%20area%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 22px', borderRadius: 10,
                background: '#25D366', color: '#fff',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Check My Area
            </a>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>
              Book Now →
            </Link>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .coverage-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
