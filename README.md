# Al Haya Cleaning Services — Sofa Shampooing Dubai

Professional sofa cleaning website built with Next.js 14 App Router.

## Business Info
- **Business:** Al Haya Cleaning Services
- **Domain:** sofashampooingdubai.com
- **WhatsApp:** +971547199189
- **Services:** Sofa Deep Cleaning, Sofa Shampooing
- **Areas:** Dubai, Sharjah, Ajman

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Custom dark design system (teal accent)
- Portfolio-inspired animations (scroll reveal, typewriter, marquee)

## Pages
- `/` — Home (Hero + Services + Video + Why Us + Testimonials + CTA)
- `/services` — Sofa Deep Cleaning & Shampooing detail pages
- `/gallery` — Before/After photo gallery with filter tabs
- `/about` — Company story, stats, why choose us
- `/contact` — Booking form + contact form + WhatsApp

## Features
- Floating WhatsApp button (wa.me link)
- Booking form (opens WhatsApp with pre-filled message)
- Contact form (opens WhatsApp)
- Full SEO (LocalBusiness JSON-LD schema, sitemap, robots.txt)
- Typewriter animation in hero
- Scroll reveal animations (IntersectionObserver)
- Marquee ticker
- Mobile responsive

## How to Run

### Development
```bash
cd nextjs-app
npm install
npm run dev
```
Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repo on vercel.com
3. Deploy — done!

## Customization
- **Colors:** Edit `app/globals.css` — change `--teal: #00BCD4` to any color
- **Content:** Edit individual page files in `app/` folders
- **WhatsApp number:** Search & replace `971547199189` with client's number
- **Pricing:** Update "AED 99" / "AED 79" in services page
- **Video:** Replace YouTube embed URL in `app/components/VideoSection.tsx`
- **Logo:** Update SVG in `app/components/Navbar.tsx` and `Footer.tsx`

## File Structure
```
nextjs-app/
├── app/
│   ├── globals.css          # Design system + all CSS
│   ├── layout.tsx           # Root layout + SEO + fonts
│   ├── page.tsx             # Home page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── VideoSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTABanner.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Icons.tsx
│   ├── services/page.tsx    # Services page
│   ├── gallery/page.tsx     # Gallery page
│   ├── about/page.tsx       # About page
│   └── contact/page.tsx     # Contact + Booking page
├── public/
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── CLAUDE.md                # Project constitution
├── SPEC.md                  # Full specifications
└── PLAN.md                  # Implementation plan
```
