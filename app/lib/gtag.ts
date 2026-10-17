declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}

export function trackEnquirySubmit(source: string, service?: string) {
  trackEvent('generate_lead', {
    event_category: 'enquiry',
    event_label: source,
    service: service || 'general',
  });
}

// Fired when /api/enquiry fails after all retries, so lost leads show up in GA4.
export function trackEnquiryFailed(source: string) {
  trackEvent('enquiry_failed', {
    event_category: 'enquiry',
    event_label: source,
  });
}

// One shape for every WhatsApp / phone click. `location` says where on the
// page the link sits (navbar, footer, floating_button, hero, ...).
export function trackContactClick(method: 'whatsapp' | 'phone', location: string) {
  trackEvent('contact', {
    event_category: method,
    event_label: location,
    method,
    link_location: location,
  });
}

// For WhatsApp opened from code (window.open) rather than a link click.
export function trackWhatsAppClick(page: string) {
  trackContactClick('whatsapp', page);
}
