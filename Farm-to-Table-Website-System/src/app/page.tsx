'use client'

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { HeroSection } from '@/components/home/HeroSection'
import { SystemProofPoints } from '@/components/home/SystemProofPoints'
import { ProcurementJourney } from '@/components/home/ProcurementJourney'

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO - New redesigned hero section */}
      <HeroSection />

      {/* SECTION 2: SYSTEM PROOF POINTS - 6 Strategic Cards */}
      <SystemProofPoints />

      {/* SECTION 3: PROCUREMENT JOURNEY */}
      <ProcurementJourney />

      {/* SECTION 4: PROOF */}
      <Section variant="surface">
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-wide text-muted">
                Evidence-First
              </p>
              <h2 className="text-[var(--font-size-h1)] font-bold">
                Proof, not promises
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Export-ready packing
                </h3>
                <p className="text-muted">
                  Packing formats are defined upfront. Mixed or inconsistent lots are rejected.
                </p>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/10 border-2 border-dashed border-muted/30">
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p className="text-xs uppercase tracking-wide text-muted/60">
                      Real Photo: Packed Cartons / Inner Packing Close-Up
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Quality checks that matter
                </h3>
                <ul className="space-y-3 text-muted">
                  <li>• Grade uniformity verified</li>
                  <li>• Defects screened</li>
                  <li>• Pack integrity checked</li>
                </ul>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/10 border-2 border-dashed border-muted/30">
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p className="text-xs uppercase tracking-wide text-muted/60">
                      Real Photo: QC Checklist in Hand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: PRODUCTS */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <p className="text-sm uppercase tracking-wide text-muted">
                Programs
              </p>
              <h2 className="text-[var(--font-size-h1)] font-bold">
                What's Available Now
              </h2>
              <p
                className="text-center font-medium mb-3"
                style={{
                  color: 'var(--color-olive)',
                  fontSize: '1rem',
                }}
              >
                Peak season products for {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <p className="text-lg text-muted">
                Quality varies by season—we don't hide that. Here's what's at peak quality right now:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Pomegranates */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Pomegranates
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • 14-16° Brix (peak season)
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Week 48-14 availability
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Red Lady & Nutrigo
                  </li>
                </ul>

                <a
                  href="/products#pomegranates"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>

              {/* Grapes */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Grapes
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • 18mm+ bunches
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • &lt;2% defects
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Week 48-14
                  </li>
                </ul>

                <a
                  href="/products#grapes"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>

              {/* Melons */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Melons
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Brix tested
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Moisture controlled
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Summer season
                  </li>
                </ul>

                <a
                  href="/products#melons"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>

              {/* Bananas */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Bananas
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Year-round supply
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Cavendish variety
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Green to yellow stages
                  </li>
                </ul>

                <a
                  href="/products#bananas"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>

              {/* Coconuts */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Coconuts
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Fresh, not dried
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Full traceability
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Direct from farms
                  </li>
                </ul>

                <a
                  href="/products#coconuts"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>

              {/* Red Onions */}
              <div className="bg-[var(--color-light-gray)] p-5 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-[var(--color-medium-gray)]">
                    [Product Photo]
                  </span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark-text)',
                  }}
                >
                  Red Onions
                </h3>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Peak Quality
                </div>

                <ul className="space-y-1.5 mb-4 text-left">
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Export grade
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Low moisture
                  </li>
                  <li
                    className="text-sm"
                    style={{ color: 'var(--color-medium-gray)' }}
                  >
                    • Long shelf life
                  </li>
                </ul>

                <a
                  href="/products#red-onions"
                  className="inline-flex items-center font-semibold hover:underline"
                  style={{
                    color: 'var(--color-olive)',
                    fontSize: '1rem',
                  }}
                >
                  View Specs →
                </a>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p
                className="mb-6 max-w-2xl mx-auto"
                style={{
                  color: 'var(--color-medium-gray)',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                }}
              >
                We track seasonal variations in Brix levels, size calibers, and quality metrics.
                This depth of knowledge means you can plan programs with confidence—not hope.
              </p>
              <a
                href="/products"
                className="inline-flex items-center font-semibold text-lg hover:underline"
                style={{ color: 'var(--color-olive)' }}
              >
                See Full Seasonal Calendar & Product Range →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: BRANDS */}
      <Section variant="surface">
        <Container className="max-w-5xl">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-wide text-muted">
                System Output
              </p>
              <h2 className="text-[var(--font-size-h1)] font-bold">
                Two Brands, One Standard
              </h2>
              <p className="text-lg text-muted">
                We operate two brands for different market segments—both built on the same quality discipline and grading systems.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-[var(--color-light-gray)] p-8 rounded-2xl text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[var(--color-dark-text)]">RED LADY</h3>
                  <p className="text-lg font-medium text-[var(--color-olive)]">Premium Retail</p>
                </div>
                <p className="text-muted leading-relaxed">
                  For premium retailers who demand the highest standards. Every piece hand-graded, Brix-tested, lot-traced.
                </p>
                <p className="text-muted leading-relaxed">
                  We&apos;ve refused shipments of Red Lady produce rather than compromise—that&apos;s why the brand has earned trust with premium buyers across Middle East, Europe, and Southeast Asia.
                </p>
                <div className="pt-4">
                  <Button href="/products" variant="ghost" size="md">
                    View Red Lady Products →
                  </Button>
                </div>
              </Card>

              <Card className="bg-[var(--color-light-gray)] p-8 rounded-2xl text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[var(--color-dark-text)]">NUTRIGO</h3>
                  <p className="text-lg font-medium text-[var(--color-olive)]">Volume-Quality Wholesale</p>
                </div>
                <p className="text-muted leading-relaxed">
                  For wholesalers seeking reliable quality at scale. Consistent grading, transparent specs, dependable supply.
                </p>
                <p className="text-muted leading-relaxed">
                  Built for program planning with buyers who understand that &apos;volume-quality&apos; doesn&apos;t mean compromising standards—it means scaling them.
                </p>
                <div className="pt-4">
                  <Button href="/products" variant="ghost" size="md">
                    View Nutrigo Products →
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7: CTA */}
      <Section variant="default" className="py-20">
        <Container>

          <div
            className="max-w-3xl mx-auto text-center p-12 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--color-light-gray) 0%, var(--color-off-white) 100%)',
            }}
          >

            {/* Heading */}
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                color: 'var(--color-dark-text)',
                lineHeight: '1.3',
              }}
            >
              Built for Strategic Partnerships,
              <br />
              Not Transactional Volume
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-5 mb-8">
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-dark-text)',
                  lineHeight: '1.8',
                }}
              >
                We don&apos;t work with hundreds of buyers. We work with premium retailers
                and wholesalers who value consistency, plan programs 3-6 months ahead,
                and understand that quality has a cost.
              </p>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-dark-text)',
                  lineHeight: '1.8',
                }}
              >
                Every partnership starts with trial containers—2-3 shipments to ensure
                quality meets your standards and our systems align with your needs.
                Then we plan together for the long term.
              </p>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-dark-text)',
                  lineHeight: '1.8',
                }}
              >
                We&apos;re not for everyone. If you&apos;re optimizing purely for lowest price,
                there are cheaper suppliers. But if you&apos;re looking for a partner you can
                build programs with—let&apos;s start a conversation.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-10 py-4 text-xl font-semibold rounded-lg"
            >
              Request Partnership Discussion →
            </Button>

          </div>

        </Container>
      </Section>
    </>
  )
}
