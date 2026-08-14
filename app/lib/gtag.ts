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

export function trackWhatsAppClick(page: string) {
  trackEvent('contact', {
    event_category: 'whatsapp',
    event_label: page,
    method: 'whatsapp',
  });
}

export function trackPhoneCall(page: string) {
  trackEvent('contact', {
    event_category: 'phone',
    event_label: page,
    method: 'phone',
  });
}
