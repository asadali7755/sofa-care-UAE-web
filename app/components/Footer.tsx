import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-elev)', padding: '60px 0 32px' }}>
      <div className="container-x">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/OIG2.jpg" alt="Logo" width="38" height="38" style={{ borderRadius: 10, objectFit: 'cover', display: 'block' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--fg)' }}>Al Haya Sofa Care</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
              </div>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Dubai&apos;s trusted sofa cleaning experts. Professional, eco-friendly, at-home service.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['Dubai', 'Sharjah', 'Ajman'].map((city) => (
                <span key={city} className="badge badge-accent" style={{ fontSize: 10 }}>{city}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'var(--fg-muted)', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Sofa Deep Cleaning', 'Sofa Shampooing', 'Stain Removal', 'Odor Treatment', 'Leather Sofa Cleaning'].map((s) => (
                <Link key={s} href="/services" style={{ color: 'var(--fg-muted)', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                >{s}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="tel:+971547199189" style={{ color: 'var(--fg-muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                +971 54 719 9189
              </a>
              <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                WhatsApp Us
              </a>
              <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>
                Dubai, UAE
              </div>
              <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>
                Mon–Sun: 7:00 AM – 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--fg-dim)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            © 2025 Al Haya Sofa Care UAE. All rights reserved.
          </p>
          <p style={{ color: 'var(--fg-dim)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            sofashampooingdubai.com
          </p>
        </div>
      </div>
    </footer>
  );
}
