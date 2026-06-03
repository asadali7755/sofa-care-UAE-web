/**
 * Dubai area sub-pages data — Phase 1 (content/local long-tail).
 * Each area gets a unique page at /sofa-cleaning-dubai/[slug] with genuinely
 * distinct copy (landmarks, property type, local FAQ) so no two pages are thin
 * duplicates. Targets high-intent local searches like "sofa cleaning Dubai Marina".
 */

export interface DubaiArea {
  slug: string;
  name: string;        // full display name, e.g. "Dubai Marina"
  short: string;       // short label, e.g. "Marina"
  propertyType: string;
  intro: string;       // 2–3 unique sentences
  landmarks: string[];
  localNote: string;
  faqs: { q: string; a: string }[];
}

export const dubaiAreas: DubaiArea[] = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    short: 'Marina',
    propertyType: 'high-rise waterfront apartments',
    intro:
      'Dubai Marina living means high-rise apartments where sea humidity and fine dust settle deep into sofa fabric. Al Haya Sofa Care brings professional deep shampoo & steam cleaning right to your tower — from Marina Diamonds and Princess Tower to JBR. No need to move furniture out; our team works on-site with quick-dry extraction.',
    landmarks: ['Marina Walk', 'Princess Tower', 'Marina Diamonds', 'Ocean Heights', 'JBR', 'Marina Promenade'],
    localNote:
      'Marina’s waterfront humidity speeds up fabric deterioration and odors — we recommend a professional sofa clean every 4–6 months for Marina apartments.',
    faqs: [
      { q: 'Do you provide sofa cleaning inside Dubai Marina towers?', a: 'Yes. Our mobile team brings all equipment to your apartment in any Marina tower — Princess Tower, Marina Diamonds, Ocean Heights and more. Same-day slots are usually available.' },
      { q: 'How long does a Marina apartment sofa clean take?', a: 'A standard 3-seater takes about 1–2 hours and is dry within 3–4 hours, so it fits easily into a busy Marina schedule.' },
    ],
  },
  {
    slug: 'jvc',
    name: 'JVC (Jumeirah Village Circle)',
    short: 'JVC',
    propertyType: 'family apartments, townhouses and villas',
    intro:
      'JVC is one of Dubai’s fastest-growing family communities — a mix of apartments, townhouses and villas where everyday use, kids and pets take a toll on sofas. Al Haya Sofa Care offers same-day at-home sofa deep shampoo, steam cleaning and stain removal across all JVC districts.',
    landmarks: ['Circle Mall', 'JVC District 10–16', 'Seasons Community', 'Plazzo Residence'],
    localNote:
      'Family homes in JVC with children or pets benefit from a deep clean every 3–4 months to control allergens and stains.',
    faqs: [
      { q: 'Do you cover all JVC districts for sofa cleaning?', a: 'Yes — we serve every JVC district (10 through 16 and beyond), covering apartments, townhouses and villas with the same at-home service.' },
      { q: 'Can you remove pet stains from sofas in JVC?', a: 'Absolutely. We use enzyme-based pet stain and odor treatments safe for fabric and leather, ideal for JVC’s many pet-owning families.' },
    ],
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    short: 'Business Bay',
    propertyType: 'high-rise apartments and offices',
    intro:
      'Business Bay’s mix of residential towers and offices means sofas and reception seating face heavy daily use. Al Haya Sofa Care provides professional sofa shampooing, steam sanitization and upholstery cleaning for both homes and offices across Business Bay — flexible timing to avoid disrupting your day.',
    landmarks: ['Bay Square', 'Executive Towers', 'The Opus', 'Business Bay Metro', 'Canal-side towers'],
    localNote:
      'For Business Bay offices, after-hours and weekend slots keep your workspace seating fresh without downtime.',
    faqs: [
      { q: 'Do you clean office sofas and reception seating in Business Bay?', a: 'Yes. We handle office reception sofas, waiting-area seating and meeting-room chairs in Business Bay, with flexible after-hours scheduling.' },
      { q: 'Is steam sanitization available in Business Bay?', a: 'Yes — high-temperature steam cleaning that kills 99.9% of bacteria is available for all Business Bay homes and offices.' },
    ],
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    short: 'Jumeirah',
    propertyType: 'luxury villas and beachfront homes',
    intro:
      'Jumeirah’s luxury villas and beachfront homes often feature premium fabrics and leather that need specialist care. Al Haya Sofa Care delivers gentle, pH-balanced deep cleaning and leather conditioning that protects high-end upholstery against coastal humidity and sun exposure.',
    landmarks: ['Jumeirah Beach Road', 'Mercato Mall', 'La Mer', 'Jumeirah 1–3'],
    localNote:
      'Beachfront homes in Jumeirah face salt-air humidity — regular professional care protects premium leather and fabric from cracking and musty odors.',
    faqs: [
      { q: 'Do you clean luxury leather sofas in Jumeirah?', a: 'Yes. We use specialist pH-safe leather cleaning and conditioning to protect premium leather sofas in Jumeirah villas from cracking and dryness.' },
      { q: 'Can you handle delicate fabrics like velvet and silk?', a: 'Yes — we use low-moisture techniques for velvet, silk and other delicate upholstery common in Jumeirah’s luxury homes.' },
    ],
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    short: 'Al Barsha',
    propertyType: 'villas and family apartments',
    intro:
      'Al Barsha is a popular residential hub of villas and family apartments near Mall of the Emirates. Al Haya Sofa Care provides affordable, same-day sofa deep cleaning, shampooing and stain removal across all Al Barsha communities — perfect for busy family homes.',
    landmarks: ['Mall of the Emirates', 'Al Barsha 1–3', 'Al Barsha South', 'Dubai Hills border'],
    localNote:
      'High-traffic family villas in Al Barsha benefit from a deep clean every 4–6 months to keep sofas hygienic and fresh.',
    faqs: [
      { q: 'Is same-day sofa cleaning available in Al Barsha?', a: 'Yes — we offer same-day at-home sofa cleaning across Al Barsha 1, 2, 3 and Al Barsha South. WhatsApp us to book a slot.' },
      { q: 'How much does sofa cleaning cost in Al Barsha?', a: 'Pricing starts from AED 79 for shampooing and AED 99 for deep cleaning, with at-home doorstep service included.' },
    ],
  },
  {
    slug: 'jlt',
    name: 'JLT (Jumeirah Lakes Towers)',
    short: 'JLT',
    propertyType: 'lakeside residential and office towers',
    intro:
      'JLT’s lakeside towers mix residents and businesses, and the lake-side humidity can trap moisture in upholstery over time. Al Haya Sofa Care serves all JLT clusters (A–Z) with professional sofa shampooing, steam cleaning and odor treatment for both apartments and offices.',
    landmarks: ['JLT Cluster A–Z', 'Almas Tower', 'Lake View Towers', 'DMCC', 'JLT Park'],
    localNote:
      'Lakeside humidity in JLT can cause musty sofa odors — professional steam cleaning every 4–6 months keeps upholstery fresh.',
    faqs: [
      { q: 'Which JLT clusters do you cover for sofa cleaning?', a: 'All of them — clusters A through Z. We regularly service residential and office towers across JLT with at-home and on-site cleaning.' },
      { q: 'Can you treat musty sofa odors caused by JLT humidity?', a: 'Yes. Our steam cleaning and deodorizing treatment neutralizes humidity-related odors at the source rather than masking them.' },
    ],
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    short: 'Downtown',
    propertyType: 'premium apartments and penthouses',
    intro:
      'Downtown Dubai’s premium apartments and penthouses — around Burj Khalifa and Dubai Mall — deserve meticulous upholstery care. Al Haya Sofa Care provides discreet, professional sofa deep cleaning and leather care for high-end Downtown residences, with eco-friendly products safe for luxury finishes.',
    landmarks: ['Burj Khalifa', 'Dubai Mall', 'The Address Residences', 'Opera District', 'Boulevard'],
    localNote:
      'High-end Downtown interiors warrant gentle, premium cleaning — we tailor every treatment to the fabric and finish.',
    faqs: [
      { q: 'Do you offer premium sofa cleaning in Downtown Dubai?', a: 'Yes. We provide careful, premium sofa deep cleaning and leather conditioning for Downtown apartments, penthouses and Address Residences.' },
      { q: 'Are your products safe for luxury upholstery?', a: 'Yes — all products are eco-friendly, non-toxic and pH-balanced, chosen specifically for the fabric or leather of each high-end piece.' },
    ],
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    short: 'Palm Jumeirah',
    propertyType: 'beachfront villas and luxury apartments',
    intro:
      'Palm Jumeirah’s beachfront villas and luxury apartments face constant salt-air humidity that’s tough on premium sofas. Al Haya Sofa Care offers specialist deep cleaning, fast-dry extraction and leather conditioning that protects high-value upholstery in Palm residences.',
    landmarks: ['Palm Jumeirah Crescent', 'Atlantis', 'Golden Mile', 'Shoreline Apartments', 'Palm Trunk'],
    localNote:
      'Salt-air humidity on the Palm accelerates fabric and leather wear — fast-dry professional cleaning every 4–6 months is ideal.',
    faqs: [
      { q: 'Do you serve villas and apartments on Palm Jumeirah?', a: 'Yes — we cover Shoreline Apartments, Golden Mile, and beachfront villas across the Palm Jumeirah trunk and fronds.' },
      { q: 'How do you protect sofas from Palm Jumeirah humidity?', a: 'We use fast-dry extraction to remove trapped moisture and offer a protective fabric coat to repel humidity and stains between cleans.' },
    ],
  },
];

export const getDubaiArea = (slug: string): DubaiArea | undefined =>
  dubaiAreas.find((a) => a.slug === slug);
