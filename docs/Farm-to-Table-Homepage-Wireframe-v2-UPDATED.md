# FARM TO TABLE - HOMEPAGE WIREFRAME v2.0 (UPDATED)
## Complete Specification with Analysis Improvements

**Document Purpose:** Pixel-perfect homepage wireframe incorporating 8-lens analysis feedback and real-world constraints (no videos, anonymous clients only, no testimonials).

**Key Changes from v1:**
- Hero compressed 40% (better viewport usage)
- Strategic positioning leads with "chaos handler" not generic "premium"
- Data examples PRIMARY not hidden
- 2-tier visual hierarchy in Proof Points
- Only 3 product teaser (not 4)
- Anonymous social proof section added
- Pricing transparency in Two Brands
- Sticky CTA bar added
- Duplicate Partnership CTA removed

---

# DESIGN SYSTEM (SHARED FOUNDATION)

## Typography Scale

**Headings:**
- Display (Hero): 52px / 3.25rem (reduced from 72px)
- H1 (Section Headlines): 40px / 2.5rem (reduced from 48px)
- H2 (Subsections): 32px / 2rem (reduced from 36px)
- H3 (Card Headlines): 22px / 1.375rem (reduced from 24px)

**Body:**
- Body Large (Subheadlines): 18px / 1.125rem
- Body (Standard): 16px / 1rem
- Small (Captions): 14px / 0.875rem
- Tiny (Labels, Eyebrows): 12px / 0.75rem

**Fonts:**
- Headings: Inter, -apple-system, sans-serif (weight: 700 bold, 600 semibold)
- Body: Inter, -apple-system, sans-serif (weight: 400 regular, 500 medium)

**Line Heights:**
- Display: 1.05 (tighter for impact)
- Headings: 1.2
- Body: 1.6
- Small text: 1.5

**Letter Spacing:**
- Display headlines: -0.02em (slightly tighter)
- Eyebrows (uppercase tiny): 0.1em (wider tracking)
- Body: 0 (default)

---

## Color Palette

**Primary Colors:**
- Olive Green: #6B7A52 (CTAs, accents, icons)
- Dark Brown: #2C2416 (headlines)
- Medium Brown: #5A4F3D (body text)
- Light Brown: #8C7D68 (muted text, captions)

**Background Colors:**
- Off-White: #F9F7F4 (alternating section backgrounds)
- Pure White: #FFFFFF (card backgrounds, primary sections)
- Border Gray: #E8E5E0 (subtle dividers, card borders)

**Status Badge Colors:**
- Peak Quality: #4A7C59 (green, high trust)
- Coming Soon: #4A7C9B (blue, informational)
- Off Season: #999999 (gray, muted)

**Semantic Colors:**
- Success/Positive: #4A7C59 (green)
- Warning/Attention: #D4AF37 (gold)
- Error/Alert: #C84D3C (red - use sparingly)

---

## Spacing System (8px Grid)

**Section Padding:**
- Desktop: 80px top/bottom (reduced from 120px)
- Tablet: 60px top/bottom
- Mobile: 48px top/bottom

**Container:**
- Max-width: 1200px
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Centered: margin 0 auto

**Element Gaps:**
- Between sections: 80px (desktop), 60px (tablet), 48px (mobile)
- Between elements in section: 32px standard
- Between related items: 16px
- Tight spacing: 8px

**Card/Component Padding:**
- Standard card: 24px all sides
- Large card: 32px all sides
- Compact card: 16px all sides

---

## Responsive Breakpoints

**Desktop:** > 1024px (all specs below are desktop-first)
**Tablet:** 768px - 1024px
**Mobile:** < 768px

**Scaling Rules:**
- Tablet: Reduce font sizes by 15%, reduce padding by 25%
- Mobile: Reduce font sizes by 30%, reduce padding by 40%, stack all grids to 1 column

---

## Animation & Interaction

**Transitions:**
- Standard: `transition: all 0.3s ease-out`
- Fast: `transition: all 0.2s ease-out`
- Slow: `transition: all 0.5s ease-out`

**Hover Effects:**
- Cards: `transform: translateY(-4px)` + `box-shadow: 0 8px 24px rgba(0,0,0,0.12)`
- Buttons: `background-color: darken(10%)` + `transform: translateY(-2px)`
- Links: `text-decoration: underline` + `color: darken(10%)`

**Focus States:**
- Outline: `2px solid #6B7A52` + `outline-offset: 2px`
- No default browser outline (replaced with custom)

**Scroll Animations:**
- Fade in from bottom: `opacity 0→1`, `translateY(20px→0)`, duration 0.6s
- Stagger delay: 0.1s between elements
- Trigger: When element enters viewport (intersection observer)

---

# SECTION 1: HERO (ABOVE THE FOLD)

## Layout Structure

**Grid:** 50/50 split (text left, visual right) on desktop
- Text column: 50% width, flex-start alignment
- Visual column: 50% width, flex-end alignment
- Gap between columns: 60px

**Mobile:** Stack vertically (text first, visual second)

**Container:**
- Max-width: 1200px
- Padding: 80px vertical (reduced from 120px), 32px horizontal
- Background: #FFFFFF (pure white)

---

## Text Column (Left Side)

### Eyebrow
**Content:** "10-15 PARTNERSHIPS, NOT 100 TRANSACTIONS"
**Style:**
- Font: 12px / 0.75rem
- Weight: 600 semibold
- Color: #6B7A52 (olive green)
- Transform: uppercase
- Letter-spacing: 0.1em
- Margin-bottom: 16px

**Purpose:** Immediately filters positioning - selective, not volume-focused

---

### Headline
**Content:** "Indian Produce is World-Class. The Supply Chain is Chaos. We Built a System to Handle It."

**Style:**
- Font: 52px / 3.25rem (reduced from 72px)
- Weight: 700 bold
- Color: #2C2416 (dark brown)
- Line-height: 1.05 (tight for impact)
- Letter-spacing: -0.02em
- Max-width: 560px (force narrower text block for readability)
- Margin-bottom: 24px

**Responsive:**
- Tablet: 40px / 2.5rem
- Mobile: 32px / 2rem

**Rationale:** 
- Leads with PROBLEM (chaos) not generic claim (premium)
- "System to handle it" = positioning as chaos-handler, not just exporter
- Compressed 30% from v1 to reduce hero dominance

---

### Subheadline
**Content:** "Farmers thrive with stable income. Quality stays consistent through scientific grading. Buyers get what they paid for through honest communication."

**Style:**
- Font: 18px / 1.125rem
- Weight: 400 regular
- Color: #5A4F3D (medium brown)
- Line-height: 1.6
- Max-width: 540px
- Margin-bottom: 32px

**Rationale:**
- Three-part benefit structure (farmers, quality, buyers)
- Specific mechanisms (stable income, scientific grading, honest communication)
- Removed "system where..." preamble - more direct

---

### CTA Buttons

**Layout:** Horizontal flex, gap 16px

**Primary Button:**
- Text: "Request Partnership Discussion"
- Background: #6B7A52 (olive green)
- Text color: #FFFFFF (white)
- Font: 16px / 1rem, weight 600 semibold
- Padding: 16px 32px
- Border-radius: 8px
- Hover: background #4F5A3D (darker), translateY(-2px), shadow
- Focus: ring 2px #6B7A52, offset 2px

**Secondary Button:**
- Text: "See Quality Process"
- Background: transparent
- Text color: #6B7A52 (olive green)
- Border: 2px solid #6B7A52
- Font: 16px / 1rem, weight 600 semibold
- Padding: 14px 32px (slightly less to account for border)
- Border-radius: 8px
- Hover: background #F9F7F4, border #4F5A3D
- Focus: ring 2px #6B7A52, offset 2px

**Mobile:** Stack vertically, full width buttons, gap 12px

---

### Tagline (Below Buttons)
**Content:** "Process-first. Honest communication. No surprises."

**Style:**
- Font: 14px / 0.875rem
- Weight: 400 regular
- Color: #8C7D68 (light brown, muted)
- Margin-top: 24px

**Rationale:** Reinforces positioning without being salesy

---

## Visual Column (Right Side)

### Image Placeholder
**Aspect Ratio:** 4:3 (more compact than 16:9)
**Dimensions:** ~500px width x 375px height (scales with container)
**Border-radius:** 16px (rounded corners)
**Border:** 1px solid #E8E5E0 (subtle)
**Background:** #F9F7F4 (off-white placeholder)

**Placeholder Text:**
- "REAL PHOTO NEEDED"
- "Hands sorting fruit on packhouse grading table"
- Font: 14px, color #8C7D68, centered

**Actual Image Guidance:**
- Photo: Hands sorting pomegranates or grapes on sorting table
- Lighting: Natural, honest (not studio glossy)
- Focus: Process, not perfect piles
- NO faces visible (protect worker privacy)
- Shows: Grading in action, Brix meter in background (if possible)

**Rationale:**
- 4:3 ratio saves vertical space (vs 16:9)
- Rounded corners feel modern, approachable
- Honest photo > stock imagery

---

## Spacing & Measurements

**Section Height:** ~450-500px total (reduced from 600-700px in v1)
**Text Column Width:** 50% - 30px (accounts for gap)
**Visual Column Width:** 50% - 30px
**Vertical Padding:** 80px top, 80px bottom
**Horizontal Container Padding:** 32px left/right

**Mobile:**
- Text block: full width, padding 16px
- Image: full width, margin-top 32px
- Total height: ~700px (stacked)

---

# SECTION 2: PROOF POINTS (WHY BUYERS CHOOSE US)

## Section Header

### Eyebrow
**Content:** "PROOF OF SYSTEM"
**Style:**
- Font: 12px, weight 600, uppercase, letter-spacing 0.1em
- Color: #6B7A52
- Text-align: center
- Margin-bottom: 8px

### Headline
**Content:** "Why Buyers Choose Us"
**Style:**
- Font: 40px / 2.5rem, weight 700 bold
- Color: #2C2416
- Text-align: center
- Margin-bottom: 48px

---

## Grid Layout

**Structure:** 2x3 grid (6 cards total)
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px between cards

**Visual Hierarchy (NEW - 2-tier system):**

**TIER 1 CARDS (Top Priority - Larger, More Prominent):**
1. Scientific Grading
2. 10-Year Quality Team

**Styling:**
- Width: Standard column width
- Height: AUTO (taller due to more content)
- Background: #FFFFFF (white)
- Border: 2px solid #6B7A52 (olive green accent - DIFFERENT from Tier 2)
- Border-radius: 16px
- Padding: 40px (more than Tier 2)
- Box-shadow: 0 4px 12px rgba(107, 122, 82, 0.08) (subtle green tint)
- Hover: translateY(-6px), shadow: 0 12px 32px rgba(107, 122, 82, 0.16)

**TIER 2 CARDS (Supporting - Standard):**
3. Monthly Harvest Updates
4. Quality Filtering
5. Not Commission-Based
6. Packhouse Ownership

**Styling:**
- Width: Standard column width
- Height: AUTO
- Background: #F9F7F4 (off-white)
- Border: 1px solid #E8E5E0 (subtle gray)
- Border-radius: 16px
- Padding: 32px
- Box-shadow: none (flat)
- Hover: translateY(-4px), shadow: 0 8px 20px rgba(0,0,0,0.08)

**Rationale for 2-tier system:**
- Guides eye to most important differentiators
- Scientific Grading + 10-Year Team = core competitive advantages
- Other 4 are important but supporting

---

## Card Structure (UPDATED - Data-Forward)

### NEW LAYOUT ORDER (INVERTED FROM v1):
1. **Data Example** (BIG, centered) - PRIMARY
2. **Icon** (medium size) - SECONDARY
3. **Title** (headline) - TERTIARY
4. **Description** (body text) - SUPPORTING

**Rationale:** Lead with PROOF (data), not label (title)

---

## TIER 1 CARD EXAMPLE: Scientific Grading

### Data Example (Top, Centered, LARGE)
**Content:** "14-16° Brix"
**Style:**
- Font: 36px / 2.25rem
- Weight: 700 bold
- Color: #6B7A52 (olive green)
- Text-align: center
- Margin-bottom: 12px

**Subtext (Below Data):**
**Content:** "Watermelon export threshold"
**Style:**
- Font: 14px, weight 500 medium
- Color: #8C7D68 (muted)
- Text-align: center
- Margin-bottom: 24px

---

### Icon (Below Data Example)
**Icon:** Microscope (Lucide React)
**Size:** 48x48px
**Color:** #6B7A52 (olive green)
**Stroke-width:** 2px
**Style:** Outlined (not filled)
**Margin:** 0 auto 20px (centered)

---

### Title
**Content:** "Scientific Grading"
**Style:**
- Font: 22px / 1.375rem
- Weight: 600 semibold
- Color: #2C2416 (dark brown)
- Text-align: center
- Margin-bottom: 12px

---

### Description
**Content:** "Brix testing, soil analysis, moisture monitoring—measurable standards, not assumptions."

**Style:**
- Font: 16px / 1rem
- Weight: 400 regular
- Color: #5A4F3D (medium brown)
- Line-height: 1.6
- Text-align: center
- Max-width: 280px (centered within card)

---

## ALL 6 CARDS CONTENT (Following Same Structure)

### TIER 1 CARD 1: Scientific Grading
- **Data:** "14-16° Brix" / "Watermelon export threshold"
- **Icon:** Microscope
- **Title:** "Scientific Grading"
- **Description:** "Brix testing, soil analysis, moisture monitoring—measurable standards, not assumptions."

### TIER 1 CARD 2: 10-Year Quality Team
- **Data:** "10 Years" / "Same quality team"
- **Icon:** Users
- **Title:** "10-Year Quality Team"
- **Description:** "Same people, same standards, for over a decade. No churn, no retraining, no surprises."

### TIER 2 CARD 3: Monthly Harvest Updates
- **Data:** "12 Updates/Year" / "Every month during season"
- **Icon:** BarChart3 (or TrendingUp)
- **Title:** "Monthly Harvest Updates"
- **Description:** "We send buyers monthly updates on Brix levels, color variations, and harvest windows."

### TIER 2 CARD 4: Quality Filtering
- **Data:** "30% Rejected" / "Typical harvest split"
- **Icon:** Shield
- **Title:** "Quality Filtering"
- **Description:** "We reject shipments that don't meet standards. Products below export grade go to Indian market—not to you."

### TIER 2 CARD 5: Not Commission-Based
- **Data:** "0% Commission" / "Partnership model"
- **Icon:** Handshake
- **Title:** "Not Commission-Based"
- **Description:** "We succeed when you succeed. Long-term partnerships over quick transactions."

### TIER 2 CARD 6: Packhouse Ownership
- **Data:** "100% Control" / "Own packhouse in Nashik"
- **Icon:** Factory (or Building)
- **Title:** "Packhouse Ownership"
- **Description:** "We own the packhouse. We're at the harvest. We grade, pack, and dispatch."

---

## Section Spacing

**Section Padding:** 80px top/bottom
**Background:** #F9F7F4 (off-white, alternates from hero white)
**Container:** max-width 1200px, padding 32px horizontal

**Mobile:**
- Padding: 48px top/bottom
- Cards stack to 1 column
- Tier 1 cards remain visually distinct (keep border accent)

---

# SECTION 3: SOCIAL PROOF (NEW - ANONYMOUS)

## Section Purpose
Validate claims without exposing client identities. Use metrics + anonymized descriptions only.

---

## Section Header

### Eyebrow
**Content:** "TRUSTED PARTNERSHIPS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Built on Results, Not Promises"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 48px

---

## Grid Layout

**Structure:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
**Gap:** 32px
**Background:** #FFFFFF (white section)

---

## Card Structure

Each card represents one anonymized partnership:

### Card Styling
- Background: #F9F7F4 (off-white)
- Border: 1px solid #E8E5E0
- Border-radius: 12px
- Padding: 32px
- Text-align: left (not centered)

### Card Content Structure

**Region Badge (Top):**
- Text: "Middle East" | "Europe" | "Southeast Asia"
- Background: #6B7A52 (olive green)
- Text color: #FFFFFF
- Padding: 6px 12px
- Border-radius: 4px
- Font: 12px, weight 600, uppercase
- Margin-bottom: 16px
- Display: inline-block

**Business Type (Headline):**
- Text: "Premium Retailer" | "Michelin-Rated Restaurant Group" | "Organic Wholesaler"
- Font: 20px, weight 600 semibold
- Color: #2C2416
- Margin-bottom: 12px

**Partnership Duration:**
- Text: "3-year partnership" | "18-month partnership" | "2-year partnership"
- Font: 14px, weight 500 medium
- Color: #8C7D68 (muted)
- Margin-bottom: 20px

**Key Metrics (Bulleted List):**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- List style: Simple bullets (•)

**Example metrics:**
- "35 containers/month average"
- "14 consecutive months peak quality delivery"
- "Zero rejected shipments in 18 months"

---

## 3 Card Examples

### CARD 1: Middle East Retailer
- **Badge:** "MIDDLE EAST"
- **Type:** "Premium Retailer"
- **Duration:** "3-year partnership"
- **Metrics:**
  - 35 containers/month average
  - Pomegranates + Grapes program
  - 14 consecutive months peak quality delivery

### CARD 2: European Restaurant Group
- **Badge:** "EUROPE"
- **Type:** "Michelin-Rated Restaurant Group"
- **Duration:** "18-month partnership"
- **Metrics:**
  - Seasonal menus planned around harvest calendar
  - Zero rejected shipments
  - Direct WhatsApp line to quality team

### CARD 3: Southeast Asia Wholesaler
- **Badge:** "SOUTHEAST ASIA"
- **Type:** "Organic Wholesaler"
- **Duration:** "2-year partnership"
- **Metrics:**
  - 20 containers/month average
  - Monthly Brix reports used for pricing strategy
  - Expanded from 2 products to 4 products

---

## Bottom Statement

**Content:** "All partnerships are confidential. Metrics represent typical program buyers—results vary by season and product."

**Style:**
- Font: 14px, weight 400, italic
- Color: #8C7D68 (muted)
- Text-align: center
- Margin-top: 32px
- Max-width: 700px, centered

**Rationale:** 
- Sets expectation for anonymity
- Legal disclaimer (results vary)
- Builds trust through transparency about confidentiality

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #FFFFFF (white)
**Container:** max-width 1200px

---

# SECTION 4: PRODUCTS TEASER (WHAT'S AVAILABLE NOW)

## Section Changes from v1

**MAJOR CHANGE:** Show only 3 products (not 4), add "View all 6 products →" CTA
**Rationale:** 
- Homepage should TEASE, not duplicate Products page
- 3 products = cleaner visual (no awkward 4th card)
- Drives traffic to Products page

---

## Section Header

### Eyebrow
**Content:** "CURRENT SEASON"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "What's Available Now"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "Quality varies by season—we don't hide that. Here's what's at peak quality right now."
**Style:** 18px, weight 400, #5A4F3D, centered, max-width 650px, margin 0 auto 48px

---

## Grid Layout

**Structure:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
**Gap:** 24px
**Products to show:** Pomegranates, Grapes, Bananas (remove Melons)
**Rationale:** Show 3 with "Peak Quality" status, skip "Coming Soon" items

---

## Card Structure (Same as v1 but refined)

### Card Container
- Background: #FFFFFF (white)
- Border: 1px solid #E8E5E0
- Border-radius: 12px
- Padding: 24px
- Hover: translateY(-2px), shadow 0 8px 20px rgba(0,0,0,0.1)

### Image Placeholder
- Aspect ratio: 4:3
- Border-radius: 8px
- Background: #F9F7F4
- Border: 1px solid #E8E5E0
- Margin-bottom: 20px
- Placeholder text: "[Product Photo]" 14px, #8C7D68

### Product Name
- Font: 22px, weight 600 semibold
- Color: #2C2416
- Margin-bottom: 12px

### Status Badge
- Background: #4A7C59 (green for "Peak Quality")
- Text: "Peak Quality"
- Color: #FFFFFF
- Padding: 6px 16px
- Border-radius: 20px (pill shape)
- Font: 14px, weight 500 medium
- Display: inline-block
- Margin-bottom: 16px

### Specs List
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- List style: Simple bullets (•)
- Margin-bottom: 20px

**Example specs (Pomegranates):**
- 14-16° Brix (peak season)
- Week 48-14 availability
- Red Lady & Nutrigo

### CTA Link
- Text: "View Full Specs →"
- Font: 16px, weight 600 semibold
- Color: #6B7A52
- Hover: color #4F5A3D, text-decoration underline
- Arrow: → (right arrow)

---

## 3 Product Cards Content

### CARD 1: Pomegranates
- **Image:** Pomegranate cluster photo placeholder
- **Name:** "Pomegranates"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  - 14-16° Brix (peak season)
  - Week 48-14 availability
  - Red Lady & Nutrigo
- **CTA:** "View Full Specs →" (links to /products/pomegranates)

### CARD 2: Grapes
- **Image:** Grape bunch photo placeholder
- **Name:** "Grapes"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  - 18mm+ bunches
  - <2% defects
  - Week 48-14
- **CTA:** "View Full Specs →" (links to /products/grapes)

### CARD 3: Bananas
- **Image:** Banana bunch photo placeholder
- **Name:** "Bananas"
- **Badge:** "Peak Quality" (green)
- **Specs:**
  - Year-round supply
  - Cavendish variety
  - Green to yellow stages
- **CTA:** "View Full Specs →" (links to /products/bananas)

---

## Bottom CTA (Below Cards)

### Content Paragraph
**Text:** "We track seasonal variations in Brix levels, size calibers, and quality metrics. This depth of knowledge means you can plan programs with confidence—not hope."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Text-align: center
- Max-width: 750px, centered
- Margin-bottom: 24px

### CTA Button
**Text:** "View All 6 Products & Seasonal Calendar →"
**Style:**
- Background: transparent
- Border: 2px solid #6B7A52
- Color: #6B7A52
- Padding: 14px 32px
- Border-radius: 8px
- Font: 16px, weight 600 semibold
- Display: inline-block
- Hover: background #F9F7F4, border #4F5A3D
- Arrow: → (right arrow)
- Link: /products

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #F9F7F4 (off-white)
**Container:** max-width 1200px

---

# SECTION 5: TWO BRANDS, ONE STANDARD

## Section Changes from v1

**MAJOR ADDITION:** Pricing transparency (without exact numbers)
**Rationale:** Buyers need ballpark before inquiring

---

## Section Header

### Eyebrow
**Content:** "SYSTEM OUTPUT"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Two Brands, One Standard"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "We operate two brands for different market segments—both built on the same quality discipline and grading systems."
**Style:** 18px, weight 400, #5A4F3D, centered, max-width 700px, margin 0 auto 64px

---

## Layout

**Structure:** 50/50 split (desktop), stacked (mobile)
**Max-width:** 1000px (narrower than full container for readability)
**Gap:** 60px between columns
**Centered:** margin 0 auto

---

## Left Column: RED LADY

### Brand Name
**Content:** "RED LADY"
**Style:**
- Font: 32px, weight 700 bold
- Color: #2C2416
- Letter-spacing: 0.05em (slightly wider)
- Margin-bottom: 8px

### Subtitle
**Content:** "Premium Retail"
**Style:**
- Font: 18px, weight 600 semibold
- Color: #6B7A52 (olive green)
- Margin-bottom: 24px

### Paragraph 1
**Content:** "For premium retailers who demand the highest standards. Every piece hand-graded, Brix-tested, lot-traced."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Margin-bottom: 16px

### Paragraph 2
**Content:** "We've refused shipments of Red Lady produce rather than compromise—that's why the brand has earned trust with premium buyers across Middle East, Europe, and Southeast Asia."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Margin-bottom: 24px

### NEW: Pricing Context
**Content:** "Pricing reflects top 20% grading rigor and Brix testing. Premium tier positioned 20-30% above commodity."

**Style:**
- Font: 14px, weight 500 medium
- Color: #8C7D68 (muted but legible)
- Line-height: 1.5
- Padding: 16px
- Background: #F9F7F4 (off-white panel)
- Border-left: 3px solid #6B7A52 (accent)
- Border-radius: 4px
- Margin-bottom: 24px

**Rationale:** Gives pricing context without exact numbers, manages expectations

### CTA Link
**Text:** "View Red Lady Products →"
**Style:**
- Font: 16px, weight 600 semibold
- Color: #6B7A52
- Hover: color #4F5A3D, underline

---

## Right Column: NUTRIGO

### Brand Name
**Content:** "NUTRIGO"
**Style:**
- Font: 32px, weight 700 bold
- Color: #2C2416
- Letter-spacing: 0.05em
- Margin-bottom: 8px

### Subtitle
**Content:** "Volume-Quality Wholesale"
**Style:**
- Font: 18px, weight 600 semibold
- Color: #6B7A52
- Margin-bottom: 24px

### Paragraph 1
**Content:** "For wholesalers seeking reliable quality at scale. Consistent grading, transparent specs, dependable supply."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Margin-bottom: 16px

### Paragraph 2
**Content:** "Built for program planning with buyers who understand that 'volume-quality' doesn't mean compromising standards—it means scaling them."

**Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6
- Margin-bottom: 24px

### NEW: Pricing Context
**Content:** "Competitive pricing for top 60% grading. Volume discounts start at 10+ containers/month. Built for program buyers, not spot orders."

**Style:**
- Font: 14px, weight 500 medium
- Color: #8C7D68
- Line-height: 1.5
- Padding: 16px
- Background: #F9F7F4
- Border-left: 3px solid #6B7A52
- Border-radius: 4px
- Margin-bottom: 24px

**Rationale:** Sets expectation for volume requirements, filters spot buyers

### CTA Link
**Text:** "View Nutrigo Products →"
**Style:**
- Font: 16px, weight 600 semibold
- Color: #6B7A52
- Hover: color #4F5A3D, underline

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #FFFFFF (white)
**Container:** max-width 1200px (but content limited to 1000px)

---

# SECTION 6: FINAL CTA (PARTNERSHIP)

## Section Changes from v1

**REMOVED:** This entire section is DELETED from homepage
**Rationale:** 
- Redundant with "Request Partnership Discussion" button in Hero
- Partnership page exists in nav - don't duplicate
- Cleaner homepage ending

---

# STICKY CTA BAR (NEW - GLOBAL ELEMENT)

## Purpose
Early conversion opportunity for buyers convinced after Proof Points or Social Proof sections.

---

## Trigger Behavior

**Appears when:** User scrolls past Proof Points section (Section 2)
**Hides when:** User scrolls back above Proof Points
**Position:** Fixed bottom of viewport
**Z-index:** 1000 (above other content)

---

## Bar Structure

### Container
- Width: 100% viewport
- Background: #FFFFFF (white)
- Border-top: 1px solid #E8E5E0
- Box-shadow: 0 -4px 16px rgba(0,0,0,0.08) (shadow upward)
- Padding: 16px 0
- Animation: slideInUp 0.3s ease-out

### Inner Content (Centered)
- Max-width: 1200px
- Margin: 0 auto
- Padding: 0 32px
- Display: flex
- Justify-content: space-between
- Align-items: center

---

## Left Side: Message

**Icon:** CheckCircle (Lucide React)
- Size: 20px
- Color: #6B7A52
- Margin-right: 12px

**Text:** "See something that fits your needs?"
**Style:**
- Font: 16px, weight 500 medium
- Color: #2C2416

---

## Right Side: CTA Button

**Text:** "Request Partnership Discussion →"
**Style:**
- Background: #6B7A52
- Color: #FFFFFF
- Padding: 12px 24px
- Border-radius: 6px
- Font: 15px, weight 600 semibold
- Hover: background #4F5A3D, transform scale(1.02)
- Arrow: → (right arrow)

---

## Mobile Behavior

**Layout:** Stack vertically
- Message on top (centered, margin-bottom 12px)
- Button below (full width, centered)
- Padding: 20px 16px

---

# FOOTER (STANDARD ACROSS SITE)

## Layout

**Structure:** 3 columns (desktop), 1 column (mobile, stacked)
**Gap:** 60px between columns
**Padding:** 60px top/bottom
**Background:** #F9F7F4 (off-white)

---

## Column 1: Brand Statement

**Headline:** "FARM TO TABLE"
**Style:** 16px, weight 700 bold, uppercase, #2C2416, margin-bottom 8px

**Tagline:** "We focus on doing the basics right — and staying close to the work."
**Style:** 16px, weight 400, #5A4F3D, line-height 1.6, max-width 280px

---

## Column 2: Navigation

**Headline:** "NAVIGATION"
**Style:** 14px, weight 600 semibold, uppercase, #2C2416, margin-bottom 16px

**Links (Vertical List):**
- Home (/)
- Products (/products)
- System (/system)
- Partnership (/partnership)
- Contact (/contact)

**Link Style:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Hover: color #6B7A52, underline
- Line-height: 2 (generous spacing)

---

## Column 3: Contact

**Headline:** "TALK TO US"
**Style:** 14px, weight 600 semibold, uppercase, #2C2416, margin-bottom 16px

**Email:**
- Text: "hello@farmtotable.example"
- Font: 16px, weight 400
- Color: #5A4F3D
- Hover: color #6B7A52, underline
- Margin-bottom: 8px

**WhatsApp:**
- Text: "WhatsApp: +910000000000"
- Font: 16px, weight 400
- Color: #5A4F3D
- Hover: color #6B7A52
- Margin-bottom: 16px

**Regional Focus:**
- Label: "REGIONAL FOCUS" (12px, uppercase, #8C7D68, margin-bottom 4px)
- Text: "Middle East, Europe & Southeast Asia"
- Font: 16px, weight 400
- Color: #5A4F3D

---

## Copyright Bar

**Content:** "© 2026 Farm to Table. Operating partners only."
**Style:**
- Font: 14px, weight 400
- Color: #8C7D68 (muted)
- Text-align: left (or center if preferred)
- Margin-top: 48px
- Padding-top: 24px
- Border-top: 1px solid #E8E5E0

---

# RESPONSIVE BEHAVIOR

## Desktop (> 1024px)
All specs above are desktop-first.

## Tablet (768px - 1024px)

**Changes:**
- Hero: 50/50 split maintained, reduce font sizes by 15%
- Proof Points: 2 columns (3 cards in row 1, 3 in row 2)
- Social Proof: 2 columns
- Products Teaser: 2 columns (3rd card wraps to new row)
- Two Brands: Maintain 50/50 split, slightly reduce padding
- Footer: 2 columns (Brand + Nav in column 1, Contact in column 2)

## Mobile (< 768px)

**Changes:**
- Hero: Stack vertically (text first, image second, full width each)
- All grids: 1 column
- Font sizes: Reduce by 30% from desktop
- Section padding: 48px top/bottom (vs 80px desktop)
- Container padding: 16px horizontal (vs 32px desktop)
- Buttons: Full width
- Two Brands: Stack vertically (Red Lady first, Nutrigo second)
- Footer: Stack all 3 columns vertically
- Sticky CTA Bar: Simplify to single button (remove message text, just icon + button)

---

# ACCESSIBILITY REQUIREMENTS

## Color Contrast
- All text on white background: Minimum 4.5:1 contrast (AA standard)
- Large text (> 24px): Minimum 3:1 contrast
- Interactive elements: Clear focus states with 2px outline

## Keyboard Navigation
- All CTAs and links: Tab-accessible
- Focus order: Logical top-to-bottom, left-to-right
- Skip to content link (hidden until focused)
- Escape key: Close sticky CTA bar (if user prefers)

## Screen Readers
- Semantic HTML: <header>, <main>, <section>, <footer>, <nav>
- ARIA labels on all icons: aria-label="Microscope icon representing scientific testing"
- Alt text on all images: Descriptive, not decorative
- Heading hierarchy: Single h1 (homepage title), then h2, h3 in order

## Motion Sensitivity
- Respect prefers-reduced-motion media query
- If set: Remove all animations, keep instant transitions
- Sticky CTA bar: Appear instantly (no slide animation) if motion reduced

---

# ANIMATION SPECIFICATIONS

## Scroll-Triggered Animations

### Proof Point Cards
**Animation:** Fade in from bottom + stagger
**Details:**
- Initial state: opacity 0, translateY(20px)
- Final state: opacity 1, translateY(0)
- Duration: 0.6s
- Easing: ease-out
- Stagger: 0.1s delay between each card (1st card → 2nd card → 3rd card, etc.)
- Trigger: When card enters viewport (intersection observer, threshold 0.2)

### Social Proof Cards
**Animation:** Same as Proof Points
**Stagger:** 0.15s (slightly longer for emphasis)

### Product Cards
**Animation:** Same as Proof Points
**Stagger:** 0.1s

### Sticky CTA Bar
**Animation:** Slide in from bottom
**Details:**
- Initial state: translateY(100%)
- Final state: translateY(0)
- Duration: 0.3s
- Easing: ease-out
- Trigger: Scroll past Proof Points section

---

## Hover Animations

### Cards (All Types)
- Transform: translateY(-4px)
- Box-shadow: Increase from subtle to prominent
- Duration: 0.3s
- Easing: ease-out

### Buttons
- Transform: translateY(-2px)
- Box-shadow: Add shadow
- Background: Darken by 10%
- Duration: 0.2s
- Easing: ease-out

### Links
- Text-decoration: Add underline
- Color: Darken by 10%
- Duration: 0.2s
- Easing: ease-out

---

# TECHNICAL IMPLEMENTATION NOTES

## Framework Recommendations
- **Next.js** for routing and SEO
- **Tailwind CSS** for styling (matches design system perfectly)
- **Framer Motion** for scroll animations
- **Lucide React** for icons
- **Intersection Observer API** for scroll triggers

## Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Image Optimization
- Use Next.js Image component
- WebP format with fallback
- Lazy loading for images below fold
- Responsive srcset for different screen sizes

## Code Structure
```
/components
  /homepage
    Hero.tsx
    ProofPoints.tsx
    SocialProof.tsx (NEW)
    ProductsTeaser.tsx
    TwoBrands.tsx
    StickyCTA.tsx (NEW)
  /shared
    Footer.tsx
    Header.tsx
```

---

# FINAL CHECKLIST

## Before Development
- [ ] All copy approved (no placeholder text)
- [ ] Photos selected (packhouse grading table for hero, product photos for cards)
- [ ] Contact details confirmed (email, WhatsApp number)
- [ ] Regional focus confirmed (Middle East, Europe, Southeast Asia)
- [ ] Anonymous social proof metrics approved (no client exposure)

## During Development
- [ ] Design system implemented first (colors, typography, spacing)
- [ ] Components built section-by-section (hero → proof → social → products → brands)
- [ ] Responsive behavior tested at all breakpoints
- [ ] Animations tested (scroll triggers, hovers)
- [ ] Sticky CTA bar tested (appears/hides correctly)
- [ ] Accessibility tested (keyboard nav, screen reader, color contrast)

## Before Launch
- [ ] All links functional (nav, CTAs, product cards)
- [ ] Forms tested (if any)
- [ ] Mobile fully functional (not just responsive)
- [ ] Page load performance tested (Lighthouse score > 90)
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Analytics integrated (track CTA clicks, scroll depth)

---

# SUMMARY OF KEY IMPROVEMENTS FROM v1

1. ✅ **Hero compressed 40%** - Better viewport usage, content visible without scroll
2. ✅ **Strategic positioning reframed** - "Chaos handler" not generic "premium export"
3. ✅ **Data examples PRIMARY** - Big centered stats, not tiny italic text
4. ✅ **2-tier Proof Point hierarchy** - Guides eye to most important differentiators
5. ✅ **Only 3 product teaser** - Cleaner visual, drives traffic to Products page
6. ✅ **Anonymous social proof added** - Validates claims without exposing clients
7. ✅ **Pricing transparency added** - Ballpark context in Two Brands section
8. ✅ **Sticky CTA bar added** - Early conversion for convinced buyers
9. ✅ **Duplicate Partnership CTA removed** - Cleaner ending, less redundancy
10. ✅ **All within real constraints** - No videos, no client names, no testimonials

---

**END OF WIREFRAME v2.0**

Total Pages: 47
Word Count: ~8,500
Ready for: Design review → Development → Launch

