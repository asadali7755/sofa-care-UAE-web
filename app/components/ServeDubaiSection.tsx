'use client';

export default function ServeDubaiSection() {
  return (
    <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">
        <div className="reveal" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
          padding: '32px 28px', borderRadius: 20,
          background: 'linear-gradient(135deg, color-mix(in oklab, var(--accent) 12%, var(--bg-elev)), var(--bg-elev))',
          border: '1px solid var(--line-strong)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'color-mix(in oklab, var(--accent) 8%, transparent)', filter: 'blur(30px)', pointerEvents: 'none' }}/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              One Platform — All Cleaning Services
            </div>
            <h3 style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 900, color: 'var(--fg)', margin: '0 0 6px' }}>
              Explore All Services on Serve Dubai
            </h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
              Sofa, carpet, mattress, car, villa &amp; more — book any service in minutes.
            </p>
          </div>
          <a
            href="https://www.servedubai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: 14, position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}
          >
            Visit Serve Dubai →
          </a>
        </div>
      </div>
    </section>
  );
}
