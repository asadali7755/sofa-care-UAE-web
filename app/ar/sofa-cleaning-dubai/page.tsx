import type { Metadata } from 'next';
import ArabicPage from '../../components/ArabicPage';
import { getArabicPage } from '../../lib/arabicPages';

const p = getArabicPage('/ar/sofa-cleaning-dubai')!;

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.metaDescription,
  alternates: { canonical: '/ar/sofa-cleaning-dubai', languages: { 'en-AE': '/sofa-cleaning-dubai', 'ar-AE': '/ar/sofa-cleaning-dubai', 'x-default': '/sofa-cleaning-dubai' } },
  openGraph: { title: p.metaTitle, description: p.metaDescription, url: '/ar/sofa-cleaning-dubai', locale: 'ar_AE', images: [p.heroImage.src] },
};

export default function Page() {
  return <ArabicPage path="/ar/sofa-cleaning-dubai" />;
}
