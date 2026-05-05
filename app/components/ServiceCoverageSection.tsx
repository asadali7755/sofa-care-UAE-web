'use client';
export default function ServiceCoverageSection() {
  const cities = [
    {
      city: 'Dubai', count: '20+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      color: 'var(--accent)',
      areas: ['JVC', 'Downtown', 'Business Bay', 'Marina', 'JBR', 'Al Barsha', 'Jumeirah', 'Deira', 'Palm Jumeirah', 'Dubai Hills', 'Silicon Oasis', 'Mirdif'],
    },
    {
      city: 'Abu Dhabi', count: '8+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80',
      color: '#8B5CF6',
      areas: ['Al Khalidiyah', 'Al Reem Island', 'Khalifa City', 'Yas Island', 'Saadiyat Island', 'Al Mushrif', 'Al Muroor', 'Corniche'],
    },
    {
      city: 'Sharjah', count: '10+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80',
      color: '#0891B2',
      areas: ['Al Nahda', 'Al Qasimia', 'Al Majaz', 'Al Taawun', 'Muwaileh', 'Al Khan', 'University City', 'Al Mareija'],
    },
    {
      city: 'Ajman', count: '8+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&q=80',
      color: '#F59E0B',
      areas: ['Al Nuaimia', 'Al Rashidiya', 'Al Jurf', 'Al Hamidiya', 'Emirates City', 'Al Bustan', 'Al Mowaihat', 'Al Rumailah'],
    },
    {
      city: 'Ras Al Khaimah', count: '5+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
      color: '#059669',
      areas: ['RAK City', 'Al Hamra Village', 'Mina Al Arab', 'Al Nakheel', 'Al Rams', 'Khuzam'],
    },
    {
      city: 'Fujairah & UAQ', count: '4+', label: 'Areas Covered',
      img: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&q=80',
      color: '#EC4899',
      areas: ['Fujairah City', 'Al Faseel', 'UAQ City', 'Khor Fakkan', 'Dibba', 'Al Gurfa'],
    },
  ];

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-bg" />
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)', filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}/>
      </div>

      <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Service Coverage</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 16 }}>
            We Cover All <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>7 Emirates</span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', fontSize: 17, maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
            From Abu Dhabi to Fujairah — our professional sofa cleaning team reaches every corner of the UAE.
          </p>
        </div>

        {/* City cards */}
        <div className="reveal scs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
          {cities.map((c) => (
            <div key={c.city} className="scs-card" style={{
              position: 'relative', borderRadius: 20, overflow: 'hidden',
              height: 380, cursor: 'pointer',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              border: `1px solid ${c.color}40`,
            }}>
              {/* Background image */}
              <div className="scs-img" style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${c.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                transition: 'transform 0.6s cubic-bezier(0.2,0.7,0.2,1)',
              }} />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(11,11,11,0.97) 0%, rgba(11,11,11,0.55) 50%, rgba(11,11,11,0.2) 100%)',
              }} />

              {/* Accent line top */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

              {/* Default state */}
              <div className="scs-default" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px',
                transition: 'all 0.4s cubic-bezier(0.2,0.7,0.2,1)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>● Service Area</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 10 }}>{c.city}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: c.color }}>{c.count}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.label}</div>
                  </div>
                  <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.15)' }} />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Hover to explore →</div>
                </div>
              </div>

              {/* Hover state */}
              <div className="scs-hover" style={{
                position: 'absolute', inset: 0, padding: '24px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                opacity: 0, transform: 'translateY(16px)',
                transition: 'all 0.4s cubic-bezier(0.2,0.7,0.2,1)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 16 }}>{c.city}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {c.areas.map((area) => (
                    <span key={area} style={{
                      padding: '5px 12px', borderRadius: 999,
                      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                      background: `${c.color}25`, color: '#fff',
                      border: `1px solid ${c.color}60`,
                    }}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 20, padding: '28px 36px',
          background: 'var(--bg-elev)', borderRadius: 16, border: '1px solid var(--line-strong)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              Not sure if we cover your area?
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: 'var(--fg)' }}>
              WhatsApp us — we&apos;ll confirm in minutes.
            </div>
          </div>
          <a
            href="https://wa.me/971547199189"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}
          >
            WhatsApp Now →
          </a>
        </div>
      </div>

      <style jsx>{`
        .scs-card:hover .scs-img { transform: scale(1.08); }
        .scs-card:hover .scs-default { opacity: 0; transform: translateY(10px); }
        .scs-card:hover .scs-hover { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 768px) {
          .scs-grid { grid-template-columns: 1fr !important; }
          .scs-card { height: 320px !important; border-radius: 16px !important; }
          /* On mobile touch: always show areas, hide default hover-to-explore */
          .scs-default { display: none !important; }
          .scs-hover { opacity: 1 !important; transform: translateY(0) !important; }
        }
      `}</style>
    </section>
  );
}
