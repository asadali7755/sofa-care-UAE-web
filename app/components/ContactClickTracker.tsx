'use client';
import { useEffect } from 'react';
import { trackContactClick } from '@/app/lib/gtag';

const WHATSAPP_HREF = /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i;

// Where on the page the link sits. An explicit data-cta on the link or any
// ancestor wins; otherwise fall back to the surrounding landmark/section.
function linkLocation(link: HTMLElement): string {
  const tagged = link.closest<HTMLElement>('[data-cta]');
  if (tagged?.dataset.cta) return tagged.dataset.cta;
  if (link.closest('footer')) return 'footer';
  if (link.closest('header, nav')) return 'navbar';
  const section = link.closest<HTMLElement>('section');
  if (section) {
    if (section.id) return section.id;
    const cls = Array.from(section.classList).find((c) => c !== 'section' && c !== 'reveal' && c !== 'in');
    if (cls) return cls;
  }
  return 'content';
}

/**
 * Tracks every WhatsApp and tel: link on the site with one delegated listener,
 * so new CTAs are measured without wiring an onClick into each component.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackContactClick('phone', linkLocation(link));
      else if (WHATSAPP_HREF.test(href)) trackContactClick('whatsapp', linkLocation(link));
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
