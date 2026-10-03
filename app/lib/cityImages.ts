/**
 * Single source of truth for emirate photos (SEO: keyword filename, accurate alt text,
 * explicit dimensions, caption/name for ImageObject schema). Every component that shows
 * a city photo (navbar, coverage cards, city page heroes) must read from here so the
 * alt text always matches what the photo really shows.
 */
export interface CityImage {
  src: string;
  width: number;
  height: number;
  /** Real subject of the photo + service + city (keyword-rich, no stuffing) */
  alt: string;
  /** Short, human title (used for title attr / schema name) */
  name: string;
  /** Short alt used for small thumbnails (navbar / cards) */
  thumbAlt: string;
}

export const CITY_IMAGES: Record<string, CityImage> = {
  dubai: {
    src: '/cities/sofa-cleaning-dubai.webp',
    width: 800, height: 600,
    alt: 'Dubai skyline with Burj Khalifa at sunrise — professional at-home sofa cleaning service in Dubai by Al Haya Sofa Care',
    name: 'Sofa Cleaning Dubai — Burj Khalifa skyline',
    thumbAlt: 'Sofa cleaning Dubai — Burj Khalifa skyline',
  },
  'abu-dhabi': {
    src: '/cities/sofa-cleaning-abu-dhabi.webp',
    width: 800, height: 600,
    alt: 'Sheikh Zayed Grand Mosque in Abu Dhabi at dusk — professional sofa deep cleaning and shampooing in Abu Dhabi by Al Haya Sofa Care',
    name: 'Sofa Cleaning Abu Dhabi — Sheikh Zayed Grand Mosque',
    thumbAlt: 'Sofa cleaning Abu Dhabi — Sheikh Zayed Grand Mosque',
  },
  sharjah: {
    src: '/cities/sofa-cleaning-sharjah.webp',
    width: 1200, height: 900,
    alt: 'Sharjah Al Majaz waterfront with blue-domed pavilion and city skyline — sofa cleaning and steam shampooing service in Sharjah by Al Haya Sofa Care',
    name: 'Sofa Cleaning Sharjah — Al Majaz waterfront',
    thumbAlt: 'Sofa cleaning Sharjah — Al Majaz waterfront',
  },
  ajman: {
    src: '/cities/sofa-cleaning-ajman.webp',
    width: 1200, height: 800,
    alt: 'Sunset over Ajman with mosque minaret silhouette on the skyline — at-home sofa cleaning service in Ajman by Al Haya Sofa Care',
    name: 'Sofa Cleaning Ajman — sunset skyline',
    thumbAlt: 'Sofa cleaning Ajman — sunset skyline with mosque',
  },
  'ras-al-khaimah': {
    src: '/sofa-cleaning-dubai-professional.webp',
    width: 1100, height: 800,
    alt: 'Professional sofa cleaning service in Ras Al Khaimah by Al Haya Sofa Care',
    name: 'Sofa Cleaning Ras Al Khaimah',
    thumbAlt: 'Sofa cleaning Ras Al Khaimah',
  },
  fujairah: {
    src: '/locations/dibba-town-center-roundabout.webp',
    width: 1100, height: 800,
    alt: 'Dibba Town Center roundabout on the Fujairah east coast — sofa cleaning service in Fujairah and Dibba by Al Haya Sofa Care',
    name: 'Sofa Cleaning Fujairah — Dibba town centre',
    thumbAlt: 'Sofa cleaning Fujairah — Dibba town centre',
  },
  'umm-al-quwain': {
    src: '/sofa-cleaning-dubai-professional.webp',
    width: 1100, height: 800,
    alt: 'Professional sofa cleaning service in Umm Al Quwain by Al Haya Sofa Care',
    name: 'Sofa Cleaning Umm Al Quwain',
    thumbAlt: 'Sofa cleaning Umm Al Quwain',
  },
};
