# Design System Implementation

I need you to implement the Farm to Table design system exactly as specified.

## Step 1: Tailwind Config
Replace `tailwind.config.ts` with:
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Base System
        base: {
          black: '#0A0A0B',
          'off-black': '#121214',
          'charcoal': '#1A1A1C',
        },
        
        // Olive System (Primary Brand)
        olive: {
          50: '#F5F6F3',
          100: '#E8EBE3',
          200: '#D1D6C7',
          300: '#B4BCA3',
          400: '#95A080',
          500: '#6B7A52', // Primary olive glow
          600: '#556241',
          700: '#404A32',
          800: '#2D3524',
          900: '#1C2116',
        },
        
        // Semantic Colors
        status: {
          success: '#4ADE80', // Bright green for "In Season"
          warning: '#FBBF24', // Amber for "Limited Availability"
          error: '#EF4444',   // Red for "Out of Season"
          info: '#60A5FA',    // Blue for informational states
        },
        
        // Accent System
        accent: {
          gold: '#D4AF37',    // Red Lady premium
          steel: '#94A3B8',   // Nutrigo industrial
          copper: '#B87333',  // Highlight states
        },
        
        // Type System
        type: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          tertiary: '#525252',
          inverse: '#0A0A0B',
        },
      },
      
      fontFamily: {
        // Display & Marketing Copy
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Technical Data & Specs
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      
      fontSize: {
        // Marketing Hierarchy
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        
        // Body Hierarchy
        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        
        // Technical/Data Hierarchy (Mono)
        'data-lg': ['1rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'JetBrains Mono' }],
        'data-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'JetBrains Mono' }],
        'data-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'JetBrains Mono' }],
      },
      
      boxShadow: {
        'olive-glow': '0 0 20px rgba(107, 122, 82, 0.3)',
        'olive-glow-strong': '0 0 30px rgba(107, 122, 82, 0.5)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'inset-subtle': 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
      },
      
      backdropBlur: {
        'data-overlay': '20px',
      },
      
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise-texture': "url('/textures/noise.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config


## Step 2: Global CSS
Replace `app/globals.css` with:
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ============================================
   FOUNDATIONAL LAYER
   ============================================ */

:root {
  /* Base spacing rhythm (8px system) */
  --space-unit: 0.5rem;
  
  /* Technical grid (for data tables) */
  --grid-gap: 1.5rem;
  
  /* Animation durations */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  
  /* Easing curves */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
}

/* ============================================
   BASE RESETS & TYPOGRAPHY
   ============================================ */

@layer base {
  * {
    @apply border-type-tertiary;
  }
  
  body {
    @apply bg-base-black text-type-primary font-sans antialiased;
  }
  
  /* Improve mono font rendering */
  .font-mono {
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1, "zero" 1;
  }
  
  /* Smooth scroll for anchor links */
  html {
    scroll-behavior: smooth;
  }
  
  /* Remove default list styles */
  ul, ol {
    @apply list-none;
  }
  
  /* Better button defaults */
  button {
    @apply cursor-pointer select-none;
  }
  
  /* Focus states (accessibility) */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-olive-500;
  }
}

/* ============================================
   COMPONENT PATTERNS
   ============================================ */

@layer components {
  
  /* Card Base Pattern */
  .card-base {
    @apply bg-base-off-black border border-type-tertiary rounded-lg overflow-hidden;
    @apply transition-all duration-300 ease-out-expo;
  }
  
  /* Hover-to-Reveal Product Card */
  .product-card {
    @apply card-base relative group cursor-pointer;
    @apply hover:border-olive-500 hover:shadow-olive-glow;
  }
  
  .product-card-overlay {
    @apply absolute inset-0 bg-base-black/90 backdrop-blur-data-overlay;
    @apply flex flex-col justify-end p-6;
    @apply translate-y-full group-hover:translate-y-0;
    @apply transition-transform duration-500 ease-out-expo;
  }
  
  .product-card-image {
    @apply transition-transform duration-500 ease-out-expo;
    @apply group-hover:scale-105;
  }
  
  /* Technical Badge Pattern */
  .badge-technical {
    @apply inline-flex items-center gap-2 px-3 py-1;
    @apply bg-olive-900/50 border border-olive-600 rounded-full;
    @apply font-mono text-data-sm text-olive-300;
    @apply shadow-olive-glow;
  }
  
  /* Data Table Pattern */
  .data-table {
    @apply w-full font-mono text-data-md;
  }
  
  .data-table th {
    @apply text-left text-type-secondary text-data-sm uppercase tracking-wider;
    @apply pb-3 border-b border-type-tertiary;
  }
  
  .data-table td {
    @apply py-4 border-b border-type-tertiary/50;
  }
  
  /* Section Container */
  .section-container {
    @apply max-w-7xl mx-auto px-6 lg:px-8;
  }
  
  /* Gradient Overlay (for hero sections) */
  .gradient-overlay {
    @apply absolute inset-0 bg-gradient-to-b from-transparent via-base-black/50 to-base-black;
  }
  
  /* CTA Button Pattern */
  .btn-primary {
    @apply px-6 py-3 bg-olive-600 hover:bg-olive-500;
    @apply text-type-primary font-semibold rounded-lg;
    @apply transition-all duration-300;
    @apply hover:shadow-olive-glow-strong hover:scale-[1.02];
    @apply active:scale-95;
  }
  
  .btn-secondary {
    @apply px-6 py-3 border border-olive-600 hover:border-olive-500;
    @apply text-olive-400 hover:text-olive-300 font-semibold rounded-lg;
    @apply transition-all duration-300;
    @apply hover:bg-olive-950/30;
  }
  
  /* Floating Animation Containers */
  .float-container {
    @apply absolute pointer-events-none;
  }
}

/* ============================================
   UTILITY EXTENSIONS
   ============================================ */

@layer utilities {
  
  /* Text Glow Effects */
  .text-glow-olive {
    text-shadow: 0 0 20px rgba(107, 122, 82, 0.6);
  }
  
  .text-glow-gold {
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
  }
  
  /* Blur Backgrounds */
  .blur-bg {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  
  /* No Scrollbar (for custom scroll implementations) */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  /* Noise Texture Overlay */
  .noise-overlay {
    position: relative;
  }
  
  .noise-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/textures/noise.png');
    opacity: 0.03;
    pointer-events: none;
  }
}

/* ============================================
   RESPONSIVE BREAKPOINT ADJUSTMENTS
   ============================================ */

@media (max-width: 768px) {
  :root {
    --grid-gap: 1rem;
  }
  
  /* On mobile, the hover-to-reveal should be tap-to-reveal */
  .product-card-overlay {
    @apply translate-y-full;
  }
  
  /* Make data tables horizontal-scroll on mobile */
  .data-table {
    @apply text-data-sm;
  }
}

/* ============================================
   PRINT STYLES (for technical data sheets)
   ============================================ */

@media print {
  body {
    @apply bg-white text-black;
  }
  
  .no-print {
    display: none !important;
  }
}


## Step 3: Font Setup
Update `app/layout.tsx` to import:
- Inter (variable font)
- JetBrains Mono (variable font)

Use next/font/google for this.

## Step 4: Verification Component
Create `app/page.tsx` with a simple test page that shows:
- Background: bg-base-black
- Heading: "Farm to Table Trading" in display-lg
- Subheading: "Technical Luxury Theme Test" in body-lg with text-type-secondary
- A card with class "card-base" containing:
  - Badge with class "badge-technical" showing "BRIX: 14-16°"
  - Button with class "btn-primary" that says "Test Primary"
  - Button with class "btn-secondary" that says "Test Secondary"

Run `npm run dev` and verify:
1. Black background appears
2. Fonts load correctly (Inter for display, check in DevTools)
3. Buttons have olive green styling
4. Badge has olive glow effect on hover

Report back what you see.
```

**Your job:** Verify the design system is working. Open `localhost:3000` and check:
- ✅ Dark background
- ✅ Fonts render (Inter should be crisp, not system font)
- ✅ Button hover effects work
- ✅ Colors match (olive green, not generic green)

**If it fails:** Tell Claude Code what's wrong with screenshots. Don't move forward until this works.

---

## PHASE 2: DATA LAYER (20 minutes)

**Goal:** Get product data structure working so components can pull from it.

### 2.1 Create Product Constants

Give Claude Code:
```
Create the product data architecture:

1. Create `src/constants/products.ts` with:
// ============================================
// TYPE DEFINITIONS
// ============================================

export type ProductID = 
  | 'pomo-01' 
  | 'banana-01' 
  | 'onion-01' 
  | 'grape-01' 
  | 'coco-01' 
  | 'melon-01';

export type SeasonMonth = 
  | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' 
  | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export type DefectType = 'Internal' | 'Physical' | 'Skin' | 'Shatter' | 'Crack' | 'Firmness';

export interface ProductSpec {
  id: ProductID;
  name: string;
  slug: string;
  
  // Technical Specifications
  brixTarget: string | null; // e.g., "14-16°" or null for non-applicable
  defectTolerance: {
    type: DefectType;
    threshold: string; // e.g., "<2%"
  };
  moq: {
    value: number;
    unit: 'Cont.' | 'MT'; // Container or Metric Ton
  };
  leadTime: {
    value: number;
    unit: 'Days';
  };
  
  // Seasonality
  primarySeason: {
    months: SeasonMonth[];
    description: string; // e.g., "Peak Quality"
  };
  
  // Brand Assignment
  brands: ('RedLady' | 'Nutrigo')[];
  
  // Assets
  images: {
    hero: string; // Path to main product image
    thumbnail: string; // Path to card thumbnail
    render3D?: string; // Optional 3D render for animations
  };
  
  // Marketing Copy
  description: {
    short: string; // One-liner for cards
    long: string; // Full description for detail pages
  };
  
  // Logistics (for TDS drawer)
  logistics: {
    temperatureRange: string; // e.g., "2-4°C"
    humidityRange: string; // e.g., "85-90%"
    packingWeight: string; // e.g., "10kg/carton"
    shelfLife: string; // e.g., "30 days"
  };
}

// ============================================
// PRODUCT DATA
// ============================================

export const PRODUCTS: Record<ProductID, ProductSpec> = {
  'pomo-01': {
    id: 'pomo-01',
    name: 'Pomegranate',
    slug: 'pomegranate',
    brixTarget: '14-16°',
    defectTolerance: {
      type: 'Internal',
      threshold: '<2%',
    },
    moq: {
      value: 2,
      unit: 'Cont.',
    },
    leadTime: {
      value: 21,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      description: 'Peak Quality',
    },
    brands: ['RedLady', 'Nutrigo'],
    images: {
      hero: '/products/pomegranate-hero.jpg',
      thumbnail: '/products/pomegranate-thumb.jpg',
      render3D: '/products/pomegranate-3d.png',
    },
    description: {
      short: 'Ruby arils, 14-16° Brix, zero internal defects',
      long: 'Premium Bhagwa variety from Maharashtra. Rigorous internal inspection ensures consistent sweetness and zero browning.',
    },
    logistics: {
      temperatureRange: '2-4°C',
      humidityRange: '85-90%',
      packingWeight: '4.5kg/carton',
      shelfLife: '45 days',
    },
  },
  
  'banana-01': {
    id: 'banana-01',
    name: 'Banana',
    slug: 'banana',
    brixTarget: null, // Class A designation instead
    defectTolerance: {
      type: 'Physical',
      threshold: '<1%',
    },
    moq: {
      value: 1,
      unit: 'Cont.',
    },
    leadTime: {
      value: 14,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      description: 'Year-Round Availability',
    },
    brands: ['Nutrigo'],
    images: {
      hero: '/products/banana-hero.jpg',
      thumbnail: '/products/banana-thumb.jpg',
      render3D: '/products/banana-3d.png',
    },
    description: {
      short: 'Class A Grand Naine, consistent caliber, rapid turnover',
      long: 'Sourced from high-altitude farms in Tamil Nadu. Controlled ripening chambers ensure optimal eating window at destination.',
    },
    logistics: {
      temperatureRange: '13-14°C',
      humidityRange: '90-95%',
      packingWeight: '13kg/carton',
      shelfLife: '21 days',
    },
  },
  
  // ... (Continue pattern for remaining products)
  
  'onion-01': {
    id: 'onion-01',
    name: 'Red Onion',
    slug: 'red-onion',
    brixTarget: null,
    defectTolerance: {
      type: 'Skin',
      threshold: '<3%',
    },
    moq: {
      value: 5,
      unit: 'Cont.',
    },
    leadTime: {
      value: 10,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      description: 'Prime Season',
    },
    brands: ['Nutrigo'],
    images: {
      hero: '/products/onion-hero.jpg',
      thumbnail: '/products/onion-thumb.jpg',
    },
    description: {
      short: '55mm+ caliber, deep purple, high solid content',
      long: 'Nashik red onions renowned for pungency and storage stability. Ideal for industrial processing and retail.',
    },
    logistics: {
      temperatureRange: 'Ambient',
      humidityRange: '65-70%',
      packingWeight: '25kg/mesh bag',
      shelfLife: '90 days',
    },
  },
  
  // Add remaining products following the same pattern...
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const getAllProducts = (): ProductSpec[] => {
  return Object.values(PRODUCTS);
};

export const getProductById = (id: ProductID): ProductSpec | undefined => {
  return PRODUCTS[id];
};

export const getProductsByBrand = (brand: 'RedLady' | 'Nutrigo'): ProductSpec[] => {
  return getAllProducts().filter(product => product.brands.includes(brand));
};

export const isInSeason = (product: ProductSpec, currentMonth: SeasonMonth): boolean => {
  return product.primarySeason.months.includes(currentMonth);
};

export const getInSeasonProducts = (currentMonth: SeasonMonth): ProductSpec[] => {
  return getAllProducts().filter(product => isInSeason(product, currentMonth));
};

// Helper to determine current season status
export const getSeasonStatus = (product: ProductSpec): 'peak' | 'available' | 'limited' | 'unavailable' => {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }) as SeasonMonth;
  const isCurrentlyInSeason = isInSeason(product, currentMonth);
  
  if (isCurrentlyInSeason) {
    return 'peak';
  }
  
  // Add logic for shoulder seasons if needed
  return 'available'; // Simplified for now
};


2. Complete all 6 products (I only showed 3 examples). Use the table from Master Spec for exact values:
- Pomegranate (pomo-01) ✓ Already defined
- Banana (banana-01) ✓ Already defined  
- Red Onion (onion-01) ✓ Already defined
- Grapes (grape-01) - YOU NEED TO ADD
- Coconut (coco-01) - YOU NEED TO ADD
- Melon (melon-01) - YOU NEED TO ADD

Reference this data table for exact specs:
# PRODUCT DATA TABLE (From Master Spec)

Use this table to populate the remaining products in constants/products.ts:

| Product      | ID         | Brix Target    | Defect Tolerance | MOQ      | Lead Time | Primary Season  |
|--------------|------------|----------------|------------------|----------|-----------|-----------------|
| Pomegranate  | pomo-01    | 14-16°         | <2% Internal     | 2 Cont.  | 21 Days   | Nov - March     |
| Banana       | banana-01  | N/A (Class A)  | <1% Physical     | 1 Cont.  | 14 Days   | Year-Round      |
| Red Onion    | onion-01   | N/A (55mm+)    | <3% Skin         | 5 Cont.  | 10 Days   | Jan - June      |
| Grapes       | grape-01   | 18°+           | Zero-Shatter     | 2 Cont.  | 18 Days   | Jan - April     |
| Coconut      | coco-01    | Fresh Grade    | Zero-Crack       | 3 Cont.  | 25 Days   | Year-Round      |
| Melon        | melon-01   | 12°+           | Firmness 2kg     | 2 Cont.  | 15 Days   | March - July    |

## Translation Notes for Claude Code:

**Grapes (grape-01):**
- Brix Target: "18°+" (string)
- Defect Tolerance Type: "Shatter"
- Defect Threshold: "Zero"
- Primary Season Months: ['Jan', 'Feb', 'Mar', 'Apr']

**Coconut (coco-01):**
- Brix Target: null (not applicable - use "Fresh Grade" in description)
- Defect Tolerance Type: "Crack"
- Defect Threshold: "Zero"
- Primary Season Months: All 12 months (Year-Round)

**Melon (melon-01):**
- Brix Target: "12°+" (string)
- Defect Tolerance Type: "Firmness"
- Defect Threshold: "2kg minimum" (use "Firmness 2kg" as threshold string)
- Primary Season Months: ['Mar', 'Apr', 'May', 'Jun', 'Jul']

## Additional Data to Estimate (Not in Master Spec):

For the 3 remaining products, you'll need to add reasonable logistics data:

**Grapes:**
- Temperature: 0-2°C
- Humidity: 90-95%
- Packing Weight: 4.5kg/carton
- Shelf Life: 30 days

**Coconut:**
- Temperature: 12-15°C
- Humidity: 75-80%
- Packing Weight: 9 coconuts/carton (~12kg)
- Shelf Life: 45 days

**Melon:**
- Temperature: 7-10°C
- Humidity: 85-90%
- Packing Weight: 10kg/carton
- Shelf Life: 20 days


3. Update `app/page.tsx` to import and display:
- List all 6 products by name
- Show each product's Brix target
- Show each product's season as comma-separated months

This is just a data verification page - no styling needed yet.
```

**Your job:** Verify you see all 6 products with correct data. Check:
- ✅ Brix values match Master Spec
- ✅ Seasons are correct
- ✅ TypeScript has no errors

---

## PHASE 3: CORE COMPONENTS (1-2 hours)

**Goal:** Build ProductCard with hover-reveal interaction.

### 3.1 Create Placeholder Images First

Before building the card, you need images. Create a simple placeholder system:
```
Create `public/products/` folder structure:
- pomegranate-thumb.jpg
- banana-thumb.jpg
- onion-thumb.jpg
- grape-thumb.jpg
- coconut-thumb.jpg
- melon-thumb.jpg

For now, use placeholder.com images with product names as text.
Format: https://placehold.co/600x400/1A1A1C/6B7A52?text=Pomegranate

Later I'll replace these with real photography.
```

### 3.2 Build ProductCard Component

Give Claude Code the **entire System Instructions document I wrote above** and then say:
```
Build the ProductCard component according to the specifications.

File: `src/components/ProductCard.tsx`

Requirements:
1. Follow the HOVER-TO-REVEAL pattern exactly
2. Use the ProductSpec type from constants/products.ts
3. Desktop: hover shows overlay with data
4. Mobile: tap toggles overlay
5. Clicking the card should call onClick(product)

Then create a test page: `src/app/test/page.tsx` that shows:
- Grid of all 6 product cards (3 columns on desktop, 1 on mobile)
- onClick just console.logs the product name
- Page background: bg-base-black

Test interactions:
- Hover on desktop shows overlay smoothly
- Image scales on hover
- Border glows olive
- Keyboard navigation works (Tab to card, Enter to activate)
```

**Your job - Critical Testing:**

Open `localhost:3000/test` and verify:

1. **Visual:**
   - Cards have subtle border in resting state
   - Hover adds olive glow
   - Image scales smoothly (not janky)
   - Overlay slides from bottom (not pop/fade)

2. **Interaction:**
   - Hover works on all cards
   - Clicking logs to console
   - Tab key navigates between cards
   - Enter key on focused card triggers onClick

3. **Mobile (resize browser to 375px):**
   - Cards stack vertically
   - Tap toggles overlay (doesn't require hover)
   - Overlay doesn't get stuck

**If anything feels wrong:** Record a screen video, show Claude Code, and ask it to fix. The card interaction is THE core experience - it must feel premium.

---

## PHASE 4: TECHNICAL DATA SHEET DRAWER (1 hour)

**Goal:** Build the side-panel that shows full product specs.

### 4.1 Build TDSDrawer Component
```
Build the Technical Data Sheet drawer component.

File: `src/components/TDSDrawer.tsx`

Follow the TDS DRAWER specification from the system instructions.

Then update `src/app/test/page.tsx`:
- Add state to track which product is selected
- Clicking a ProductCard opens TDSDrawer with that product's data
- TDSDrawer can be closed via ESC, backdrop click, or close button

Test that:
1. Drawer slides in from right smoothly
2. Shows all logistics data in a clean table format
3. Season timeline shows which months are "peak"
4. "Request Allocation" button is prominent
5. ESC key closes drawer
6. Clicking backdrop closes drawer
7. Body scroll is locked when drawer is open
```

**Your job:** Test the complete flow:

1. Open test page
2. Hover over a card (see overlay)
3. Click card (drawer opens)
4. Review data layout (is it readable? cramped?)
5. Close with ESC (works?)
6. Open another product (drawer updates correctly?)

**Common issues to watch for:**
- Drawer animation stutters (needs `will-change`)
- Table text is too small on mobile (allow horizontal scroll)
- Close button not obvious (should be top-right, visible)

---

## PHASE 5: HOMEPAGE LAYOUT (2 hours)

**Goal:** Assemble the full homepage with all sections.

### 5.1 Homepage Structure

Give Claude Code:
```
Build the homepage (`src/app/page.tsx`) with these sections:

SECTION 1 - HERO:
- Full viewport height
- Headline: "Premium Indian Produce. Engineered for Consistency."
- Subheading: "Two brands. Six products. Zero compromise on quality."
- Two CTA buttons: "View Products" + "Download Product Specs"
- Background: Subtle gradient from base-black to base-off-black

SECTION 2 - PROBLEM STATEMENT:
- Grid: 2 columns on desktop
- Left: "The India Export Problem" (title)
- Content: 3-4 sentences about quality variation, unreliable suppliers (reference my positioning from context)
- Right: "Our System" (title)  
- Content: 3-4 sentences about scientific grading, rejection rates, relationship focus
- Styling: Text-heavy but readable. Use body-lg font size.

SECTION 3 - PRODUCTS GRID:
- Display all 6 products using ProductCard component
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Section title: "Current Harvest Window"
- Filter: Only show products where current month is in their primarySeason
- If no products in season, show all with "Year-Round" badge

SECTION 4 - BRANDS EXPLANATION:
- Two-column layout
- Left column: Red Lady (premium retail)
  - Badge with gold accent
  - Text: "Boutique retail standards. Top 10% selection."
  - Example products: Pomegranate, Grapes
- Right column: Nutrigo (volume wholesale)
  - Badge with steel accent
  - Text: "High-volume reliability. Consistent calibration."
  - Example products: Banana, Onion
- Background: Slightly lighter than base (bg-base-off-black)

SECTION 5 - REJECTION CALLOUT:
- Centered, full-width banner
- Large number: "30%" with glow effect
- Text: "We reject 30% of the harvest at the gate so you don't reject it at your port."
- Background: Dark with subtle olive glow around the percentage

SECTION 6 - CTA:
- Simple centered section
- Headline: "Ready to establish a partnership?"
- Button: "Request Product Allocation"
- Subtext: "We work with 10-15 committed buyers. Not transactional ordering."

Don't add footer yet - just these sections.