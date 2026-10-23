import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { notFound } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { IconArrow, IconWhatsApp } from './Icons';
import { ResultsSection, VideosSection } from './MediaSections';
import { AREA_THEMES } from '../lib/areaThemes';
import { AR_FACTS, AR_HONEST, AR_SERVICES, AR_STEPS, getArabicPage } from '../lib/arabicPages';
import '../area-pages.css';

const BASE = 'https://sofashampooingdubai.com';

/** Shared renderer for the Arabic landing pages (right-to-left). */
export default function ArabicPage({ path }: { path: string }) {
  const p = getArabicPage(path);
  if (!p) notFound();

  const t = AREA_THEMES.find((x) => x.key === p.themeKey) ?? AREA_THEMES[0];
  const vars = { '--c1': t.c1, '--c2': t.c2, '--soft': t.soft, '--deep': t.deep, '--deep2': t.deep2 } as CSSProperties;
  const url = `${BASE}${p.path}`;
  const waHref = `https://wa.me/971547199189?text=${encodeURIComponent(p.waText)}`;

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service', inLanguage: 'ar',
    name: `${p.h1Lead} ${p.h1Em}`,
    serviceType: 'تنظيف الكنب',
    description: p.metaDescription,
    provider: { '@type': 'LocalBusiness', name: 'Al Haya Sofa Care UAE', alternateName: 'الحياة لتنظيف الكنب', telephone: '+971547199189', url: BASE },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    url,
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'ar',
    mainEntity: p.faqs.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className={`ap ap-t-${t.key} ap-tone-dark ap-rtl`} style={vars} dir="rtl" lang="ar">
        <section className="ap-hero ap-hero-glass">
          <div className="ap-hero-glow" aria-hidden="true" />
          <div className="container-x ap-hero-grid">
            <div className="ap-hero-text">
              <nav className="ap-crumb" aria-label="مسار التنقل">
                <Link href="/ar">الرئيسية</Link>
                {p.path !== '/ar' && <><span>‹</span><span>{p.h1Lead} {p.h1Em}</span></>}
                <span>‹</span><Link href={p.enPath} hrefLang="en">English</Link>
              </nav>
              <span className="ap-tag"><span className="ap-tag-dot" />{p.eyebrow}</span>
              <h1 className="ap-h1">{p.h1Lead} <em>{p.h1Em}</em></h1>
              <p className="ap-lede">{p.lede}</p>
              <div className="ap-cta-row">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> أرسل صورة الكنب</a>
                <Link href="/contact" className="ap-btn ap-btn-main">احجز زيارة <IconArrow size={14} /></Link>
              </div>
            </div>
            <div className="ap-glass">
              <div className="ap-glass-img">
                <Image src={p.heroImage.src} alt={p.heroImage.alt} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} priority />
              </div>
              <ul className="ap-facts">{AR_FACTS.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="ap-section ap-why">
          <div className="container-x ap-why-grid">
            <div>
              <span className="ap-eyebrow">لماذا التنظيف</span>
              <h2 className="ap-h2">{p.why.heading}</h2>
            </div>
            <div className="ap-why-text">
              {p.why.paras.map((para) => <p key={para.slice(0, 24)} className="ap-p">{para}</p>)}
            </div>
          </div>
        </section>

        <section className="ap-section ap-services">
          <div className="container-x">
            <span className="ap-eyebrow">خدماتنا</span>
            <h2 className="ap-h2">خدمات تنظيف الكنب في منزلك</h2>
            <ul className="sp-cards">
              {AR_SERVICES.map((c) => (
                <li key={c.t} className="sp-card">
                  <strong><Link href={c.href} hrefLang="en" style={{ color: 'inherit', textDecoration: 'none' }}>{c.t}</Link></strong>
                  <span>{c.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ResultsSection heading="نتائج تنظيف الكنب قبل وبعد" place="" seed={p.seed} count={6} lang="ar" />

        <section className="ap-section ap-process">
          <div className="container-x">
            <span className="ap-eyebrow">طريقة العمل</span>
            <h2 className="ap-h2">كيف ننظّف الكنب</h2>
          </div>
          <ol className="container-x ap-steps sp-steps">
            {AR_STEPS.map((st, i) => (
              <li key={st.t}>
                <span className="ap-step-n">{String(i + 1).padStart(2, '0')}</span>
                <strong>{st.t}</strong>
                <span>{st.d}</span>
              </li>
            ))}
          </ol>
          <div className="container-x">
            <div className="sp-note">
              <strong>{AR_HONEST.heading}</strong>
              <p>{AR_HONEST.text}</p>
            </div>
          </div>
        </section>

        <VideosSection heading="شاهد فريقنا أثناء العمل" waHref={waHref} seed={p.seed} lang="ar" />

        <section className="ap-section ap-places">
          <div className="container-x">
            <span className="ap-eyebrow">المناطق</span>
            <h2 className="ap-h2">{p.areas.heading}</h2>
            <p className="ap-p ap-narrow-l">{p.areas.intro}</p>
            <div className="ap-more-links" style={{ marginTop: 18 }}>
              {p.areas.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </div>
          </div>
        </section>

        <section className="ap-section ap-faq">
          <div className="container-x">
            <span className="ap-eyebrow">الأسئلة الشائعة</span>
            <h2 className="ap-h2">أسئلة شائعة عن تنظيف الكنب</h2>
            <div className="ap-acc">
              {p.faqs.map((q, i) => (
                <details key={q.q} open={i === 0}>
                  <summary>{q.q}</summary>
                  <p>{q.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-section-sm ap-cta ap-cta-band">
          <div className="container-x">
            <div className="ap-cta-box">
              <div>
                <h2 className="ap-h2">{p.ctaHeading}</h2>
                <p className="ap-p">{p.ctaLine}</p>
              </div>
              <div className="ap-cta-row">
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> واتساب</a>
                <a href="tel:+971547199189" className="ap-btn ap-btn-ghost" dir="ltr">+971 54 719 9189</a>
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
