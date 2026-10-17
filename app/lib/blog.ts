/**
 * Blog posts — Phase 1 (authority + informational + AI visibility).
 * UAE/Dubai sofa-cleaning buyer questions that rank for informational searches
 * and get quoted by AI assistants. Each post links to relevant area/city pages.
 *
 * Oct 2026 consolidation: the near-duplicate generated posts were merged into one
 * pillar per topic. Retired slugs 301 to their pillar via `retiredBlogSlugs`
 * (wired into next.config.ts) and are filtered out here if they ever reappear.
 */
export interface BlogSection { heading: string; body?: string[]; bullets?: string[]; }
export interface BlogCostRow { label: string; price: string; }
export interface BlogPost {
  slug: string;
  title: string;        // SEO title (layout template appends brand)
  h1: string;
  description: string;  // meta description (<=158)
  excerpt: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  readMins: number;
  intro: string[];
  sections: BlogSection[];
  costTable?: { title: string; rows: BlogCostRow[]; note?: string };
  faqs: { q: string; a: string }[];
  /** Section id on /services (see app/services/servicesData.ts) */
  relatedService?: string;
  /** Emirate key ("dubai") or "emirate/area-slug" ("dubai/jvc") from app/lib/areas.ts */
  relatedAreas?: string[];
  /** Slugs of related blog posts */
  relatedPosts?: string[];
}

import generatedPosts from './generated-blog-posts.json'

/**
 * Retired blog slugs → permanent (301) redirect destination.
 * Merged into a pillar post, or into the Dubai city page for generic
 * "sofa cleaning Dubai" posts that competed with it.
 */
export const retiredBlogSlugs: Record<string, string> = {
  // Generic "sofa cleaning Dubai" posts → city page
  'sofa-cleaning-dubai-guide': '/sofa-cleaning-dubai',
  'sofa-cleaning-dubai-eco': '/sofa-cleaning-dubai',
  'sofa-cleaning-dubai-offers': '/sofa-cleaning-dubai',
  'sofa-cleaning-services-dubai': '/sofa-cleaning-dubai',
  'sofa-cleaner-dubai-guide': '/sofa-cleaning-dubai',
  'couch-cleaning-dubai-guide': '/sofa-cleaning-dubai',
  // Shampooing / upholstery guides → shampooing pillar
  'sofa-shampooing-dubai': '/blog/sofa-shampooing-dubai-emirates',
  'sofa-shampooing-dubai-guide': '/blog/sofa-shampooing-dubai-emirates',
  'sofa-shampooing-dubai-best-choice': '/blog/sofa-shampooing-dubai-emirates',
  'sofa-shampooing-dubai-abu-dhabi': '/blog/sofa-shampooing-dubai-emirates',
  'upholstery-cleaning-dubai-guide': '/blog/sofa-shampooing-dubai-emirates',
  // IKEA
  'ikea-sofa-cleaning-deals-dubai': '/blog/ikea-sofa-cleaning-dubai-home-service',
  'ikea-sofa-cleaning-dubai-best-price': '/blog/ikea-sofa-cleaning-dubai-home-service',
  'ikea-sofa-cleaning-dubai-deal': '/blog/ikea-sofa-cleaning-dubai-home-service',
  // Stains
  'remove-sofa-stains-guide': '/blog/stain-removal-dubai-guide',
  'stain-removal-dubai-office': '/blog/stain-removal-dubai-guide',
  'stain-removal-dubai-alcohol': '/blog/stain-removal-dubai-guide',
  'sofa-stain-removal-dubai-contact': '/blog/stain-removal-dubai-guide',
  // Leather
  'leather-sofa-care-dubai': '/blog/leather-sofa-cleaning-dubai',
  'leather-sofa-cleaning-dubai-abu-dhabi': '/blog/leather-sofa-cleaning-dubai',
  'leather-sofa-cleaning-dubai-price': '/blog/leather-sofa-cleaning-dubai',
  // Pets
  'remove-pet-hair-smell-sofa-dubai': '/blog/pet-hair-removal-sofa-dubai',
  'pet-hair-removal-sofa-dubai-price': '/blog/pet-hair-removal-sofa-dubai',
  'pet-hair-removal-sofa-dubai-abu-dhabi': '/blog/pet-hair-removal-sofa-dubai',
  // Velvet & microfiber
  'velvet-microfiber-sofa-care': '/blog/velvet-sofa-cleaning-dubai',
  'velvet-sofa-cleaning-dubai-price': '/blog/velvet-sofa-cleaning-dubai',
  // Sanitization & odor
  'sofa-sanitization-dubai-guide': '/blog/sofa-sanitization-dubai',
  'sofa-sanitization-dubai-cost': '/blog/sofa-sanitization-dubai',
  'sofa-sanitization-dubai-hills': '/blog/sofa-sanitization-dubai',
  'sofa-sanitization-dubai-business-bay': '/blog/sofa-sanitization-dubai',
  'sofa-odor-removal-dubai-hills': '/blog/sofa-sanitization-dubai',
  'sofa-odor-removal-dubai-area': '/blog/sofa-sanitization-dubai',
  'sofa-odor-removal-dubai-price': '/blog/sofa-sanitization-dubai',
  // Fabric protection (incl. off-geo Doha post)
  'protect-sofa-from-dubai-dust': '/blog/fabric-protection-dubai-deals',
  'fabric-protection-dubai-expo': '/blog/fabric-protection-dubai-deals',
  'fabric-protection-dubai-doha-guide': '/blog/fabric-protection-dubai-deals',
}

const handWrittenBlogPosts: BlogPost[] = [
  {
    slug: 'sofa-cleaning-cost-dubai',
    title: 'How Much Does Sofa Cleaning Cost in Dubai?',
    h1: 'How Much Does Sofa Cleaning Cost in Dubai?',
    description: 'What affects sofa cleaning cost in Dubai — by seater, fabric vs leather — and how to get a free quote. At-home service at affordable rates.',
    excerpt: 'What affects sofa cleaning cost in Dubai — by seater, fabric vs leather — and how to get a free quote.',
    image: '/sofa-cleaning-dubai-professional.webp',
    datePublished: '2026-06-03',
    dateModified: '2026-10-17',
    readMins: 6,
    relatedService: 'deep-cleaning',
    relatedAreas: ['dubai', 'abu-dhabi'],
    relatedPosts: ['sofa-shampooing-dubai-emirates', 'how-often-clean-sofa-uae', 'leather-sofa-cleaning-dubai'],
    intro: [
      'If you are searching for sofa cleaning in Dubai, the first question is usually about price. The honest answer: it depends on the number of seats, the fabric type, and how deep the cleaning needs to be. This guide explains what drives the price so you know what to expect before booking.',
      'At Al Haya Sofa Care, pricing is transparent with no hidden charges, and every quote is free on WhatsApp. Here is how sofa cleaning is typically priced across Dubai.',
    ],
    sections: [
      { heading: 'What affects the price?', body: ['Three things mainly decide your final price:'], bullets: [
        'Size — a single armchair costs far less than a large L-shaped or 7-seater sofa.',
        'Material — fabric is standard; leather, velvet and suede need specialist care and cost more.',
        'Condition — heavy stains, pet odors or years of embedded dust take longer.',
      ] },
      { heading: 'Fabric vs leather', body: [
        'Fabric sofas are cleaned with hot-water extraction (shampoo + steam) that lifts dust, allergens and stains from deep in the fibres. Leather needs a gentler pH-balanced clean plus conditioning so it does not dry out or crack in Dubai’s heat — which is why leather sits at the higher end of the range.',
      ] },
      { heading: 'Extras that can change the quote', bullets: [
        'Heavy or set-in stains that need individual pre-treatment',
        'Pet urine or strong odors that need enzyme treatment',
        'Steam sanitization for homes with babies, pets or allergies',
        'A fabric protection coat after the clean',
        'Extra pieces such as cushions, dining chairs, ottomans or majlis seating',
      ] },
      { heading: 'Homes vs offices', body: [
        'Homes are usually quoted per sofa or per seat. Offices, clinics and rentals with many identical chairs or sofas are normally quoted for the whole job, and visits can be scheduled outside working hours so nothing is disrupted.',
      ] },
      { heading: 'Questions to ask before you book', bullets: [
        'Is the quote all-inclusive, with no call-out or equipment charges?',
        'Which method will be used for my fabric, and will you patch-test first?',
        'Are stain treatment and deodorizing included or extra?',
        'How long will the sofa take to dry?',
        'What happens if a stain is still visible afterwards?',
      ] },
      { heading: 'How to get an accurate quote fast', body: [
        'Send a photo of your sofa on WhatsApp with the number of seats, the fabric (if you know it) and any stains or odors you want treated. That is usually enough for a clear, free quote — and same-day slots are often available.',
      ] },
      { heading: 'How long until it’s dry?', body: [
        'With high-suction extraction, most fabric sofas are dry and usable within 2–4 hours — convenient for busy Dubai apartments and villas.',
      ] },
    ],
    faqs: [
      { q: 'Is professional sofa cleaning worth it in Dubai?', a: 'Yes. Dubai’s fine dust and humidity trap allergens deep in upholstery that home vacuuming cannot reach. Professional extraction removes dust mites, stains and odors and extends your sofa’s life.' },
      { q: 'Do you clean the sofa at home?', a: 'Yes — we bring all equipment to your home anywhere in Dubai. No need to move the sofa out, and same-day service is usually available.' },
      { q: 'Are there any hidden charges?', a: 'No. The quote you receive on WhatsApp is the price you pay; anything extra, such as fabric protection, is agreed with you before we start.' },
      { q: 'Do I need to prepare anything before the team arrives?', a: 'Just clear small items off and around the sofa and make sure we can reach a power socket. There is no need to move furniture.' },
      { q: 'Can you guarantee old stains like red wine or pet urine will come out?', a: 'No honest cleaner can guarantee every stain. Many set-in stains lift with professional treatment; some can only be lightened. We tell you what to expect before we start.' },
      { q: 'Do you clean majlis seating and dining chairs?', a: 'Yes. Majlis seating, floor cushions, dining chairs and ottomans can be cleaned in the same visit — just include them when you ask for a quote.' },
    ],
  },
  {
    slug: 'how-often-clean-sofa-uae',
    title: 'How Often Should You Clean Your Sofa in the UAE?',
    h1: 'How Often Should You Clean Your Sofa in the UAE?',
    description: 'Dubai’s dust and humidity mean sofas need cleaning more often than you think. Here’s how often to deep-clean your sofa in the UAE — by household type.',
    excerpt: 'A simple schedule for how often to deep-clean your sofa in the UAE’s dusty, humid climate.',
    image: '/home/sofa-odor-treatment-dubai.webp',
    datePublished: '2026-06-03',
    readMins: 4,
    relatedService: 'deep-cleaning',
    relatedAreas: ['dubai/dubai-marina', 'sharjah'],
    relatedPosts: ['fabric-protection-dubai-deals', 'sofa-sanitization-dubai', 'sofa-shampooing-dubai-emirates'],
    intro: [
      'The UAE’s environment is hard on sofas. Frequent dust, sandstorms and high humidity push fine particles and moisture deep into upholstery — so sofas here need professional attention more often than in cooler, drier climates. Here is a practical schedule.',
    ],
    sections: [
      { heading: 'Recommended frequency', bullets: [
        'Most homes — a professional deep clean every 6–12 months.',
        'Homes with kids or pets — every 3–4 months to control allergens, hair and stains.',
        'High-humidity / waterfront apartments — every 4–6 months to prevent musty odors.',
        'Spot-treat spills immediately — the longer a stain sits, the harder it is to remove.',
      ] },
      { heading: 'Why more often than elsewhere?', body: [
        'Fine desert dust acts like sandpaper, grinding down fabric fibres every time you sit. Humidity then traps that grime and moisture inside cushions, leading to odors and dust mites. Regular professional cleaning removes what vacuuming cannot — protecting both your health and your furniture.',
      ] },
      { heading: 'Signs it’s time to book', bullets: [
        'Visible dullness, stains or flattened cushions',
        'A musty smell that returns after airing the room',
        'Increased sneezing or skin irritation indoors',
        'It has simply been more than 6 months',
      ] },
    ],
    faqs: [
      { q: 'Does humidity really affect my sofa in the UAE?', a: 'Yes. Humidity lets moisture and dust settle deep into upholstery, encouraging dust mites and musty odors. Professional steam extraction removes trapped moisture and allergens.' },
      { q: 'Can regular cleaning extend my sofa’s life?', a: 'Absolutely. Removing abrasive dust particles stops them cutting the fabric fibres, noticeably extending the life and look of your sofa.' },
    ],
  },
  {
    slug: 'sofa-shampoo-vs-steam-cleaning',
    title: 'Sofa Shampoo vs Steam Cleaning: Which Is Better?',
    h1: 'Sofa Shampoo vs Steam Cleaning: Which Is Better?',
    description: 'Confused between sofa shampoo cleaning and steam cleaning? Here’s the difference, when to use each, and why combining both gives the best results in Dubai.',
    excerpt: 'The real difference between sofa shampoo and steam cleaning — and which your sofa actually needs.',
    image: '/home/sofa-shampoo.webp',
    datePublished: '2026-06-03',
    readMins: 4,
    relatedService: 'shampooing',
    relatedAreas: ['dubai', 'dubai/al-barsha'],
    relatedPosts: ['sofa-shampooing-dubai-emirates', 'sofa-sanitization-dubai', 'velvet-sofa-cleaning-dubai'],
    intro: [
      'Two methods dominate professional sofa cleaning: shampoo (foam) cleaning and steam cleaning. They do different jobs, and the best result often combines both. Here’s how to choose.',
    ],
    sections: [
      { heading: 'Sofa shampoo cleaning', body: [
        'pH-balanced foam shampoo is worked into the fabric to break down oils, grease and embedded dirt, then extracted. It’s ideal for general deep cleaning and lifting heavy soiling — and with fast-dry formulas the sofa is usable within a few hours.',
      ] },
      { heading: 'Sofa steam cleaning', body: [
        'High-temperature steam penetrates deep into cushions to sanitize, killing bacteria and dust mites without harsh chemicals. It’s ideal for hygiene-focused cleaning and homes with babies, pets or allergy sufferers.',
      ] },
      { heading: 'Which should you choose?', bullets: [
        'Heavy stains & general grime → shampoo cleaning',
        'Hygiene, allergies, pets, babies → steam cleaning',
        'Best overall result → combine both (what we usually recommend)',
        'Delicate velvet/silk → low-moisture methods only',
      ] },
    ],
    faqs: [
      { q: 'Can you combine shampoo and steam cleaning?', a: 'Yes — combining shampoo cleaning to lift dirt with steam to sanitize gives the most thorough result, which is what Al Haya Sofa Care usually recommends.' },
      { q: 'Is steam cleaning safe for all sofas?', a: 'Steam suits most fabric sofas. For delicate velvet, silk or some leathers we use low-moisture or pH-safe methods instead to protect the material.' },
    ],
  },
  {
    slug: 'move-in-move-out-sofa-cleaning-dubai',
    title: 'Move-In / Move-Out Sofa Cleaning in Dubai',
    h1: 'Move-In / Move-Out Sofa & Upholstery Cleaning in Dubai',
    description: 'Moving home in Dubai? Professional sofa and upholstery cleaning for move-in/move-out helps with handover, hygiene and deposits. Here’s what to know.',
    excerpt: 'Why move-in/move-out sofa cleaning matters in Dubai — for hygiene, handover and deposits.',
    image: '/home/sofa-deep-cleaning.webp',
    datePublished: '2026-06-03',
    readMins: 4,
    relatedService: 'deep-cleaning',
    relatedAreas: ['dubai/jlt', 'dubai/downtown-dubai'],
    relatedPosts: ['sofa-sanitization-dubai', 'stain-removal-dubai-guide', 'sofa-cleaning-cost-dubai'],
    intro: [
      'Moving home is the perfect time to deep-clean upholstery. Whether you’re leaving a rental or settling into a new place, professional sofa cleaning makes the transition healthier and smoother.',
    ],
    sections: [
      { heading: 'Moving out', body: [
        'If furniture is included in your tenancy, landlords and agencies in Dubai expect it returned clean. A professional sofa and upholstery clean helps with handover and protects your security deposit.',
      ] },
      { heading: 'Moving in', body: [
        'Starting fresh in a new home? Deep-cleaning any existing or second-hand sofas removes the previous owner’s dust, allergens and bacteria before you settle in — important for families with kids.',
      ] },
      { heading: 'What we clean', bullets: [
        'Sofas, armchairs, dining chairs and ottomans',
        'Mattresses and headboards (on request)',
        'Stain, odor and pet-hair removal',
        'Steam sanitization for a hygienic fresh start',
      ] },
    ],
    faqs: [
      { q: 'Can you clean upholstery the same day as my move?', a: 'Yes — we offer same-day at-home service across Dubai, so you can book around your moving schedule.' },
      { q: 'Do you provide an invoice for handover?', a: 'Yes, we can provide a service invoice that some agencies request at handover.' },
    ],
  },
];

const lastUpdated = (p: BlogPost) => p.dateModified ?? p.datePublished;

// Hand-written posts win on slug clashes; retired slugs never render.
const seen = new Set<string>();
export const blogPosts: BlogPost[] = [
  ...handWrittenBlogPosts,
  ...(generatedPosts as BlogPost[]),
]
  .filter((p) => {
    if (p.slug in retiredBlogSlugs || seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  })
  .sort((a, b) => lastUpdated(b).localeCompare(lastUpdated(a)));

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

/** Explicit related posts first, then posts sharing the same service, then most recent. */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const picked: BlogPost[] = [];
  const add = (p?: BlogPost) => { if (p && !picked.includes(p) && picked.length < count) picked.push(p); };
  post.relatedPosts?.forEach((s) => add(others.find((p) => p.slug === s)));
  if (post.relatedService) others.filter((p) => p.relatedService === post.relatedService).forEach(add);
  others.forEach(add);
  return picked;
}
