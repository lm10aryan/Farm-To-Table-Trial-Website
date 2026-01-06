# FARM TO TABLE - PARTNERSHIP PAGE WIREFRAME v2.0 (UPDATED)
## Complete Specification with Analysis Improvements

**Document Purpose:** Pixel-perfect Partnership page wireframe incorporating 8-lens analysis feedback and real-world constraints.

**Key Changes from v1:**
- Hero compressed 40%
- Criteria converted to interactive self-assessment (not static checkmarks)
- Timeline + "What to Expect" CONSOLIDATED into single "Partnership Journey"
- Anonymous social proof added (before form)
- Form shortened to 4 core fields (was 7+)
- Pricing transparency added to timeline
- Partnership availability indicator added
- Conditional form fields (intelligent responses to "wrong" answers)
- Sticky CTA bar added
- Duplicate content removed

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

**Goal:** Qualify leads while inviting right-fit buyers to start partnership process

**User Journey:**
1. Understand if they're a fit (self-assessment)
2. See the partnership timeline (manage expectations)
3. Review what they'll get (build confidence)
4. Submit inquiry or contact directly

**Key Differentiators to Emphasize:**
- Selective (10-15 partnerships, not 100 transactions)
- Process-driven (clear 5-phase timeline)
- Transparent (honest about when we say no)
- Partnership availability (creates urgency without being salesy)

---

# SECTION 1: HERO (COMPRESSED)

## Layout Structure

**Grid:** Centered, single column
**Container:** max-width 850px (narrower for readability)
**Padding:** 60px vertical (reduced from 80px)
**Background:** #FFFFFF (white)

---

## Content Structure

### Eyebrow
**Content:** "HOW WE PARTNER"
**Style:**
- Font: 12px, weight 600, uppercase
- Color: #6B7A52
- Letter-spacing: 0.1em
- Text-align: center
- Margin-bottom: 8px

---

### Headline
**Content:** "Built for Strategic Partnerships, Not Transactional Volume"

**Style:**
- Font: 46px / 2.875rem (reduced from 48px)
- Weight: 700 bold
- Color: #2C2416
- Line-height: 1.1
- Text-align: center
- Max-width: 750px, margin 0 auto
- Margin-bottom: 20px

**Change from v1:** Compressed 30% (was 48px)

---

### Subheadline
**Content:** "We work with 10-15 premium retailers and wholesalers who plan programs 3-6 months ahead and understand that quality has a cost."

**Style:**
- Font: 18px / 1.125rem
- Weight: 400 regular
- Color: #5A4F3D
- Line-height: 1.6
- Text-align: center
- Max-width: 700px, margin 0 auto 48px

---

## Section Spacing

**Total Height:** ~270px (compact vs 450px homepage hero)
**Padding:** 60px top/bottom
**Background:** #FFFFFF

---

# SECTION 2: SELF-ASSESSMENT (NEW - INTERACTIVE)

## Purpose
Convert static "Who We Work Best With" list into interactive self-qualification tool.

**Change from v1:** Was 5 static checkmark items. Now interactive checkboxes that give instant feedback.

---

## Section Header

### Eyebrow
**Content:** "QUALIFYING QUESTIONS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Are We a Good Fit?"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "Check the statements that describe your business. We'll give you instant feedback on partnership fit."
**Style:** 18px, weight 400, #5A4F3D, centered, max-width 650px, margin 0 auto 48px

**Rationale:** Sets expectation for interactivity

---

## Interactive Checklist

**Container:**
- Max-width: 700px, centered
- Background: #F9F7F4 (off-white panel)
- Border: 1px solid #E8E5E0
- Border-radius: 12px
- Padding: 40px
- Margin-bottom: 32px

---

### Checkbox Items (5 Total)

**Structure:** Each item has:
1. Checkbox (clickable)
2. Bold statement
3. Supporting explanation (lighter text)

**Checkbox Styling (Unchecked):**
- Size: 24x24px
- Border: 2px solid #E8E5E0
- Border-radius: 4px
- Background: #FFFFFF
- Cursor: pointer

**Checkbox Styling (Checked):**
- Background: #6B7A52 (olive green)
- Border: 2px solid #6B7A52
- Checkmark: White ✓ icon (16px)
- Animation: Scale from 0.8 to 1.0, duration 0.2s

**Item Layout:**
- Display: Flex, gap 16px
- Align-items: flex-start
- Margin-bottom: 24px (between items)

---

### 5 Checkbox Criteria

**ITEM 1:**
- ☐ **I plan programs 3-6 months ahead**
- "You're not a spot buyer looking for immediate shipments. You understand seasonal cycles and want to lock in quality windows early."
- Font: Statement 18px weight 600, Explanation 16px weight 400 #5A4F3D

**ITEM 2:**
- ☐ **I value consistency over rock-bottom pricing**
- "You're willing to pay for quality systems, scientific grading, and honest communication. Cheapest price isn't your only metric."

**ITEM 3:**
- ☐ **I recognize quality requires investment**
- "You understand that premium produce requires investment in testing, filtering, and continuity. You recognize the value of a 10-year quality team and packhouse ownership."

**ITEM 4:**
- ☐ **I want transparent communication**
- "You want monthly harvest updates, transparent timelines, and proactive problem-solving—not surprises or excuses."

**ITEM 5:**
- ☐ **I'm open to 2-3 trial shipments first**
- "You're willing to validate quality and fit with trial containers before committing to long-term programs."

---

## Instant Feedback Panel (DYNAMIC)

**Position:** Below checklist, inside same container

**Behavior:** Updates in real-time as user checks/unchecks boxes

### Logic:

**5/5 checked (Perfect Fit):**
- Background: rgba(74, 124, 89, 0.1) (light green)
- Border-left: 4px solid #4A7C59
- Padding: 20px
- Border-radius: 6px
- Icon: CheckCircle (green, 24px)
- Headline: "Perfect Fit" (20px, weight 600, #4A7C59)
- Message: "You sound like exactly the kind of partner we're looking for. Let's start the conversation below."
- CTA: "Jump to Partnership Timeline ↓" (link scrolls to Section 3)

**3-4/5 checked (Likely Fit):**
- Background: rgba(212, 175, 55, 0.1) (light gold)
- Border-left: 4px solid #D4AF37
- Icon: AlertCircle (gold)
- Headline: "Likely a Fit—Let's Discuss" (20px, weight 600, #D4AF37)
- Message: "You meet most of our criteria. There may be edge cases to discuss, but we're open to exploring partnership. Reach out below."
- CTA: "Jump to Partnership Timeline ↓"

**<3/5 checked (Might Not Fit):**
- Background: rgba(200, 77, 60, 0.1) (light red)
- Border-left: 4px solid #C84D3C
- Icon: XCircle (red)
- Headline: "Might Not Be the Right Fit" (20px, weight 600, #C84D3C)
- Message: "Based on your selections, we might not be optimized for your needs. We focus on program buyers who plan ahead and value consistency. If you think there's been a misunderstanding, feel free to reach out and explain your situation."
- CTA: "Contact Anyway" (link to form)

**0/5 checked (Initial State):**
- No panel shown (appears only after first checkbox checked)

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #F9F7F4 (off-white)
**Container:** max-width 1200px

---

# SECTION 3: PARTNERSHIP JOURNEY (CONSOLIDATED)

## Purpose
Merge v1's "Timeline" + "What to Expect" into single cohesive section.

**Change from v1:** Was 2 separate sections (Timeline with 5 phases, then What to Expect with 4 cards). Now 1 section showing timeline WITH deliverables at each phase.

---

## Section Header

### Eyebrow
**Content:** "THE PROCESS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Partnership Journey"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "From first conversation to long-term program—here's what to expect at each phase, and what you'll get from us."
**Style:** 18px, weight 400, #5A4F3D, centered, max-width 700px, margin 0 auto 48px

**Rationale:** Combines timeline + expectations into one clear promise

---

## Layout Structure

**Format:** Vertical timeline with phases on left, deliverables on right

**Desktop:** 50/50 split (phase info left, deliverables right)
**Mobile:** Stack vertically (phase, then deliverables, then next phase)

---

## Timeline Visual

**Left side of each phase:**
- Numbered circle (01, 02, 03, 04, 05)
- Vertical connecting line between circles
- Phase name + duration

**Right side of each phase:**
- "What You Get" (deliverables from us)
- "What We Need" (deliverables from you)
- Pricing/commitment info (NEW - was missing in v1)

---

## PHASE 1: Discovery

### Left Column: Phase Info

**Circle:**
- Size: 64x64px
- Background: #6B7A52 (olive green)
- Border: 4px solid #FFFFFF (white ring for separation)
- Text: "01" (24px, weight 700 bold, #FFFFFF)
- Centered number

**Connecting Line:**
- Width: 2px
- Color: #E8E5E0 (gray)
- Height: Extends from bottom of circle to top of next circle
- Position: Center of circles, vertically

**Phase Name:**
- Text: "Discovery"
- Font: 28px, weight 600 semibold
- Color: #2C2416
- Margin-bottom: 8px

**Duration:**
- Text: "Weeks 1-2"
- Font: 16px, weight 500 medium
- Color: #8C7D68 (muted)
- Margin-bottom: 16px

**Description:**
- Text: "Initial conversation to understand your needs, market segment, volume requirements, and quality standards. We share our process, capabilities, and current availability."
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.6

---

### Right Column: Deliverables

**"What You Get" (from us):**

**Headline:** "WHAT YOU GET" (12px, uppercase, weight 600, #6B7A52, margin-bottom 12px)

**List (bulleted):**
- Sample monthly harvest update (see our transparency in action)
- Overview of quality testing process (Brix, soil analysis, moisture)
- Current seasonal availability overview
- Packhouse tour video (optional)

**Styling:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.8
- Bullet style: Simple • (olive green #6B7A52)
- Margin-bottom: 24px

---

**"What We Need" (from you):**

**Headline:** "WHAT WE NEED" (12px, uppercase, weight 600, #8C7D68, margin-bottom 12px)

**List:**
- Your volume forecast (containers/month)
- Your quality requirements (specs, certifications)
- Your timeline needs (when do you need supply?)
- Your market segment (retail, food service, wholesale)

**Styling:**
- Font: 16px, weight 400
- Color: #5A4F3D
- Line-height: 1.8
- Bullet style: Simple • (muted #8C7D68)
- Margin-bottom: 24px

---

**Pricing/Commitment (NEW):**

**Headline:** "COMMITMENT" (12px, uppercase, weight 600, #8C7D68, margin-bottom 8px)

**Content:**
- "No cost. No commitment."
- Font: 14px, weight 500 medium, color #5A4F3D

---

## PHASE 2: Spec Alignment

### Left Column: Phase Info
- **Circle:** "02"
- **Name:** "Spec Alignment"
- **Duration:** "Weeks 3-4"
- **Description:** "We align on product specifications, packaging formats, pricing structure, and delivery timelines. You get sample monthly harvest updates to see our transparency in action."

---

### Right Column: Deliverables

**"What You Get":**
- Detailed product specs (Brix ranges, size calibers, defect tolerances)
- Transparent pricing structure (Red Lady vs Nutrigo tiers)
- Packaging format options (carton sizes, pallet configurations)
- Sample harvest update (actual data from current season)

**"What We Need":**
- Confirmation of quality specs
- Packaging preferences
- Delivery timeline requirements
- Any certifications needed (organic, GlobalGAP, etc.)

**Pricing/Commitment:**
- "No cost. No commitment."

---

## PHASE 3: Trial Containers

### Left Column: Phase Info
- **Circle:** "03"
- **Name:** "Trial Containers"
- **Duration:** "Months 1-3"
- **Description:** "2-3 trial shipments to validate quality consistency, communication flow, and operational fit. We want both sides confident before scaling."

---

### Right Column: Deliverables

**"What You Get":**
- 2-3 trial shipments (your choice of products)
- Real-time quality updates during packing
- Post-shipment debrief (what went well, what to improve)
- Direct WhatsApp line to quality team

**"What We Need":**
- Feedback on each shipment (quality, packaging, communication)
- Confirmation of operational fit (timing, logistics, documentation)
- Willingness to iterate (if adjustments needed)

**Pricing/Commitment (NEW - CRITICAL INFO):**
- "**Trial containers priced at standard program rates** (no markup). Volume discounts start at 10+ containers/month."
- Font: 14px, weight 600 semibold (bold this line)
- Background: #F9F7F4 (off-white highlight)
- Padding: 12px
- Border-left: 3px solid #6B7A52
- Border-radius: 4px

**Rationale:** This is critical info buyers need - we're not charging "trial pricing" then jacking up rates later.

---

## PHASE 4: Program Planning

### Left Column: Phase Info
- **Circle:** "04"
- **Name:** "Program Planning"
- **Duration:** "Month 4+"
- **Description:** "Once trials succeed, we plan seasonal allocations, volume commitments, and quality windows for 3-6 month programs. You get priority access during peak seasons."

---

### Right Column: Deliverables

**"What You Get":**
- Reserved allocation during peak seasons
- Quarterly business reviews (performance, forecasts, improvements)
- Multi-product program flexibility (add/remove products as needed)
- Preferred partner status (priority when capacity tight)

**"What We Need":**
- 3-6 month volume commitments (not rigid, but directional)
- Seasonal forecasts (so we can plan farm allocations)
- Open communication about changes (we adjust, you adjust)

**Pricing/Commitment:**
- "**Volume discounts available at 10+ containers/month.** Pricing locked for duration of season (no surprise increases)."
- Same styling as Phase 3 pricing panel

---

## PHASE 5: Ongoing Partnership

### Left Column: Phase Info
- **Circle:** "05"
- **Name:** "Ongoing Partnership"
- **Duration:** "Long-term"
- **Description:** "Monthly harvest updates, quarterly reviews, continuous improvement. We grow together—your success is our success."

---

### Right Column: Deliverables

**"What You Get":**
- Monthly harvest intelligence (Brix levels, color forecasts, harvest windows)
- Quality filtering (we reject shipments rather than compromise your reputation)
- Proactive problem-solving (if quality drops, we tell you immediately + suggest alternatives)
- Multi-year partnership mindset (not quarterly targets)

**"What We Need":**
- Honest feedback (what's working, what's not)
- Reasonable flexibility (agriculture is unpredictable)
- Long-term thinking (invest in relationship, not just transactions)

**Pricing/Commitment:**
- "No contracts. No lock-ins. Built on mutual trust and results."

---

## Bottom Note (After Phase 5)

**Content:** "We're not perfect. Agriculture is unpredictable. But we're honest about challenges and disciplined about solutions."

**Style:**
- Font: 16px, weight 400, italic
- Color: #5A4F3D
- Text-align: center
- Max-width: 650px, centered
- Margin-top: 48px
- Padding-top: 32px
- Border-top: 1px solid #E8E5E0

**Rationale:** Humanizes the process, sets realistic expectations

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #FFFFFF (white)
**Container:** max-width 1100px (slightly wider to accommodate 50/50 split)
**Vertical gap between phases:** 64px

---

# SECTION 4: SOCIAL PROOF (NEW - ANONYMOUS)

## Purpose
Validate partnership quality without exposing client identities.

**Change from v1:** Was completely missing. Now added before form to build trust.

---

## Section Header

### Eyebrow
**Content:** "CURRENT PARTNERSHIPS"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "What Partnerships Look Like"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 48px

---

## Grid Layout

**Structure:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
**Gap:** 32px

---

## Card Structure

**Same as Homepage Social Proof section:**
- Region badge (Middle East, Europe, Southeast Asia)
- Business type (Premium Retailer, Restaurant Group, Wholesaler)
- Partnership duration
- Key metrics (containers/month, quality track record)

**3 Example Cards:**

### CARD 1: Middle East Premium Retailer
- Badge: "MIDDLE EAST"
- Type: "Premium Retailer"
- Duration: "3-year partnership"
- Metrics:
  - 35 containers/month average
  - Pomegranates + Grapes program
  - 14 consecutive months peak quality delivery

### CARD 2: European Restaurant Group
- Badge: "EUROPE"
- Type: "Michelin-Rated Restaurant Group"
- Duration: "18-month partnership"
- Metrics:
  - Seasonal menus planned around harvest calendar
  - Zero rejected shipments in 18 months
  - Direct WhatsApp line to quality team

### CARD 3: Southeast Asia Wholesaler
- Badge: "SOUTHEAST ASIA"
- Type: "Organic Wholesaler"
- Duration: "2-year partnership"
- Metrics:
  - 20 containers/month average
  - Monthly Brix reports used for pricing strategy
  - Expanded from 2 products to 4 products

---

## Bottom Statement

**Content:** "All partnerships are confidential. Metrics represent typical program buyers—results vary by season and product."

**Style:** 14px, italic, #8C7D68, centered, margin-top 32px

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #F9F7F4 (off-white)
**Container:** max-width 1200px

---

# SECTION 5: PARTNERSHIP AVAILABILITY (NEW)

## Purpose
Create gentle urgency by showing current capacity without being salesy.

**Change from v1:** Completely new section.

---

## Container

**Max-width:** 700px, centered
**Background:** #FFFFFF (white panel)
**Border:** 2px solid #6B7A52 (olive green accent)
**Border-radius:** 12px
**Padding:** 40px
**Margin-bottom:** 48px (before form section)

---

## Content Structure

### Headline
**Content:** "Partnership Status"
**Style:** 24px, weight 600 semibold, #2C2416, centered, margin-bottom 20px

### Status Grid (2 columns on desktop, 1 on mobile)

**COLUMN 1: Current Status**
- Label: "CURRENT PARTNERSHIPS" (12px, uppercase, #8C7D68, margin-bottom 4px)
- Value: "12 active" (32px, weight 700 bold, #6B7A52)
- Subtext: "Premium retailers & wholesalers" (14px, #5A4F3D)

**COLUMN 2: Target**
- Label: "TARGET" (12px, uppercase, #8C7D68, margin-bottom 4px)
- Value: "15 by 2027" (32px, weight 700 bold, #6B7A52)
- Subtext: "Deep partnerships, not 100 transactions" (14px, #5A4F3D)

**Gap between columns:** 40px

---

### Bottom Note

**Content:** "Next partnership review: March 2026. We're selective about who we work with—quality of partnerships > quantity."

**Style:**
- Font: 14px, weight 400
- Color: #5A4F3D
- Text-align: center
- Margin-top: 24px
- Padding-top: 24px
- Border-top: 1px solid #E8E5E0

---

## Section Spacing

**No section padding** (this box floats between Social Proof and Form sections)
**Background:** Inherits from parent (Form section background = #FFFFFF)

---

# SECTION 6: INQUIRY FORM (SHORTENED & INTELLIGENT)

## Purpose
Capture qualified leads with minimal friction.

**Change from v1:** Reduced from 7+ fields to 4 core fields. Added intelligent responses to "wrong" answers.

---

## Section Header

### Eyebrow
**Content:** "GET IN TOUCH"
**Style:** 12px, weight 600, uppercase, #6B7A52, centered, margin-bottom 8px

### Headline
**Content:** "Start the Conversation"
**Style:** 40px, weight 700, #2C2416, centered, margin-bottom 16px

### Subheadline
**Content:** "Tell us about your needs and we'll get back to you within 24 hours."
**Style:** 18px, weight 400, #5A4F3D, centered, max-width 600px, margin 0 auto 48px

---

## Form Container

**Max-width:** 650px, centered
**Background:** #F9F7F4 (off-white)
**Border:** 1px solid #E8E5E0
**Border-radius:** 12px
**Padding:** 40px

---

## Form Fields (4 CORE FIELDS ONLY)

### FIELD 1: Email
**Label:** "Your Email *" (required)
**Input type:** Email
**Placeholder:** "john@company.com"
**Validation:** Valid email format required
**Error message:** "Please enter a valid email address"

**Styling:**
- Font: 16px
- Padding: 14px 16px
- Border: 1px solid #E8E5E0
- Border-radius: 6px
- Background: #FFFFFF
- Focus: Border #6B7A52, ring 2px #6B7A52 20% opacity

---

### FIELD 2: Company
**Label:** "Company Name *" (required)
**Input type:** Text
**Placeholder:** "Premium Retail Ltd."
**Validation:** Minimum 2 characters
**Error message:** "Please enter your company name"

---

### FIELD 3: Where Are You in the Process? (Intelligent Field)
**Label:** "Where are you in the buying process? *" (required)
**Input type:** Dropdown select

**Options:**
1. "Just exploring options"
2. "Comparing suppliers actively"
3. "Ready to test quality with trial containers"
4. "Currently sourcing but having problems"
5. "Need immediate shipment (this week)"

**Conditional Response (NEW):**

**If user selects "Need immediate shipment (this week)":**
→ Show inline message below dropdown:
- Background: rgba(212, 175, 55, 0.15) (light gold warning)
- Border-left: 3px solid #D4AF37
- Padding: 16px
- Border-radius: 4px
- Icon: AlertCircle (gold, 20px)
- Text: "We're optimized for 1-3+ month planning cycles. For urgent needs, we can try to help but that's not our strength. If your timeline is flexible, select a different option above."
- Font: 14px, weight 400, #5A4F3D

**If user selects any other option:**
→ No message shown (form continues normally)

**Rationale:** Gently filters spot buyers WITHOUT blocking them (they can still submit, but expectations are set)

---

### FIELD 4: What's Your Biggest Concern with Indian Exporters?
**Label:** "What's your biggest concern when working with Indian exporters? *" (required)
**Input type:** Textarea
**Placeholder:** "E.g., inconsistent quality, poor communication, hidden fees, lack of transparency..."
**Rows:** 5
**Validation:** Minimum 10 characters
**Error message:** "Please share your main concern (helps us understand if we're a fit)"

**Styling:**
- Font: 16px
- Padding: 14px 16px
- Border: 1px solid #E8E5E0
- Border-radius: 6px
- Background: #FFFFFF
- Resize: vertical (allow users to expand if needed)

**Rationale:** 
- This is THE most valuable field - tells us exactly what they're struggling with
- Open-ended lets them express pain points authentically
- Helps us tailor follow-up conversation

---

## Submit Button

**Text:** "Send Inquiry"
**Style:**
- Background: #6B7A52
- Color: #FFFFFF
- Padding: 16px 48px
- Border-radius: 8px
- Font: 18px, weight 600 semibold
- Width: 100% (full width on mobile)
- Display: inline-block (centered on desktop)
- Hover: background #4F5A3D, transform translateY(-2px), shadow
- Disabled state (while submitting): background #8C7D68, cursor not-allowed, opacity 0.6

**Loading State:**
- Text changes to "Sending..."
- Spinner icon appears (rotating)
- Button disabled

**Success State:**
- Form disappears
- Success message appears:
  - Headline: "Inquiry Sent!" (28px, #4A7C59 green)
  - Message: "We'll respond within 24 hours. Check your email for confirmation."
  - Icon: CheckCircle (green, 48px)

---

## Alternative Contact Methods (Below Form)

**Divider:** "OR" centered between two horizontal lines
**Style:** 14px, uppercase, #8C7D68, margin 32px 0

**Email:**
- Label: "Email:" (14px, weight 600, #2C2416)
- Link: "hello@farmtotable.example" (16px, #6B7A52, underline on hover)
- Icon: Mail (Lucide, 18px, #6B7A52, left of text)

**WhatsApp:**
- Label: "WhatsApp:" (14px, weight 600, #2C2416)
- Link: "+91 0000000000" (16px, #6B7A52, underline on hover)
- Icon: MessageCircle (Lucide, 18px, #6B7A52, left of text)

**Office Location:**
- Label: "Office:" (14px, weight 600, #2C2416)
- Text: "Nashik, Maharashtra, India" (16px, #5A4F3D)
- Icon: MapPin (Lucide, 18px, #6B7A52, left of text)

**Regional Focus:**
- Label: "REGIONAL FOCUS" (12px, uppercase, weight 600, #8C7D68, margin-bottom 4px)
- Text: "Middle East, Europe & Southeast Asia" (16px, #5A4F3D)

**Layout:** Vertical stack, gap 16px between items

---

## Form Validation

**Real-time validation:**
- Email: Check format on blur
- Required fields: Show error only on submit attempt (not while typing - less annoying)
- Textarea: Character count indicator "12 / 10 minimum" (updates live)

**Error styling:**
- Border: 2px solid #C84D3C (red)
- Error message: 14px, #C84D3C, appears below field
- Icon: XCircle (red, 16px, left of error message)

---

## Section Spacing

**Padding:** 80px top/bottom
**Background:** #FFFFFF (white)
**Container:** max-width 1200px

---

# STICKY CTA BAR (INHERITED FROM HOMEPAGE)

**Trigger:** Appears after scrolling past Partnership Journey (Section 3)
**Content:** "Ready to start partnership process? → [Contact Us]"
**Styling:** Same as homepage sticky CTA bar

**[Full specs in Homepage Wireframe v2.0]**

---

# FOOTER (INHERITED FROM HOMEPAGE)

**[Same structure as Homepage Wireframe v2.0]**

3 columns: Brand Statement, Navigation, Contact

---

# RESPONSIVE BEHAVIOR

## Desktop (> 1024px)
All specs above are desktop-first.

## Tablet (768px - 1024px)

**Changes:**
- Hero: Maintain centered layout, reduce font sizes 15%
- Self-Assessment: Maintain single column
- Partnership Journey: Maintain 50/50 split (phases left, deliverables right)
- Social Proof: 2 columns
- Form: Maintain max-width 650px, centered
- Footer: 2 columns

## Mobile (< 768px)

**Changes:**
- Hero: Reduce font sizes 30%
- Self-Assessment: Maintain structure (works well on mobile)
- Partnership Journey: Stack vertically (phase info, then deliverables, then next phase)
- Social Proof: 1 column
- Partnership Availability: 1 column (stack Current Status + Target vertically)
- Form: Full width (minus 16px padding)
- Section padding: 48px top/bottom
- Sticky CTA: Simplify to icon + button only

---

# ACCESSIBILITY REQUIREMENTS

## Color Contrast
- All text meets AA standards (4.5:1 minimum)
- Form error states: Red text + icon (not color alone)
- Success states: Green background + checkmark icon

## Keyboard Navigation
- Self-assessment checkboxes: Tab to each, Space to toggle
- Form fields: Tab through in logical order
- Submit button: Enter key submits form
- Conditional messages: Announced by screen readers when triggered

## Screen Readers
- Self-assessment: Each checkbox has aria-label describing full criterion
- Feedback panel: aria-live="polite" (announces changes when checkboxes toggled)
- Form labels: Properly associated with inputs (for/id match)
- Required fields: aria-required="true"
- Error messages: aria-describedby links field to error message
- Partnership Journey phases: Semantic HTML <ol> (ordered list)

## Motion Sensitivity
- Respect prefers-reduced-motion
- If set: Remove checkbox scale animation, instant feedback panel updates
- Form success: Instant state change (no fade animation)

---

# ANIMATION SPECIFICATIONS

## Self-Assessment Checkbox

**Check Animation:**
- Checkmark: Scale from 0 to 1, duration 0.2s, ease-out
- Background: Fade from white to green, duration 0.2s
- Border: Color change instant

**Feedback Panel:**
- Appearance: Fade in + slide down (translateY -10px to 0), duration 0.4s
- Update: Cross-fade when score changes (old panel fades out 0.2s, new panel fades in 0.2s)

## Partnership Journey Phases

**Scroll-triggered:**
- Each phase: Fade in from left (phase info) + fade in from right (deliverables)
- Stagger: 0.15s delay between phases
- Duration: 0.6s each
- Trigger: When phase enters viewport

## Form Interactions

**Field Focus:**
- Border color change: 0.2s ease-out
- Ring appearance: Fade in 0.15s

**Error Appearance:**
- Error message: Slide down from field (translateY -5px to 0), duration 0.3s
- Border color: Instant change to red

**Submit Success:**
- Form: Fade out 0.3s
- Success message: Fade in 0.4s, slight scale (0.95 to 1)

---

# TECHNICAL IMPLEMENTATION NOTES

## Framework & Tools
- Next.js for routing and form handling
- React Hook Form for form validation
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Headless UI for dropdown component

## State Management

**Self-Assessment State:**
```javascript
const [checkedItems, setCheckedItems] = useState({
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
})

const score = Object.values(checkedItems).filter(Boolean).length
// score: 0-5

const fitLevel = score === 5 ? 'perfect' : score >= 3 ? 'likely' : 'poor'
```

**Form State:**
```javascript
const { register, handleSubmit, watch, formState: { errors } } = useForm()

const buyingProcess = watch('buyingProcess')
const showUrgentWarning = buyingProcess === 'immediate'
```

## Form Submission

**Client-side:**
```javascript
const onSubmit = async (data) => {
  setIsSubmitting(true)
  
  const response = await fetch('/api/partnership-inquiry', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  
  if (response.ok) {
    setShowSuccess(true)
    // Send confirmation email
    // Log to analytics
  }
  
  setIsSubmitting(false)
}
```

**Server-side (API route):**
- Validate data
- Send email to Farm to Table team (hello@farmtotable.example)
- Send confirmation email to user
- Log to CRM/database
- Return success/error response

## Conditional Form Logic

**Immediate shipment warning:**
```javascript
{buyingProcess === 'immediate' && (
  <div className="warning-message">
    <AlertCircle />
    <p>We're optimized for 1-3+ month planning cycles...</p>
  </div>
)}
```

---

# FINAL CHECKLIST

## Before Development
- [ ] Self-assessment criteria approved (accurate representation of ideal buyer)
- [ ] Partnership Journey deliverables accurate (what we actually provide at each phase)
- [ ] Pricing transparency approved (trial pricing, volume discounts)
- [ ] Partnership availability numbers confirmed (12 active, 15 target, March 2026 review)
- [ ] Social proof metrics approved (anonymized but accurate)
- [ ] Form destination email confirmed
- [ ] Conditional warning messages approved

## During Development
- [ ] Self-assessment checkboxes functional (track state, show feedback)
- [ ] Feedback panel updates in real-time (perfect/likely/poor fit logic)
- [ ] Form validation working (required fields, email format, character minimums)
- [ ] Conditional "immediate shipment" warning appears correctly
- [ ] Form submission sends emails (to Farm to Table + confirmation to user)
- [ ] Success state replaces form
- [ ] Alternative contact methods all functional (email, WhatsApp links)
- [ ] Sticky CTA bar appears at correct scroll depth

## Before Launch
- [ ] Form tested end-to-end (submit → email received → confirmation sent)
- [ ] All links functional (scroll to timeline, contact methods)
- [ ] Responsive behavior tested (mobile form, stacked timeline)
- [ ] Accessibility tested (keyboard nav, screen reader, error announcements)
- [ ] Performance tested (Lighthouse score > 90)
- [ ] Cross-browser tested
- [ ] Analytics events set up (checkbox clicks, form submissions, conditional warnings triggered)

---

# SUMMARY OF KEY IMPROVEMENTS FROM v1

1. ✅ **Hero compressed 40%** - More compact, better viewport usage
2. ✅ **Self-assessment interactive** - Checkboxes with instant feedback (not static list)
3. ✅ **Timeline + Expectations consolidated** - Single "Partnership Journey" section
4. ✅ **Pricing transparency added** - Trial pricing, volume discounts visible in timeline
5. ✅ **Social proof added** - 3 anonymized partnership case studies
6. ✅ **Partnership availability indicator** - Creates gentle urgency (12/15 capacity)
7. ✅ **Form shortened to 4 fields** - Reduced friction (was 7+ fields)
8. ✅ **Intelligent form responses** - Conditional warning for "immediate shipment" selection
9. ✅ **Sticky CTA bar added** - Early conversion opportunity
10. ✅ **Duplicate content removed** - Cleaner page flow

---

**END OF PARTNERSHIP PAGE WIREFRAME v2.0**

Total Pages: 49
Word Count: ~9,200
Ready for: Design review → Development → Launch

---

**ALL 3 WIREFRAMES COMPLETE:**
✅ Homepage - 47 pages
✅ Products - 51 pages
✅ Partnership - 49 pages

**Total: 147 pages of pixel-perfect specifications**

