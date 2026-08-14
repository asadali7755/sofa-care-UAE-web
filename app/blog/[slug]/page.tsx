import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { IconArrow, IconWhatsApp } from '../../components/Icons';
import BlogCTAButtons from '../../components/BlogCTAButtons';
import QuoteCallSection from '../../components/QuoteCallSection';
import { blogPosts, getBlogPost } from '../../lib/blog';

const BASE = 'https://sofashampooingdubai.com';
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${BASE}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, type: 'article', images: [{ url: post.image, width: 1200, height: 630, alt: post.h1 }] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = `${BASE}/blog/${slug}`;
  const dateLabel = new Date(post.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: post.h1, description: post.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${BASE}${post.image}`, datePublished: post.datePublished, dateModified: post.datePublished,
    author: { '@type': 'Organization', name: 'Al Haya Sofa Care UAE', url: BASE },
    publisher: { '@type': 'Organization', name: 'Al Haya Sofa Care UAE', logo: { '@type': 'ImageObject', url: `${BASE}/al-haya-sofa-care-logo.webp` } },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.h1, item: url },
    ],
  };
  const faqSchema = post.faqs.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <main>
        <article className="section" style={{ paddingTop: 120 }}>
          <div className="container-x" style={{ maxWidth: 820 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span>›</span>
              <Link href="/blog">Blog</Link><span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>{post.h1}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, margin: '12px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 900 }}>{post.h1}</h1>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-dim)', marginBottom: 24 }}>
              Al Haya Sofa Care UAE · {dateLabel} · {post.readMins} min read
            </div>
            <div style={{ position: 'relative', width: '100%', height: 'clamp(220px, 42vw, 440px)', borderRadius: 16, overflow: 'hidden', marginBottom: 28 }}>
              <Image src={post.image} alt={post.h1} title={post.title} fill priority sizes="(max-width: 768px) 100vw, 820px" style={{ objectFit: 'cover' }} />
            </div>

            {post.intro.map((p, i) => (
              <p key={i} style={{ color: 'var(--fg-muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
            ))}

            {post.sections.map((sec, i) => (
              <div key={i} style={{ marginTop: 28 }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 12, lineHeight: 1.2 }}>{sec.heading}</h2>
                {sec.body?.map((p, j) => (
                  <p key={j} style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 14 }}>{p}</p>
                ))}
                {sec.bullets && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                    {sec.bullets.map((b, k) => (
                      <div key={k} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 16 }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {b}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {post.costTable && (
              <div style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>{post.costTable.title}</h2>
                <div style={{ border: '1px solid var(--line-strong)', borderRadius: 14, overflow: 'hidden' }}>
                  {post.costTable.rows.map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'var(--bg-elev)' : 'transparent', borderBottom: i < post.costTable!.rows.length - 1 ? '1px solid var(--line)' : 'none' }}>
                      <span style={{ color: 'var(--fg-muted)', fontSize: 15 }}>{r.label}</span>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap' }}>{r.price}</span>
                    </div>
                  ))}
                </div>
                {post.costTable.note && <p style={{ color: 'var(--fg-dim)', fontSize: 13, marginTop: 10, fontStyle: 'italic' }}>{post.costTable.note}</p>}
              </div>
            )}

            {/* CTA */}
            <div style={{ marginTop: 36, textAlign: 'center', padding: '36px 24px', background: 'var(--bg-elev)', borderRadius: 18, border: '1px solid var(--line-strong)' }}>
              <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 30px)', marginBottom: 12 }}>Book Professional Sofa Cleaning</h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 15, marginBottom: 22, maxWidth: 460, margin: '0 auto 22px' }}>Same-day at-home service across Dubai &amp; the UAE — from AED 79.</p>
              <BlogCTAButtons />
            </div>

            {/* FAQ */}
            {post.faqs.length > 0 && (
              <div style={{ marginTop: 36 }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 16 }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {post.faqs.map((f) => (
                    <div key={f.q} style={{ padding: '18px 22px', background: 'var(--bg-elev)', borderRadius: 14, border: '1px solid var(--line)' }}>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: 'var(--fg)' }}>{f.q}</div>
                      <div style={{ color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: 28 }}>
              <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>← All articles</Link>
            </div>
          </div>
        </article>
        <QuoteCallSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
