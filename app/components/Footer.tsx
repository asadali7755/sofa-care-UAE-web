'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-elev)', padding: '48px 0 24px' }}>
      <div className="container-x">

        {/* Desktop: full 4-col grid */}
        <div className="footer-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src="/OIG2.webp" alt="Logo" width="36" height="36" style={{ borderRadius: 8, objectFit: 'cover', display: 'block' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--fg)' }}>Al Haya Sofa Care</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
              </div>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Dubai&apos;s trusted sofa cleaning experts. Professional, eco-friendly, at-home service.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {['Sofa Deep Cleaning', 'Sofa Shampooing', 'Stain Removal', 'Odor Treatment', 'Leather Sofa Cleaning'].map((s) => (
                <Link key={s} href="/services" style={{ color: 'var(--fg-muted)', fontSize: 13 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                >{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Pages</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/gallery', label: 'Gallery' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'var(--fg-muted)', fontSize: 13 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+971547199189" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>📞 +971 54 719 9189</a>
              <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>💬 WhatsApp Us</a>
              <div style={{ color: 'var(--fg-muted)', fontSize: 13 }}>📍 Dubai, UAE</div>
              <div style={{ color: 'var(--fg-muted)', fontSize: 13 }}>🕐 7 AM – 10 PM Daily</div>
            </div>
          </div>
        </div>

        {/* Mobile: compact footer */}
        <div className="footer-mobile" style={{ display: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <img src="/OIG2.webp" alt="Logo" width="32" height="32" style={{ borderRadius: 8, objectFit: 'cover', display: 'block' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: 'var(--fg)' }}>Al Haya Sofa Care</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Deep Cleaning', 'Shampooing', 'Stain Removal', 'Leather Care'].map((s) => (
                  <Link key={s} href="/services" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="tel:+971547199189" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>📞 Call Us</a>
                <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>💬 WhatsApp</a>
                <Link href="/contact" style={{ color: 'var(--fg-muted)', fontSize: 13 }}>📋 Book Now</Link>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16, textAlign: 'center' }}>
            <p style={{ color: 'var(--fg-dim)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>sofashampooingdubai.com</p>
          </div>
        </div>

        {/* Desktop bottom bar */}
        <div className="footer-bottom-bar" style={{ borderTop: '1px solid var(--line)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--fg-dim)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
            Al Haya Sofa Care UAE — sofashampooingdubai.com
          </p>
          <p style={{ color: 'var(--fg-dim)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
            Dubai · Sharjah · Ajman
          </p>
        </div>
      </div>
    </footer>
  );
}
