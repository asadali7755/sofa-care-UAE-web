import Link from 'next/link';
import { IconArrow, IconWhatsApp } from './Icons';

export default function CTABanner() {
  return (
    <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">
        <div className="reveal" style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 24, padding: '64px 48px',
          background: 'linear-gradient(135deg, var(--bg-elev) 0%, color-mix(in oklab, var(--accent) 10%, var(--bg-elev)) 100%)',
          border: '1px solid color-mix(in oklab, var(--accent) 25%, transparent)',
          textAlign: 'center',
        }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)', pointerEvents: 'none' }}/>

          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Book Today</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16, position: 'relative' }}>
            Ready for a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Cleaner</span> Sofa?
          </h2>
          <p style={{ color: 'var(--fg-muted)', fontSize: 17, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.65, position: 'relative' }}>
            Book your appointment today — we come to you with all the equipment. Same-day service available across Dubai, Sharjah &amp; Ajman.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: 15, padding: '16px 32px' }}>
              Book Appointment <IconArrow size={14}/>
            </Link>
            <a
              href="https://wa.me/971547199189?text=Hi%2C%20I%20want%20to%20book%20sofa%20cleaning%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ fontSize: 15, padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <IconWhatsApp size={18}/> WhatsApp Now
            </a>
            <a href="tel:+971547199189" className="btn btn-ghost" style={{ fontSize: 15, padding: '16px 32px' }}>
              +971 54 719 9189
            </a>
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['No hidden fees', 'Eco-friendly products', 'Satisfaction guaranteed', 'Quick-dry formula'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg-muted)', fontSize: 14 }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
