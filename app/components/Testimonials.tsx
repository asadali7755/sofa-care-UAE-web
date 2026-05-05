const testimonials = [
  {
    name: 'Ahmed K.',
    area: 'Dubai Marina',
    stars: 5,
    text: 'Absolutely amazing service! My 3-seater sofa looked brand new after the deep cleaning. The team was professional, on time, and very careful with the furniture. Highly recommend Al Haya!',
    service: 'Sofa Deep Cleaning',
  },
  {
    name: 'Sara M.',
    area: 'Sharjah',
    stars: 5,
    text: 'The shampooing service was fantastic. I had old stains that I thought were permanent, but Al Haya removed them completely. The sofa dried quickly and smells fresh. Will definitely book again!',
    service: 'Sofa Shampooing',
  },
  {
    name: 'John P.',
    area: 'JVC, Dubai',
    stars: 5,
    text: 'Same-day service was exactly what I needed before guests arrived. Called in the morning, team came in the afternoon, and the sofa was spotless by evening. Outstanding!',
    service: 'Same Day Service',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-elev)" }}>
      <div className="container-x">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-tag">Client Reviews</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            What Our <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Clients</span> Say
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 440, margin: '0 auto', fontSize: 16 }}>
            Trusted by hundreds of families and professionals across the UAE.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`card reveal reveal-delay-${i + 1}`} style={{ borderTop: '2px solid var(--accent)', paddingTop: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.05em' }}>{t.area}</div>
                </div>
                <span className="badge badge-accent" style={{ fontSize: 10 }}>{t.service}</span>
              </div>
              <div className="stars" style={{ marginBottom: 14 }}>{'★'.repeat(t.stars)}</div>
              <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="reveal" style={{ textAlign: 'center', padding: '28px', background: 'var(--bg-raised)', borderRadius: 16, border: '1px solid var(--line)', width: '100%', maxWidth: 500, margin: '48px auto 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 900, color: 'var(--fg)', lineHeight: 1 }}>4.9</div>
            <div className="stars" style={{ fontSize: 20, margin: '8px 0' }}>★★★★★</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)' }}>Based on 200+ verified reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
