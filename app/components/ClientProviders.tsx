'use client';
import { RequestCallProvider } from '@/app/components/RequestCallModal';
import ContactClickTracker from '@/app/components/ContactClickTracker';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <RequestCallProvider>
      <ContactClickTracker />
      {children}
    </RequestCallProvider>
  );
}
