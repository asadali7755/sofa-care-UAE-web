/**
 * Per-emirate visual identity. Every city page gets its own palette, hero layout,
 * hero artwork and section styles so the 7 pages no longer look like one template.
 */
export type HeroLayout = 'split-card' | 'split-arch' | 'bleed' | 'centered-orb';
export type HeroArt = 'skyline' | 'domes' | 'pattern' | 'waves' | 'mountains' | 'sun' | 'ripples';
export type ServicesStyle = 'bento' | 'tabs' | 'timeline' | 'flip' | 'accordion' | 'carousel' | 'glow';
export type AreasStyle = 'ticker' | 'tiles' | 'cloud';
export type WhyStyle = 'split' | 'cards' | 'panel';

export interface CityTheme {
  key: string;
  /** primary accent */ c1: string;
  /** secondary accent */ c2: string;
  /** soft tint used for light surfaces */ soft: string;
  /** deep colour used for dark hero / CTA panels */ deep: string;
  deep2: string;
  heroLayout: HeroLayout;
  heroArt: HeroArt;
  heroTone: 'dark' | 'light';
  services: ServicesStyle;
  areas: AreasStyle;
  why: WhyStyle;
  /** short evocative line under the tag (real local feature, no claims) */
  motto: string;
  processTitle: string;
}

export const CITY_THEMES: Record<string, CityTheme> = {
  dubai: {
    key: 'dubai', c1: '#D98324', c2: '#F6C36B', soft: '#FFF3E0', deep: '#0B1F3A', deep2: '#1B3A66',
    heroLayout: 'split-card', heroArt: 'skyline', heroTone: 'dark',
    services: 'bento', areas: 'ticker', why: 'split',
    motto: 'From Marina towers to Arabian Ranches villas',
    processTitle: 'How we clean your sofa in Dubai',
  },
  'abu-dhabi': {
    key: 'abu-dhabi', c1: '#C9A24B', c2: '#F1DDA3', soft: '#EEF3FB', deep: '#0A2351', deep2: '#14397F',
    heroLayout: 'split-arch', heroArt: 'domes', heroTone: 'dark',
    services: 'tabs', areas: 'tiles', why: 'cards',
    motto: 'Saadiyat, Yas, Khalifa City and the Corniche',
    processTitle: 'Our Abu Dhabi cleaning routine',
  },
  sharjah: {
    key: 'sharjah', c1: '#0F766E', c2: '#D4A84B', soft: '#E7F5F2', deep: '#073B36', deep2: '#0F5A52',
    heroLayout: 'split-arch', heroArt: 'pattern', heroTone: 'light',
    services: 'timeline', areas: 'cloud', why: 'panel',
    motto: 'Al Majaz, Al Nahda, Muwaileh and beyond',
    processTitle: 'Sharjah sofa care, step by step',
  },
  ajman: {
    key: 'ajman', c1: '#E4572E', c2: '#FFB199', soft: '#FDEDE7', deep: '#0F3354', deep2: '#1D5A8A',
    heroLayout: 'bleed', heroArt: 'waves', heroTone: 'dark',
    services: 'flip', areas: 'ticker', why: 'panel',
    motto: 'Corniche apartments to Al Jurf family villas',
    processTitle: 'Ajman cleaning visit, explained',
  },
  'ras-al-khaimah': {
    key: 'ras-al-khaimah', c1: '#B4532A', c2: '#E9B38A', soft: '#F8EBDD', deep: '#2E1F17', deep2: '#5A3B2B',
    heroLayout: 'split-card', heroArt: 'mountains', heroTone: 'dark',
    services: 'accordion', areas: 'tiles', why: 'split',
    motto: 'Al Hamra, Mina Al Arab and the Hajar foothills',
    processTitle: 'Cleaning your sofa in Ras Al Khaimah',
  },
  fujairah: {
    key: 'fujairah', c1: '#0284C7', c2: '#F59E0B', soft: '#E4F3FC', deep: '#082F49', deep2: '#0C4A6E',
    heroLayout: 'centered-orb', heroArt: 'sun', heroTone: 'light',
    services: 'carousel', areas: 'cloud', why: 'panel',
    motto: 'Fujairah City, Dibba and the east coast route',
    processTitle: 'East-coast sofa cleaning process',
  },
  'umm-al-quwain': {
    key: 'umm-al-quwain', c1: '#6D4AA6', c2: '#F472B6', soft: '#F1EAFB', deep: '#1E1536', deep2: '#3D2A6B',
    heroLayout: 'centered-orb', heroArt: 'ripples', heroTone: 'dark',
    services: 'glow', areas: 'tiles', why: 'cards',
    motto: 'Old Town, Al Salamah and the lagoon coast',
    processTitle: 'Umm Al Quwain cleaning, start to finish',
  },
};
