/**
 * Unified area sub-page data for all emirates (Phase 1 local long-tail).
 * Each emirate has a city page (/sofa-cleaning-{emirate}) plus per-area pages
 * (/sofa-cleaning-{emirate}/[slug]) with unique copy to avoid thin duplicates.
 */
import type { Metadata } from 'next';

export interface Area {
  slug: string;
  name: string;   // full display name
  short: string;  // short label
  propertyType: string;
  intro: string;
  landmarks: string[];
  localNote: string;
  faqs: { q: string; a: string }[];
}

export interface EmirateConfig {
  key: string;
  cityName: string;   // "Dubai"
  citySlug: string;   // "sofa-cleaning-dubai"
  areas: Area[];
}

const BASE = 'https://sofashampooingdubai.com';

export const emirates: Record<string, EmirateConfig> = {
  dubai: {
    key: 'dubai', cityName: 'Dubai', citySlug: 'sofa-cleaning-dubai',
    areas: [
      { slug: 'dubai-marina', name: 'Dubai Marina', short: 'Marina', propertyType: 'high-rise waterfront apartments',
        intro: 'Dubai Marina living means high-rise apartments where sea humidity and fine dust settle deep into sofa fabric. Al Haya Sofa Care brings professional deep shampoo & steam cleaning right to your tower — from Marina Diamonds and Princess Tower to JBR. No need to move furniture out; our team works on-site with quick-dry extraction.',
        landmarks: ['Marina Walk', 'Princess Tower', 'Marina Diamonds', 'Ocean Heights', 'JBR', 'Marina Promenade'],
        localNote: 'Marina’s waterfront humidity speeds up fabric deterioration and odors — we recommend a professional sofa clean every 4–6 months for Marina apartments.',
        faqs: [
          { q: 'Do you provide sofa cleaning inside Dubai Marina towers?', a: 'Yes. Our mobile team brings all equipment to your apartment in any Marina tower — Princess Tower, Marina Diamonds, Ocean Heights and more. Same-day slots are usually available.' },
          { q: 'How long does a Marina apartment sofa clean take?', a: 'A standard 3-seater takes about 1–2 hours and is dry within 3–4 hours, so it fits easily into a busy Marina schedule.' },
        ] },
      { slug: 'jvc', name: 'JVC (Jumeirah Village Circle)', short: 'JVC', propertyType: 'family apartments, townhouses and villas',
        intro: 'JVC is one of Dubai’s fastest-growing family communities — a mix of apartments, townhouses and villas where everyday use, kids and pets take a toll on sofas. Al Haya Sofa Care offers same-day at-home sofa deep shampoo, steam cleaning and stain removal across all JVC districts.',
        landmarks: ['Circle Mall', 'JVC District 10–16', 'Seasons Community', 'Plazzo Residence'],
        localNote: 'Family homes in JVC with children or pets benefit from a deep clean every 3–4 months to control allergens and stains.',
        faqs: [
          { q: 'Do you cover all JVC districts for sofa cleaning?', a: 'Yes — we serve every JVC district (10 through 16 and beyond), covering apartments, townhouses and villas with the same at-home service.' },
          { q: 'Can you remove pet stains from sofas in JVC?', a: 'Absolutely. We use enzyme-based pet stain and odor treatments safe for fabric and leather, ideal for JVC’s many pet-owning families.' },
        ] },
      { slug: 'business-bay', name: 'Business Bay', short: 'Business Bay', propertyType: 'high-rise apartments and offices',
        intro: 'Business Bay’s mix of residential towers and offices means sofas and reception seating face heavy daily use. Al Haya Sofa Care provides professional sofa shampooing, steam sanitization and upholstery cleaning for both homes and offices across Business Bay — flexible timing to avoid disrupting your day.',
        landmarks: ['Bay Square', 'Executive Towers', 'The Opus', 'Business Bay Metro', 'Canal-side towers'],
        localNote: 'For Business Bay offices, after-hours and weekend slots keep your workspace seating fresh without downtime.',
        faqs: [
          { q: 'Do you clean office sofas and reception seating in Business Bay?', a: 'Yes. We handle office reception sofas, waiting-area seating and meeting-room chairs in Business Bay, with flexible after-hours scheduling.' },
          { q: 'Is steam sanitization available in Business Bay?', a: 'Yes — high-temperature steam cleaning that kills 99.9% of bacteria is available for all Business Bay homes and offices.' },
        ] },
      { slug: 'jumeirah', name: 'Jumeirah', short: 'Jumeirah', propertyType: 'luxury villas and beachfront homes',
        intro: 'Jumeirah’s luxury villas and beachfront homes often feature premium fabrics and leather that need specialist care. Al Haya Sofa Care delivers gentle, pH-balanced deep cleaning and leather conditioning that protects high-end upholstery against coastal humidity and sun exposure.',
        landmarks: ['Jumeirah Beach Road', 'Mercato Mall', 'La Mer', 'Jumeirah 1–3'],
        localNote: 'Beachfront homes in Jumeirah face salt-air humidity — regular professional care protects premium leather and fabric from cracking and musty odors.',
        faqs: [
          { q: 'Do you clean luxury leather sofas in Jumeirah?', a: 'Yes. We use specialist pH-safe leather cleaning and conditioning to protect premium leather sofas in Jumeirah villas from cracking and dryness.' },
          { q: 'Can you handle delicate fabrics like velvet and silk?', a: 'Yes — we use low-moisture techniques for velvet, silk and other delicate upholstery common in Jumeirah’s luxury homes.' },
        ] },
      { slug: 'al-barsha', name: 'Al Barsha', short: 'Al Barsha', propertyType: 'villas and family apartments',
        intro: 'Al Barsha is a popular residential hub of villas and family apartments near Mall of the Emirates. Al Haya Sofa Care provides affordable, same-day sofa deep cleaning, shampooing and stain removal across all Al Barsha communities — perfect for busy family homes.',
        landmarks: ['Mall of the Emirates', 'Al Barsha 1–3', 'Al Barsha South', 'Dubai Hills border'],
        localNote: 'High-traffic family villas in Al Barsha benefit from a deep clean every 4–6 months to keep sofas hygienic and fresh.',
        faqs: [
          { q: 'Is same-day sofa cleaning available in Al Barsha?', a: 'Yes — we offer same-day at-home sofa cleaning across Al Barsha 1, 2, 3 and Al Barsha South. WhatsApp us to book a slot.' },
          { q: 'How much does sofa cleaning cost in Al Barsha?', a: 'Pricing starts from AED 79 for shampooing and AED 99 for deep cleaning, with at-home doorstep service included.' },
        ] },
      { slug: 'jlt', name: 'JLT (Jumeirah Lakes Towers)', short: 'JLT', propertyType: 'lakeside residential and office towers',
        intro: 'JLT’s lakeside towers mix residents and businesses, and the lake-side humidity can trap moisture in upholstery over time. Al Haya Sofa Care serves all JLT clusters (A–Z) with professional sofa shampooing, steam cleaning and odor treatment for both apartments and offices.',
        landmarks: ['JLT Cluster A–Z', 'Almas Tower', 'Lake View Towers', 'DMCC', 'JLT Park'],
        localNote: 'Lakeside humidity in JLT can cause musty sofa odors — professional steam cleaning every 4–6 months keeps upholstery fresh.',
        faqs: [
          { q: 'Which JLT clusters do you cover for sofa cleaning?', a: 'All of them — clusters A through Z. We regularly service residential and office towers across JLT with at-home and on-site cleaning.' },
          { q: 'Can you treat musty sofa odors caused by JLT humidity?', a: 'Yes. Our steam cleaning and deodorizing treatment neutralizes humidity-related odors at the source rather than masking them.' },
        ] },
      { slug: 'downtown-dubai', name: 'Downtown Dubai', short: 'Downtown', propertyType: 'premium apartments and penthouses',
        intro: 'Downtown Dubai’s premium apartments and penthouses — around Burj Khalifa and Dubai Mall — deserve meticulous upholstery care. Al Haya Sofa Care provides discreet, professional sofa deep cleaning and leather care for high-end Downtown residences, with eco-friendly products safe for luxury finishes.',
        landmarks: ['Burj Khalifa', 'Dubai Mall', 'The Address Residences', 'Opera District', 'Boulevard'],
        localNote: 'High-end Downtown interiors warrant gentle, premium cleaning — we tailor every treatment to the fabric and finish.',
        faqs: [
          { q: 'Do you offer premium sofa cleaning in Downtown Dubai?', a: 'Yes. We provide careful, premium sofa deep cleaning and leather conditioning for Downtown apartments, penthouses and Address Residences.' },
          { q: 'Are your products safe for luxury upholstery?', a: 'Yes — all products are eco-friendly, non-toxic and pH-balanced, chosen specifically for the fabric or leather of each high-end piece.' },
        ] },
      { slug: 'palm-jumeirah', name: 'Palm Jumeirah', short: 'Palm Jumeirah', propertyType: 'beachfront villas and luxury apartments',
        intro: 'Palm Jumeirah’s beachfront villas and luxury apartments face constant salt-air humidity that’s tough on premium sofas. Al Haya Sofa Care offers specialist deep cleaning, fast-dry extraction and leather conditioning that protects high-value upholstery in Palm residences.',
        landmarks: ['Palm Jumeirah Crescent', 'Atlantis', 'Golden Mile', 'Shoreline Apartments', 'Palm Trunk'],
        localNote: 'Salt-air humidity on the Palm accelerates fabric and leather wear — fast-dry professional cleaning every 4–6 months is ideal.',
        faqs: [
          { q: 'Do you serve villas and apartments on Palm Jumeirah?', a: 'Yes — we cover Shoreline Apartments, Golden Mile, and beachfront villas across the Palm Jumeirah trunk and fronds.' },
          { q: 'How do you protect sofas from Palm Jumeirah humidity?', a: 'We use fast-dry extraction to remove trapped moisture and offer a protective fabric coat to repel humidity and stains between cleans.' },
        ] },
    ],
  },
  sharjah: {
    key: 'sharjah', cityName: 'Sharjah', citySlug: 'sofa-cleaning-sharjah',
    areas: [
      { slug: 'al-nahda', name: 'Al Nahda Sharjah', short: 'Al Nahda', propertyType: 'dense residential apartments',
        intro: 'Al Nahda is one of Sharjah’s busiest residential areas, packed with family apartment buildings on the Dubai border. Al Haya Sofa Care offers convenient at-home sofa shampoo and steam cleaning across Al Nahda — quick-dry, eco-friendly and same-day.',
        landmarks: ['Sahara Centre', 'Al Nahda Park', 'Dubai–Sharjah border', 'Al Nahda Pond Park'],
        localNote: 'High-occupancy Al Nahda apartments collect dust quickly — a deep clean every 4–6 months keeps sofas fresh and hygienic.',
        faqs: [
          { q: 'Do you offer same-day sofa cleaning in Al Nahda Sharjah?', a: 'Yes — Al Nahda is right on the Dubai border, so our team reaches you quickly with same-day at-home sofa cleaning.' },
          { q: 'Do I need to take my sofa anywhere?', a: 'No. We clean your sofa at home in Al Nahda with all equipment brought to you.' },
        ] },
      { slug: 'al-majaz', name: 'Al Majaz', short: 'Al Majaz', propertyType: 'waterfront apartments',
        intro: 'Al Majaz overlooks Khalid Lagoon with popular waterfront apartments. Al Haya Sofa Care provides professional sofa deep cleaning and odor treatment for Al Majaz homes, handling lagoon-side humidity with fast-dry extraction.',
        landmarks: ['Al Majaz Waterfront', 'Khalid Lagoon', 'Al Noor Mosque', 'Al Majaz Amphitheatre'],
        localNote: 'Lagoon-side humidity in Al Majaz can trap moisture in sofas — steam cleaning and deodorizing keep them fresh.',
        faqs: [
          { q: 'Can you clean sofas in Al Majaz waterfront apartments?', a: 'Yes — we cover all Al Majaz buildings with at-home sofa shampoo, steam cleaning and stain removal.' },
          { q: 'Do you treat humidity odors from sofas?', a: 'Yes, our deodorizing steam treatment neutralizes musty, humidity-related odors at the source.' },
        ] },
      { slug: 'al-khan', name: 'Al Khan', short: 'Al Khan', propertyType: 'beachside residential towers',
        intro: 'Al Khan’s beachside towers enjoy sea views but also salt-air humidity. Al Haya Sofa Care delivers at-home sofa deep shampoo and leather care across Al Khan, protecting upholstery from coastal moisture.',
        landmarks: ['Al Khan Beach', 'Al Qasba', 'Maraya Art Centre', 'Eye of the Emirates'],
        localNote: 'Beachside Al Khan apartments benefit from fast-dry cleaning every 4–6 months to combat salt-air humidity.',
        faqs: [
          { q: 'Do you serve Al Khan beachside towers?', a: 'Yes — at-home sofa cleaning across all Al Khan residential towers, same-day available.' },
          { q: 'Is leather sofa cleaning available in Al Khan?', a: 'Yes, with pH-safe leather conditioning to protect against coastal humidity.' },
        ] },
      { slug: 'al-taawun', name: 'Al Taawun', short: 'Al Taawun', propertyType: 'high-rise residential towers',
        intro: 'Al Taawun’s cluster of high-rise towers along the Dubai border houses many families. Al Haya Sofa Care offers affordable, same-day at-home sofa shampoo and steam cleaning across Al Taawun.',
        landmarks: ['Al Taawun Mall', 'Corniche Al Taawun', 'Lagoon-side towers'],
        localNote: 'Busy Al Taawun family apartments stay fresher with a professional deep clean every 4–6 months.',
        faqs: [
          { q: 'How much does sofa cleaning cost in Al Taawun?', a: 'From AED 79 for shampooing and AED 99 for deep cleaning, with at-home service included.' },
          { q: 'Do you offer weekend slots in Al Taawun?', a: 'Yes — weekend and evening slots are available to fit your schedule.' },
        ] },
      { slug: 'muwaileh', name: 'Muwaileh', short: 'Muwaileh', propertyType: 'villas and family communities',
        intro: 'Muwaileh is a growing family community of villas and apartments near University City. Al Haya Sofa Care provides at-home sofa deep cleaning, stain and pet-hair removal across Muwaileh and Al Zahia.',
        landmarks: ['Al Zahia', 'University City', 'City Centre Al Zahia', 'Muwaileh Commercial'],
        localNote: 'Family villas in Muwaileh with kids and pets benefit from a deep clean every 3–4 months.',
        faqs: [
          { q: 'Do you cover Muwaileh and Al Zahia?', a: 'Yes — at-home sofa cleaning across Muwaileh, Al Zahia and surrounding family communities.' },
          { q: 'Can you remove pet hair and stains?', a: 'Yes, deep pet-hair extraction and enzyme stain treatment are part of our service.' },
        ] },
      { slug: 'al-qasimia', name: 'Al Qasimia', short: 'Al Qasimia', propertyType: 'central residential apartments',
        intro: 'Al Qasimia is a central Sharjah residential district with older and newer apartment buildings. Al Haya Sofa Care offers reliable at-home sofa shampoo and steam cleaning across Al Qasimia.',
        landmarks: ['Rolla Square', 'Al Qasimia Park', 'King Faisal Street'],
        localNote: 'Central Al Qasimia apartments collect city dust — regular professional cleaning keeps sofas hygienic.',
        faqs: [
          { q: 'Do you serve Al Qasimia, Sharjah?', a: 'Yes — at-home sofa cleaning across all Al Qasimia buildings with same-day availability.' },
          { q: 'Are products safe for kids and pets?', a: 'Yes — all products are eco-friendly and non-toxic.' },
        ] },
    ],
  },
  ajman: {
    key: 'ajman', cityName: 'Ajman', citySlug: 'sofa-cleaning-ajman',
    areas: [
      { slug: 'al-nuaimiya', name: 'Al Nuaimiya', short: 'Al Nuaimiya', propertyType: 'residential apartments',
        intro: 'Al Nuaimiya is a popular residential area in Ajman with many family apartment towers. Al Haya Sofa Care offers affordable at-home sofa shampoo, steam cleaning and stain removal across Al Nuaimiya — same-day available.',
        landmarks: ['Al Nuaimiya Towers', 'Ajman University', 'Nesto Hypermarket'],
        localNote: 'Family apartments in Al Nuaimiya benefit from a deep clean every 4–6 months to control dust and allergens.',
        faqs: [
          { q: 'Do you offer at-home sofa cleaning in Al Nuaimiya?', a: 'Yes — we bring all equipment to your home in Al Nuaimiya, with same-day slots available.' },
          { q: 'How much does it cost?', a: 'From AED 79 for shampooing and AED 99 for deep cleaning.' },
        ] },
      { slug: 'al-rashidiya', name: 'Al Rashidiya', short: 'Al Rashidiya', propertyType: 'apartments and villas',
        intro: 'Al Rashidiya is a central Ajman district of apartments and villas near the Corniche. Al Haya Sofa Care provides professional at-home sofa deep cleaning and leather care across Al Rashidiya.',
        landmarks: ['Ajman Corniche', 'City Centre Ajman', 'Al Rashidiya Towers'],
        localNote: 'Corniche-area humidity makes regular sofa cleaning worthwhile in Al Rashidiya.',
        faqs: [
          { q: 'Do you cover Al Rashidiya, Ajman?', a: 'Yes — at-home sofa cleaning across all Al Rashidiya apartments and villas.' },
          { q: 'Is leather cleaning available?', a: 'Yes, with pH-safe conditioning to protect leather from humidity.' },
        ] },
      { slug: 'al-jurf', name: 'Al Jurf', short: 'Al Jurf', propertyType: 'villas and family homes',
        intro: 'Al Jurf is a quieter Ajman community of villas and family homes near Ajman University. Al Haya Sofa Care offers at-home sofa deep cleaning, stain and pet-hair removal across Al Jurf.',
        landmarks: ['Ajman University', 'Al Jurf Industrial', 'China Mall Ajman'],
        localNote: 'Family villas in Al Jurf stay fresher with a deep clean every 3–4 months, especially with pets.',
        faqs: [
          { q: 'Do you serve Al Jurf villas?', a: 'Yes — at-home sofa cleaning for villas and family homes across Al Jurf.' },
          { q: 'Can you remove pet stains and hair?', a: 'Yes — deep pet-hair extraction and enzyme stain treatment included.' },
        ] },
      { slug: 'ajman-corniche', name: 'Ajman Corniche', short: 'Corniche', propertyType: 'beachfront apartments',
        intro: 'Ajman Corniche’s beachfront apartments enjoy sea views and salt-air humidity. Al Haya Sofa Care delivers fast-dry sofa deep cleaning and odor treatment to protect upholstery along the Ajman Corniche.',
        landmarks: ['Ajman Corniche', 'Ajman Beach', 'Kempinski Ajman', 'Corniche Towers'],
        localNote: 'Salt-air humidity along the Corniche calls for fast-dry cleaning every 4–6 months.',
        faqs: [
          { q: 'Do you cover Ajman Corniche apartments?', a: 'Yes — at-home sofa cleaning across all Corniche beachfront towers.' },
          { q: 'How do you handle humidity odors?', a: 'Our steam and deodorizing treatment neutralizes musty, humidity-related odors.' },
        ] },
    ],
  },
  'abu-dhabi': {
    key: 'abu-dhabi', cityName: 'Abu Dhabi', citySlug: 'sofa-cleaning-abu-dhabi',
    areas: [
      { slug: 'khalifa-city', name: 'Khalifa City', short: 'Khalifa City', propertyType: 'villas and family compounds',
        intro: 'Khalifa City is a spacious Abu Dhabi suburb of villas and family compounds. Al Haya Sofa Care provides at-home sofa deep cleaning, stain and pet-hair removal across Khalifa City A and B — ideal for large family sofas.',
        landmarks: ['Khalifa City A & B', 'Etihad Plaza', 'Safeer Mall', 'Abu Dhabi Airport road'],
        localNote: 'Large villa sofas in Khalifa City benefit from a deep clean every 4–6 months, more often with kids or pets.',
        faqs: [
          { q: 'Do you serve villas in Khalifa City?', a: 'Yes — at-home sofa cleaning for villas and compounds across Khalifa City A and B.' },
          { q: 'Can you clean large L-shaped sofas?', a: 'Yes — we handle all sizes including large L-shaped and 7-seater sofas.' },
        ] },
      { slug: 'al-reem-island', name: 'Al Reem Island', short: 'Al Reem', propertyType: 'high-rise waterfront apartments',
        intro: 'Al Reem Island’s high-rise waterfront towers face sea humidity that affects sofa fabric. Al Haya Sofa Care offers at-home sofa shampoo, steam cleaning and fast-dry extraction across Al Reem Island towers.',
        landmarks: ['Shams Abu Dhabi', 'Gate Towers', 'Sun & Sky Towers', 'Reem Mall'],
        localNote: 'Waterfront Al Reem apartments benefit from fast-dry cleaning every 4–6 months due to sea humidity.',
        faqs: [
          { q: 'Do you cover Al Reem Island towers?', a: 'Yes — at-home sofa cleaning across Shams, Gate Towers, Sun & Sky and all Al Reem towers.' },
          { q: 'How long until the sofa is dry?', a: 'With fast-dry extraction, your sofa is usually ready within 3–4 hours.' },
        ] },
      { slug: 'yas-island', name: 'Yas Island', short: 'Yas Island', propertyType: 'modern villas and apartments',
        intro: 'Yas Island’s modern villas and apartments are home to families near the leisure attractions. Al Haya Sofa Care provides professional at-home sofa deep cleaning and sanitization across Yas Island communities.',
        landmarks: ['Yas Mall', 'Yas Marina', 'Ferrari World', 'West Yas', 'Ansam'],
        localNote: 'Family homes on Yas Island stay hygienic with a deep clean and steam sanitization every 4–6 months.',
        faqs: [
          { q: 'Do you serve Yas Island villas and apartments?', a: 'Yes — at-home sofa cleaning across West Yas, Ansam, Mayan and all Yas Island communities.' },
          { q: 'Is steam sanitization available?', a: 'Yes — high-temperature steam that kills 99.9% of bacteria, ideal for families.' },
        ] },
      { slug: 'al-raha-beach', name: 'Al Raha Beach', short: 'Al Raha', propertyType: 'beachfront apartments',
        intro: 'Al Raha Beach offers waterfront apartments along the Abu Dhabi coast. Al Haya Sofa Care delivers fast-dry sofa deep cleaning and leather care that protects upholstery from salt-air humidity at Al Raha.',
        landmarks: ['Al Bandar', 'Al Zeina', 'Al Muneera', 'Al Raha Mall'],
        localNote: 'Beachfront Al Raha apartments benefit from fast-dry cleaning every 4–6 months.',
        faqs: [
          { q: 'Do you cover Al Raha Beach (Al Zeina, Al Muneera)?', a: 'Yes — at-home sofa cleaning across all Al Raha Beach communities.' },
          { q: 'Can you protect sofas from coastal humidity?', a: 'Yes — fast-dry extraction plus an optional protective coat repels humidity and stains.' },
        ] },
      { slug: 'mussafah', name: 'Mussafah', short: 'Mussafah', propertyType: 'residential and labour-camp housing',
        intro: 'Mussafah is a large residential and commercial district in Abu Dhabi. Al Haya Sofa Care offers affordable, reliable at-home sofa shampoo and deep cleaning across Mussafah’s residential communities.',
        landmarks: ['Mussafah Shabiya', 'ICAD', 'Mussafah Industrial', 'Mafraq'],
        localNote: 'Busy Mussafah homes benefit from regular professional cleaning to control dust and allergens.',
        faqs: [
          { q: 'Do you offer affordable sofa cleaning in Mussafah?', a: 'Yes — transparent pricing from AED 79, with at-home doorstep service in Mussafah.' },
          { q: 'Is same-day service available?', a: 'Yes — same-day slots are usually available in Mussafah.' },
        ] },
      { slug: 'al-khalidiyah', name: 'Al Khalidiyah', short: 'Khalidiyah', propertyType: 'central city apartments',
        intro: 'Al Khalidiyah is a central Abu Dhabi district of apartments near the Corniche. Al Haya Sofa Care provides professional at-home sofa deep cleaning, leather care and stain removal across Al Khalidiyah.',
        landmarks: ['Khalidiyah Mall', 'Abu Dhabi Corniche', 'Khalidiya Park'],
        localNote: 'Central Khalidiyah apartments collect city dust — a deep clean every 4–6 months keeps sofas fresh.',
        faqs: [
          { q: 'Do you serve Al Khalidiyah, Abu Dhabi?', a: 'Yes — at-home sofa cleaning across all Al Khalidiyah buildings with same-day availability.' },
          { q: 'Do you clean leather sofas?', a: 'Yes — specialist pH-safe leather cleaning and conditioning are available.' },
        ] },
    ],
  },
};

export const getEmirate = (key: string): EmirateConfig | undefined => emirates[key];
export const getArea = (emirateKey: string, slug: string): Area | undefined =>
  emirates[emirateKey]?.areas.find((a) => a.slug === slug);

export function buildAreaMetadata(emirateKey: string, slug: string): Metadata {
  const em = emirates[emirateKey];
  const area = getArea(emirateKey, slug);
  if (!em || !area) return {};
  const url = `${BASE}/${em.citySlug}/${slug}`;
  return {
    title: `Sofa Cleaning ${area.short}, ${em.cityName}`, // layout template appends brand
    description: `Professional sofa cleaning in ${area.name}, ${em.cityName} — at-home deep shampoo, steam cleaning, stain & pet-hair removal for ${area.propertyType}. Same-day from AED 79. Call +971547199189.`.slice(0, 158),
    keywords: [
      `sofa cleaning ${area.name}`,
      `sofa cleaning ${area.short}`,
      `sofa shampooing ${area.short} ${em.cityName}`,
      `sofa deep cleaning ${area.short}`,
      `upholstery cleaning ${area.short} ${em.cityName}`,
      `couch cleaning ${area.short}`,
      `leather sofa cleaning ${area.short}`,
      `same day sofa cleaning ${area.short}`,
      `sofa stain removal ${area.short} ${em.cityName}`,
      `at home sofa cleaning ${area.name}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `Sofa Cleaning ${area.name} | Al Haya Sofa Care UAE`,
      description: `At-home sofa deep shampoo & steam cleaning in ${area.name}, ${em.cityName}. Same-day, eco-friendly, from AED 79.`,
      url,
      type: 'website',
      images: [{ url: '/sofa-cleaning-dubai-professional.webp', width: 1200, height: 630, alt: `Sofa cleaning in ${area.name}, ${em.cityName} by Al Haya Sofa Care` }],
    },
  };
}
