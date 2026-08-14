'use client';
import { RequestCallProvider } from '@/app/components/RequestCallModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <RequestCallProvider>{children}</RequestCallProvider>;
}
