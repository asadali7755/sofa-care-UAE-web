'use client';
import Link from 'next/link';
import { useRequestCall } from './RequestCallModal';
import { IconWhatsApp } from './Icons';

export default function BlogCTAButtons() {
  const { open } = useRequestCall();
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="https://wa.me/971547199189?text=Hi%2C%20I%20need%20sofa%20cleaning." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <IconWhatsApp size={16} /> WhatsApp
      </a>
      <button onClick={open} className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Request a Call
      </button>
      <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
    </div>
  );
}
