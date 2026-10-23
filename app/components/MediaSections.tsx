import Link from 'next/link';
import Image from 'next/image';
import { IconArrow, IconWhatsApp } from './Icons';
import { galleryItems, servicePhotos, videoResults } from '../lib/galleryData';
import { serviceHref } from '../lib/servicePages';
import '../area-pages.css';

/**
 * Real job photos, clips and a map, shared by the emirate hubs (CityLanding)
 * and the area pages (AreaPage). Expects --c1/--c2/--soft/--deep/--deep2 from
 * the page wrapper; `seed` picks a different set of photos/clips per page.
 */

// Portrait clips only; the landscape and square ones look odd in a row of three.
const REEL_VIDEOS = videoResults.filter((v) => !/quick-result|shampooing-result/.test(v.src));

export const seedOf = (s: string) => [...s].reduce((n, ch) => n + ch.charCodeAt(0), 0);
export const pick = <T,>(list: T[], start: number, n: number) => Array.from({ length: n }, (_, i) => list[(start + i) % list.length]);
export const stripPlace = (label: string) => label.split(' — ')[0];

type Lang = 'en' | 'ar';
const T = {
  en: {
    ba: 'Before & after', before: 'Before', after: 'After',
    intro: (place: string) => `Unedited photos from our own recent jobs around the UAE. The same team and kit come to ${place}.`,
    gallery: 'See the full gallery', videos: 'Videos',
    vidIntro: 'Short clips filmed by our technicians on the job. Tap play to watch the shampoo and extraction work on real sofas.',
    waBtn: 'Send us your sofa photo',
  },
  ar: {
    ba: 'قبل وبعد', before: 'قبل', after: 'بعد',
    intro: () => 'صور غير معدّلة من أعمالنا الأخيرة في الإمارات، والفريق نفسه والمعدات نفسها تأتي إلى منزلك.',
    gallery: 'شاهد معرض الصور', videos: 'فيديو',
    vidIntro: 'مقاطع قصيرة صوّرها فنّيونا أثناء العمل. اضغط للتشغيل لمشاهدة الشامبو والشفط على كنب حقيقي.',
    waBtn: 'أرسل لنا صورة الكنب',
  },
};

export function BeforeAfterPair({ item, sizes, className, lang = 'en' }: { item: (typeof galleryItems)[number]; sizes: string; className: string; lang?: Lang }) {
  const t = T[lang];
  return (
    <>
      <div className={`${className} ${className}-a`}>
        <Image src={item.before} alt={`Before: ${stripPlace(item.label)}`} fill sizes={sizes} style={{ objectFit: 'cover' }} />
        <span className="ap-badge">{t.before}</span>
      </div>
      <div className={`${className} ${className}-b`}>
        <Image src={item.after} alt={`After: ${stripPlace(item.label)} by Al Haya Sofa Care`} fill sizes={sizes} style={{ objectFit: 'cover' }} />
        <span className="ap-badge ap-badge-after">{t.after}</span>
      </div>
    </>
  );
}

export function ResultsSection({ heading, place, seed, count = 3, items = galleryItems, lang = 'en' }: { heading: string; place: string; seed: number; count?: number; items?: typeof galleryItems; lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="ap ap-section ap-results">
      <div className="container-x">
        <span className="ap-eyebrow">{t.ba}</span>
        <h2 className="ap-h2">{heading}</h2>
        <p className="ap-p ap-narrow-l">{t.intro(place)}</p>
        <div className="ap-ba-grid">
          {pick(items, seed, Math.min(count, items.length)).map((g) => (
            <figure key={g.id} className="ap-ba">
              <div className="ap-ba-pair">
                <BeforeAfterPair item={g} sizes="(max-width: 900px) 50vw, 200px" className="ap-ba-img" lang={lang} />
              </div>
              {lang === 'en' && <figcaption>{stripPlace(g.label)}</figcaption>}
            </figure>
          ))}
        </div>
        <Link href="/gallery" className="ap-gallery-link">{t.gallery} <IconArrow size={13} /></Link>
      </div>
    </section>
  );
}

export function VideosSection({ heading, waHref, seed, srcs, lang = 'en' }: { heading: string; waHref: string; seed: number; srcs?: string[]; lang?: Lang }) {
  const t = T[lang];
  const clips = srcs ? REEL_VIDEOS.filter((v) => srcs.includes(v.src)) : pick(REEL_VIDEOS, seed, 3);
  return (
    <section className="ap ap-section ap-videos">
      <div className="container-x ap-videos-grid">
        <div>
          <span className="ap-eyebrow">{t.videos}</span>
          <h2 className="ap-h2">{heading}</h2>
          <p className="ap-p">{t.vidIntro}</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-wa"><IconWhatsApp size={16} /> {t.waBtn}</a>
        </div>
        <div className="ap-reels">
          {clips.map((v) => {
            const name = v.src.split('/').pop()!.replace('.mp4', '');
            return (
              <figure key={v.src} className="ap-reel">
                <video src={v.src} poster={`/videos/posters/${name}.webp`} controls playsInline preload="none" title={v.title} aria-label={v.alt} />
                {lang === 'en' && <figcaption>{v.label}</figcaption>}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceShots({ place, seed }: { place: string; seed: number }) {
  return (
    <div className="ap ap-svc-shots">
      {pick(servicePhotos, seed, 4).map((s) => (
        <Link key={s.id} href={serviceHref(s.id)} className="ap-svc-shot">
          <Image src={s.img} alt={`${s.label} in ${place}`} fill sizes="(max-width: 900px) 50vw, 300px" style={{ objectFit: 'cover' }} />
          <span>{s.label} <IconArrow size={12} /></span>
        </Link>
      ))}
    </div>
  );
}

export function AreaMap({ query, title }: { query: string; title: string }) {
  return (
    <div className="ap-map">
      <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </div>
  );
}
