'use client'

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const journeyStages = [
  {
    number: '01',
    title: 'Farmer Partnerships',
    details: [
      'Long-term relationships',
      'Sustainable practices',
      'Quality incentives',
    ],
  },
  {
    number: '02',
    title: 'Quality Check (Origin)',
    details: [
      'Brix testing',
      'Soil analysis',
      'Moisture monitoring',
    ],
  },
  {
    number: '03',
    title: 'Harvest',
    details: [
      'Week-numbered windows',
      'Timing protocols',
      'Field-to-packhouse logistics',
    ],
  },
  {
    number: '04',
    title: 'Packhouse (Nashik)',
    details: [
      'Receiving inspection',
      'Pre-cooling (e.g., 0.5°C)',
      'Temperature monitoring',
    ],
  },
  {
    number: '05',
    title: 'Grading & Sorting',
    details: [
      '10-year quality team',
      'Hand-sorted by caliber',
      'QC tolerances (<2% defects)',
      'Color charts per batch',
    ],
  },
  {
    number: '06',
    title: 'Distribution',
    details: [
      'Export: Red Lady + Nutrigo',
      'Indian market: Below standard',
      'Full traceability',
    ],
  },
]

export function ProcurementJourney() {
  return (
    <Section variant="surface" className="py-20">
      <Container>

        <SectionHeader
          align="center"
          title="Every Shipment Follows the Same Quality-Controlled Journey"
          description="Transparency isn't a marketing term—it's our operating model. Here's exactly how produce moves from our partner farms to your destination."
          logoVariant="mark"
          logoSize="xs"
          className="max-w-[800px] mx-auto mb-12"
        />

        {/* Journey Flow */}
        <div className="relative max-w-5xl mx-auto">

          {/* Connecting Line */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-olive)] to-transparent"
            style={{ top: '6rem' }}
          />

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {journeyStages.map((stage, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Stage Number Badge */}
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-olive) 0%, #6d7a21 100%)',
                    boxShadow: '0 4px 12px rgba(135, 153, 41, 0.3)',
                  }}
                >
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: '1.5rem' }}
                  >
                    {stage.number}
                  </span>
                </div>

                {/* Stage Content Card */}
                <div
                  className="bg-white p-6 rounded-lg border border-[var(--color-border-light)] text-center"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <h3
                    className="font-semibold mb-4"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--color-dark-text)',
                    }}
                  >
                    {stage.title}
                  </h3>

                  <ul className="space-y-2 text-left">
                    {stage.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm"
                        style={{ color: 'var(--color-medium-gray)' }}
                      >
                        <span
                          className="mr-2 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-olive)' }}
                        >
                          •
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Statement */}
        <div
          className="text-center mt-12 max-w-2xl mx-auto p-6 rounded-lg"
          style={{
            backgroundColor: 'var(--color-light-gray)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <p
            className="font-medium"
            style={{
              color: 'var(--color-dark-text)',
              fontSize: '1rem',
            }}
          >
            Products that don't meet export standards are sold in the Indian domestic market.
            We don't compromise quality to fill containers.
          </p>
        </div>

      </Container>
    </Section>
  )
}
