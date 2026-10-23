import type { Metadata } from 'next';
import ServicePage from '../components/ServicePage';
import { getServicePage } from '../lib/servicePages';

const p = getServicePage('leather-sofa-cleaning')!;

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.metaDescription,
  keywords: p.keywords,
  alternates: { canonical: '/leather-sofa-cleaning' },
  openGraph: { title: p.metaTitle, description: p.metaDescription, url: '/leather-sofa-cleaning', images: [p.heroImage.src] },
};

export default function Page() {
  return <ServicePage slug="leather-sofa-cleaning" />;
}
