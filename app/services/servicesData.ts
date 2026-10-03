/**
 * Shared data for the /services page: 10 services written UAE-wide (all 7 emirates),
 * FAQ list and emirate link helpers. Used by ServicesClient (UI) and page.tsx (JSON-LD).
 * Every service has its own copy, keywords and primary emirate focus so no two
 * sections read like the same Dubai template.
 */

export const SITE = 'https://sofashampooingdubai.com';

export interface EmirateLink { key: string; name: string; slug: string }

export const EMIRATE_LINKS: EmirateLink[] = [
  { key: 'dubai', name: 'Dubai', slug: 'sofa-cleaning-dubai' },
  { key: 'abu-dhabi', name: 'Abu Dhabi', slug: 'sofa-cleaning-abu-dhabi' },
  { key: 'sharjah', name: 'Sharjah', slug: 'sofa-cleaning-sharjah' },
  { key: 'ajman', name: 'Ajman', slug: 'sofa-cleaning-ajman' },
  { key: 'ras-al-khaimah', name: 'Ras Al Khaimah', slug: 'sofa-cleaning-ras-al-khaimah' },
  { key: 'fujairah', name: 'Fujairah', slug: 'sofa-cleaning-fujairah' },
  { key: 'umm-al-quwain', name: 'Umm Al Quwain', slug: 'sofa-cleaning-umm-al-quwain' },
];

/** Anchor-text patterns — rotated per service so link text is never identical. */
const ANCHOR_PATTERNS: ((label: string, city: string) => string)[] = [
  (l, c) => `${l} ${c}`,
  (l, c) => `${l} in ${c}`,
  (l, c) => `${c} ${l} service`,
  (l, c) => `best ${l} ${c}`,
  (l, c) => `${l} company ${c}`,
  (l, c) => `affordable ${l} ${c}`,
  (l, c) => `${l} near me ${c}`,
];

export function serviceAreaLinks(index: number, label: string) {
  const n = EMIRATE_LINKS.length;
  return Array.from({ length: n }, (_, i) => {
    const e = EMIRATE_LINKS[(i + index * 2) % n];
    const pattern = ANCHOR_PATTERNS[(i + index) % ANCHOR_PATTERNS.length];
    return { href: `/${e.slug}`, text: pattern(label, e.name), emirate: e.name };
  });
}

export interface ServiceItem {
  id: string;
  name: string;           // schema / short name
  linkLabel: string;      // keyword used in area-link anchors
  badge: string;
  badgeColor: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  emColor?: string;
  desc1: string;
  desc2?: string;
  keywords: string[];
  priceLabel: string;
  price: string;
  timeLabel: string;
  time: string;
  waText: string;
  image: string;
  imageAlt: string;
  features: string[];
  flip: boolean;
  bg?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'deep-cleaning',
    name: 'Sofa Deep Cleaning & Steam Extraction',
    linkLabel: 'sofa deep cleaning',
    badge: 'Most Popular',
    badgeColor: 'var(--accent)',
    titlePre: 'Sofa Deep Cleaning & ',
    titleEm: 'Steam Extraction',
    titlePost: ' Across the UAE',
    emColor: 'var(--accent)',
    desc1: "Fine desert dust does not stay on the surface of a sofa anywhere in the UAE — it works into the fibres in Abu Dhabi's sandy suburbs just as it does in Dubai high-rises and Sharjah family flats. Al Haya's industrial extraction pulls out embedded dust, dust mites and allergens, and pH-tested steam sanitises the fabric afterwards.",
    desc2: "We pair eco-friendly shampoo that breaks down body oils and grease with high-temperature steam that reaches deep into the cushions. The same method is used for homes in Dubai, Abu Dhabi, Sharjah and Ajman as well as villas in Ras Al Khaimah, Fujairah and Umm Al Quwain.",
    keywords: ['sofa deep cleaning Abu Dhabi', 'steam sofa cleaning Dubai', 'couch deep clean Sharjah', 'allergen removal sofa UAE', 'professional sofa cleaning near me'],
    priceLabel: 'Starting Price',
    price: 'AED 50 / seat',
    timeLabel: 'Service Time',
    time: '1.5 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20sofa%20deep%20cleaning.%20Please%20share%20availability%20in%20my%20emirate.',
    image: '/home/sofa-deep-cleaning.webp',
    imageAlt: 'Technician steam-extracting a fabric sofa — professional sofa deep cleaning across UAE by Al Haya Sofa Care',
    features: ['Industrial power vacuuming', 'Allergen & bacteria extraction', 'Deep stain treatment', 'pH-steam sanitization', 'Fabric protection coat', 'Eco-friendly agents', 'All fabric types safe', 'At-home service'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'shampooing',
    name: 'Professional Sofa Shampooing',
    linkLabel: 'sofa shampooing',
    badge: 'Fast-Dry Formula',
    badgeColor: '#06B6D4',
    titlePre: 'Professional ',
    titleEm: 'Sofa Shampooing',
    titlePost: ' in Sharjah, Dubai & Ajman',
    emColor: 'var(--accent)',
    desc1: "Foam shampoo goes deep into the fabric and lifts the dirt, grime and skin oils that vacuuming alone never touches. It is the most requested refresh for fabric sofas in Sharjah and Ajman apartments, where families use the majlis and living room every day.",
    desc2: "Our technicians inspect the fabric, spot-treat stains and shampoo in place — no need to move furniture or carry the sofa out. Fast-drying results suit busy households from Dubai Marina to Al Nuaimiya, Muwaileh and beyond.",
    keywords: ['sofa shampooing Sharjah', 'couch cleaning Ajman', 'sofa dry cleaning Dubai', 'eco-friendly sofa shampoo UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 40 / seat',
    timeLabel: 'Dry Time',
    time: '2 – 4 hrs',
    waText: 'Hi%2C%20I%20need%20sofa%20shampooing.%20Can%20you%20come%20to%20my%20area%3F',
    image: '/home/sofa-shampoo.webp',
    imageAlt: 'Foam shampoo being applied to a fabric sofa — sofa shampooing service in Sharjah, Dubai and Ajman',
    features: ['pH-balanced shampoo', 'Oil & grease breakdown', 'Fast-dry technology', 'Sanitization included', 'Deodorizing treatment', 'No fading guarantee', 'Pet hair removal', 'No furniture moving'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'stain-removal',
    name: 'Sofa Stain Removal',
    linkLabel: 'sofa stain removal',
    badge: 'Specialist',
    badgeColor: '#FF5A3C',
    titlePre: 'Professional ',
    titleEm: 'Sofa Stain Removal',
    titlePost: ' in Abu Dhabi & UAE',
    emColor: '#FF5A3C',
    desc1: "Karak tea, Arabic coffee, ink, wine and food spills are part of daily life in UAE homes — and a fresh stain on a light fabric sofa in Abu Dhabi or Dubai does not wait. Our specialist formula penetrates the fibres and works on set-in marks without damaging the fabric.",
    desc2: "The technician identifies the stain type and fabric first, then chooses a pH-matched treatment so there is no ring, bleaching or dye run. Booked across Abu Dhabi, Dubai, Sharjah, Ajman and the northern emirates.",
    keywords: ['stain removal Abu Dhabi', 'karak tea stain sofa', 'coffee stain removal Dubai', 'ink stain sofa Sharjah', 'pet stain removal Ajman'],
    priceLabel: 'Starting Price',
    price: 'AED 100',
    timeLabel: 'Service Time',
    time: '30 – 60 min',
    waText: 'Hi%2C%20I%20need%20stain%20removal%20for%20my%20sofa.%20Which%20emirates%20do%20you%20cover%3F',
    image: '/home/sofa-stain-removal-dubai.webp',
    imageAlt: 'Specialist removing a coffee stain from a light sofa — sofa stain removal Abu Dhabi, Dubai and UAE',
    features: ['Coffee & karak tea stains', 'Ink & dye removal', 'Food & grease stains', 'Wine & juice stains', 'Old set-in stains', 'Blood & protein stains', 'No discoloration', 'All fabric types'],
    flip: false,
    bg: 'var(--bg-raised)',
  },
  {
    id: 'leather-cleaning',
    name: 'Leather Sofa Cleaning & Conditioning',
    linkLabel: 'leather sofa cleaning',
    badge: 'Premium',
    badgeColor: '#8B5CF6',
    titlePre: 'Leather Sofa ',
    titleEm: 'Cleaning & Conditioning',
    titlePost: ' — Ras Al Khaimah, Dubai & UAE',
    emColor: '#8B5CF6',
    desc1: "Leather suffers in UAE homes in two ways: dry AC air that cracks it and strong sun through large windows that fades it. In Ras Al Khaimah villas facing the Hajar mountains and in Dubai apartments with full-height glass, the damage shows up within a couple of years if the leather is never conditioned.",
    desc2: "We deep clean with a pH-safe leather cleaner, replace the lost moisture with a conditioning treatment and finish with a protective coat. Suitable for aniline, semi-aniline and finished leather — the technician tests a hidden spot first.",
    keywords: ['leather sofa cleaning Ras Al Khaimah', 'leather couch cleaning Dubai', 'leather conditioning UAE', 'leather sofa care Abu Dhabi'],
    priceLabel: 'Starting Price',
    price: 'AED 50 / seat',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20leather%20sofa%20cleaning%20and%20conditioning.',
    image: '/home/leather-sofa-cleaning-dubai.webp',
    imageAlt: 'Conditioning a leather sofa to stop cracking — leather sofa cleaning in Ras Al Khaimah, Dubai and across UAE',
    features: ['pH-safe leather cleaner', 'Deep conditioning treatment', 'Crack & peel prevention', 'Stain & scuff removal', 'UV fade protection', 'Protective coat finish', 'Colour restoration', 'Patch test first'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'odor-treatment',
    name: 'Sofa Odor Treatment',
    linkLabel: 'sofa odor removal',
    badge: 'Freshness',
    badgeColor: '#0891B2',
    titlePre: 'Sofa ',
    titleEm: 'Odor Removal',
    titlePost: ' in Fujairah, Sharjah & UAE',
    emColor: '#0891B2',
    desc1: "Coastal humidity is the real enemy of a fresh-smelling sofa. On the east coast in Fujairah and Khor Fakkan, and along the Sharjah and Ajman corniches, moist air keeps odours trapped in the foam and fibres long after the spill has dried.",
    desc2: "Our eco-friendly deodorisers neutralise pet, smoke, food and damp odours at the source rather than covering them with perfume. Ideal after a rental handover, a flood of guests, or a long summer with the AC running on low.",
    keywords: ['sofa odor removal Fujairah', 'couch smell removal Sharjah', 'pet odor sofa Ajman', 'smoke smell sofa UAE', 'musty sofa smell fix'],
    priceLabel: 'Starting Price',
    price: 'AED 59',
    timeLabel: 'Service Time',
    time: '1 – 2 hrs',
    waText: 'Hi%2C%20my%20sofa%20has%20a%20bad%20smell.%20Do%20you%20offer%20odor%20treatment%20in%20my%20area%3F',
    image: '/home/sofa-odor-treatment-dubai.webp',
    imageAlt: 'Deodorizing treatment on a sofa — sofa odor removal in Fujairah, Sharjah and across the UAE',
    features: ['Pet odor elimination', 'Smoke & cigarette odors', 'Food & cooking odors', 'Moisture & mold odors', 'Anti-bacterial treatment', 'Long-lasting freshness', 'Eco-friendly formula', 'Humidity-proof result'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair Removal from Sofas',
    linkLabel: 'pet hair removal sofa',
    badge: 'Pet-Friendly',
    badgeColor: '#1D6A5B',
    titlePre: 'Pet Hair ',
    titleEm: 'Removal',
    titlePost: ' for Sofas in Dubai, Ajman & Abu Dhabi',
    emColor: '#1D6A5B',
    desc1: "Cats and dogs are everywhere in Ajman villas, Abu Dhabi family compounds and Dubai townhouses — and their hair weaves itself into upholstery where a household vacuum cannot reach. We remove it from every cushion, seam and corner with specialised vacuum and roller tools.",
    desc2: "The visit includes an anti-allergen treatment that is safe for pets and children, plus a light deodorising pass so the sofa smells clean as well as looking clean.",
    keywords: ['pet hair removal sofa Ajman', 'dog hair sofa cleaning Abu Dhabi', 'cat hair couch Dubai', 'pet dander removal UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 39',
    timeLabel: 'Service Time',
    time: '45 – 90 min',
    waText: 'Hi%2C%20I%20need%20pet%20hair%20removed%20from%20my%20sofa.',
    image: '/home/pet-hair-removal-sofa-dubai.webp',
    imageAlt: 'Removing embedded pet hair from sofa cushions — pet hair removal in Ajman, Dubai and Abu Dhabi',
    features: ['Deep pet hair extraction', 'Anti-allergen treatment', 'Safe for all fabrics', 'Deodorizing included', 'Seam & corner cleaning', 'Post-treatment sanitization', 'Child & pet safe', 'At-home service'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'sanitization',
    name: 'Sofa Sanitization & Disinfection',
    linkLabel: 'sofa sanitization',
    badge: 'Hygienic',
    badgeColor: '#059669',
    titlePre: 'Sofa ',
    titleEm: 'Sanitization',
    titlePost: ' & Disinfection in Umm Al Quwain, Ajman & UAE',
    emColor: '#059669',
    desc1: "Sofas collect more germs than most people expect — especially in family homes in Umm Al Quwain, Ajman and Sharjah where several generations share one living space. High-temperature steam and disinfectant reach the bacteria and mites living deep in the padding.",
    desc2: "The solutions used are gentle on children, pets and allergy sufferers. Popular after illness, before a new baby arrives, ahead of Ramadan guests and Eid gatherings, and as a seasonal reset for rental properties.",
    keywords: ['sofa sanitization Umm Al Quwain', 'sofa disinfection Ajman', 'bacteria removal couch Sharjah', 'allergy sofa cleaning UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 49',
    timeLabel: 'Service Time',
    time: '30 – 60 min',
    waText: 'Hi%2C%20I%20need%20sofa%20sanitization%20and%20disinfection.',
    image: '/home/sofa-sanitization-dubai.webp',
    imageAlt: 'Steam sanitizing a family sofa — sofa sanitization and disinfection in Umm Al Quwain, Ajman and UAE',
    features: ['Bacteria & germ kill', 'Child & pet safe formula', 'Dust-mite reduction', 'No harsh chemicals', 'Allergy sufferer safe', 'High-temp steam', 'Ramadan & Eid ready', 'At-home service'],
    flip: false,
    bg: 'var(--bg-raised)',
  },
  {
    id: 'velvet-microfiber',
    name: 'Velvet & Microfiber Sofa Cleaning',
    linkLabel: 'velvet sofa cleaning',
    badge: 'Delicate Care',
    badgeColor: '#EC4899',
    titlePre: 'Velvet & Microfiber ',
    titleEm: 'Sofa Cleaning',
    titlePost: ' in Abu Dhabi, Dubai & Sharjah',
    emColor: '#EC4899',
    desc1: "Velvet is everywhere in modern UAE living rooms, from Saadiyat and Yas villas to Dubai Hills and Sharjah's Al Majaz towers — and it is one of the easiest fabrics to ruin with the wrong cleaner. Water marks, crushed pile and shrinkage are common after DIY attempts.",
    desc2: "Our low-moisture technique lifts dirt without soaking the pile, then brushes the nap back into direction. Microfiber and suede get the same careful treatment with tools that reach every curve of sculptural sofa designs.",
    keywords: ['velvet sofa cleaning Abu Dhabi', 'microfiber couch clean Dubai', 'suede sofa Sharjah', 'delicate fabric sofa cleaning UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 99',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20velvet%20or%20microfiber%20sofa%20cleaning.',
    image: '/home/velvet-microfiber-sofa-cleaning.webp',
    imageAlt: 'Low-moisture cleaning of a velvet sofa — velvet and microfiber sofa cleaning in Abu Dhabi, Dubai and Sharjah',
    features: ['Velvet-safe technique', 'Microfiber deep clean', 'Suede restoration', 'Pile direction restored', 'No shrinkage guarantee', 'No fading guarantee', 'Low-moisture method', 'Specialist tools'],
    flip: true,
    bg: 'var(--bg-elev)',
  },
  {
    id: 'fabric-protection',
    name: 'Sofa Fabric Protection Coat',
    linkLabel: 'sofa fabric protection',
    badge: 'Protection',
    badgeColor: '#3B82F6',
    titlePre: 'Fabric ',
    titleEm: 'Protection',
    titlePost: ' Coat — Fujairah, RAK & All UAE',
    emColor: '#3B82F6',
    desc1: "An invisible protective coat repels spills and dust so the next accident wipes off instead of soaking in. It is especially useful in homes near the coast and in the mountain areas of Fujairah and Ras Al Khaimah, where fine dust and humidity are both part of the year.",
    desc2: "Best applied straight after a deep clean while the fibres are open and fresh. The coating does not change the texture or colour, and a protected sofa stays easier to keep clean between professional visits.",
    keywords: ['sofa fabric protection Fujairah', 'sofa stain protection Ras Al Khaimah', 'scotchgard sofa Dubai', 'sofa shield coating UAE'],
    priceLabel: 'Starting Price',
    price: 'AED 69',
    timeLabel: 'Service Time',
    time: '30 – 45 min',
    waText: 'Hi%2C%20I%20need%20fabric%20protection%20for%20my%20sofa.',
    image: '/home/sofa-fabric-protection-dubai.webp',
    imageAlt: 'Applying a protective coat to a sofa — sofa fabric protection in Fujairah, Ras Al Khaimah and UAE',
    features: ['Invisible stain shield', 'Spill repellent coating', 'UV fade protection', 'Dust repellent barrier', 'Long-lasting protection', 'Safe for all fabrics', 'No texture change', 'Add-on to deep clean'],
    flip: false,
    bg: undefined,
  },
  {
    id: 'ikea-lshape',
    name: 'IKEA L-Shape Sofa Cleaning',
    linkLabel: 'IKEA sofa cleaning',
    badge: 'IKEA Special',
    badgeColor: '#0058A3',
    titlePre: 'IKEA ',
    titleEm: 'L-Shape Sofa',
    titlePost: ' Cleaning Across UAE',
    emColor: 'var(--accent)',
    desc1: "IKEA L-shape sofas furnish thousands of flats and villas from Dubai to Sharjah, Ajman and Abu Dhabi — but their size and multi-section design make them hard to clean evenly at home. We cover every corner, seam, cushion and armrest.",
    desc2: "Our team knows the common IKEA fabric ranges including KIVIK, EKTORP, VIMLE and FRIHETEN. Removable covers and fixed upholstery are handled differently, with safe cleaning agents and a fast-dry finish at your doorstep.",
    keywords: ['IKEA sofa cleaning Dubai', 'L-shape sofa cleaning Sharjah', 'IKEA KIVIK cleaning Abu Dhabi', 'IKEA EKTORP cleaning Ajman'],
    priceLabel: 'Fixed Price',
    price: 'AED 150',
    timeLabel: 'Service Time',
    time: '2 – 3 hrs',
    waText: 'Hi%2C%20I%20need%20IKEA%20L-shape%20sofa%20cleaning.',
    image: '/L-shape/ikea-lshape-clean.webp',
    imageAlt: 'Clean IKEA L-shape sofa after professional cleaning — IKEA sofa cleaning across Dubai, Sharjah, Ajman and Abu Dhabi',
    features: ['Full L-shape coverage', 'All IKEA fabric types', 'Corner & seam deep clean', 'Allergen & dust extraction', 'Sanitization included', 'Fast-dry formula', 'Deodorizing treatment', 'At-home service'],
    flip: true,
    bg: 'var(--bg-raised)',
  },
];

export const SERVICE_FAQS: { q: string; a: string }[] = [
  {
    q: 'Which emirates do you provide sofa cleaning in?',
    a: 'We clean sofas at your home across all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Each emirate has its own page listing the areas we cover — message us on WhatsApp with your area to confirm the next available slot.',
  },
  {
    q: 'How much does sofa cleaning cost in the UAE?',
    a: 'Starting prices are AED 40 per seat for shampooing, AED 50 per seat for deep cleaning and leather care, AED 100 for stain removal, AED 59 for odor treatment and AED 150 for an IKEA L-shape sofa. The final quote depends on sofa size, fabric and condition, and the service is done at your home with no hidden fees.',
  },
  {
    q: 'Do you travel to Ras Al Khaimah, Fujairah and Umm Al Quwain?',
    a: 'Yes. Our teams cover the northern and east-coast emirates as well as Dubai and Abu Dhabi. Same-day slots depend on technician availability in your area, so WhatsApp or call us with your location and we will confirm timing.',
  },
  {
    q: 'How often should I professionally clean my sofa in the UAE?',
    a: 'Every 6 to 12 months is a good rule. Coastal homes in Fujairah, Ajman and Sharjah deal with more humidity, inland and desert-edge homes in Abu Dhabi and Ras Al Khaimah collect more fine dust, and homes with pets or small children benefit from a 6-month cycle.',
  },
  {
    q: 'Is professional sofa cleaning safe for all sofa materials?',
    a: 'Yes. Our technicians inspect the fabric and test a hidden spot before choosing a cleaner. We use pH-neutral solutions for delicate natural fibres such as wool, silk and linen, and low-moisture methods for velvet and microfiber.',
  },
  {
    q: 'Will deep cleaning remove bad odors from my sofa?',
    a: 'Yes. Our eco-friendly deodorisers neutralise pet, smoke, food and damp odours at the source rather than masking them. This matters most in humid coastal areas where smells settle deep into the foam.',
  },
  {
    q: 'How long does my sofa take to dry?',
    a: 'Most fabric sofas are dry in 2 to 4 hours thanks to low-moisture shampooing and high-velocity air movers, so the living room is usable the same day. Velvet and thick cushions can take a little longer.',
  },
  {
    q: 'Do I need to move the furniture or be at home?',
    a: 'No need to move furniture — our team works on-site with portable equipment. Someone should be available to give access to the property, and building permits or concierge rules are handled around your schedule.',
  },
];
