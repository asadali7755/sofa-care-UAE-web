import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { notFound } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { IconArrow, IconWhatsApp } from './Icons';
import QuoteCallSection from './QuoteCallSection';
import { ResultsSection, VideosSection, seedOf } from './MediaSections';
import { AREA_THEMES } from '../lib/areaThemes';
import { galleryItems } from '../lib/galleryData';
import { SERVICE_PAGES, getServicePage } from '../lib/servicePages';
import '../area-pages.css';

const BASE = 'https://sofashampooingdubai.com';
const EMIRATE_ORDER = ['dubai', 'sharjah', 'ajman', 'abu-dhabi', 'umm-al-quwain', 'ras-al-khaimah', 'fujairah'];
const EMIRATE_NAMES: Record<string, string> = {
  dubai: 'Dubai', sharjah: 'Sharjah', ajman: 'Ajman', 'abu-dhabi': 'Abu Dhabi',
  'umm-al-quwain': 'Umm Al Quwain', 'ras-al-khaimah': 'Ras Al Khaimah', fujairah: 'Fujairah',
};

/** Shared renderer for the dedicated service pages (/leather-sofa-cleaning, ...). */
export default function ServicePage({ slug }: { slug: string }) {
  const p = getServicePage(slug);
  if (!p) notFound();

  const t = AREA_THEMES.find((x) => x.key === p.themeKey) ?? AREA_THEMES[0];
  const vars = { '--c1': t.c1, '--c2': t.c2, '--soft': t.soft, '--deep': t.deep, '--deep2': t.deep2 } as CSSProperties;
  const url = `${BASE}/${p.slug}`;
  const waHref = `https://wa.me/971547199189?text=${encodeURIComponent(p.waText)}`;
  const seed = seedOf(p.slug);
  const results = galleryItems.filter((g) => p.galleryCats.includes(g.cat));
  const others = SERVICE_PAGES.filter((x) => x.slug !== p.slug);
  const serviceName = `${p.h1Lead} ${p.h1Em}`.replace(/\s+at Home$/, '');

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: serviceName,
    serviceType: serviceName,
    description: p.metaDescription,
    provider: { '@type': 'LocalBusiness', name: 'Al Haya Sofa Care UAE', telephone: '+971547199189', url: BASE },
    areaServed: EMIRATE_ORDER.map((k) => ({ '@type': 'AdministrativeArea', name: `${EMIRATE_NAMES[k]}, UAE` })),
    image: `${BASE}${p.heroImage.src}`,
    url,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
      { '@type': 'ListItem', position: 3, name: serviceName, item: url },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faqs.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className={`ap ap-t-${t.key} ap-tone-dark`} style={vars}>
        <section className="ap-hero ap-hero-glass">
          <div className="ap-hero-glow" aria-hidden="true" />
          <div className="container-x ap-hero-grid">
            <div className="ap-hero-text">
              <nav className="ap-crumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>›</span>
                <Link href="/services">Services</Link><span>›</span>
                <span>{p.h1Lead}</span>
              </nav>
              <span className="ap-tag"><span className="ap-tag-dot" />{p.eyebrow}</span>
              <h1 className="ap-h1">{p.h1Lead} <em>{p.h1Em}</em></h1>
              <p className="ap-lede">{p.lede}</p>
              <div className="ap-cta-row">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> Send a photo for a quote</a>
                <Link href="/contact" className="ap-btn ap-btn-main">Book a visit <IconArrow size={14} /></Link>
              </div>
            </div>
            <div className="ap-glass">
              <div className="ap-glass-img">
                <Image src={p.heroImage.src} alt={p.heroImage.alt} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} priority />
              </div>
              <ul className="ap-facts">{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="ap-section ap-why">
          <div className="container-x ap-why-grid">
            <div>
              <span className="ap-eyebrow">Why it matters</span>
              <h2 className="ap-h2">{p.why.heading}</h2>
              {p.whyImage && (
                <figure className="sp-why-fig">
                  <div className="sp-why-img">
                    <Image src={p.whyImage.src} alt={p.whyImage.alt} fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: 'cover' }} />
                  </div>
                  {p.whyImage.caption && <figcaption>{p.whyImage.caption}</figcaption>}
                </figure>
              )}
            </div>
            <div className="ap-why-text">
              {p.why.paras.map((para) => <p key={para.slice(0, 24)} className="ap-p">{para}</p>)}
            </div>
          </div>
        </section>

        <section className="ap-section ap-services">
          <div className="container-x">
            <span className="ap-eyebrow">What we cover</span>
            <h2 className="ap-h2">{p.covers.heading}</h2>
            <p className="ap-p ap-narrow-l">{p.covers.intro}</p>
            <ul className="sp-cards">
              {p.covers.items.map((c) => (
                <li key={c.t} className={/^Not for/.test(c.t) ? 'sp-card sp-card-no' : 'sp-card'}>
                  <strong>{c.t}</strong>
                  <span>{c.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {results.length > 0 && <ResultsSection heading={p.resultsHeading} place="your home" seed={seed} count={6} items={results} />}

        <section className="ap-section ap-process">
          <div className="container-x">
            <span className="ap-eyebrow">Our method</span>
            <h2 className="ap-h2">{p.steps.heading}</h2>
          </div>
          <ol className="container-x ap-steps sp-steps">
            {p.steps.items.map((st, i) => (
              <li key={st.t}>
                <span className="ap-step-n">{String(i + 1).padStart(2, '0')}</span>
                <strong>{st.t}</strong>
                <span>{st.d}</span>
              </li>
            ))}
          </ol>
          <div className="container-x">
            <div className="sp-note">
              <strong>{p.honest.heading}</strong>
              <p>{p.honest.text}</p>
            </div>
          </div>
        </section>

        {p.table && (
          <section className="ap-section ap-places">
            <div className="container-x">
              <span className="ap-eyebrow">Quick help</span>
              <h2 className="ap-h2">{p.table.heading}</h2>
              <p className="ap-p ap-narrow-l">{p.table.intro}</p>
              <div className="sp-table-wrap">
                <table className="sp-table">
                  <thead><tr>{p.table.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                  <tbody>{p.table.rows.map((r) => <tr key={r[0]}>{r.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        <VideosSection heading={p.videosHeading} waHref={waHref} seed={seed} srcs={p.videoSrcs} />

        <section className="ap-section ap-faq">
          <div className="container-x">
            <span className="ap-eyebrow">FAQs</span>
            <h2 className="ap-h2">{p.h1Lead}: your questions</h2>
            <div className="ap-acc">
              {p.faqs.map((q, i) => (
                <details key={q.q} open={i === 0}>
                  <summary>{q.q}</summary>
                  <p>{q.a}</p>
                </details>
              ))}
            </div>
            {p.guide && <Link href={p.guide.href} className="ap-gallery-link">{p.guide.label} <IconArrow size={13} /></Link>}
          </div>
        </section>

        <section className="ap-section-sm ap-more">
          <div className="container-x">
            <span className="ap-eyebrow">Where we work</span>
            <div className="ap-more-links">
              {EMIRATE_ORDER.map((k) => (
                <Link key={k} href={`/sofa-cleaning-${k}`}>{p.h1Lead} {EMIRATE_NAMES[k]}</Link>
              ))}
            </div>
            <span className="ap-eyebrow" style={{ marginTop: 22 }}>Other services</span>
            <div className="ap-more-links">
              {others.map((o) => <Link key={o.slug} href={`/${o.slug}`}>{o.h1Lead}</Link>)}
              <Link href="/services" className="ap-more-all">All services →</Link>
            </div>
          </div>
        </section>

        <QuoteCallSection />

        <section className="ap-section-sm ap-cta ap-cta-band">
          <div className="container-x">
            <div className="ap-cta-box">
              <div>
                <h2 className="ap-h2">{p.ctaHeading}</h2>
                <p className="ap-p">{p.ctaLine}</p>
              </div>
              <div className="ap-cta-row">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> WhatsApp</a>
                <Link href="/contact" className="ap-btn ap-btn-main">Book now <IconArrow size={14} /></Link>
                <a href="tel:+971547199189" className="ap-btn ap-btn-ghost">Call</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
