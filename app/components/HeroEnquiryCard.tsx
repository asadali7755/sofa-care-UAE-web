'use client';
import { useState, useEffect } from 'react';
import { trackEnquirySubmit } from '@/app/lib/gtag';
import { useToast } from '@/app/components/RequestCallModal';

export default function HeroEnquiryCard() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quote = params.get('quote');
    const source = params.get('source');
    if (source === 'hero_card') {
      if (quote === 'success') {
        showToast('Payment received! We will call you shortly with your quote.');
      } else if (quote === 'cancelled') {
        showToast('Payment cancelled. You can try again anytime.');
      }
      if (quote) {
        params.delete('quote');
        params.delete('source');
        params.delete('session_id');
        const query = params.toString();
        window.history.replaceState({}, '', window.location.pathname + (query ? `?${query}` : ''));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      trackEnquirySubmit('hero_card', work || 'Sofa Cleaning');
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'Hero Enquiry', name: name || '—', phone, work: work || 'Sofa Cleaning', source: 'hero_card', returnPath: window.location.pathname }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      showToast('Could not start payment. Please try again.');
    } catch {
      showToast('Could not start payment. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form className="hero-enquiry-card" onSubmit={submit}>
      <h3>Quote Request — AED 50</h3>
      <p>Adjustable against your final booking.</p>
      <input
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
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <select value={work} onChange={(e) => setWork(e.target.value)}>
        <option value="">Select Service</option>
        <option value="Sofa Cleaning">Sofa Cleaning</option>
        <option value="Sofa Shampooing">Sofa Shampooing</option>
        <option value="Carpet Cleaning">Carpet Cleaning</option>
        <option value="Mattress Cleaning">Mattress Cleaning</option>
        <option value="Chair Cleaning">Chair Cleaning</option>
        <option value="Curtain Cleaning">Curtain Cleaning</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? 'Redirecting...' : 'Pay AED 50 & Get Quote'}
      </button>
    </form>
  );
}
