'use client';
import Link from 'next/link';

const cities = [
  {
    city: 'Dubai',
    href: '/sofa-cleaning-dubai',
    accent: 'var(--accent)',
    keyword: 'Sofa Cleaning Dubai',
    desc: 'Professional sofa deep cleaning in Dubai — covering Marina, JVC, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Deira & all areas. Same-day sofa cleaning Dubai available.',
    services: ['Sofa Deep Cleaning Dubai', 'Sofa Shampooing Dubai', 'Leather Sofa Cleaning Dubai', 'Stain Removal Dubai'],
  },
  {
    city: 'Sharjah',
    href: '/sofa-cleaning-sharjah',
    accent: '#0891B2',
    keyword: 'Sofa Cleaning Sharjah',
    desc: 'Expert sofa cleaning in Sharjah covering Al Nahda, Al Majaz, Muwaileh, University City & all Sharjah areas. Book professional sofa cleaning Sharjah same day.',
    services: ['Sofa Deep Cleaning Sharjah', 'Sofa Shampooing Sharjah', 'Leather Sofa Cleaning Sharjah', 'Upholstery Cleaning Sharjah'],
  },
  {
    city: 'Ajman',
    href: '/sofa-cleaning-ajman',
    accent: '#1D6A5B',
    keyword: 'Sofa Cleaning Ajman',
    desc: 'Affordable sofa cleaning in Ajman — Al Nuaimiya, Al Rashidiya, Al Jurf, Emirates City & all Ajman areas. Reliable sofa cleaning Ajman at-home service.',
    services: ['Sofa Deep Cleaning Ajman', 'Sofa Shampooing Ajman', 'Pet Hair Removal Ajman', 'Sofa Sanitization Ajman'],
  },
  {
    city: 'Abu Dhabi',
    href: '/sofa-cleaning-abu-dhabi',
    accent: '#8B5CF6',
    keyword: 'Sofa Cleaning Abu Dhabi',
    desc: 'Certified sofa cleaning in Abu Dhabi — Khalifa City, Al Reem Island, Yas Island, Saadiyat Island & all Abu Dhabi areas. Best sofa cleaning Abu Dhabi doorstep service.',
    services: ['Sofa Deep Cleaning Abu Dhabi', 'Sofa Steam Cleaning Abu Dhabi', 'Leather Sofa Cleaning Abu Dhabi', 'Sofa Sanitization Abu Dhabi'],
  },
];

export default function CitiesSection() {
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
      <div className="container-x">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-tag">UAE Coverage</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            Professional Sofa Cleaning in{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Dubai, Sharjah, Ajman &amp; Abu Dhabi
            </span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.65 }}>
            Al Haya Sofa Care UAE brings certified at-home sofa cleaning to every corner of the UAE — same-day service, eco-friendly products, and guaranteed results.
          </p>
        </div>

        <div className="cities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {cities.map((c, i) => (
            <Link
              href={c.href}
              key={c.city}
              aria-label={`View ${c.city} sofa cleaning services`}
              className={`reveal reveal-delay-${i + 1} loc-city-card`}
              style={{
                background: '#FFFFFF',
                border: `1px solid ${c.accent}30`,
                borderTop: `3px solid ${c.accent}`,
                borderRadius: 16,
                padding: '28px 22px',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <h3 style={{
                fontSize: 20, fontWeight: 900, fontFamily: 'var(--font-display)',
                color: c.accent, letterSpacing: '-0.02em', marginBottom: 12,
              }}>{c.keyword}</h3>

              <p style={{ color: 'rgba(12,17,14,0.56)', fontSize: 13, lineHeight: 1.65, marginBottom: 18, flex: 1 }}>
                {c.desc}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.services.map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'rgba(12,17,14,0.45)', fontSize: 12 }}>
                    <span style={{ color: c.accent, fontWeight: 700, flexShrink: 0 }}>›</span> {s}
                  </li>
                ))}
              </ul>

              <span style={{
                display: 'block', textAlign: 'center',
                padding: '10px 16px', borderRadius: 8,
                border: `1px solid ${c.accent}50`,
                background: `${c.accent}15`,
                color: c.accent,
                fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
              }}>
                View {c.city} Services
              </span>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .loc-city-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .loc-city-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(12, 17, 14, 0.10);
        }
        @media (max-width: 900px) {
          .cities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .cities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
