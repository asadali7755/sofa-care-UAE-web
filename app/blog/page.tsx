import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { blogPosts } from '../lib/blog';

const BASE = 'https://sofashampooingdubai.com';

export const metadata: Metadata = {
  title: 'Sofa Cleaning Tips & Guides | Dubai & UAE',
  description: 'Expert sofa cleaning guides for Dubai & the UAE — cleaning costs, how often to clean, shampoo vs steam, stain removal and leather care from Al Haya Sofa Care.',
  alternates: { canonical: `${BASE}/blog` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
  ],
};

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: 120, borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="breadcrumb">
              <Link href="/">Home</Link><span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Blog</span>
            </div>
            <div className="section-tag" style={{ marginBottom: 16 }}>Sofa Cleaning Tips & Guides</div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.05, marginBottom: 16, fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              The Al Haya <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Care</span> Blog
            </h1>
            <p style={{ color: 'var(--fg-muted)', fontSize: 17, maxWidth: 620, lineHeight: 1.7 }}>
              Practical, UAE-specific advice on sofa cleaning — real prices, care schedules, stain removal and leather care to help you keep your sofa fresh and make smart booking decisions.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: 180 }}>
                    <Image src={post.image} alt={post.h1} fill sizes="(max-width: 640px) 100vw, 360px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', marginBottom: 8 }}>{post.readMins} min read</div>
                    <h2 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--fg)', lineHeight: 1.3, marginBottom: 8 }}>{post.h1}</h2>
                    <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 14, marginTop: 14, fontFamily: 'var(--font-mono)' }}>Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
