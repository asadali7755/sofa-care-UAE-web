'use client';
import { useRequestCall } from '@/app/components/RequestCallModal';
import { trackWhatsAppClick } from '@/app/lib/gtag';
import { IconWhatsApp } from './Icons';

export default function Fab() {
  const { open } = useRequestCall();
  return (
    <div className="fab-stack">
      <a
        href="https://wa.me/971547199189?text=Hi%2C%20I%20would%20like%20to%20book%20a%20sofa%20cleaning%20service%20in%20Dubai."
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-wa"
        aria-label="Chat with us on WhatsApp"
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <IconWhatsApp size={24} />
      </a>
      <button
        onClick={open}
        className="fab-btn fab-call"
        aria-label="Request a call back"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </button>
    </div>
  );
}
