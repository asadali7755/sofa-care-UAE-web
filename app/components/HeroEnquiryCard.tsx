'use client';
import { useState } from 'react';
import { sendEnquiry } from '@/app/lib/sendEmail';
import { trackEnquirySubmit } from '@/app/lib/gtag';
import { useToast } from '@/app/components/RequestCallModal';

export default function HeroEnquiryCard() {
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await sendEnquiry({ type: 'Hero Enquiry', phone, work: work || 'Sofa Cleaning' });
      trackEnquirySubmit('hero_card', work || 'Sofa Cleaning');
    } catch {}
    setLoading(false);
    setPhone('');
    setWork('');
    showToast('Enquiry sent! We will call you shortly.');
  };

  return (
    <form className="hero-enquiry-card" onSubmit={submit}>
      <h3>Get a Free Quote</h3>
      <p>Quick response. No obligation.</p>
      <select value={work} onChange={(e) => setWork(e.target.value)}>
        <option value="">Select Service</option>
        <option value="Sofa Cleaning">Sofa Cleaning</option>
        <option value="Sofa Shampooing">Sofa Shampooing</option>
        <option value="Carpet Cleaning">Carpet Cleaning</option>
        <option value="Mattress Cleaning">Mattress Cleaning</option>
        <option value="Chair Cleaning">Chair Cleaning</option>
        <option value="Curtain Cleaning">Curtain Cleaning</option>
      </select>
      <input
        type="tel"
        inputMode="tel"
        placeholder="+971 5X XXX XXXX *"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
