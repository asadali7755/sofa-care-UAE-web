import type { Metadata } from 'next';
import ServicePage from '../components/ServicePage';
import { getServicePage } from '../lib/servicePages';

const p = getServicePage('sofa-steam-cleaning')!;

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.metaDescription,
  keywords: p.keywords,
  alternates: { canonical: '/sofa-steam-cleaning' },
  openGraph: { title: p.metaTitle, description: p.metaDescription, url: '/sofa-steam-cleaning', images: [p.heroImage.src] },
};

export default function Page() {
  return <ServicePage slug="sofa-steam-cleaning" />;
}
