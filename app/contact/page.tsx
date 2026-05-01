import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Book Sofa Cleaning Dubai | Contact Al Haya Sofa Care UAE',
  description: 'Book professional sofa cleaning in Dubai, Sharjah & Ajman. Call or WhatsApp +971547199189. Same-day service available. Online booking form. Fast response guaranteed.',
  keywords: [
    'book sofa cleaning Dubai',
    'sofa cleaning booking Dubai',
    'contact sofa cleaning Dubai',
    'sofa cleaning WhatsApp Dubai',
    'sofa cleaning phone number Dubai',
    'same day sofa cleaning booking Dubai',
    'sofa cleaning appointment Dubai',
  ],
  alternates: { canonical: 'https://sofashampooingdubai.com/contact' },
  openGraph: {
    title: 'Book Sofa Cleaning Dubai | WhatsApp +971547199189',
    description: 'Book your sofa cleaning appointment online. Same-day service available across Dubai, Sharjah & Ajman.',
    url: 'https://sofashampooingdubai.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
