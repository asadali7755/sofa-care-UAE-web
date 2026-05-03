'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconMenu, IconClose } from './Icons';
import { useTheme } from './ThemeProvider';

function IconSun({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function IconMoon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const navBg = scrolled
    ? theme === 'dark'
      ? 'rgba(11,11,11,0.90)'
      : 'rgba(232,238,248,0.95)'
    : theme === 'light'
      ? 'rgba(232,238,248,0.85)'
      : 'transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        background: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}>
        <div className="container-x" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, color: theme === 'light' ? '#0C1829' : undefined }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/OIG2.jpg" alt="Al Haya Sofa Care logo" width={42} height={42} priority style={{ borderRadius: 10, objectFit: 'cover', display: 'block' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--fg)', lineHeight: 1.1 }}>Al Haya Sofa Care</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sofa Care UAE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hide-mobile">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? ' active' : ''}`}>{l.label}</Link>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hide-mobile">
            <a href="tel:+971547199189" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              +971 54 719 9189
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 14px', borderRadius: 999,
                background: 'var(--bg-raised)', border: '1px solid var(--line-strong)',
                color: 'var(--fg-muted)', cursor: 'pointer',
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--line-strong)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--fg-muted)';
              }}
            >
              {theme === 'dark' ? <><IconSun size={14}/> Light</> : <><IconMoon size={14}/> Dark</>}
            </button>

            <Link href="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}>Book Now →</Link>
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div style={{ display: 'none', alignItems: 'center', gap: 8 }} className="show-mobile-flex">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{ background: 'none', border: '1px solid var(--line-strong)', borderRadius: 8, color: 'var(--fg-muted)', cursor: 'pointer', padding: '6px 8px', display: 'flex', alignItems: 'center' }}
            >
              {theme === 'dark' ? <IconSun size={16}/> : <IconMoon size={16}/>}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', color: 'var(--fg)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {open ? <IconClose size={24}/> : <IconMenu size={24}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
          background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: '14px 0', borderBottom: '1px solid var(--line)',
                fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 16,
                color: pathname === l.href ? 'var(--accent)' : 'var(--fg-muted)',
              }}>{l.label}</Link>
            ))}
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>Book Now →</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile-flex { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile-flex { display: none !important; }
        }
      `}</style>
    </>
  );
}
