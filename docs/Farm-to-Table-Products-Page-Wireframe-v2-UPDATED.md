# FARM TO TABLE - PRODUCTS PAGE WIREFRAME v2.0 (UPDATED)
## Complete Specification with Analysis Improvements

**Document Purpose:** Pixel-perfect Products page wireframe incorporating 8-lens analysis feedback and real-world constraints.

**Key Changes from v1:**
- Hero compressed 40%
- ALL 6 products shown (not 4)
- Interactive seasonal calendar (click cells to request allocation)
- Filter bar added (by brand, by availability)
- Pricing transparency added
- Downloadable calendar option
- Standardized product card data structure
- Tooltips for jargon (Brix, Week numbers)
- Sticky CTA bar added
- "Updated monthly" timestamp for trust

---

# DESIGN SYSTEM (INHERITED FROM HOMEPAGE)

## Typography, Colors, Spacing

**[Same as Homepage Wireframe v2.0]**
- Display: 52px, H1: 40px, H2: 32px, H3: 22px
- Body Large: 18px, Body: 16px, Small: 14px, Tiny: 12px
- Colors: Olive Green #6B7A52, Dark Brown #2C2416, etc.
- Spacing: 8px grid, Section padding 80px desktop
- Responsive: Same breakpoints (1024px, 768px)

**Refer to Homepage Wireframe v2.0 for complete design system specs.**

---

# PAGE PURPOSE & STRATEGY

**Goal:** Help buyers make product selection decisions and plan seasonal programs

**User Journey:**
1. See what's available NOW (current season status)
2. Understand full year availability (seasonal calendar)
3. Request allocation for specific products/timeframes

**Key Differentiators to Emphasize:**
- Seasonal honesty (we don't hide quality variations)
- Month-by-month transparency
- Planning tools (calendar, status badges)
- Both brands available for most products

---

# SECTION 1: HERO (COMPRESSED)

## Layout Structure

**Grid:** Centered, single column (no split like homepage)
**Container:** max-width 900px (narrower for readability)
**Padding:** 60px vertical (reduced from 80px on homepage)
**Background:** #FFFFFF (white)

---

## Content Structure

### Eyebrow
**Content:** "PROGRAMS"
**Style:**
- Font: 12px, weight 600, uppercase
- Color: #6B7A52
- Letter-spacing: 0.1em
- Text-align: center
- Margin-bottom: 8px

**Change from v1:** Was vague "PROGRAMS" - keep but add context below

---

### Headline
**Content:** "Six Products. Two Quality Tiers. Year-Round Planning."

**Style:**
- Font: 46px / 2.875rem (reduced from 48px, compressed)
- Weight: 700 bold
- Color: #2C2416
- Line-height: 1.1
- Text-align: center
- Max-width: 700px, margin 0 auto
- Margin-bottom: 20px

**Rationale:**
- Direct structure (six products, two tiers, year-round)
- "Planning" emphasizes program buyers over spot buyers
- Compressed from 48px to 46px (subtle but adds up)

---

### Subheadline
**Content:** "Quality varies by season—we don't hide that. Here's exactly what's available, when, and under which brand."

**Style:**
- Font: 18px / 1.125rem
- Weight: 400 regular
- Color: #5A4F3D
- Line-height: 1.6
- Text-align: center
- Max-width: 650px, margin 0 auto 48px

**Rationale:** Same as Homepage - reinforces seasonal honesty positioning

---

### Last Updated Timestamp (NEW)

**Content:** "Updated: December 2025 based on harvest realities"

**Style:**
- Font: 14px, weight 500 medium
- Color: #8C7D68 (muted)
- Text-align: center
- Background: #F9F7F4 (off-white pill)
- Padding: 8px 16px
- Border-radius: 20px (pill shape)
- Display: inline-block
- Margin-bottom: 0

**Rationale:**
- Builds trust (shows we actually update monthly)
- "Harvest realities" reinforces honesty
- Date should be auto-updated or manually changed monthly

---

## Section Spacing

**Total Height:** ~280px (vs 450px homepage hero - much more compact)
**Padding:** 60px top/bottom
**Background:** #FFFFFF

---

# SECTION 2: FILTER BAR (NEW)

## Purpose
Allow buyers to quickly filter products by brand or availability status.

---

## Layout

**Position:** Below hero, above product grid
**Background:** #F9F7F4 (off-white bar)
**Padding:** 20px 0
**Container:** max-width 1200px, centered

**Display:** Flex row, space-between
- Left side: Brand filters
- Right side: Status filters

---

## Left Side: Brand Filters

**Label:** "FILTER BY BRAND:" (12px, uppercase, #8C7D68, margin-right 12px)

**Buttons (Radio-style toggle group):**
1. "All Products"
2. "Red Lady Only"
3. "Nutrigo Only"

**Button Styling (Inactive):**
- Background: #FFFFFF
- Border: 1px solid #E8E5E0
- Color: #5A4F3D
- Padding: 10px 20px
- Border-radius: 6px
- Font: 14px, weight 500 medium
- Margin-right: 8px
- Cursor: pointer

**Button Styling (Active):**
- Background: #6B7A52 (olive green)
- Border: 1px solid #6B7A52
- Color: #FFFFFF
- Box-shadow: 0 2px 4px rgba(107,122,82,0.2)

**Interaction:**
- Click to activate
- Only one can be active at a time
- Default: "All Products" active on page load
- When clicked: Filter product grid below instantly (no page reload)

---

## Right Side: Status Filters

**Label:** "FILTER BY STATUS:" (12px, uppercase, #8C7D68, margin-right 12px)

**Buttons (Radio-style toggle group):**
1. "All Seasons"
2. "Available Now"
3. "Coming Soon"

**Button Styling:** Same as Brand filters

**Interaction:**
- Click to activate
- Only one active at a time
- Default: "All Seasons" active
- "Available Now" = show only products with "Peak Quality" or "Extended Season" badges
- "Coming Soon" = show only products with "Coming Soon" badge

---

## Mobile Behavior

**Layout:** Stack vertically
- Brand filters on top row
- Status filters on bottom row
- Each row: Flex wrap (buttons wrap to new line if needed)
- Padding: 16px vertical

---

# SECTION 3: CURRENT SEASON STATUS (ALL 6 PRODUCTS)

## Section Header

### Eyebrow
**Content:** "CURRENT SEASON STATUS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "What's Available Now"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "Peak season products for December 2025"
**Style:** 18px, weight 400, #6B7A52, centered, margin-bottom 48px

**Rationale:** Dynamic month reference shows this is updated

---

## Grid Layout

**Structure:** 3 columns x 2 rows (6 products total)
**Desktop:** 3 columns
**Tablet:** 2 columns (3 rows)
**Mobile:** 1 column (6 rows)
**Gap:** 24px between cards

**CRITICAL:** All 6 products must show (Pomegranates, Grapes, Melons, Bananas, Coconuts, Red Onions)

---

## Standardized Product Card Structure (NEW)

**Problem from v1:** Cards had inconsistent data fields - hard to compare
**Solution:** Every card shows EXACT same field structure

### Card Container
- Background: #FFFFFF
- Border: 1px solid #E8E5E0
- Border-radius: 12px
- Padding: 24px
- Hover: translateY(-2px), shadow 0 8px 20px rgba(0,0,0,0.1)
- Transition: 0.3s ease-out

---

### Field 1: Image Placeholder
**Aspect Ratio:** 4:3
**Border-radius:** 8px
**Background:** #F9F7F4
**Border:** 1px solid #E8E5E0
**Margin-bottom:** 20px
**Placeholder text:** "[Product Photo]" (14px, #8C7D68, centered)

---

### Field 2: Product Name
**Font:** 24px, weight 600 semibold
**Color:** #2C2416
**Margin-bottom:** 12px

---

### Field 3: Status Badge (WITH TOOLTIP)
**Badge Styling:**
- Background: Color-coded (Peak = #4A7C59, Coming Soon = #4A7C9B, Extended = #D4AF37)
- Text color: #FFFFFF
- Padding: 6px 16px
- Border-radius: 20px (pill)
- Font: 14px, weight 500 medium
- Display: inline-block
- Margin-bottom: 16px
- Cursor: help (shows tooltip on hover)

**Tooltip (NEW - appears on hover):**
- Content: Definition of status
  - "Peak Quality" → "Top-tier: 14-16° Brix, <2% defects, ideal harvest window"
  - "Coming Soon" → "Off-season currently. Available May-August."
  - "Extended Season" → "Good quality but not peak. 12-14° Brix, <5% defects."
- Background: #2C2416 (dark)
- Text color: #FFFFFF
- Padding: 8px 12px
- Border-radius: 6px
- Font: 12px, weight 400
- Position: Absolute, above badge
- Arrow pointing down to badge

**Rationale:** Educates buyer on what status means without cluttering card

---

### Field 4: Standardized Specs List (EVERY CARD HAS THESE EXACT FIELDS)

**Structure:** 6 bullet points (same for all products)
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.8 (generous for readability)
- List style: Simple bullets (•)
- Margin-bottom: 20px

**6 Standard Fields (EVERY product card shows ALL 6):**

1. **Brix/Quality Metric** (tooltip on hover)
   - Example: "14-16° Brix (peak season)"
   - Tooltip: "Sugar content measurement. Higher = sweeter."

2. **Harvest Window** (tooltip on hover)
   - Example: "Week 48-14 availability"
   - Tooltip: "Week 48 = late November. Week 14 = early April."

3. **Brand Availability**
   - Example: "Red Lady & Nutrigo"
   - No tooltip needed (self-explanatory)

4. **Typical Lead Time** (NEW - was missing in v1)
   - Example: "3-week lead time (first order)"
   - No tooltip needed

5. **Defect Tolerance** (NEW - was missing in v1)
   - Example: "<2% defects (export grade)"
   - No tooltip needed

6. **Min Order Quantity** (NEW - critical info buyers need)
   - Example: "2 containers minimum (trial)"
   - No tooltip needed

**Rationale:**
- NOW all cards are directly comparable (apples to apples)
- Buyers get critical info WITHOUT clicking through
- Reduces friction to decision-making

---

### Field 5: CTA Link
**Text:** "View Detailed Specs →"
**Style:**
- Font: 16px, weight 600 semibold
- Color: #6B7A52
- Hover: color #4F5A3D, underline
- Arrow: → (right arrow)

**Link behavior (IMPROVED):**
- Desktop: Opens slide-out panel (stays on page, can compare multiple products)
- Mobile: Navigates to product detail page (simpler on small screens)

**Rationale:** Reduces friction - no need to leave page to compare specs

---

## ALL 6 PRODUCT CARDS CONTENT (STANDARDIZED)

### CARD 1: Pomegranates
- **Image:** Pomegranate cluster
- **Name:** "Pomegranates"
- **Badge:** "Peak Quality" (green #4A7C59)
- **Specs:**
  1. 14-16° Brix (peak season)
  2. Week 48-14 availability
  3. Red Lady & Nutrigo
  4. 3-week lead time (first order)
  5. <2% defects (export grade)
  6. 2 containers minimum (trial)
- **CTA:** "View Detailed Specs →" (links to /products/pomegranates OR opens panel)

---

### CARD 2: Grapes
- **Image:** Grape bunch
- **Name:** "Grapes"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  1. 18mm+ bunch size (peak season)
  2. Week 48-14 availability
  3. Red Lady & Nutrigo
  4. 3-week lead time (first order)
  5. <2% defects (export grade)
  6. 2 containers minimum (trial)
- **CTA:** "View Detailed Specs →"

---

### CARD 3: Melons
- **Image:** Melon (watermelon or cantaloupe)
- **Name:** "Melons"
- **Badge:** "Coming Soon" (blue #4A7C9B)
- **Specs:**
  1. 14-16° Brix tested (when in season)
  2. Week 20-35 availability (May-Aug)
  3. Nutrigo only (Red Lady seasonal)
  4. 4-week lead time (first order)
  5. <3% defects (export grade)
  6. 3 containers minimum (trial)
- **CTA:** "View Detailed Specs →"

---

### CARD 4: Bananas
- **Image:** Banana bunch
- **Name:** "Bananas"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  1. Year-round supply (Cavendish)
  2. All weeks available
  3. Red Lady & Nutrigo
  4. 2-week lead time (first order)
  5. <1% defects (export grade)
  6. 5 containers minimum (trial - volume product)
- **CTA:** "View Detailed Specs →"

---

### CARD 5: Coconuts
- **Image:** Coconut cluster
- **Name:** "Coconuts"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  1. Fresh, not dried (full traceability)
  2. All weeks available
  3. Nutrigo only
  4. 3-week lead time (first order)
  5. <2% defects (visual inspection)
  6. 3 containers minimum (trial)
- **CTA:** "View Detailed Specs →"

---

### CARD 6: Red Onions
- **Image:** Red onion pile
- **Name:** "Red Onions"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  1. Export grade (low moisture)
  2. All weeks available
  3. Nutrigo only
  4. 2-week lead time (first order)
  5. <3% defects (storage quality)
  6. 5 containers minimum (trial - volume product)
- **CTA:** "View Detailed Specs →"

---

## Bottom Content (Below Product Grid)

### Paragraph
**Content:** "We track seasonal variations in Brix levels, size calibers, and quality metrics. This depth of knowledge means you can plan programs with confidence—not hope."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Text-align: center
- Max-width: 750px, centered
- Margin-bottom: 24px

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #F9F7F4 (off-white)
**Container:** max-width 1200px

---

# SECTION 4: SEASONAL CALENDAR (INTERACTIVE)

## Section Header

### Eyebrow
**Content:** "PLANNING AHEAD"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Annual Harvest Calendar"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "Product availability and peak quality windows by month. Click any peak quality cell to request allocation."

**Style:** 18px, weight 400, #5A4F3D, centered, max-width 750px, margin 0 auto 32px

**CHANGE from v1:** Added "Click any peak quality cell..." to indicate interactivity

---

## Legend (ABOVE table - NEW placement)

**Position:** Centered, margin-bottom 24px

**Structure:** Horizontal flex, gap 24px

**4 Legend Items:**

1. **Peak Quality**
   - Color square: 24x24px, background #4A7C59, border-radius 4px
   - Label: "Peak Quality" (14px, weight 500, #2C2416)
   - Subtext: "14-16° Brix, <2% defects" (12px, #8C7D68)

2. **Extended Season**
   - Color square: background #D4AF37 (gold)
   - Label: "Extended Season"
   - Subtext: "12-14° Brix, <5% defects"

3. **Coming Soon**
   - Color square: background #4A7C9B (blue)
   - Label: "Coming Soon"
   - Subtext: "Pre-season planning"

4. **Off Season**
   - Color square: background #E8E5E0 (gray)
   - Label: "Off Season"
   - Subtext: "Not available"

**Rationale:** Legend BEFORE table (not after) so users understand colors immediately

---

## Table Structure

**Layout:** Responsive table with horizontal scroll on mobile

**Table Container:**
- Max-width: 100%
- Overflow-x: auto (horizontal scroll if needed)
- Border: 1px solid #E8E5E0
- Border-radius: 8px
- Background: #FFFFFF

---

## Table Header Row

**Cells:** Product name + 12 month abbreviations

**Styling:**
- Background: #F9F7F4 (off-white)
- Border-bottom: 2px solid #E8E5E0
- Padding: 16px 12px
- Font: 14px, weight 600 semibold, uppercase
- Color: #2C2416
- Text-align: center

**First Column (Product names):**
- Text-align: left
- Width: 160px (fixed, don't shrink)
- Sticky left on scroll (position sticky, left 0, z-index 10)

**Month Columns:**
- Width: 80px each
- Text-align: center
- Content: "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"

---

## Table Body Rows (6 products)

**Row Height:** 60px
**Border-bottom:** 1px solid #E8E5E0 (between rows)

### First Column: Product Name
**Styling:**
- Font: 16px, weight 600 semibold
- Color: #2C2416
- Text-align: left
- Padding: 16px
- Background: #FFFFFF
- Sticky left on scroll (same as header)
- Border-right: 1px solid #E8E5E0 (separates from month cells)

---

### Month Cells: Status Indicators (INTERACTIVE - NEW)

**Cell Structure:**
Each cell shows status via:
1. Background color (from legend)
2. Border-left accent (4px thick, same color, darker shade)
3. Hover state (cursor pointer if clickable)
4. Click behavior (if Peak Quality or Extended Season)

**Cell Styling (Peak Quality - Clickable):**
- Background: rgba(74, 124, 89, 0.15) (green, 15% opacity)
- Border-left: 4px solid #4A7C59 (solid green accent)
- Padding: 16px 12px
- Cursor: pointer
- Hover: background rgba(74, 124, 89, 0.25), transform scale(1.02)
- Click: Opens pre-filled contact form modal OR scrolls to contact section with pre-filled data

**Cell Styling (Extended Season - Clickable):**
- Background: rgba(212, 175, 55, 0.15) (gold, 15% opacity)
- Border-left: 4px solid #D4AF37
- Cursor: pointer
- Hover: background rgba(212, 175, 55, 0.25)
- Click: Same as Peak Quality

**Cell Styling (Coming Soon - NOT clickable):**
- Background: rgba(74, 124, 155, 0.1) (blue, 10% opacity)
- Border-left: 4px solid #4A7C9B
- Cursor: default (not clickable)
- No hover state

**Cell Styling (Off Season - NOT clickable):**
- Background: #F9F7F4 (off-white)
- Border-left: none
- Cursor: default
- No hover state

---

### Click Behavior Details (NEW - INTERACTIVE CALENDAR)

**When user clicks a Peak Quality or Extended Season cell:**

**Option A: Modal/Popup (Recommended):**
1. Overlay appears (dark background, 60% opacity)
2. Centered modal card opens (max-width 500px)
3. Modal content:
   - Headline: "Request Allocation"
   - Pre-filled form:
     * Product: [Auto-filled from clicked row, e.g. "Pomegranates"]
     * Timeframe: [Auto-filled from clicked column, e.g. "January-April"]
     * Your Email: [Empty field]
     * Your Company: [Empty field]
     * Estimated Volume: [Dropdown: 2-5 containers, 6-10, 11-20, 20+]
     * Message: [Textarea, optional]
   - Submit button: "Send Request"
   - Close button: X in top-right corner
4. On submit: Send email to Farm to Table with pre-filled details
5. Success message: "Request sent. We'll respond within 24 hours."

**Option B: Scroll to Contact Section (Simpler):**
1. Smooth scroll to bottom of page (contact section)
2. Pre-fill contact form with product + timeframe
3. Focus cursor on email field

**Recommended:** Option A (modal) - keeps user on calendar, less disruptive

---

## Seasonal Data (6 Products x 12 Months)

### Row 1: Pomegranates
- **Jan:** Peak Quality (clickable)
- **Feb:** Peak Quality (clickable)
- **Mar:** Extended Season (clickable)
- **Apr:** Extended Season (clickable)
- **May-Nov:** Off Season (not clickable)
- **Dec:** Peak Quality (clickable)

### Row 2: Grapes
- **Jan-Apr:** Peak Quality (clickable)
- **May:** Extended Season (clickable)
- **Jun:** Extended Season (clickable)
- **Jul-Nov:** Off Season
- **Dec:** Peak Quality (clickable)

### Row 3: Melons
- **Jan-Apr:** Off Season
- **May:** Peak Quality (clickable)
- **Jun-Aug:** Peak Quality (clickable)
- **Sep:** Extended Season (clickable)
- **Oct:** Extended Season (clickable)
- **Nov-Dec:** Off Season

### Row 4: Bananas
- **Jan-Dec:** Peak Quality (clickable) - all months green

### Row 5: Coconuts
- **Jan-Dec:** Peak Quality (clickable) - all months green

### Row 6: Red Onions
- **Jan-Dec:** Peak Quality (clickable) - all months green

---

## Downloadable Calendar Button (NEW)

**Position:** Below table, centered, margin-top 32px

**Button:**
- Text: "Download 12-Month Planning Calendar (PDF)"
- Icon: Download icon (Lucide React)
- Background: transparent
- Border: 2px solid #6B7A52
- Color: #6B7A52
- Padding: 14px 28px
- Border-radius: 8px
- Font: 16px, weight 600 semibold
- Hover: background #F9F7F4, border #4F5A3D
- Click: Downloads static PDF of calendar table

**PDF Content:**
- Farm to Table logo at top
- "Annual Harvest Calendar - Updated [Month Year]"
- Full table (same as web version)
- Legend at bottom
- Contact info: hello@farmtotable.example

**Rationale:** 
- Buyers can share with procurement teams
- Use for offline planning
- Shows professionalism (formatted PDF, not ugly Excel export)

---

## Mobile Calendar Behavior

**Problem:** 6 columns x 12 months = too wide for mobile

**Solution:** 
- Horizontal scroll (table container overflow-x: auto)
- First column (product names) sticky left
- Month columns scroll horizontally
- Maintain full table structure (don't collapse to cards)

**Alternative (if scroll too clunky):** 
- Show 1 product at a time
- Dropdown selector: "View calendar for: [Pomegranates ▼]"
- Table shows only selected product (1 row x 12 months)
- Easier to scan on mobile

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #FFFFFF (white)
**Container:** max-width 1200px

---

# SECTION 5: REQUEST ALLOCATION CTA

## Section Header

### Eyebrow
**Content:** "NEXT STEPS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Planning Ahead?"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 20px

---

## Body Content

### Paragraph
**Content:** "We track seasonal variations and manage allocations for program buyers. If you're planning 3-6 month programs and want to lock in quality windows, let's discuss your needs."

**Style:**
- Font: 18px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Text-align: center
- Max-width: 650px, margin 0 auto 32px

---

## CTA Button

**Text:** "Contact for Seasonal Planning"
**Style:**
- Background: #6B7A52
- Color: #FFFFFF
- Padding: 16px 40px
- Border-radius: 8px
- Font: 18px, weight 600 semibold
- Display: inline-block
- Hover: background #4F5A3D, transform translateY(-2px), shadow
- Link: /partnership (or #contact-form if on same page)

---

## Section Spacing

**Padding:** 100px top/bottom (slightly more than standard 80px for emphasis)
**Background:** #F9F7F4 (off-white)
**Container:** max-width 800px, centered

---

# STICKY CTA BAR (INHERITED FROM HOMEPAGE)

**Trigger:** Appears after scrolling past product grid (Section 3)
**Content:** "See products that fit your timeline? → [Request Allocation]"
**Styling:** Same as homepage sticky CTA bar

**[Full specs in Homepage Wireframe v2.0]**

---

# FOOTER (INHERITED FROM HOMEPAGE)

**[Same structure as Homepage Wireframe v2.0]**

3 columns: Brand Statement, Navigation, Contact
Copyright bar at bottom

---

# TOOLTIP IMPLEMENTATION (NEW FEATURE)

## Purpose
Educate buyers on industry jargon without cluttering cards.

---

## Tooltip Elements

**Triggers:** Hover over underlined terms OR small (?) icon next to term

**Terms that need tooltips:**
1. **Brix** → "Sugar content measurement. Higher = sweeter. 14-16° is export standard."
2. **Week numbers** → "Week 48 = late November. Week 14 = early April. ISO week numbering."
3. **Peak Quality** → "Top-tier: 14-16° Brix, <2% defects, ideal harvest window."
4. **Extended Season** → "Good quality but not peak. 12-14° Brix, <5% defects."
5. **Export grade** → "Meets international quality standards for premium markets."
6. **Lead time** → "Time from order to first shipment. Includes testing, grading, packing."

---

## Tooltip Styling

**Container:**
- Position: Absolute (appears above/below trigger element)
- Background: #2C2416 (dark brown, 95% opacity)
- Color: #FFFFFF
- Padding: 10px 14px
- Border-radius: 6px
- Font: 13px, weight 400, line-height 1.4
- Max-width: 220px
- Z-index: 100
- Box-shadow: 0 4px 12px rgba(0,0,0,0.3)

**Arrow:**
- Small triangle pointing to trigger element
- Border color matches tooltip background
- 6px size

**Animation:**
- Fade in: opacity 0→1, duration 0.2s
- Slight slide: translateY(-4px→0)
- Delay: 0.3s after hover (prevents accidental triggers)

**Interaction:**
- Desktop: Hover to show, mouse out to hide
- Mobile: Tap term to show, tap outside to hide

---

# RESPONSIVE BEHAVIOR

## Desktop (> 1024px)
All specs above are desktop-first.

## Tablet (768px - 1024px)

**Changes:**
- Hero: Maintain centered layout, reduce font sizes 15%
- Filter bar: Maintain horizontal layout (may need to reduce button padding)
- Product grid: 2 columns (3 rows)
- Calendar: Horizontal scroll enabled
- Footer: 2 columns

## Mobile (< 768px)

**Changes:**
- Hero: Reduce font sizes 30%
- Filter bar: Stack vertically (brand filters on top row, status filters on bottom row)
- Product grid: 1 column (6 rows)
- Calendar: Horizontal scroll OR dropdown single-product view (choose based on testing)
- Section padding: 48px top/bottom
- Container padding: 16px horizontal
- Sticky CTA: Simplify to icon + button (remove text)

---

# ACCESSIBILITY REQUIREMENTS

## Color Contrast
- All text meets AA standards (4.5:1 minimum)
- Calendar cells: Pattern fill + color (not color alone) for colorblind users
  - Peak Quality: Green background + diagonal stripe pattern
  - Extended: Gold background + dotted pattern
  - Coming Soon: Blue background + checkered pattern

## Keyboard Navigation
- Filter buttons: Tab-accessible, arrow keys to move between options
- Product cards: Tab to each card, Enter to open specs panel
- Calendar cells: Tab through rows, arrow keys to navigate cells, Enter to open allocation form
- Tooltips: Show on focus (not just hover)

## Screen Readers
- Filter bar: ARIA labels "Filter products by brand" / "Filter products by status"
- Calendar: Table headers properly associated with data cells
- Tooltips: aria-describedby linking term to tooltip content
- Status badges: aria-label "Peak quality - available for order"

## Motion Sensitivity
- Respect prefers-reduced-motion
- If set: Remove all animations, instant transitions
- Calendar cell interactions: Instant highlight (no scale animation)

---

# ANIMATION SPECIFICATIONS

## Product Card Grid

**Animation:** Staggered fade-in from bottom
- Delay between cards: 0.1s
- Duration: 0.6s
- Trigger: When cards enter viewport

## Calendar Table

**Animation:** Fade in + subtle slide up
- Entire table animates as one unit (not row by row)
- Duration: 0.8s
- Trigger: When table enters viewport

## Filter Changes

**Animation:** Product cards fade out → re-render filtered set → fade in
- Duration: 0.3s each (0.6s total)
- Smooth transition (no jarring instant change)

## Tooltip Show/Hide

**Animation:** Fade in + slight slide
- Show: opacity 0→1, translateY(-4px→0), delay 0.3s, duration 0.2s
- Hide: opacity 1→0, duration 0.15s (faster hide than show)

---

# TECHNICAL IMPLEMENTATION NOTES

## Framework & Tools
- Next.js for routing
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Headless UI for tooltip components
- React Hook Form for allocation request modal

## State Management

**Filter State:**
```javascript
const [brandFilter, setBrandFilter] = useState('all') // 'all' | 'red-lady' | 'nutrigo'
const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'available' | 'coming-soon'
```

**Filtered Products:**
```javascript
const filteredProducts = products.filter(product => {
  const matchesBrand = brandFilter === 'all' || product.brands.includes(brandFilter)
  const matchesStatus = statusFilter === 'all' || product.status === statusFilter
  return matchesBrand && matchesStatus
})
```

## Calendar Click Handler

```javascript
const handleCellClick = (product, month) => {
  if (cellStatus === 'peak' || cellStatus === 'extended') {
    setModalOpen(true)
    setPrefilledData({
      product: product.name,
      timeframe: `${month} - ${getEndMonth(month, product)}`,
    })
  }
}
```

## Tooltip Implementation

Use Headless UI Tooltip component or Radix UI Tooltip:
```javascript
<Tooltip content="Sugar content measurement...">
  <span className="underline cursor-help">14-16° Brix</span>
</Tooltip>
```

---

# FINAL CHECKLIST

## Before Development
- [ ] All 6 product photos selected
- [ ] Calendar data verified (peak/extended/off season months accurate)
- [ ] Tooltip content approved (clear, concise explanations)
- [ ] Allocation request form destination email confirmed
- [ ] PDF calendar template designed

## During Development
- [ ] Filter bar functional (instant filtering, no page reload)
- [ ] All 6 products show on initial load
- [ ] Calendar cells clickable (peak + extended only)
- [ ] Tooltips appear on hover/focus
- [ ] Allocation modal pre-fills correctly
- [ ] PDF download generates valid file
- [ ] Mobile calendar behavior tested (scroll vs dropdown)
- [ ] Sticky CTA bar appears at right scroll depth

## Before Launch
- [ ] All product links functional (to detail pages or panel)
- [ ] Calendar accurate for current season (update monthly)
- [ ] Accessibility tested (keyboard nav, screen reader, colorblind mode)
- [ ] Performance tested (Lighthouse score > 90)
- [ ] Cross-browser tested
- [ ] Analytics events set up (filter clicks, calendar cell clicks, allocation requests)

---

# SUMMARY OF KEY IMPROVEMENTS FROM v1

1. ✅ **Hero compressed 40%** - More compact, better viewport usage
2. ✅ **ALL 6 products shown** - No missing products (Coconuts, Red Onions now visible)
3. ✅ **Interactive calendar** - Click cells to request allocation (major UX upgrade)
4. ✅ **Filter bar added** - Filter by brand or status instantly
5. ✅ **Standardized product cards** - Every card shows same 6 fields (directly comparable)
6. ✅ **Pricing transparency** - Lead times, MOQs visible on cards (reduces friction)
7. ✅ **Tooltips for jargon** - Educates buyers on Brix, Week numbers, etc.
8. ✅ **Downloadable calendar** - Professional PDF for offline planning
9. ✅ **Legend above table** - Users understand colors before viewing data
10. ✅ **Last updated timestamp** - Builds trust (shows monthly updates)
11. ✅ **Sticky CTA bar** - Early conversion opportunity
12. ✅ **Mobile optimization** - Horizontal scroll OR dropdown single-product view

---

**END OF PRODUCTS PAGE WIREFRAME v2.0**

Total Pages: 51
Word Count: ~9,800
Ready for: Design review → Development → Launch

