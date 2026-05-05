'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconClose } from './Icons';

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

const navLinks = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/services', label: 'Services', icon: '🛋️' },
  { href: '/gallery', label: 'Gallery', icon: '🖼️' },
  { href: '/about', label: 'About', icon: '👥' },
  { href: '/contact', label: 'Contact', icon: '📞' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        background: scrolled ? 'rgba(11,11,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 68,
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <Image src="/OIG2.webp" alt="Al Haya Sofa Care logo" width={40} height={40} priority style={{ borderRadius: 8, objectFit: 'cover', display: 'block' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--fg)', lineHeight: 1.1 }}>Al Haya Sofa Care</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? ' active' : ''}`}>{l.label}</Link>
            ))}
          </div>

          {/* Desktop Right: Phone + CTA */}
          <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="tel:+971547199189" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-muted)', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
              +971 54 719 9189
            </a>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '9px 18px', fontSize: 13, whiteSpace: 'nowrap' }}>Book Now →</Link>
          </div>

          {/* Mobile Right: Hamburger only */}
          <div className="nav-mobile-controls" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none', border: 'none',
                color: 'var(--fg)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 4, borderRadius: 6,
              }}
            >
              {open ? <IconClose size={24}/> : <HamburgerIcon/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 198,
          background: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Mobile Slide-In Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 199,
          background: '#0F0F0F',
          borderLeft: '1px solid var(--line)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
        }}
        aria-hidden={!open}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', height: 68,
          borderBottom: '1px solid var(--line)',
          flexShrink: 0,
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }} onClick={() => setOpen(false)}>
            <Image src="/OIG2.webp" alt="Al Haya Sofa Care" width={36} height={36} style={{ borderRadius: 8, objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: 'var(--fg)', lineHeight: 1.1 }}>Al Haya Sofa Care</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'var(--bg-raised)', border: '1px solid var(--line-strong)',
              borderRadius: 8, color: 'var(--fg-muted)', cursor: 'pointer',
              padding: '6px', display: 'flex', alignItems: 'center',
            }}
          >
            <IconClose size={20}/>
          </button>
        </div>

        {/* Nav Links */}
        <div style={{ padding: '12px 0', flex: 1 }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '15px 24px',
                borderBottom: '1px solid var(--line)',
                fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16,
                color: pathname === l.href ? 'var(--accent)' : 'var(--fg)',
                textDecoration: 'none',
                background: pathname === l.href ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : 'transparent',
                borderLeft: pathname === l.href ? '3px solid var(--accent)' : '3px solid transparent',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 20 }}>{l.icon}</span>
              {l.label}
              {pathname === l.href && (
                <span style={{
                  marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 9,
                  color: 'var(--accent)', letterSpacing: '0.05em',
                  background: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                  padding: '2px 8px', borderRadius: 999,
                }}>Active</span>
              )}
            </Link>
          ))}
        </div>

        {/* Drawer Footer — CTAs */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid var(--line)',
          display: 'flex', flexDirection: 'column', gap: 12,
          flexShrink: 0,
        }}>
          <a
            href="tel:+971547199189"
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 16px', borderRadius: 10,
              background: 'var(--bg-raised)', border: '1px solid var(--line)',
              fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg)',
              textDecoration: 'none', fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 18 }}>📞</span>
            +971 54 719 9189
          </a>
          <a
            href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '13px 16px', borderRadius: 10,
              background: '#25D366', color: '#fff',
              fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
              textDecoration: 'none', border: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            style={{ justifyContent: 'center', fontSize: 15, padding: '13px 16px' }}
          >
            Book Now →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-right { display: none !important; }
          .nav-mobile-controls { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-controls { display: none !important; }
          .nav-desktop-links { display: flex !important; }
          .nav-desktop-right { display: flex !important; }
        }
      `}</style>
    </>
  );
}
