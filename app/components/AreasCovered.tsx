import Link from 'next/link';
import { emirates } from '../lib/areas';

// Accent per emirate (matches CitiesSection palette)
const ACCENTS: Record<string, string> = {
  dubai: 'var(--accent)',
  sharjah: '#0891B2',
  ajman: '#F59E0B',
  'abu-dhabi': '#8B5CF6',
};

export default function AreasCovered() {
  const groups = Object.values(emirates);
  const totalAreas = groups.reduce((n, g) => n + g.areas.length, 0);

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-tag">Areas We Cover</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            Sofa Cleaning in{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              {totalAreas}+ Areas
            </span>{' '}
            Across the UAE
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 620, margin: '0 auto', fontSize: 17, lineHeight: 1.65 }}>
            Al Haya Sofa Care brings at-home sofa deep cleaning to every neighbourhood in Dubai,
            Sharjah, Ajman and Abu Dhabi. Find your area below for fast, same-day booking.
          </p>
        </div>

        <div className="areas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {groups.map((g, i) => {
            const accent = ACCENTS[g.key] ?? 'var(--accent)';
            return (
              <div
                key={g.key}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'var(--bg-elev)',
                  border: '1px solid var(--line)',
                  borderTop: `3px solid ${accent}`,
                  borderRadius: 16,
                  padding: '26px 22px',
                }}
              >
                <Link
                  href={`/${g.citySlug}`}
                  style={{
                    display: 'inline-block',
                    fontSize: 19,
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: accent,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                    textDecoration: 'none',
                  }}
                >
                  {g.cityName}
                </Link>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {g.areas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/${g.citySlug}/${a.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '7px 0',
                          color: 'var(--fg-muted)',
                          fontSize: 14,
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--line)',
                        }}
                      >
                        <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>›</span>
                        Sofa Cleaning {a.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .areas-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .areas-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
