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
      padding: '22px 0',
      overflow: 'hidden',
    }}>
      <div className="marquee">
        <div
          className="marquee-inner"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 42px)',
            fontWeight: 900,
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
        >
          {Array(3).fill(null).map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
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
                    margin: item.dim ? '0 20px' : undefined,
                    paddingRight: !item.dim ? 0 : undefined,
                  }}
                >
                  {item.text}
                  {!item.dim && ' '}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
