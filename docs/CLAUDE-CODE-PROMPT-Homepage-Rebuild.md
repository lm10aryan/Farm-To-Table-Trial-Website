# CLAUDE CODE PROMPT: HOMEPAGE REBUILD (v2.0)

## TASK OVERVIEW
Rebuild the Farm to Table homepage from scratch based on the v2.0 wireframe. Remove ALL old v1 code and build fresh implementation following exact wireframe specifications.

---

## STEP 1: READ THE WIREFRAME FIRST

**CRITICAL:** Before writing ANY code, read the complete wireframe:

```
/docs/Farm-to-Table-Homepage-Wireframe-v2-UPDATED.md
```

This 47-page document contains:
- Complete design system (typography, colors, spacing)
- All 6 section specifications
- Responsive behavior
- Animation specs
- Accessibility requirements

**Read it in full before proceeding.**

---

## STEP 2: REMOVE OLD HOMEPAGE CODE

### Delete or Replace These Files:

1. **Main homepage file:**
   - Location: `/app/page.tsx`
   - Action: **DELETE ENTIRE FILE** - we're rebuilding from scratch

2. **Old component files (if they exist):**
   - Any components in `/app/components/` related to homepage
   - Any old section components (Hero, ProofPoints, ProductsTeaser, etc.)
   - Action: **DELETE** old homepage components

3. **Old styles (if separate):**
   - Any homepage-specific CSS/Tailwind files
   - Action: **DELETE** or clean out old styles

### What to Keep:
- `/app/layout.tsx` (root layout - don't touch unless needed for design system)
- `/app/globals.css` (we'll UPDATE this with new design system variables)
- Navigation/Header component (we'll update to match new design)
- Footer component (we'll update to match new design)

---

## STEP 3: SET UP DESIGN SYSTEM

### Update `/app/globals.css`

Add CSS custom properties for the design system (from wireframe):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-olive-green: #6B7A52;
    --color-dark-brown: #2C2416;
    --color-medium-brown: #5A4F3D;
    --color-light-brown: #8C7D68;
    --color-off-white: #F9F7F4;
    --color-pure-white: #FFFFFF;
    --color-border-gray: #E8E5E0;
    
    /* Status Colors */
    --color-peak-quality: #4A7C59;
    --color-coming-soon: #4A7C9B;
    --color-extended-season: #D4AF37;
    
    /* Typography Scale */
    --font-display: 3.25rem; /* 52px */
    --font-h1: 2.5rem; /* 40px */
    --font-h2: 2rem; /* 32px */
    --font-h3: 1.375rem; /* 22px */
    --font-body-large: 1.125rem; /* 18px */
    --font-body: 1rem; /* 16px */
    --font-small: 0.875rem; /* 14px */
    --font-tiny: 0.75rem; /* 12px */
    
    /* Spacing */
    --spacing-section: 80px;
    --spacing-container: 32px;
    --spacing-element: 32px;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--color-medium-brown);
    background: var(--color-pure-white);
  }
}
```

### Update `tailwind.config.js`

Extend Tailwind with design system colors:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'olive-green': '#6B7A52',
        'dark-brown': '#2C2416',
        'medium-brown': '#5A4F3D',
        'light-brown': '#8C7D68',
        'off-white': '#F9F7F4',
        'border-gray': '#E8E5E0',
        'peak-quality': '#4A7C59',
        'coming-soon': '#4A7C9B',
        'extended-season': '#D4AF37',
      },
      fontSize: {
        'display': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.2' }],
        'h3': ['1.375rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
```

---

## STEP 4: BUILD HOMEPAGE SECTIONS

Build the homepage in this order (6 sections total):

### SECTION 1: HERO (COMPRESSED)

**Reference:** Wireframe Section 1

**Key Requirements:**
- 50/50 split (text left, visual right)
- Eyebrow: "10-15 PARTNERSHIPS, NOT 100 TRANSACTIONS"
- Headline: "Indian Produce is World-Class. The Supply Chain is Chaos. We Built a System to Handle It."
- Headline font: 52px (REDUCED from v1's 72px)
- Two CTAs: Primary "Request Partnership Discussion", Secondary "See Quality Process"
- Image placeholder: 4:3 aspect ratio with border
- Tagline below buttons: "Process-first. Honest communication. No surprises."
- Section padding: 80px top/bottom (REDUCED from v1's 120px)

**Build in:** `/app/page.tsx` (inline) or `/app/components/homepage/Hero.tsx`

---

### SECTION 2: PROOF POINTS (2-TIER HIERARCHY)

**Reference:** Wireframe Section 2

**Key Requirements:**
- 2x3 grid (6 cards)
- **NEW:** 2-tier visual hierarchy:
  - **TIER 1** (larger, green border): Scientific Grading, 10-Year Quality Team
  - **TIER 2** (standard, gray border): Monthly Updates, Quality Filtering, Not Commission-Based, Packhouse Ownership
- **NEW:** Data-forward layout - BIG stat at top, then icon, then title, then description
  - Example: "14-16° Brix" (36px bold) → Microscope icon → "Scientific Grading" → description
- Use Lucide React icons (Microscope, Users, BarChart3, Shield, Handshake, Factory)
- Background: Off-white (#F9F7F4)

**All 6 Cards Content (from wireframe):**
1. Scientific Grading: "14-16° Brix" / "Watermelon export threshold"
2. 10-Year Quality Team: "10 Years" / "Same quality team"
3. Monthly Harvest Updates: "12 Updates/Year" / "Every month during season"
4. Quality Filtering: "30% Rejected" / "Typical harvest split"
5. Not Commission-Based: "0% Commission" / "Partnership model"
6. Packhouse Ownership: "100% Control" / "Own packhouse in Nashik"

**Build in:** `/app/components/homepage/ProofPoints.tsx`

---

### SECTION 3: SOCIAL PROOF (NEW - ANONYMOUS)

**Reference:** Wireframe Section 3

**Key Requirements:**
- **NEW SECTION** (didn't exist in v1)
- 3 column grid
- Each card has:
  - Region badge (Middle East, Europe, Southeast Asia)
  - Business type (Premium Retailer, Restaurant Group, Wholesaler)
  - Partnership duration (3-year, 18-month, 2-year)
  - 3 bullet point metrics
- Bottom disclaimer: "All partnerships are confidential..."
- Background: White

**3 Card Data (from wireframe):**
1. Middle East Premium Retailer: 3-year, 35 cont/month, Pomegranates+Grapes, 14 consecutive months
2. European Restaurant Group: 18-month, Seasonal menus, Zero rejected shipments
3. Southeast Asia Wholesaler: 2-year, 20 cont/month, Monthly Brix reports, Expanded 2→4 products

**Build in:** `/app/components/homepage/SocialProof.tsx`

---

### SECTION 4: PRODUCTS TEASER (ONLY 3 PRODUCTS)

**Reference:** Wireframe Section 4

**Key Requirements:**
- **CHANGED:** Show ONLY 3 products (Pomegranates, Grapes, Bananas) - NOT 4 like v1
- 3 column grid
- Each card: 4:3 image, product name, status badge, 3 spec bullets, CTA link
- Bottom paragraph + CTA button: "View All 6 Products & Seasonal Calendar →" links to /products
- Background: Off-white

**3 Product Data:**
1. Pomegranates: Peak Quality, 14-16° Brix, Week 48-14, Red Lady & Nutrigo
2. Grapes: Peak Quality, 18mm+ bunches, <2% defects, Week 48-14
3. Bananas: Peak Quality, Year-round, Cavendish, Green to yellow stages

**Build in:** `/app/components/homepage/ProductsTeaser.tsx`

---

### SECTION 5: TWO BRANDS (WITH PRICING TRANSPARENCY)

**Reference:** Wireframe Section 5

**Key Requirements:**
- 50/50 split (Red Lady left, Nutrigo right)
- **NEW:** Pricing context panels in each column (light background, green border-left)
  - Red Lady: "Pricing reflects top 20% grading rigor. Premium tier positioned 20-30% above commodity."
  - Nutrigo: "Competitive pricing for top 60% grading. Volume discounts start at 10+ containers/month."
- Max-width: 1000px (narrower than full container)
- Background: White
- Each side has: Brand name (32px), subtitle, 2 paragraphs, pricing panel, CTA link

**Build in:** `/app/components/homepage/TwoBrands.tsx`

---

### SECTION 6: STICKY CTA BAR (NEW - GLOBAL)

**Reference:** Wireframe "Sticky CTA Bar" section

**Key Requirements:**
- **NEW FEATURE** (didn't exist in v1)
- Fixed position at bottom of viewport
- Appears when user scrolls past Proof Points section (use Intersection Observer)
- Left side: CheckCircle icon + "See something that fits your needs?"
- Right side: "Request Partnership Discussion →" button
- Slide up animation (translateY 100% → 0)
- Mobile: Stack vertically, full width button
- Z-index: 1000

**Build in:** `/app/components/homepage/StickyCTA.tsx`

---

## STEP 5: ASSEMBLE HOMEPAGE

Create new `/app/page.tsx`:

```tsx
import Hero from '@/components/homepage/Hero'
import ProofPoints from '@/components/homepage/ProofPoints'
import SocialProof from '@/components/homepage/SocialProof'
import ProductsTeaser from '@/components/homepage/ProductsTeaser'
import TwoBrands from '@/components/homepage/TwoBrands'
import StickyCTA from '@/components/homepage/StickyCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProofPoints />
      <SocialProof />
      <ProductsTeaser />
      <TwoBrands />
      <StickyCTA />
    </main>
  )
}
```

---

## STEP 6: NAVIGATION & FOOTER

### Update Navigation (if needed)

Ensure nav has these links:
- Home (/)
- Products (/products)
- System (/system)
- Partnership (/partnership)
- Contact (/contact)
- CTA button: "Request allocation plan" (olive green)

**Build in:** `/app/components/Header.tsx` or `/app/components/Navigation.tsx`

---

### Update Footer

Ensure footer has 3 columns:
1. Brand Statement: "FARM TO TABLE" + tagline
2. Navigation: Links to all pages
3. Contact: Email, WhatsApp, Office location, Regional focus

**Build in:** `/app/components/Footer.tsx`

---

## STEP 7: RESPONSIVE BEHAVIOR

Implement breakpoints:
- Desktop: > 1024px (default)
- Tablet: 768px - 1024px (reduce fonts 15%, 2-column grids)
- Mobile: < 768px (reduce fonts 30%, 1-column grids, stack hero)

Use Tailwind responsive classes:
```tsx
className="text-[52px] md:text-[40px] sm:text-[32px]"
className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
```

---

## STEP 8: ANIMATIONS

Implement scroll-triggered animations using Framer Motion:

1. **Proof Point cards:** Fade in from bottom, stagger 0.1s
2. **Social Proof cards:** Fade in from bottom, stagger 0.15s
3. **Product cards:** Fade in from bottom, stagger 0.1s
4. **Sticky CTA bar:** Slide up from bottom when scrolling past Proof Points

Install Framer Motion if not installed:
```bash
npm install framer-motion
```

Example implementation:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* card content */}
</motion.div>
```

---

## STEP 9: ACCESSIBILITY

Ensure:
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on icons
- Keyboard navigation for all interactive elements
- Focus states visible (2px olive green outline)
- Color contrast meets AA standards (4.5:1 minimum)

---

## STEP 10: TESTING CHECKLIST

Before completing, verify:

- [ ] All 6 sections render correctly
- [ ] Design system colors/fonts applied consistently
- [ ] Hero is compressed (52px headline, not 72px)
- [ ] Proof Points show 2-tier hierarchy (Tier 1 cards larger/green border)
- [ ] Social Proof section exists (3 anonymous case studies)
- [ ] Products teaser shows ONLY 3 products (not 4)
- [ ] Two Brands has pricing transparency panels
- [ ] Sticky CTA bar appears after scrolling past Proof Points
- [ ] Responsive behavior works (test at 375px, 768px, 1024px, 1440px)
- [ ] Animations trigger on scroll
- [ ] All links functional
- [ ] Navigation updated
- [ ] Footer updated
- [ ] No console errors
- [ ] Page loads fast (check Network tab)

---

## CRITICAL REMINDERS

1. **Read wireframe FIRST** - Don't skip this step
2. **Delete old code** - Don't try to patch v1, rebuild fresh
3. **Follow specs exactly** - Font sizes, spacing, colors from wireframe
4. **2-tier Proof Points** - This is a key visual change from v1
5. **Only 3 products** - Not 4 like v1
6. **Social Proof is NEW** - Didn't exist in v1, must build from scratch
7. **Sticky CTA is NEW** - Intersection Observer implementation required
8. **Pricing transparency** - New panels in Two Brands section
9. **Test responsive** - Mobile behavior is critical

---

## EXPECTED OUTPUT

When complete, I should see:
- Localhost:3002 shows new homepage
- Compressed hero (looks tighter than v1)
- Proof Points with clear visual hierarchy (2 cards stand out)
- New Social Proof section (3 anonymous partnerships)
- Only 3 product cards (cleaner layout)
- Two Brands with pricing context
- Sticky CTA bar that slides up after scrolling
- Everything responsive and accessible
- Smooth scroll animations

---

**BEGIN WORK NOW**

Start by reading the wireframe in full, then delete old code, then build section by section following the specs exactly.

