import type { Metadata } from 'next';
import ArabicPage from '../components/ArabicPage';
import { getArabicPage } from '../lib/arabicPages';

const p = getArabicPage('/ar')!;

export const metadata: Metadata = {
  title: { absolute: p.metaTitle },
  description: p.metaDescription,
  alternates: { canonical: '/ar', languages: { 'en-AE': '/', 'ar-AE': '/ar', 'x-default': '/' } },
  openGraph: { title: p.metaTitle, description: p.metaDescription, url: '/ar', locale: 'ar_AE', images: [p.heroImage.src] },
};

export default function Page() {
  return <ArabicPage path="/ar" />;
}
