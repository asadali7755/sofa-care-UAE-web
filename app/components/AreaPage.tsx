import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { IconArrow, IconWhatsApp } from './Icons';
import QuoteCallSection from './QuoteCallSection';
import { getEmirate, getArea } from '../lib/areas';
import { PHOTOS, fill, heroPhotoFor, themeFor, type AreaSection } from '../lib/areaThemes';
import { galleryItems, servicePhotos } from '../lib/galleryData';
import { serviceHref } from '../lib/servicePages';
import { AreaMap, BeforeAfterPair, ResultsSection, ServiceShots, VideosSection, seedOf, stripPlace } from './MediaSections';
import '../area-pages.css';

const BASE = 'https://sofashampooingdubai.com';

const SERVICE_LINKS = servicePhotos;

const STEPS = [
  { t: 'Inspect', d: 'Fabric type checked and a hidden spot tested first.' },
  { t: 'Pre-treat', d: 'Stains and soiled arms sprayed with a fabric-matched spotter.' },
  { t: 'Shampoo & extract', d: 'Foam or hot-water wash, then the dirt is pulled out.' },
  { t: 'Dry & check', d: 'Air movers speed drying and we check the sofa with you.' },
];


const FACTS = ['Same-day slots', 'Dry in 3–4 hours', '24 hours, Sat–Thu', 'Free WhatsApp quote'];

function splitIntro(intro: string): [string, string] {
  const m = intro.match(/^([\s\S]+?[.!?])\s+([\s\S]*)$/);
  return m ? [m[1], m[2]] : [intro, ''];
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** Shared renderer for every /sofa-cleaning-{emirate}/[area] page, themed per area. */
export default function AreaPage({ emirateKey, slug }: { emirateKey: string; slug: string }) {
  const em = getEmirate(emirateKey);
  const area = getArea(emirateKey, slug);
  if (!em || !area) notFound();

  const index = em.areas.findIndex((a) => a.slug === slug);
  const t = themeFor(emirateKey, index);
  const f = (s: string) => fill(s, area, em.cityName);
  const photo = area.image
    ? { src: area.image, w: 1200, h: 800, alt: `${area.name}, ${em.cityName}` }
    : heroPhotoFor(emirateKey, index, t, area.propertyType, slug);
  const proof = PHOTOS[t.proof];
  const [lede, aboutRest] = splitIntro(area.intro);
  // Stable per-page seed so each area shows a different set of real job photos and clips.
  const seed = seedOf(slug) + index * 7;
  const aboutShot = galleryItems[(seed + 8) % galleryItems.length];

  const url = `${BASE}/${em.citySlug}/${slug}`;
  const waHref = `https://wa.me/971547199189?text=${encodeURIComponent(`Hi, I need sofa cleaning in ${area.name}, ${em.cityName}.`)}`;
  const others = em.areas.filter((a) => a.slug !== slug);
  const vars = { '--c1': t.c1, '--c2': t.c2, '--soft': t.soft, '--deep': t.deep, '--deep2': t.deep2 } as CSSProperties;

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `Sofa Cleaning ${area.name}`,
    serviceType: 'Sofa and upholstery cleaning',
    description: `At-home sofa shampoo, deep extraction and steam cleaning in ${area.name}, ${em.cityName}. Stain, odour and pet-hair removal and leather care for ${area.propertyType}.`,
    provider: { '@type': 'LocalBusiness', name: 'Al Haya Sofa Care UAE', telephone: '+971547199189', url: BASE },
    areaServed: { '@type': 'Place', name: `${area.name}, ${em.cityName}, UAE` },
    image: `${BASE}${photo.src}`,
    url,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: `Sofa Cleaning ${em.cityName}`, item: `${BASE}/${em.citySlug}` },
      { '@type': 'ListItem', position: 3, name: area.name, item: url },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: area.faqs.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
  };

  const ctaButtons = (
    <div className="ap-cta-row">
      <Link href="/contact" className="ap-btn ap-btn-main">Book in {area.short} <IconArrow size={14} /></Link>
      <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> WhatsApp</a>
    </div>
  );

  const heroText = (
    <div className="ap-hero-text">
      <nav className="ap-crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>›</span>
        <Link href={`/${em.citySlug}`}>Sofa Cleaning {em.cityName}</Link><span>›</span>
        <span>{area.short}</span>
      </nav>
      <span className="ap-tag"><span className="ap-tag-dot" />{f(t.eyebrow)}</span>
      <h1 className="ap-h1">Sofa Cleaning in <em>{area.name}</em></h1>
      <p className="ap-lede">{lede}</p>
      {area.crossLink && (
        <p className="ap-cross">
          {area.crossLink.question}{' '}
          <Link href={area.crossLink.href}>{area.crossLink.label} →</Link>
        </p>
      )}
      {ctaButtons}
    </div>
  );

  const facts = (
    <ul className="ap-facts">
      {FACTS.map((x) => <li key={x}>{x}</li>)}
    </ul>
  );

  const heroImage = (cls: string, priority = true) => (
    <div className={cls}>
      <Image src={photo.src} alt={`${photo.alt} — sofa cleaning in ${area.name}, ${em.cityName}`} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} priority={priority} />
    </div>
  );

  const hero: Record<typeof t.hero, ReactNode> = {
    glass: (
      <div className="container-x ap-hero-grid">
        {heroText}
        <div className="ap-glass">
          {heroImage('ap-glass-img')}
          {facts}
        </div>
      </div>
    ),
    editorial: (
      <div className="container-x ap-hero-grid">
        {heroText}
        <div className="ap-frame-wrap">
          {heroImage('ap-frame')}
          <span className="ap-float ap-float-1">{area.landmarks[0]}</span>
          <span className="ap-float ap-float-2">{area.landmarks[1] ?? em.cityName}</span>
        </div>
      </div>
    ),
    bleed: (
      <>
        {heroImage('ap-bleed-bg')}
        <div className="container-x ap-bleed-inner">
          {heroText}
          {facts}
        </div>
      </>
    ),
    diagonal: (
      <div className="container-x ap-hero-grid">
        {heroText}
        <div className="ap-diag-wrap">
          {heroImage('ap-diag')}
          {facts}
        </div>
      </div>
    ),
    spotlight: (
      <div className="container-x ap-spot">
        {heroText}
        <div className="ap-spot-card">
          {heroImage('ap-spot-img')}
          {facts}
        </div>
      </div>
    ),
  };

  const sections: Record<AreaSection, ReactNode> = {
    about: aboutRest ? (
      <section className="ap-section ap-about" key="about">
        <div className="container-x ap-about-grid">
          <div>
            <span className="ap-eyebrow">About {area.short}</span>
            <h2 className="ap-h2">{f(t.heading.about)}</h2>
            <p className="ap-p ap-p-lg">{aboutRest}</p>
          </div>
          <figure className="ap-about-shot">
            <BeforeAfterPair item={aboutShot} sizes="(max-width: 900px) 60vw, 300px" className="ap-about-img" />
            <figcaption>{stripPlace(aboutShot.label)}</figcaption>
          </figure>
        </div>
      </section>
    ) : null,
    why: area.whyClean ? (
      <section className="ap-section ap-why" key="why">
        <div className="container-x ap-why-grid">
          <div>
            <span className="ap-eyebrow">Why it matters</span>
            <h2 className="ap-h2">{f(t.heading.why)}</h2>
          </div>
          <p className="ap-p ap-why-text">{area.whyClean}</p>
        </div>
      </section>
    ) : null,
    places: (
      <section className="ap-section ap-places" key="places">
        <div className="container-x">
          <span className="ap-eyebrow">Local coverage</span>
          <h2 className="ap-h2">{f(t.heading.places)}</h2>
          <p className="ap-p ap-narrow-l">{area.localNote}</p>
          {t.places === 'marquee' ? (
            <div className="ap-marquee" aria-label={`Places we cover in ${area.name}`}>
              <div className="ap-marquee-track">
                {[...area.landmarks, ...area.landmarks].map((lm, i) => (
                  <span key={lm + i} aria-hidden={i >= area.landmarks.length ? 'true' : undefined}>{lm}</span>
                ))}
              </div>
            </div>
          ) : (
            <ul className={t.places === 'grid' ? 'ap-place-grid' : 'ap-chips'}>
              {area.landmarks.map((lm) => <li key={lm}>{lm}</li>)}
            </ul>
          )}
          <AreaMap query={`${area.name}, ${em.cityName}, UAE`} title={`Map of ${area.name}, ${em.cityName}`} />
        </div>
      </section>
    ),
    process: area.serviceDetail ? (
      <section className="ap-section ap-process" key="process">
        <div className="container-x ap-process-grid">
          <div className="ap-proof">
            <Image src={proof.src} alt={proof.alt} width={proof.w} height={proof.h} sizes="(max-width: 900px) 100vw, 520px" />
          </div>
          <div>
            <span className="ap-eyebrow">Our method</span>
            <h2 className="ap-h2">{f(t.heading.process)}</h2>
            <p className="ap-p">{area.serviceDetail}</p>
          </div>
        </div>
        <ol className="container-x ap-steps">
          {STEPS.map((st, i) => (
            <li key={st.t}>
              <span className="ap-step-n">{String(i + 1).padStart(2, '0')}</span>
              <strong>{st.t}</strong>
              <span>{st.d}</span>
            </li>
          ))}
        </ol>
      </section>
    ) : null,
    services: (
      <section className="ap-section ap-services" key="services">
        <div className="container-x">
          <span className="ap-eyebrow">Services</span>
          <h2 className="ap-h2">{f(t.heading.services)}</h2>
          <ServiceShots place={`${area.name}, ${em.cityName}`} seed={seed} />
          <ul className={`ap-svc ap-svc-${t.services}`}>
            {SERVICE_LINKS.map((s, i) => (
              <li key={s.id}>
                <Link href={serviceHref(s.id)}>
                  <span className="ap-svc-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ap-svc-l">{s.label}</span>
                  <IconArrow size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ),
    results: <ResultsSection key="results" heading={f(t.heading.results)} place={area.short} seed={seed} />,
    videos: <VideosSection key="videos" heading={f(t.heading.videos)} waHref={waHref} seed={seed} />,
    faq: (
      <section className="ap-section ap-faq" key="faq">
        <div className="container-x">
          <span className="ap-eyebrow">FAQs</span>
          <h2 className="ap-h2">{f(t.heading.faq)}</h2>
          {t.faq === 'accordion' ? (
            <div className="ap-acc">
              {area.faqs.map((q, i) => (
                <details key={q.q} open={i === 0}>
                  <summary>{q.q}</summary>
                  <p>{q.a}</p>
                </details>
              ))}
            </div>
          ) : (
            <div className={t.faq === 'columns' ? 'ap-faq-cols' : 'ap-faq-cards'}>
              {area.faqs.map((q) => (
                <div key={q.q} className="ap-faq-item">
                  <h3>{q.q}</h3>
                  <p>{q.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className={`ap ap-t-${t.key} ap-tone-${t.tone}`} style={vars}>
        <section className={`ap-hero ap-hero-${t.hero}`}>
          <div className="ap-hero-glow" aria-hidden="true" />
          {hero[t.hero]}
        </section>

        {t.order.map((key) => sections[key])}

        <section className="ap-section-sm ap-more">
          <div className="container-x">
            <span className="ap-eyebrow">More {em.cityName} areas</span>
            <div className="ap-more-links">
              {others.map((a) => (
                <Link key={a.slug} href={`/${em.citySlug}/${a.slug}`}>Sofa cleaning {a.short}</Link>
              ))}
              <Link href={`/${em.citySlug}`} className="ap-more-all">All of {em.cityName} →</Link>
            </div>
          </div>
        </section>

        <QuoteCallSection areaName={area.name} />

        <section className={`ap-section-sm ap-cta ap-cta-${t.cta}`}>
          <div className="container-x">
            <div className="ap-cta-box">
              <div>
                <h2 className="ap-h2">{f(t.heading.cta)}</h2>
                <p className="ap-p">{f(t.ctaLine)}</p>
              </div>
              <div className="ap-cta-row">
                <Link href="/contact" className="ap-btn ap-btn-main">Book now <IconArrow size={14} /></Link>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> WhatsApp</a>
                <a href="tel:+971547199189" className="ap-btn ap-btn-ghost"><PhoneIcon /> Call</a>
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
