'use client';
import { useEffect, useRef, useState } from 'react';
import { sendEnquiry } from '@/app/lib/sendEmail';
import { trackEnquiryFailed, trackEnquirySubmit, trackEvent } from '@/app/lib/gtag';
import { WHATSAPP_HREF, isDesktopPointer, linkLocation } from '@/app/components/ContactClickTracker';

const SERVICES = [
  'Sofa Cleaning',
  'Sofa Shampooing',
  'Leather Sofa Cleaning',
  'Carpet Cleaning',
  'Mattress Cleaning',
  'Chair Cleaning',
  'Curtain Cleaning',
];
const CITIES = ['Dubai', 'Sharjah', 'Ajman', 'Abu Dhabi', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah', 'Al Ain'];

interface Pending {
  href: string;
  location: string;
}

const titleCase = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// "/sofa-cleaning-dubai/al-qusais" -> "Al Qusais, Dubai"; "/sofa-cleaning-sharjah" -> "Sharjah"
function cityFromPath(path: string): string {
  const m = path.match(/^\/sofa-cleaning-([a-z-]+?)(?:\/([a-z-]+))?\/?$/);
  if (!m) return '';
  const emirate = titleCase(m[1]);
  return m[2] ? `${titleCase(m[2])}, ${emirate}` : emirate;
}

/**
 * Desktop only: many desktop visitors aren't logged in to WhatsApp, so a
 * WhatsApp click opens a choice — open WhatsApp anyway, or leave name/phone
 * and we contact them (emailed through /api/enquiry). On phones the link
 * opens WhatsApp directly, untouched. Links marked data-wa-direct skip this.
 */
export default function WhatsAppLeadGate() {
  const [pending, setPending] = useState<Pending | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!isDesktopPointer()) return;
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || link.closest('[data-wa-direct]')) return;
      const href = link.getAttribute('href') || '';
      if (!WHATSAPP_HREF.test(href)) return;
      e.preventDefault();
      const location = linkLocation(link);
      trackEvent('whatsapp_choice_open', { event_category: 'whatsapp', link_location: location });
      setPending({ href, location });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!pending) return null;
  return <WhatsAppChoiceModal pending={pending} onClose={() => setPending(null)} />;
}

function WhatsAppChoiceModal({ pending, onClose }: { pending: Pending; onClose: () => void }) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [city, setCity] = useState(() => cityFromPath(window.location.pathname));
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const openRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    openRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (!name.trim() || !service || !city.trim()) { setErr('Please fill in all fields.'); return; }
    if (digits.length < 7 || digits.length > 15) { setErr('Please enter a valid mobile number.'); return; }
    setStatus('sending');
    try {
      await sendEnquiry({
        type: 'WhatsApp Callback (desktop)',
        name: name.trim(),
        phone: phone.trim(),
        work: `Service: ${service} | City/Area: ${city.trim()} | Clicked: ${pending.location}`,
      });
      trackEnquirySubmit('whatsapp_desktop_form', service);
      setStatus('sent');
    } catch {
      trackEnquiryFailed('whatsapp_desktop_form');
      setStatus('failed');
    }
  };

  return (
    <div className="rcm-overlay" onClick={onClose}>
      <div className="rcm-modal" role="dialog" aria-modal="true" aria-labelledby="wa-choice-title" onClick={(e) => e.stopPropagation()}>
        <button className="rcm-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="rcm-label">WhatsApp Us</span>

        {status === 'sent' ? (
          <>
            <h3 id="wa-choice-title">Thank you, {name.trim().split(' ')[0]}!</h3>
            <p>We&apos;ll message you on WhatsApp at <strong>{phone.trim()}</strong> shortly with your free quote.</p>
            <button type="button" className="rcm-submit" onClick={onClose}>Done</button>
          </>
        ) : (
          <>
            <h3 id="wa-choice-title">Chat with us on WhatsApp</h3>
            <a
              ref={openRef}
              href={pending.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rcm-submit wa-lead-submit"
              data-wa-direct
              data-cta={pending.location}
              onClick={onClose}
            >
              Open WhatsApp
            </a>

            <div className="rcm-or">WhatsApp not on this computer?</div>
            <p style={{ marginTop: 0 }}>Leave your details and we&apos;ll WhatsApp you on your phone.</p>
            <form className="wa-lead-form" onSubmit={submit} noValidate>
              <input type="text" placeholder="Your Name *" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); setErr(''); }} />
              <input type="tel" inputMode="tel" placeholder="Mobile * (+971 5X XXX XXXX)" autoComplete="tel" value={phone} onChange={(e) => { setPhone(e.target.value); setErr(''); }} />
              <select value={service} onChange={(e) => { setService(e.target.value); setErr(''); }} aria-label="Service">
                <option value="">Select Service *</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <input type="text" placeholder="City / Area *" list="wa-choice-cities" autoComplete="address-level2" value={city} onChange={(e) => { setCity(e.target.value); setErr(''); }} />
              <datalist id="wa-choice-cities">
                {CITIES.map((c) => <option key={c} value={c} />)}
              </datalist>
              {err && <span className="wa-lead-err" role="alert">{err}</span>}
              {status === 'failed' && (
                <span className="wa-lead-err" role="alert">Couldn&apos;t send. Please call us on +971 54 719 9189.</span>
              )}
              <button type="submit" className="rcm-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : "Send — we'll WhatsApp you"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
