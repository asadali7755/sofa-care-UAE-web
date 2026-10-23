/**
 * Content for the dedicated service pages (/leather-sofa-cleaning, ...).
 * Each page targets one booking-intent keyword; the matching blog post stays
 * the "how to" guide and is linked from here. Keep copy honest: no prices,
 * no invented stats, and say plainly when a result isn't guaranteed.
 */

export interface ServicePageData {
  slug: string;
  /** id on /services, so the overview section can link here */
  serviceId: string;
  themeKey: 'lagoon' | 'saffron' | 'indigo' | 'rose' | 'emerald';
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1Lead: string;
  h1Em: string;
  lede: string;
  heroImage: { src: string; alt: string };
  facts: string[];
  why: { heading: string; paras: string[] };
  /** Illustrative image beside the 'why' text; caption says so when it shows a before/after. */
  whyImage?: { src: string; alt: string; caption?: string };
  covers: { heading: string; intro: string; items: { t: string; d: string }[] };
  steps: { heading: string; items: { t: string; d: string }[] };
  table?: { heading: string; intro: string; cols: [string, string, string]; rows: [string, string, string][] };
  honest: { heading: string; text: string };
  resultsHeading: string;
  galleryCats: string[];
  videoSrcs: string[];
  videosHeading: string;
  guide?: { href: string; label: string };
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaLine: string;
  waText: string;
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'leather-sofa-cleaning',
    serviceId: 'leather-cleaning',
    themeKey: 'indigo',
    metaTitle: 'Leather Sofa Cleaning in Dubai & UAE | Al Haya',
    metaDescription: 'At-home leather sofa cleaning and conditioning in Dubai, Sharjah, Ajman and across the UAE. Lifts body oils, dust and marks, then puts the moisture back.',
    keywords: ['leather sofa cleaning Dubai', 'leather sofa cleaning UAE', 'leather couch cleaning Dubai', 'leather sofa conditioning Dubai', 'white leather sofa cleaning', 'leather sofa cleaning Sharjah', 'leather sofa cleaning Ajman', 'leather sofa cleaning near me'],
    eyebrow: 'Leather care · At your home',
    h1Lead: 'Leather Sofa Cleaning',
    h1Em: '& Conditioning',
    lede: 'We clean and condition leather sofas at your home across the UAE — lifting the body oils, dust and marks that build up on headrests and armrests, then putting back the moisture that air-conditioning draws out.',
    heroImage: { src: '/home/brown-leather-chesterfield-sofa-dubai-penthouse.webp', alt: 'Brown leather Chesterfield sofa in a bright Dubai penthouse living room' },
    whyImage: { src: '/home/leather-armrest-grimy-vs-conditioned.webp', alt: 'Leather sofa armrest darkened by body oils and dirt next to a cleaned, conditioned armrest', caption: 'Illustration: a grimy leather armrest and the same armrest cleaned and conditioned.' },
    facts: ['Leather-safe products', 'Patch test first', 'Sit on it the same day', 'Free WhatsApp quote'],
    why: {
      heading: 'Why leather sofas in the UAE need regular care',
      paras: [
        'Leather is skin, and UAE homes are hard on it. Air-conditioning runs most of the year and keeps the air dry, so the natural oils in the leather slowly disappear and the surface starts to stiffen and crack. Sun through large windows fades the colour on the side that faces the glass.',
        'At the same time, hands, hair and skin leave oils on the headrests and armrests, and fine sand works into the seams and grain. Over a year or two the lighter areas turn grey or shiny and the creases deepen. A proper clean removes that build-up; conditioning replaces the moisture so the leather stays soft.',
      ],
    },
    covers: {
      heading: 'Leather we clean',
      intro: 'The technician checks the type of leather first, because each one needs a different product and pressure.',
      items: [
        { t: 'Finished / pigmented leather', d: 'The most common sofa leather. Cleaned with a pH-balanced leather cleaner and soft brushes, then conditioned.' },
        { t: 'Semi-aniline & aniline', d: 'Softer, more natural leather that marks easily. Gentle cleaner, very little moisture, always tested on a hidden spot first.' },
        { t: 'White & cream leather', d: 'Shows every mark and dye transfer from clothes. Cleaned panel by panel so the colour stays even.' },
        { t: 'Faux & PU leather', d: 'Synthetic leather is cleaned with a milder product; it is not conditioned like real leather.' },
        { t: 'Recliners & corner sofas', d: 'Mechanisms, seams and the tight gaps between sections are vacuumed and wiped by hand.' },
        { t: 'Dining & office chairs', d: 'Leather chairs can be done in the same visit as the sofa.' },
      ],
    },
    steps: {
      heading: 'How we clean a leather sofa',
      items: [
        { t: 'Inspect & test', d: 'Identify the leather type, note any scratches or worn areas, and test the cleaner on a hidden spot.' },
        { t: 'Dry clean the seams', d: 'Vacuum crevices, piping and the gaps between cushions, where sand and crumbs collect.' },
        { t: 'Gentle deep clean', d: 'Apply a pH-balanced leather cleaner with soft brushes and microfibre, one panel at a time.' },
        { t: 'Mark treatment', d: 'Work on scuffs, food marks and dye transfer with leather-specific spotters.' },
        { t: 'Condition', d: 'Massage in a leather conditioner to put moisture back into the hide.' },
        { t: 'Buff & check', d: 'Buff to an even finish and check the sofa with you. It can normally be used the same day.' },
      ],
    },
    honest: {
      heading: 'What we will tell you before we start',
      text: 'Cleaning removes dirt, oils and many marks, but it cannot reverse damage. Cracks, peeling, worn colour and some ink or dye marks may soften or lighten rather than disappear. If a mark is damage rather than dirt, the technician will show you and explain what to expect before starting.',
    },
    resultsHeading: 'Leather sofa before & after',
    galleryCats: ['Leather'],
    videoSrcs: ['/videos/sofa-deep-cleaning-result-dubai-1.mp4', '/videos/couch-cleaning-before-after-dubai-7.mp4', '/videos/single-seat-sofa-cleaning-dubai.mp4'],
    videosHeading: 'Clips from recent sofa cleans',
    guide: { href: '/blog/leather-sofa-cleaning-dubai', label: 'Read our leather sofa care guide' },
    faqs: [
      { q: 'How often should a leather sofa be cleaned and conditioned in the UAE?', a: 'Every 6 to 12 months for most homes. If the sofa sits in direct sun, is used every day, or you have children or pets, every 6 months keeps the leather softer and the headrests from darkening.' },
      { q: 'Can you clean a white leather sofa?', a: 'Yes. White and cream leather is cleaned panel by panel so the colour stays even. Dye transfer from jeans usually lightens a lot; very old dye marks may not come out completely, and we will tell you before we start.' },
      { q: 'How soon can I sit on the sofa after a leather clean?', a: 'Usually the same day. Leather cleaning uses very little water, so once the conditioner has been buffed in the sofa can normally be used straight away.' },
      { q: 'Do you clean faux or PU leather?', a: 'Yes. Faux leather is cleaned with a milder product and is not conditioned the way real leather is.' },
      { q: 'Do I need to move the sofa or take it anywhere?', a: 'No. The cleaning is done at your home with portable equipment; we only need access to the room.' },
      { q: 'How much does leather sofa cleaning cost?', a: 'It depends on the size of the sofa, the type of leather and its condition. Send a photo on WhatsApp for a free quote.' },
    ],
    ctaHeading: 'Book leather sofa cleaning',
    ctaLine: 'Send a photo of your leather sofa on WhatsApp and we will tell you what we can do and give you a free quote.',
    waText: 'Hi, I need leather sofa cleaning. Here is a photo of my sofa.',
  },
  {
    slug: 'sofa-steam-cleaning',
    serviceId: 'sanitization',
    themeKey: 'lagoon',
    metaTitle: 'Sofa Steam Cleaning in Dubai & UAE | Al Haya',
    metaDescription: 'At-home sofa steam cleaning in Dubai and across the UAE. Hot steam and extraction refresh fabric sofas, majlis seating and mattresses. Free WhatsApp quote.',
    keywords: ['sofa steam cleaning Dubai', 'steam sofa cleaning UAE', 'couch steam cleaning Dubai', 'sofa steam cleaning Sharjah', 'sofa sanitization Dubai', 'mattress steam cleaning Dubai', 'steam cleaning dubai', 'sofa steam cleaning near me'],
    eyebrow: 'Steam cleaning · At your home',
    h1Lead: 'Sofa Steam Cleaning',
    h1Em: 'at Home',
    lede: 'High-temperature steam and hot-water extraction for fabric sofas, majlis seating and mattresses across the UAE — to refresh the fabric, lift trapped dust and reduce dust mites and odours, without moving the furniture.',
    heroImage: { src: '/home/steam-extraction-tool-fabric-sofa-close-up.webp', alt: 'Steam and extraction tool cleaning a beige fabric sofa seat' },
    whyImage: { src: '/home/steam-cleaning-grey-sectional-sofa.webp', alt: 'Steam cleaning machine working on a grey fabric sectional sofa at home' },
    facts: ['Dry in 3–4 hours', 'Eco-friendly products', 'No furniture moving', 'Free WhatsApp quote'],
    why: {
      heading: 'When steam is the right choice',
      paras: [
        'Fabric sofas in the UAE collect fine dust from outside and moisture from the air. In humid coastal months that mix stays in the cushions, and over time it smells stale even when the sofa looks clean. Families with babies, pets or allergies often notice it first.',
        'Steam reaches heat that a normal wash cannot. Used together with extraction, it loosens dirt deep in the fibres, helps reduce dust mites and bacteria, and leaves the fabric fresh. For greasy or heavily stained sofas we combine it with a shampoo pre-treatment; for delicate fabrics we use a low-moisture method instead.',
      ],
    },
    covers: {
      heading: 'What we steam clean',
      intro: 'Steam suits most fabric upholstery. The technician checks the fabric label and tests a hidden spot first.',
      items: [
        { t: 'Fabric sofas', d: 'Two- and three-seaters, L-shaped and corner sofas, sofa beds and cushions.' },
        { t: 'Majlis seating', d: 'Floor cushions, back rests and long majlis sofas cleaned in one visit.' },
        { t: 'Mattresses', d: 'Both sides steamed and extracted to freshen the surface and reduce dust mites.' },
        { t: 'Dining & accent chairs', d: 'Fabric seats and backs done together with the sofa.' },
        { t: 'Not for velvet or silk', d: 'Delicate pile and natural silk get a low-moisture clean instead of full steam.' },
        { t: 'Not for leather', d: 'Leather is cleaned and conditioned with leather-safe products, never steamed.' },
      ],
    },
    steps: {
      heading: 'How our steam clean works',
      items: [
        { t: 'Check the fabric', d: 'Read the care label and test a hidden spot for colour-fastness.' },
        { t: 'Dry vacuum', d: 'Remove loose dust, sand and crumbs from the surface and seams first.' },
        { t: 'Pre-treat', d: 'Spray stains and soiled arms with a fabric-matched pre-treatment.' },
        { t: 'Steam & extract', d: 'Hot steam loosens the dirt and the extraction wand pulls it out with the water.' },
        { t: 'Deodorise', d: 'An eco-friendly deodoriser for sofas that smell of pets, food or damp.' },
        { t: 'Fast dry', d: 'Air movers speed up drying — most fabric sofas are usable in 3–4 hours.' },
      ],
    },
    honest: {
      heading: 'Steam or shampoo?',
      text: 'Steam is best for freshening and sanitising fabric; shampoo is better at breaking down grease and heavy grime. Many sofas get both in the same visit. If your sofa needs one more than the other, the technician will explain why before starting.',
    },
    resultsHeading: 'Fabric sofa steam & deep clean results',
    galleryCats: ['Sofa Cleaning', 'Shampooing'],
    videoSrcs: ['/videos/sofa-steam-cleaning-result-dubai-6.mp4', '/videos/sofa-sanitization-result-dubai-8.mp4', '/videos/fabric-sofa-deep-clean-dubai-5.mp4'],
    videosHeading: 'Watch a steam clean',
    guide: { href: '/blog/sofa-shampoo-vs-steam-cleaning', label: 'Read: sofa shampoo vs steam cleaning' },
    faqs: [
      { q: 'Does steam cleaning damage the sofa fabric?', a: 'Not on fabrics that are suitable for it. We read the care label and test a hidden spot first. Velvet, silk and leather are not steamed — they get a gentler method.' },
      { q: 'How long does a sofa take to dry after steam cleaning?', a: 'Most fabric sofas are dry and usable in 3 to 4 hours. Thick cushions and natural fibres can take longer, especially on humid days.' },
      { q: 'Does steam cleaning kill dust mites?', a: 'High-temperature steam helps reduce dust mites and bacteria in the fabric, which is why it is popular with families who have allergies. Regular cleaning every 6 to 12 months keeps them down.' },
      { q: 'Is steam cleaning safe for children and pets?', a: 'Yes. Steam is mostly hot water, and the products we add are eco-friendly and rinsed out during extraction.' },
      { q: 'Can you steam clean a mattress in the same visit?', a: 'Yes. Mattresses, majlis cushions and fabric chairs can all be done together with the sofa.' },
      { q: 'How much does sofa steam cleaning cost?', a: 'It depends on the number of seats, the fabric and how dirty the sofa is. Send a photo on WhatsApp for a free quote.' },
    ],
    ctaHeading: 'Book sofa steam cleaning',
    ctaLine: 'Tell us the sofa size and fabric on WhatsApp and we will confirm a slot and a free quote.',
    waText: 'Hi, I need sofa steam cleaning. Here is a photo of my sofa.',
  },
  {
    slug: 'sofa-stain-removal',
    serviceId: 'stain-removal',
    themeKey: 'rose',
    metaTitle: 'Sofa Stain Removal in Dubai & UAE | Al Haya',
    metaDescription: 'At-home sofa stain removal in Dubai and across the UAE: coffee, karak, food, ink and pet stains on fabric and leather. Send a photo on WhatsApp for a free quote.',
    keywords: ['sofa stain removal Dubai', 'sofa stain removal UAE', 'couch stain removal Dubai', 'coffee stain sofa Dubai', 'pet urine sofa cleaning Dubai', 'ink stain sofa removal', 'sofa stain removal Sharjah', 'sofa stain removal near me'],
    eyebrow: 'Stain removal · At your home',
    h1Lead: 'Sofa Stain Removal',
    h1Em: 'at Home',
    lede: 'Coffee, karak tea, food, ink and pet accidents — we treat sofa stains at your home across the UAE, matching the treatment to both the stain and the fabric so the mark lifts without leaving a ring.',
    heroImage: { src: '/home/coffee-stain-fabric-sofa-cushion.webp', alt: 'Close-up of a coffee stain soaked into a linen fabric sofa cushion' },
    whyImage: { src: '/home/white-sofa-coffee-stain-vs-clean.webp', alt: 'White fabric sofa seat with a coffee spill next to the same seat clean', caption: 'Illustration: a fresh coffee spill and the same seat after stain removal.' },
    facts: ['Fabric & leather', 'Same-day slots', 'No rings or bleaching', 'Free WhatsApp quote'],
    why: {
      heading: 'Why sofa stains need the right treatment',
      paras: [
        'Every stain is a different chemistry. Coffee and karak tea are tannin stains, food and makeup are oily, pet accidents are protein with a smell, and ink is dye. A product that lifts one can set another — and hot water or bleach from the kitchen often makes a stain permanent.',
        'Fabric matters just as much. The same coffee spill is treated differently on cotton, microfibre, velvet or leather. That is why the technician identifies both first, then cleans the whole panel around the stain so it dries evenly without a water ring.',
      ],
    },
    covers: {
      heading: 'Stains we treat',
      intro: 'Send a photo on WhatsApp and we will tell you what to expect for your stain and fabric.',
      items: [
        { t: 'Coffee & karak tea', d: 'Tannin stains that turn brown as they age. Treated with a tannin spotter, then extracted.' },
        { t: 'Food & grease', d: 'Oily marks from meals and snacks on seats and arms, broken down with a degreasing pre-spray.' },
        { t: 'Ink & marker', d: 'Pen and children\'s markers on fabric or leather. Often lighten a lot; some dyes don\'t fully lift.' },
        { t: 'Pet urine & vomit', d: 'Cleaned through the fabric and treated with an odour remover so the smell doesn\'t come back.' },
        { t: 'Juice & soft drinks', d: 'Sugary, coloured stains that get sticky and attract dirt.' },
        { t: 'Body oils & dirty arms', d: 'The grey build-up on headrests and armrests from daily use.' },
      ],
    },
    steps: {
      heading: 'How we remove sofa stains',
      items: [
        { t: 'Identify', d: 'Work out what the stain is, how old it is and what the fabric can take.' },
        { t: 'Test', d: 'Try the spotter on a hidden area to check the colour stays put.' },
        { t: 'Pre-treat', d: 'Apply the matched spotter and give it time to break the stain down.' },
        { t: 'Agitate & extract', d: 'Work it gently with a soft brush, then extract the stain and product out of the fabric.' },
        { t: 'Clean the panel', d: 'Clean the whole cushion or panel so it dries evenly with no ring.' },
        { t: 'Check with you', d: 'Look at the result together once the area is dry enough to see clearly.' },
      ],
    },
    table: {
      heading: 'Before we arrive: what to do',
      intro: 'A few minutes of the right first aid makes a big difference to the final result.',
      cols: ['Stain', 'Do', 'Don\'t'],
      rows: [
        ['Coffee / tea', 'Blot with a dry white cloth', 'Rub or use hot water'],
        ['Food / grease', 'Scrape off solids, blot', 'Use dish soap and scrub'],
        ['Pet urine', 'Blot as much as possible', 'Use bleach or ammonia cleaners'],
        ['Ink / marker', 'Leave it and send us a photo', 'Try alcohol or nail-polish remover'],
        ['Any stain', 'Send a photo on WhatsApp', 'Let it sit for weeks'],
      ],
    },
    honest: {
      heading: 'Can every stain be removed?',
      text: 'Most fresh stains come out fully. Old, set-in, dye-based or bleach marks may only lighten, and a stain that has damaged the fabric cannot be reversed. We look at your photo and tell you honestly what to expect before you book.',
    },
    resultsHeading: 'Sofa stain removal before & after',
    galleryCats: ['Stain Removal'],
    videoSrcs: ['/videos/sofa-stain-removal-before-after-dubai.mp4', '/videos/upholstery-cleaning-before-after-dubai-3.mp4', '/videos/couch-cleaning-before-after-dubai-7.mp4'],
    videosHeading: 'See stains come out',
    guide: { href: '/blog/stain-removal-dubai-guide', label: 'Read our sofa stain removal guide' },
    faqs: [
      { q: 'Can you remove old coffee or tea stains from a sofa?', a: 'Often, yes. Old tannin stains usually lighten a lot and many come out completely. Very old stains that have set into light fabric may leave a faint shadow; we tell you before we start.' },
      { q: 'Will the cleaned spot leave a ring?', a: 'No — we clean the whole cushion or panel around the stain, not just the spot, so it dries evenly.' },
      { q: 'Do you remove pet urine smell as well as the stain?', a: 'Yes. Pet accidents are cleaned through the fabric and treated with an odour remover so the smell does not return when the room gets humid.' },
      { q: 'Can you remove stains from a leather sofa?', a: 'Yes, with leather-safe products. Food marks, scuffs and many dye transfers come out; ink on leather often lightens rather than disappearing completely.' },
      { q: 'How quickly can you come for a fresh stain?', a: 'Same-day slots are often available, especially in Dubai, Sharjah and Ajman. Message us on WhatsApp with your area and a photo.' },
      { q: 'How much does sofa stain removal cost?', a: 'It depends on the stain, the fabric and whether you want a single spot or the whole sofa cleaned. Send a photo on WhatsApp for a free quote.' },
    ],
    ctaHeading: 'Get a stain looked at today',
    ctaLine: 'Send a clear photo of the stain on WhatsApp — we will tell you what to expect and give you a free quote.',
    waText: 'Hi, I have a stain on my sofa. Here is a photo.',
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);
/** /services section id → dedicated page, for "learn more" links. */
export const SERVICE_PAGE_BY_ID: Record<string, string> = Object.fromEntries(SERVICE_PAGES.map((p) => [p.serviceId, `/${p.slug}`]));
/** Best link for a /services section id: its dedicated page if it has one. */
export const serviceHref = (id: string) => SERVICE_PAGE_BY_ID[id] ?? `/services#${id}`;
