/**
 * Blog posts — Phase 1 (authority + informational + AI visibility).
 * UAE/Dubai sofa-cleaning buyer questions that rank for informational searches
 * and get quoted by AI assistants. Each post links to relevant area/city pages.
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
  readMins: number;
  intro: string[];
  sections: BlogSection[];
  costTable?: { title: string; rows: BlogCostRow[]; note?: string };
  faqs: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'sofa-cleaning-cost-dubai',
    title: 'How Much Does Sofa Cleaning Cost in Dubai?',
    h1: 'How Much Does Sofa Cleaning Cost in Dubai?',
    description: 'A clear 2026 price guide for sofa cleaning in Dubai — costs by seater, fabric vs leather, and what affects the price. At-home service from AED 79.',
    excerpt: 'Real 2026 sofa cleaning prices in Dubai — by seater, fabric vs leather, and what changes the cost.',
    image: '/sofa-cleaning-dubai-professional.webp',
    datePublished: '2026-06-03',
    readMins: 5,
    intro: [
      'If you are searching for sofa cleaning in Dubai, the first question is usually about price. The honest answer: it depends on the number of seats, the fabric type, and how deep the cleaning needs to be. This guide gives realistic 2026 ranges so you know what to expect before booking.',
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
      { heading: 'How long until it’s dry?', body: [
        'With high-suction extraction, most sofas are 90% dry and usable within 3–4 hours — convenient for busy Dubai apartments and villas.',
      ] },
    ],
    costTable: {
      title: 'Approximate sofa cleaning prices in Dubai (2026)',
      rows: [
        { label: 'Pet-hair removal', price: 'from AED 39' },
        { label: 'Sofa shampooing (per seat)', price: 'from AED 79' },
        { label: 'Sofa steam cleaning (per seat)', price: 'from AED 89' },
        { label: 'Sofa deep cleaning (per seat)', price: 'from AED 99' },
        { label: 'Leather sofa cleaning', price: 'from AED 129' },
      ],
      note: 'Indicative 2026 prices; final cost depends on size, material and condition. Free quote on WhatsApp.',
    },
    faqs: [
      { q: 'Is professional sofa cleaning worth it in Dubai?', a: 'Yes. Dubai’s fine dust and humidity trap allergens deep in upholstery that home vacuuming cannot reach. Professional extraction removes dust mites, stains and odors and extends your sofa’s life.' },
      { q: 'Do you clean the sofa at home?', a: 'Yes — we bring all equipment to your home anywhere in Dubai. No need to move the sofa out, and same-day service is usually available.' },
    ],
  },
  {
    slug: 'how-often-clean-sofa-uae',
    title: 'How Often Should You Clean Your Sofa in the UAE?',
    h1: 'How Often Should You Clean Your Sofa in the UAE?',
    description: 'Dubai’s dust and humidity mean sofas need cleaning more often than you think. Here’s how often to deep-clean your sofa in the UAE — by household type.',
    excerpt: 'A simple schedule for how often to deep-clean your sofa in the UAE’s dusty, humid climate.',
    image: '/pet-stain.webp',
    datePublished: '2026-06-03',
    readMins: 4,
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
    image: '/sofa-cleaning-dubai-professional.webp',
    datePublished: '2026-06-03',
    readMins: 4,
    intro: [
      'Two methods dominate professional sofa cleaning: shampoo (foam) cleaning and steam cleaning. They do different jobs, and the best result often combines both. Here’s how to choose.',
    ],
    sections: [
      { heading: 'Sofa shampoo cleaning', body: [
        'pH-balanced foam shampoo is worked into the fabric to break down oils, grease and embedded dirt, then extracted. It’s ideal for general deep cleaning and lifting heavy soiling — and with fast-dry formulas the sofa is usable within a few hours.',
      ] },
      { heading: 'Sofa steam cleaning', body: [
        'High-temperature steam penetrates deep into cushions to sanitize and disinfect, killing 99.9% of bacteria and dust mites. It’s ideal for hygiene-focused cleaning and homes with babies, pets or allergy sufferers.',
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
    slug: 'remove-sofa-stains-guide',
    title: 'How to Remove Coffee, Pet & Wine Stains from a Sofa',
    h1: 'How to Remove Common Sofa Stains (Coffee, Pet & Wine)',
    description: 'Practical steps to treat coffee, pet and red-wine stains on your sofa before they set — plus when to call a professional in Dubai.',
    excerpt: 'Quick first-aid for coffee, pet and wine sofa stains — and when to call the pros.',
    image: '/coffee.webp',
    datePublished: '2026-06-03',
    readMins: 5,
    intro: [
      'The faster you act on a sofa stain, the better your chances of removing it completely. Here’s how to treat the three most common stains — and when a professional clean is the safer choice.',
    ],
    sections: [
      { heading: 'Golden rule: blot, don’t rub', body: [
        'Always blot a fresh spill with a clean, dry cloth from the outside in. Rubbing pushes the stain deeper and spreads it. Never apply heat to a protein or wine stain — it can set it permanently.',
      ] },
      { heading: 'Coffee stains', bullets: [
        'Blot up as much liquid as possible immediately',
        'Dab with a mix of cool water and a little mild dish soap',
        'Blot again with clean water; air-dry — avoid heat',
      ] },
      { heading: 'Pet stains & odor', bullets: [
        'Blot, then use an enzyme-based pet cleaner (not ammonia)',
        'Enzymes break down odor at the source so pets don’t re-mark',
        'For set-in pet urine, professional extraction is usually needed',
      ] },
      { heading: 'Red wine stains', bullets: [
        'Blot immediately; do not rub',
        'Cover with a little salt or cold soda water to lift colour',
        'Avoid hot water; call a professional for stubborn or dried wine',
      ] },
      { heading: 'When to call a professional', body: [
        'If a stain has dried, covers a large area, or is on leather or delicate fabric, DIY can cause discoloration. Al Haya Sofa Care uses fabric-specific, pH-balanced treatments that lift stains safely — same-day across Dubai.',
      ] },
    ],
    faqs: [
      { q: 'Can old, dried stains still be removed?', a: 'Often yes. Professional pre-treatment and hot-water extraction can lift many set-in stains that home methods cannot — though some permanent dye changes can’t be reversed.' },
      { q: 'Are stain treatments safe for kids and pets?', a: 'Yes — we use eco-friendly, non-toxic, pH-balanced products safe for children and pets.' },
    ],
  },
  {
    slug: 'leather-sofa-care-dubai',
    title: 'Leather Sofa Care in Dubai’s Climate',
    h1: 'Leather Sofa Care in Dubai’s Climate',
    description: 'Dubai’s heat and humidity are tough on leather sofas. Here’s how to clean, condition and protect leather upholstery to prevent cracking and fading.',
    excerpt: 'How to keep a leather sofa soft and crack-free in Dubai’s heat and humidity.',
    image: '/leather.webp',
    datePublished: '2026-06-03',
    readMins: 4,
    intro: [
      'Leather sofas look great but are sensitive to Dubai’s heat, sunlight and humidity, which can dry, crack or fade them over time. With the right care, your leather can stay soft and rich for years.',
    ],
    sections: [
      { heading: 'Why Dubai’s climate is hard on leather', body: [
        'Heat and dry air pull moisture out of leather, causing it to stiffen and crack. Direct sunlight fades colour, while humidity can encourage mold on neglected leather. Regular conditioning replaces lost oils and keeps the surface supple.',
      ] },
      { heading: 'At-home leather care tips', bullets: [
        'Dust weekly with a soft, dry microfiber cloth',
        'Keep the sofa out of direct sunlight where possible',
        'Wipe spills immediately — never let liquid soak in',
        'Avoid household cleaners, baby wipes and alcohol on leather',
      ] },
      { heading: 'Professional leather cleaning & conditioning', body: [
        'A professional service uses pH-safe cleaners to lift grime without stripping the finish, followed by a conditioning treatment that restores softness and a protective layer. Al Haya Sofa Care offers specialist leather cleaning across Dubai and the UAE.',
      ] },
    ],
    faqs: [
      { q: 'How often should a leather sofa be conditioned?', a: 'In Dubai’s climate, professional cleaning and conditioning every 6–12 months helps prevent drying and cracking. High-use or sun-exposed leather may need it more often.' },
      { q: 'Can you restore a cracked or faded leather sofa?', a: 'Mild dryness and surface marks respond well to cleaning and conditioning. Deep cracks may need specialist restoration — we’ll assess and advise honestly.' },
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
