import type { HeroArt } from '../lib/cityThemes';

/**
 * Decorative, per-emirate hero artwork (pure SVG/CSS, no images, aria-hidden).
 * Each motif references something real about the emirate so pages feel local.
 */
export default function CityHeroArt({ art }: { art: HeroArt }) {
  switch (art) {
    case 'skyline':
      return (
        <div className="cl-art cl-art-skyline" aria-hidden="true">
          <div className="cl-cloud cl-cloud-1" />
          <div className="cl-cloud cl-cloud-2" />
          <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className="cl-skyline-back">
            <path fill="currentColor" d="M0 220V150h40v-30h30v40h30v-60h28v50h40v-80h24v70h36v-40h30v60h40v-90h20v80h40v-50h34v70h40v-120h14v120h30v-60h40v50h36v-70h30v80h44v-50h30v60h40v-100h26v90h36v-40h40v60h40v-80h24v70h40v-30h34v50h38v-60h30v70h40v-90h28v80h36v-40h30v60h40v30z" />
          </svg>
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none" className="cl-skyline-front">
            <path fill="currentColor" d="M0 260V190h50v-40h36v60h40v-90h26v80h44v-50h34v70h50v-20h44V120h18V40h6V10h4v30h6v80h18v90h40v-60h36v70h46v-110h30v100h50v-60h40v50h40v-80h28v90h44v-40h50v60h46v-70h34v80h50v-50h40v60h52v-90h30v100h40v30z" />
          </svg>
        </div>
      );
    case 'domes':
      return (
        <div className="cl-art cl-art-domes" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="cl-star" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 55}%`, animationDelay: `${(i % 6) * 0.5}s` }} />
          ))}
          <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMax slice" className="cl-domes-svg">
            <g fill="currentColor">
              <rect x="40" y="110" width="14" height="130" /><path d="M36 110h22l-11-34z" />
              <rect x="1146" y="110" width="14" height="130" /><path d="M1142 110h22l-11-34z" />
              <path d="M220 240v-70c0-44 40-80 90-80s90 36 90 80v70z" /><rect x="306" y="62" width="8" height="30" />
              <path d="M470 240v-110c0-70 55-120 130-120s130 50 130 120v110z" /><rect x="596" y="-22" width="8" height="34" />
              <path d="M800 240v-70c0-44 40-80 90-80s90 36 90 80v70z" /><rect x="886" y="62" width="8" height="30" />
              <rect x="0" y="228" width="1200" height="12" />
            </g>
          </svg>
        </div>
      );
    case 'pattern':
      return <div className="cl-art cl-art-pattern" aria-hidden="true" />;
    case 'waves':
      return (
        <div className="cl-art cl-art-waves" aria-hidden="true">
          <svg className="cl-dhow" viewBox="0 0 120 70" width="120" height="70">
            <path fill="currentColor" d="M4 44h112c-6 14-20 22-36 22H36C22 66 10 56 4 44z" />
            <path fill="currentColor" d="M58 6v36h4V6zM60 6l36 30H60z" />
            <path fill="currentColor" opacity=".7" d="M56 14L26 38h30z" />
          </svg>
          {[1, 2, 3].map((n) => (
            <svg key={n} className={`cl-wave cl-wave-${n}`} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path fill="currentColor" d="M0 60c100-40 200-40 300 0s200 40 300 0 200-40 300 0 200 40 300 0 200-40 300 0 200 40 300 0 200-40 300 0 200 40 300 0v60H0z" />
            </svg>
          ))}
        </div>
      );
    case 'mountains':
      return (
        <div className="cl-art cl-art-mountains" aria-hidden="true">
          <div className="cl-sunglow" />
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none" className="cl-mt cl-mt-1"><path fill="currentColor" d="M0 260V140l90-60 70 40 110-100 90 90 80-50 120 130 90-70 110 90 120-110 90 80 110-60 120 60v90z" /></svg>
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none" className="cl-mt cl-mt-2"><path fill="currentColor" d="M0 260V170l120-70 90 60 100-80 120 100 90-60 120 80 110-90 100 70 130-60 120 90v90z" /></svg>
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="cl-mt cl-mt-3"><path fill="currentColor" d="M0 200V130l150-40 140 50 150-60 160 70 140-40 140 50 160-30 160 40v50z" /></svg>
        </div>
      );
    case 'sun':
      return (
        <div className="cl-art cl-art-sun" aria-hidden="true">
          <div className="cl-sun" />
          <div className="cl-sun-ring cl-sun-ring-1" />
          <div className="cl-sun-ring cl-sun-ring-2" />
          {[1, 2].map((n) => (
            <svg key={n} className={`cl-wave cl-wave-${n}`} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path fill="currentColor" d="M0 60c100-40 200-40 300 0s200 40 300 0 200-40 300 0 200 40 300 0 200-40 300 0 200 40 300 0 200-40 300 0 200 40 300 0v60H0z" />
            </svg>
          ))}
        </div>
      );
    case 'ripples':
      return (
        <div className="cl-art cl-art-ripples" aria-hidden="true">
          {[0, 1, 2, 3].map((n) => (
            <span key={n} className="cl-ripple" style={{ animationDelay: `${n * 1.6}s` }} />
          ))}
          <span className="cl-flamingo" />
        </div>
      );
  }
}
