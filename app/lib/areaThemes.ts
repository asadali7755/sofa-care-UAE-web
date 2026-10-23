/**
 * Visual identities for the /sofa-cleaning-{emirate}/[area] pages. Five themes
 * rotate so neighbouring areas never share a look: each has its own palette,
 * hero layout, section order, section styles and keyword-led headings.
 * Copy here must stay honest (no prices, no invented stats).
 */
import type { Area } from './areas';

export type AreaHero = 'glass' | 'editorial' | 'bleed' | 'diagonal' | 'spotlight';
export type AreaSection = 'about' | 'why' | 'places' | 'process' | 'services' | 'faq' | 'results' | 'videos';

export interface AreaTheme {
  key: string;
  c1: string; // primary accent
  c2: string; // secondary accent
  soft: string; // light surface tint
  deep: string; // dark surface
  deep2: string;
  hero: AreaHero;
  tone: 'dark' | 'light';
  order: AreaSection[];
  places: 'chips' | 'grid' | 'marquee';
  services: 'bento' | 'list' | 'pills';
  faq: 'accordion' | 'cards' | 'columns';
  cta: 'band' | 'card' | 'split';
  /** Proof photo used next to the process section. */
  proof: keyof typeof PHOTOS;
  heading: Record<AreaSection | 'cta', string>;
  /** Hero eyebrow + CTA line; {short} {name} {city} {lm} {type} are filled in. */
  eyebrow: string;
  ctaLine: string;
}

export const PHOTOS = {
  steam: { src: '/home/sofa-sanitization-dubai.webp', w: 1200, h: 675, alt: 'Technician steam-cleaning a patterned fabric sofa' },
  leatherAfter: { src: '/3seater/after.webp', w: 1200, h: 600, alt: 'Cream leather corner sofa after a professional clean' },
  chaise: { src: '/pet-stain.webp', w: 900, h: 598, alt: 'Fabric chaise sofa before and after stain removal' },
  coffeeLeather: { src: '/home/sofa-stain-removal-dubai.webp', w: 1200, h: 654, alt: 'Coffee stain on a light leather sofa seat before cleaning' },
  coffeeSteps: { src: '/coffee.webp', w: 1200, h: 960, alt: 'Fabric sofa coffee stain before and after, with the five-step removal process' },
  leatherSteps: { src: '/leather.webp', w: 1200, h: 960, alt: 'Leather sofa before and after a deep clean, with the six-step leather care process' },
  dubai: { src: '/cities/sofa-cleaning-dubai.webp', w: 800, h: 600, alt: 'Downtown Dubai skyline with the Burj Khalifa at sunset' },
  ajman: { src: '/cities/sofa-cleaning-ajman.webp', w: 1200, h: 800, alt: 'Sunset over a mosque on the Ajman skyline' },
  // Showcase interiors (illustrative, not job photos — never use these in before/after sections)
  villaRoom: { src: '/home/clean-sofa-uae-villa-living-room.webp', w: 1600, h: 1067, alt: 'Clean light-grey sofa in a bright UAE villa living room' },
  beigeSofa: { src: '/home/clean-beige-three-seater-sofa.webp', w: 1600, h: 1067, alt: 'Fresh beige three-seater fabric sofa in a sunny living room' },
  greyLShape: { src: '/home/clean-grey-l-shaped-sofa-dubai-apartment.webp', w: 1600, h: 1067, alt: 'Clean grey L-shaped sofa in a bright apartment living room' },
  highRise: { src: '/home/clean-corner-sofa-dubai-high-rise-apartment.webp', w: 1600, h: 1067, alt: 'Clean corner sofa in a high-rise apartment with a city view' },
  marinaView: { src: '/home/clean-sectional-sofa-dubai-marina-view.webp', w: 1024, h: 559, alt: 'Clean sectional sofa in a Dubai apartment overlooking the marina' },
  velvetLux: { src: '/home/blue-velvet-sofa-luxury-dubai-living-room.webp', w: 1600, h: 1067, alt: 'Blue velvet sofa in a luxury marble living room' },
  leatherPenthouse: { src: '/home/brown-leather-chesterfield-sofa-dubai-penthouse.webp', w: 1600, h: 1067, alt: 'Brown leather Chesterfield sofa in a penthouse with a Dubai skyline view' },
  leatherCosy: { src: '/home/dark-brown-leather-sofa-cosy-living-room.webp', w: 1600, h: 1067, alt: 'Dark brown leather sofa with cushions in a warm family living room' },
  lightGrey: { src: '/home/light-grey-fabric-sofa-living-room.webp', w: 1600, h: 1067, alt: 'Light grey fabric sofa in a calm, sunlit living room' },
} as const;

export const AREA_THEMES: AreaTheme[] = [
  {
    key: 'lagoon', c1: '#0E9F9A', c2: '#5EEAD4', soft: '#E6FAF7', deep: '#042F2E', deep2: '#0B4F4B',
    hero: 'glass', tone: 'dark',
    order: ['about', 'results', 'why', 'places', 'process', 'videos', 'services', 'faq'],
    places: 'chips', services: 'bento', faq: 'accordion', cta: 'band', proof: 'coffeeSteps',
    heading: {
      results: 'Before & after: sofa shampoo results',
      videos: 'Watch the team at work',
      about: 'Sofa cleaning in {short}, done at your door',
      why: 'Why sofas in {short} need a deep clean',
      places: 'Sofa cleaning near {lm} and across {short}',
      process: 'How our sofa shampoo works in {short}',
      services: 'Sofa & upholstery cleaning in {short}',
      faq: 'Sofa cleaning {short}: your questions',
      cta: 'Book sofa cleaning in {short}',
    },
    eyebrow: '{city} · {short}',
    ctaLine: 'Same-day sofa shampoo and steam cleaning for {type} in {short}. Send your sofa size on WhatsApp for a free quote.',
  },
  {
    key: 'saffron', c1: '#E8730F', c2: '#FDBA74', soft: '#FFF4E8', deep: '#3B1D06', deep2: '#6B3410',
    hero: 'editorial', tone: 'light',
    order: ['about', 'process', 'results', 'why', 'services', 'videos', 'places', 'faq'],
    places: 'grid', services: 'list', faq: 'cards', cta: 'card', proof: 'leatherSteps',
    heading: {
      results: 'Real stains, real results',
      videos: 'Sofa cleaning clips from recent jobs',
      about: 'Your {short} sofa, cleaned properly',
      why: 'What {short} homes do to a sofa',
      places: 'Where we work in {name}',
      process: 'Sofa deep cleaning, the way we do it in {short}',
      services: 'Couch cleaning services in {short}',
      faq: 'Questions from {short} residents',
      cta: 'Get your sofa shampooed in {short}',
    },
    eyebrow: 'Sofa care for {short}, {city}',
    ctaLine: 'From the first stain check to the final dry, it is one visit at your {short} home. Tell us your sofa size and fabric on WhatsApp.',
  },
  {
    key: 'indigo', c1: '#6366F1', c2: '#C7D2FE', soft: '#EEF0FF', deep: '#0F1033', deep2: '#262A6B',
    hero: 'bleed', tone: 'dark',
    order: ['about', 'services', 'results', 'why', 'process', 'videos', 'places', 'faq'],
    places: 'marquee', services: 'pills', faq: 'columns', cta: 'split', proof: 'chaise',
    heading: {
      results: 'Deep cleaning before & after photos',
      videos: 'See the extraction in action',
      about: 'At-home sofa cleaning across {short}',
      why: '{city} dust meets {short} sofas',
      places: '{short} streets and buildings we cover',
      process: 'Inside a sofa clean in {short}',
      services: 'What we clean in {short} homes',
      faq: 'Sofa shampoo in {short} — answered',
      cta: 'Ready for a fresh sofa in {short}?',
    },
    eyebrow: 'Now serving {name}',
    ctaLine: 'Book a slot near {lm}. Our team brings every machine and product; you just choose the time.',
  },
  {
    key: 'rose', c1: '#E11D48', c2: '#FDA4AF', soft: '#FFF1F3', deep: '#3F0A18', deep2: '#7A1430',
    hero: 'diagonal', tone: 'light',
    order: ['about', 'results', 'why', 'process', 'videos', 'places', 'services', 'faq'],
    places: 'chips', services: 'bento', faq: 'accordion', cta: 'card', proof: 'leatherAfter',
    heading: {
      results: 'Sofa stain removal results',
      videos: 'Short videos from real sofa cleans',
      about: 'Deep sofa shampoo for {short} homes',
      why: 'The real reasons {short} sofas get dirty',
      places: 'Covering every corner of {short}',
      process: 'Step by step: sofa shampoo in {short}',
      services: 'Leather, fabric & velvet sofa cleaning in {short}',
      faq: 'Before you book in {short}',
      cta: 'Your {short} sofa, fresh again',
    },
    eyebrow: '{short} · at-home sofa cleaning',
    ctaLine: 'Fabric, leather or velvet, send a photo and we will plan the right clean for your sofa in {short}.',
  },
  {
    key: 'emerald', c1: '#059669', c2: '#FCD34D', soft: '#ECFDF5', deep: '#022C22', deep2: '#065F46',
    hero: 'spotlight', tone: 'dark',
    order: ['about', 'videos', 'places', 'why', 'results', 'services', 'process', 'faq'],
    places: 'grid', services: 'list', faq: 'columns', cta: 'band', proof: 'coffeeSteps',
    heading: {
      results: 'Upholstery cleaning before & after',
      videos: 'Sofa cleaning in motion',
      about: 'Professional sofa cleaning in {name}',
      why: 'Life in {short} and your sofa',
      places: 'Sofa cleaning near me in {short}',
      process: 'Our {short} sofa cleaning method',
      services: 'Sofa cleaning options for {short}',
      faq: 'Your {short} sofa cleaning FAQ',
      cta: 'Book a sofa clean in {short} today',
    },
    eyebrow: '{city} — {short}',
    ctaLine: 'Fresh, dry and ready for guests the same day. That is a sofa clean in {short}.',
  },
];

/** Stable theme per area: spread by position so siblings differ. */
export function themeFor(emirateKey: string, index: number): AreaTheme {
  const offset = { dubai: 0, sharjah: 1, ajman: 2, 'abu-dhabi': 3, fujairah: 4 }[emirateKey] ?? 0;
  return AREA_THEMES[(index + offset) % AREA_THEMES.length];
}

/** Hero photo per area: real local photo if set, else rotate a pool that fits the homes there. */
export function heroPhotoFor(emirateKey: string, index: number, theme: AreaTheme, propertyType = '', slug = '') {
  // Full-bleed heroes need a clean, label-free photo behind the text.
  if (theme.hero === 'bleed') {
    return PHOTOS[emirateKey === 'dubai' ? 'dubai' : emirateKey === 'ajman' ? 'ajman' : 'steam'];
  }
  const villas = /villa/i.test(propertyType) && !/^(high-rise|mid-rise|apartments?)/i.test(propertyType);
  const pool: (keyof typeof PHOTOS)[] =
    villas ? ['villaRoom', 'leatherCosy', 'beigeSofa', 'lightGrey', 'greyLShape'] :
    emirateKey === 'dubai' ? ['marinaView', 'highRise', 'velvetLux', 'leatherPenthouse', 'greyLShape', 'beigeSofa'] :
    ['greyLShape', 'highRise', 'lightGrey', 'beigeSofa', 'velvetLux'];
  // Hash the slug so neighbouring areas spread across the whole pool.
  const n = [...slug].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, index);
  let key = pool[n % pool.length];
  if (key === theme.proof) key = pool[(n + 1) % pool.length];
  return PHOTOS[key];
}

export function fill(template: string, area: Area, cityName: string): string {
  return template
    .replace(/\{short\}/g, area.short)
    .replace(/\{name\}/g, area.name)
    .replace(/\{city\}/g, cityName)
    .replace(/\{lm\}/g, area.landmarks[0] ?? area.short)
    .replace(/\{type\}/g, area.propertyType);
}
