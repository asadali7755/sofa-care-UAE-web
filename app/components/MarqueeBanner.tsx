export default function MarqueeBanner() {
  const items = [
    { text: 'Sofa Cleaning', accent: false },
    { text: '◆', accent: true, dim: true },
    { text: 'Shampooing', accent: true },
    { text: '◆', accent: true, dim: true },
    { text: 'Stain Removal', accent: false },
    { text: '◆', accent: true, dim: true },
    { text: 'Dubai', serif: true },
    { text: '◆', accent: true, dim: true },
    { text: 'Sharjah', accent: true },
    { text: '◆', accent: true, dim: true },
    { text: 'Ajman', accent: false },
    { text: '◆', accent: true, dim: true },
    { text: 'Same Day', accent: true },
    { text: '◆', accent: true, dim: true },
    { text: 'At-Home Service', accent: false },
    { text: '◆', accent: true, dim: true },
    { text: 'Eco-Friendly', accent: true },
    { text: '◆', accent: true, dim: true },
  ];

  return (
    <div style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: 'var(--bg-elev)',
      padding: '18px 0',
      overflow: 'hidden',
      maxWidth: '100vw',
    }}>
      <div className="marquee" style={{ overflow: 'hidden', width: '100%' }}>
        <div
          className="marquee-inner"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(15px, 2.5vw, 36px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {Array(3).fill(null).map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {items.map((item, j) => (
                <span
                  key={j}
                  style={{
                    color: item.dim
                      ? 'var(--fg-dim)'
                      : item.accent
                      ? 'var(--accent)'
                      : 'var(--fg)',
                    fontFamily: item.serif ? 'var(--font-serif)' : undefined,
                    fontStyle: item.serif ? 'italic' : undefined,
                    fontWeight: item.serif ? 400 : 900,
                    margin: item.dim ? '0 14px' : '0 4px',
                    display: 'inline-block',
                  }}
                >
                  {item.text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
