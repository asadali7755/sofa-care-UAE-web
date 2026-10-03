'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { ServicesStyle } from '../lib/cityThemes';

export interface CityServiceItem { title: string; desc: string }

interface Props {
  style: ServicesStyle;
  cityName: string;
  services: CityServiceItem[];
}

const wa = (title: string, city: string) =>
  `https://wa.me/971547199189?text=${encodeURIComponent(`Hi, I need ${title} in ${city}.`)}`;

function BookLinks({ title, city }: { title: string; city: string }) {
  return (
    <div className="cl-svc-actions">
      <Link href="/contact" className="cl-svc-link">Book now →</Link>
      <a href={wa(title, city)} target="_blank" rel="noopener noreferrer" className="cl-svc-link cl-svc-link-alt">WhatsApp</a>
    </div>
  );
}

export default function CityServices({ style, cityName, services }: Props) {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const num = (i: number) => String(i + 1).padStart(2, '0');

  if (style === 'tabs') {
    const s = services[active];
    return (
      <div className="cl-tabs">
        <div className="cl-tablist" role="tablist" aria-label={`Sofa cleaning services in ${cityName}`}>
          {services.map((sv, i) => (
            <button key={sv.title} role="tab" aria-selected={i === active} className={`cl-tab ${i === active ? 'is-on' : ''}`} onClick={() => setActive(i)}>
              <span className="cl-tab-n">{num(i)}</span>{sv.title}
            </button>
          ))}
        </div>
        <div className="cl-tabpanel" role="tabpanel" key={active}>
          <div className="cl-tabpanel-n">{num(active)}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <BookLinks title={s.title} city={cityName} />
        </div>
      </div>
    );
  }

  if (style === 'timeline') {
    return (
      <ol className="cl-timeline">
        {services.map((s, i) => (
          <li key={s.title} className={`cl-tl-item reveal ${i % 2 ? 'is-right' : ''}`}>
            <span className="cl-tl-dot">{num(i)}</span>
            <div className="cl-tl-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <BookLinks title={s.title} city={cityName} />
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (style === 'flip') {
    return (
      <div className="cl-flipgrid">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`cl-flip ${flipped === i ? 'is-flipped' : ''}`}
            tabIndex={0}
            onClick={() => setFlipped(flipped === i ? null : i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(flipped === i ? null : i); } }}
          >
            <div className="cl-flip-in">
              <div className="cl-flip-front"><span className="cl-flip-n">{num(i)}</span><h3>{s.title}</h3><span className="cl-flip-hint">Tap to see details</span></div>
              <div className="cl-flip-back"><p>{s.desc}</p><BookLinks title={s.title} city={cityName} /></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (style === 'accordion') {
    return (
      <div className="cl-acc">
        {services.map((s, i) => (
          <div key={s.title} className={`cl-acc-item ${i === active ? 'is-on' : ''}`} onMouseEnter={() => setActive(i)}>
            <button className="cl-acc-head" onClick={() => setActive(i)} aria-expanded={i === active}>
              <span className="cl-acc-n">{num(i)}</span>
              <span className="cl-acc-title">{s.title}</span>
            </button>
            <div className="cl-acc-body"><p>{s.desc}</p><BookLinks title={s.title} city={cityName} /></div>
          </div>
        ))}
      </div>
    );
  }

  if (style === 'carousel') {
    const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
    return (
      <div className="cl-car">
        <div className="cl-car-nav">
          <button onClick={() => scroll(-1)} aria-label="Previous service">←</button>
          <button onClick={() => scroll(1)} aria-label="Next service">→</button>
        </div>
        <div className="cl-car-track" ref={track}>
          {services.map((s, i) => (
            <article key={s.title} className="cl-car-card">
              <span className="cl-car-n">{num(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <BookLinks title={s.title} city={cityName} />
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (style === 'glow') {
    return (
      <div className="cl-glowgrid">
        {services.map((s, i) => (
          <article key={s.title} className="cl-glow reveal">
            <div className="cl-glow-in">
              <span className="cl-glow-n">{num(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <BookLinks title={s.title} city={cityName} />
            </div>
          </article>
        ))}
      </div>
    );
  }

  /* bento */
  return (
    <div className="cl-bento">
      {services.map((s, i) => (
        <article key={s.title} className={`cl-bento-card reveal ${i === 0 ? 'is-hero' : ''}`}>
          <span className="cl-bento-n">{num(i)}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <BookLinks title={s.title} city={cityName} />
        </article>
      ))}
    </div>
  );
}
