import Link from 'next/link';
import type { CSSProperties } from 'react';
import { IconArrow, IconWhatsApp } from './Icons';
import QuoteCallSection from './QuoteCallSection';
import CityHeroArt from './CityHeroArt';
import CityServices, { type CityServiceItem } from './CityServices';
import { CITY_THEMES } from '../lib/cityThemes';
import { emirates } from '../lib/areas';

export interface CityLandingProps {
  cityKey: string;
  cityName: string;
  tag: string;
  h1Lead?: string;
  h1Accent?: string;
  heroPara: string;
  image: { src: string; alt: string; width: number; height: number; name?: string };
  waText: string;
  stats: { n: string; l: string }[];
  whyTag?: string;
  whyAccent?: string;
  whyParas: string[];
  bullets: string[];
  areasTag?: string;
  areasIntro?: string | null;
  areas: string[];
  services: CityServiceItem[];
  priceValue?: string;
  priceNote?: string;
  ctaText?: string;
}

const PROCESS_NOTES: Record<string, [string, string, string]> = {
  dubai: [
    'Concierge and building access in high-rises are handled before we arrive, and we test a hidden spot first.',
    'Low-moisture shampoo and hot-water extraction pull out Dubai dust without soaking apartment-sized sofas.',
    'Air movers dry fabric in 2–4 hours, so the majlis or living room is usable the same evening.',
  ],
  'abu-dhabi': [
    'Villa compounds on Khalifa City and Yas, or towers on Reem Island — we confirm access and parking beforehand.',
    'Sandstorm dust is lifted first with industrial vacuuming, then shampoo and steam deal with embedded grime.',
    'A final deodorising pass and optional fabric protection keep the sofa fresher between visits.',
  ],
  sharjah: [
    'Family flats in Al Nahda and Al Taawun often have several sofas, so we plan the visit around your set.',
    'Shampoo and steam are matched to each fabric — velvet, microfiber, linen or leather get different handling.',
    'Quick-dry airflow means the sofa is ready for evening guests; we leave the room tidy.',
  ],
  ajman: [
    'Corniche apartments to Al Jurf villas — we inspect the fabric and note any old stains before starting.',
    'Our 2-in-1 shampoo and steam visit removes dust mites, stains and sea-air odours in one go.',
    'You inspect the result with the technician before we pack up — we do not leave until it is right.',
  ],
  'ras-al-khaimah': [
    'Beachfront apartments in Al Marjan and villas near the Hajar foothills — we check fabric and test a patch.',
    'Coastal humidity and mountain dust are lifted by deep shampoo extraction and high-temperature steam.',
    'An anti-odour finish and fast drying leave the sofa fresh, not damp, even in humid months.',
  ],
  fujairah: [
    'On our regular east-coast route we call ahead, confirm the address and check fabric and odours on site.',
    'An antimicrobial treatment sits alongside shampoo and steam to tackle humidity-related musty smells.',
    'Villas and holiday homes get a thorough dry-out before we leave, so nothing stays damp.',
  ],
  'umm-al-quwain': [
    'Quiet villa streets and compact flats alike — we confirm access and inspect the sofa before we begin.',
    'Gentle but deep shampoo and steam extraction removes coastal dust and everyday family grime.',
    'Drying, deodorising and a last walkthrough with you finish the visit calmly and cleanly.',
  ],
};

const STEP_TITLES = ['Inspect & test', 'Shampoo & steam', 'Dry & finish'];

const OTHER_ORDER = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain'];
const OTHER_NAMES: Record<string, string> = {
  dubai: 'Dubai', 'abu-dhabi': 'Abu Dhabi', sharjah: 'Sharjah', ajman: 'Ajman',
  'ras-al-khaimah': 'Ras Al Khaimah', fujairah: 'Fujairah', 'umm-al-quwain': 'Umm Al Quwain',
};

export default function CityLanding(p: CityLandingProps) {
  const t = CITY_THEMES[p.cityKey];
  const vars = { '--c1': t.c1, '--c2': t.c2, '--soft': t.soft, '--deep': t.deep, '--deep2': t.deep2 } as CSSProperties;
  const areaPages = emirates[p.cityKey]?.areas ?? [];
  const waLink = `https://wa.me/971547199189?text=${p.waText}`;
  const tone = t.heroTone;
  const abs = (u: string) => (u.startsWith('http') ? u : `https://sofashampooingdubai.com${u}`);
  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: abs(p.image.src),
    url: abs(p.image.src),
    name: p.image.name ?? p.image.alt,
    description: p.image.alt,
    caption: p.image.alt,
    width: p.image.width,
    height: p.image.height,
    representativeOfPage: true,
    inLanguage: 'en-AE',
    about: { '@type': 'City', name: p.cityName },
    creator: { '@type': 'Organization', name: 'Al Haya Sofa Care UAE' },
  };

  const heroText = (
    <div className="cl-hero-text">
      <div className="cl-tag"><span className="cl-tag-dot" />{p.tag}</div>
      <h1 className="cl-h1">
        {p.h1Lead ?? 'Sofa Cleaning'} <span className="cl-h1-accent">{p.h1Accent ?? p.cityName}</span>
      </h1>
      <p className="cl-motto">{t.motto}</p>
      <p className="cl-hero-para">{p.heroPara}</p>
      <div className="cl-cta-row">
        <Link href="/contact" className="cl-btn cl-btn-main">Book in {p.cityName} <IconArrow size={14} /></Link>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="cl-btn cl-btn-wa"><IconWhatsApp size={16} /> WhatsApp Us</a>
      </div>
    </div>
  );

  const imgEl = (
    <img src={p.image.src} alt={p.image.alt} title={p.image.name ?? p.image.alt} width={p.image.width} height={p.image.height} loading="eager" fetchPriority="high" decoding="async" />
  );

  const stats = (
    <ul className="cl-stats">
      {p.stats.map((s) => (
        <li key={s.l} className="cl-stat"><b>{s.n}</b><span>{s.l}</span></li>
      ))}
    </ul>
  );

  const whyHead = (
    <>
      <div className="cl-eyebrow">{p.whyTag ?? `Why Choose Al Haya in ${p.cityName}`}</div>
      <h2 className="cl-h2">Trusted Sofa Cleaning <em>{p.whyAccent ?? `in ${p.cityName}`}</em></h2>
    </>
  );
  const whyParas = p.whyParas.map((t2, i) => <p key={i} className="cl-p">{t2}</p>);
  const checks = p.bullets.map((b) => (
    <li key={b} className="cl-check"><span className="cl-check-ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>{b}</li>
  ));

  const areasList = p.areas;
  const tickerRow = (rev: boolean) => (
    <div className={`cl-ticker ${rev ? 'is-rev' : ''}`} aria-hidden={rev ? 'true' : undefined}>
      <div className="cl-ticker-track">
        {[...areasList, ...areasList].map((a, i) => <span key={a + i} className="cl-ticker-item">{a}</span>)}
      </div>
    </div>
  );

  return (
    <div className={`cl cl-${p.cityKey} cl-tone-${tone}`} style={vars}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      {/* ───────── HERO ───────── */}
      <section className={`cl-hero cl-hero-${t.heroLayout}`}>
        {t.heroLayout === 'bleed' && (
          <div className="cl-hero-bg"><img src={p.image.src} alt={p.image.alt} title={p.image.name ?? p.image.alt} width={p.image.width} height={p.image.height} loading="eager" fetchPriority="high" decoding="async" /></div>
        )}
        <CityHeroArt art={t.heroArt} />
        <div className="container-x cl-hero-inner">
          <nav className="cl-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Sofa Cleaning {p.cityName}</span>
          </nav>
          {t.heroLayout === 'split-card' && (
            <div className="cl-hero-grid">
              {heroText}
              <div className="cl-card-wrap">
                <div className="cl-photo-card">{imgEl}</div>
                <div className="cl-float cl-float-1"><b>{p.stats[0]?.n}</b><span>{p.stats[0]?.l}</span></div>
                <div className="cl-float cl-float-2"><b>Eco-friendly</b><span>child &amp; pet safe</span></div>
              </div>
            </div>
          )}
          {t.heroLayout === 'split-arch' && (
            <div className="cl-hero-grid">
              {heroText}
              <div className="cl-arch-wrap">
                <div className="cl-arch-ring" />
                <div className="cl-arch">{imgEl}</div>
                <div className="cl-arch-badge">{p.cityName}</div>
              </div>
            </div>
          )}
          {t.heroLayout === 'bleed' && <div className="cl-bleed">{heroText}</div>}
          {t.heroLayout === 'centered-orb' && (
            <div className="cl-orb-wrap">
              <div className="cl-orb"><span className="cl-orb-ring" />{imgEl}</div>
              {heroText}
            </div>
          )}
          {stats}
        </div>
      </section>

      {/* ───────── WHY ───────── */}
      <section className={`cl-section cl-why cl-why-${t.why}`}>
        <div className="container-x">
          {t.why === 'split' && (
            <div className="cl-split">
              <div className="reveal">{whyHead}{whyParas}</div>
              <ul className="cl-checklist reveal reveal-delay-2">{checks}</ul>
            </div>
          )}
          {t.why === 'cards' && (
            <>
              <div className="cl-center reveal">{whyHead}<div className="cl-narrow">{whyParas}</div></div>
              <ul className="cl-cardgrid">{p.bullets.map((b, i) => (
                <li key={b} className={`cl-mini reveal reveal-delay-${(i % 3) + 1}`}><span className="cl-mini-n">{String(i + 1).padStart(2, '0')}</span>{b}</li>
              ))}</ul>
            </>
          )}
          {t.why === 'panel' && (
            <div className="cl-panel reveal">
              <div className="cl-panel-l">{whyHead}{whyParas}</div>
              <ul className="cl-panel-r">{checks}</ul>
            </div>
          )}
        </div>
      </section>

      {/* ───────── AREAS ───────── */}
      <section className={`cl-section cl-areas cl-areas-${t.areas}`}>
        <div className="container-x">
          <div className="cl-center reveal">
            <div className="cl-eyebrow">{p.areasTag ?? `${p.cityName} Areas We Cover`}</div>
            <h2 className="cl-h2">Every neighbourhood in <em>{p.cityName}</em></h2>
            {p.areasIntro && <p className="cl-p cl-narrow">{p.areasIntro}</p>}
          </div>
        </div>
        {t.areas === 'ticker' && (<div className="cl-tickers">{tickerRow(false)}{tickerRow(true)}</div>)}
        <div className="container-x">
          {t.areas === 'tiles' && (
            <ul className="cl-tiles">{areasList.map((a, i) => <li key={a} className={`cl-tile reveal reveal-delay-${(i % 4) + 1}`}>{a}</li>)}</ul>
          )}
          {t.areas === 'cloud' && (
            <ul className="cl-cloud-pills">{areasList.map((a, i) => <li key={a} className="cl-pill" style={{ animationDelay: `${(i % 7) * 0.35}s` }}>{a}</li>)}</ul>
          )}
          {areaPages.length > 0 && (
            <div className="cl-areapages reveal">
              <div className="cl-areapages-label">Dedicated {p.cityName} area pages</div>
              <div className="cl-areapages-row">
                {areaPages.map((a) => (
                  <Link key={a.slug} href={`/sofa-cleaning-${p.cityKey}/${a.slug}`} className="cl-areapage">
                    Sofa Cleaning {a.short} <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className={`cl-section cl-services cl-services-${t.services}`}>
        <div className="container-x">
          <div className="cl-center reveal">
            <div className="cl-eyebrow">Sofa Cleaning Services {p.cityName}</div>
            <h2 className="cl-h2">Our Sofa Cleaning Services in <em>{p.cityName}</em></h2>
            {p.priceValue && (
              <div className="cl-price-chip"><b>{p.priceValue}</b><span>{p.priceNote}</span></div>
            )}
          </div>
          <CityServices style={t.services} cityName={p.cityName} services={p.services} />
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="cl-section cl-process">
        <div className="container-x">
          <div className="cl-center reveal">
            <div className="cl-eyebrow">Our Process</div>
            <h2 className="cl-h2">{t.processTitle}</h2>
          </div>
          <ol className="cl-steps">
            {PROCESS_NOTES[p.cityKey].map((note, i) => (
              <li key={i} className={`cl-step reveal reveal-delay-${i + 1}`}>
                <span className="cl-step-n">{i + 1}</span>
                <h3>{STEP_TITLES[i]}</h3>
                <p>{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <QuoteCallSection />

      {/* ───────── OTHER EMIRATES ───────── */}
      <section className="cl-section-sm cl-others">
        <div className="container-x">
          <div className="cl-center reveal">
            <div className="cl-eyebrow">Also serving</div>
            <h2 className="cl-h2 cl-h2-sm">Sofa cleaning in the other emirates</h2>
          </div>
          <div className="cl-others-row">
            {rotate(OTHER_ORDER, p.cityKey).map((k, i) => (
              <Link key={k} href={`/sofa-cleaning-${k}`} className="cl-other" title={`Sofa cleaning ${OTHER_NAMES[k]}`}>
                {OTHER_PATTERNS[i % OTHER_PATTERNS.length](OTHER_NAMES[k])}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="cl-section-sm">
        <div className="container-x">
          <div className="cl-final">
            <CityHeroArt art={t.heroArt === 'skyline' || t.heroArt === 'domes' ? 'ripples' : t.heroArt === 'pattern' ? 'pattern' : 'ripples'} />
            <h2>Book Sofa Cleaning in <em>{p.cityName}</em></h2>
            <p>{p.ctaText ?? 'Same-day service available subject to slots. Call or WhatsApp now.'}</p>
            <div className="cl-cta-row cl-cta-center">
              <Link href="/contact" className="cl-btn cl-btn-main">Book Now <IconArrow size={14} /></Link>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="cl-btn cl-btn-wa"><IconWhatsApp size={16} /> WhatsApp</a>
              <a href="tel:+971547199189" className="cl-btn cl-btn-ghost">Call +971 54 719 9189</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const OTHER_PATTERNS: ((c: string) => string)[] = [
  (c) => `Sofa cleaning ${c}`,
  (c) => `${c} sofa shampooing`,
  (c) => `Sofa deep cleaning in ${c}`,
  (c) => `Couch cleaning ${c}`,
  (c) => `${c} upholstery cleaning`,
  (c) => `Professional sofa cleaning ${c}`,
];

function rotate(list: string[], current: string) {
  const i = list.indexOf(current);
  return [...list.slice(i + 1), ...list.slice(0, i)];
}
