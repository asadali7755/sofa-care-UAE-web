export default function VideoSection() {
  const videoId = 'oobnDS9Bj20';

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
      <div className="container-x">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">Watch &amp; See</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            See the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Transformation</span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 480, margin: '0 auto', fontSize: 16, lineHeight: 1.65 }}>
            Watch how we restore your sofa to brand-new condition — from dirty &amp; stained to fresh &amp; clean in just a few hours.
          </p>
        </div>

        {/* YouTube Shorts embed — vertical 9:16 centered */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 380,
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid var(--line-strong)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            aspectRatio: '9/16',
            background: '#000',
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`}
              title="Al Haya Sofa Care — Sofa Cleaning Dubai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16, maxWidth: 700, margin: '0 auto',
        }}>
          {[
            { n: '2 hrs', l: 'Avg service time' },
            { n: '100%', l: 'Satisfaction' },
            { n: 'Eco', l: 'Safe products' },
            { n: 'Fast', l: 'Same-day dry' },
          ].map((s) => (
            <div key={s.l} style={{
              textAlign: 'center', padding: '16px 8px',
              background: 'var(--bg-raised)', borderRadius: 12, border: '1px solid var(--line)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 800, color: 'var(--accent)' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
