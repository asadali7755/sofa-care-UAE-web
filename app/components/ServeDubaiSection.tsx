'use client';

export default function ServeDubaiSection() {
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-bg" />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)', filter: 'blur(80px)', bottom: 0, left: 0 }}/>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, #8B5CF6 8%, transparent), transparent 70%)', filter: 'blur(80px)', top: 0, right: 0 }}/>
      </div>

      <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center', marginBottom: 56 }}>
          <div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Serve Dubai</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', marginBottom: 16, lineHeight: 1.1 }}>
              Need Other <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Cleaning</span> Services?
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 17, maxWidth: 520, lineHeight: 1.65 }}>
              Al Haya is part of <strong style={{ color: 'var(--fg)' }}>Serve Dubai</strong> — your all-in-one cleaning platform covering every cleaning need across UAE. From carpets to kitchens, mattresses to marble.
            </p>
          </div>
          {/* Serve Dubai badge */}
          <div className="serve-badge" style={{
            padding: '24px 32px', borderRadius: 20,
            background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
            textAlign: 'center', minWidth: 200,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Powered by</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.02em' }}>Serve Dubai</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', marginTop: 6, letterSpacing: '0.06em' }}>servedubai.com</div>
            <div style={{ marginTop: 12, display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="badge badge-accent" style={{ fontSize: 9 }}>11+ Services</span>
              <span className="badge badge-accent" style={{ fontSize: 9 }}>All UAE</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
          padding: '36px 40px', borderRadius: 20,
          background: 'linear-gradient(135deg, color-mix(in oklab, var(--accent) 12%, var(--bg-elev)), var(--bg-elev))',
          border: '1px solid var(--line-strong)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'color-mix(in oklab, var(--accent) 8%, transparent)', filter: 'blur(30px)', pointerEvents: 'none' }}/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>One platform — all cleaning services</div>
            <h3 style={{ fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 900, color: 'var(--fg)', margin: '0 0 8px' }}>
              Explore All Services on Serve Dubai
            </h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
              Sofa, carpet, mattress, car, villa, office &amp; more — book any service in minutes.
            </p>
          </div>
          <a
            href="https://www.servedubai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: 15, position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}
          >
            Visit Serve Dubai →
          </a>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .serve-badge { display: none; }
        }
      `}</style>
    </section>
  );
}
