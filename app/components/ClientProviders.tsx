'use client';
import { RequestCallProvider } from '@/app/components/RequestCallModal';
import ContactClickTracker from '@/app/components/ContactClickTracker';
import WhatsAppLeadGate from '@/app/components/WhatsAppLeadGate';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <RequestCallProvider>
      <ContactClickTracker />
      <WhatsAppLeadGate />
      {children}
    </RequestCallProvider>
  );
}
