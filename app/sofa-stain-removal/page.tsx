import type { Metadata } from 'next';
import ServicePage from '../components/ServicePage';
import { getServicePage } from '../lib/servicePages';

const p = getServicePage('sofa-stain-removal')!;

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.metaDescription,
  keywords: p.keywords,
  alternates: { canonical: '/sofa-stain-removal' },
  openGraph: { title: p.metaTitle, description: p.metaDescription, url: '/sofa-stain-removal', images: [p.heroImage.src] },
};

export default function Page() {
  return <ServicePage slug="sofa-stain-removal" />;
}
