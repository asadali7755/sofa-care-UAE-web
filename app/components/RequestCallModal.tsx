'use client';
import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { sendEnquiry } from '@/app/lib/sendEmail';
import { trackEnquirySubmit, trackPhoneCall, trackWhatsAppClick } from '@/app/lib/gtag';

const WA_LINK = 'https://wa.me/971547199189';
const PHONE_TEL = '+971547199189';
const PHONE_DISPLAY = '+971 54 719 9189';

interface ModalCtxType {
  open: () => void;
  close: () => void;
  showToast: (msg?: string) => void;
}
const ModalCtx = createContext<ModalCtxType>({ open: () => {}, close: () => {}, showToast: () => {} });
export function useRequestCall() { return useContext(ModalCtx); }
export function useToast() { return useContext(ModalCtx).showToast; }

function SuccessToast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="success-toast">
      <div className="st-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div className="st-body">
        <span className="st-title">Request sent</span>
        <span className="st-msg">{message}</span>
      </div>
      <button className="st-close" onClick={onDone} aria-label="Dismiss">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  );
}

export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg = "We'll be in touch shortly.") => {
    setToast(msg);
    setTimeout(() => setToast(''), 5000);
  };

  const value = { open: () => setIsOpen(true), close: () => setIsOpen(false), showToast };

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [isOpen]);

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {isOpen && (
        <RequestCallModal
          onClose={value.close}
          onSent={(msg) => { value.close(); showToast(msg); }}
        />
      )}
      {toast && <SuccessToast message={toast} onDone={() => setToast('')} />}
    </ModalCtx.Provider>
  );
}

function RequestCallModal({ onClose, onSent }: { onClose: () => void; onSent: (msg: string) => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setErr('Phone number is required'); return; }
    setErr('');
    setLoading(true);
    try {
      await sendEnquiry({ type: 'Request a Call', phone, name: name || '—', work: work || 'Sofa Cleaning' });
      trackEnquirySubmit('request_call_modal', work || 'Sofa Cleaning');
    } catch {}
    setLoading(false);
    onSent('We got your number! Expect a call back shortly.');
  };

  return (
    <div className="rcm-overlay" onClick={onClose}>
      <div className="rcm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="rcm-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="rcm-label">Request a Call</span>
        <h3>Get a Free Quote.<br/>We&apos;ll call you back.</h3>
        <p>Fill in your details. Free quote on the call.</p>
        <form onSubmit={submit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            inputMode="tel"
            placeholder="+971 5X XXX XXXX *"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErr(''); }}
            style={err ? { borderColor: '#e53e3e' } : {}}
          />
          {err && <span style={{ color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block' }}>{err}</span>}
          <select value={work} onChange={(e) => setWork(e.target.value)} style={{ width: '100%', padding: '12px 14px', border: '1.5px solid rgba(12,17,14,0.12)', borderRadius: 10, fontSize: 15, background: '#F3F7F4', color: '#0C110E', fontFamily: 'var(--font-sans)' }}>
            <option value="">Select Service</option>
            <option value="Sofa Cleaning">Sofa Cleaning</option>
            <option value="Sofa Shampooing">Sofa Shampooing</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
            <option value="Mattress Cleaning">Mattress Cleaning</option>
            <option value="Chair Cleaning">Chair Cleaning</option>
            <option value="Curtain Cleaning">Curtain Cleaning</option>
          </select>
          <button type="submit" className="rcm-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Call me back'}
          </button>
        </form>
        <div className="rcm-or">Or reach us instantly</div>
        <div className="rcm-alt">
          <a href={`tel:${PHONE_TEL}`} onClick={() => trackPhoneCall('request_call_modal')}>Call {PHONE_DISPLAY}</a>
          <a href={`${WA_LINK}?text=${encodeURIComponent("Hi, I need sofa cleaning services.")}`} target="_blank" rel="noopener" onClick={() => trackWhatsAppClick('request_call_modal')}>WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
