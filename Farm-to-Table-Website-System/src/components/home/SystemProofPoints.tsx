'use client'

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Card } from '@/components/ui/Card'

const proofPoints = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Scientific Grading',
    description: 'Brix testing, soil analysis, moisture monitoring—not assumptions. Every batch measured against documented standards.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Continuity Creates Consistency',
    description: 'Same quality team for 10 years. Same standards, same eyes on every shipment. Experience matters.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Transparent Timelines',
    description: 'Week-numbered harvest windows (e.g., Week 48-14 for grapes). Documented protocols. Real traceability from farm to container.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Quality Over Volume',
    description: 'We refuse shipments that don\'t meet standards. Your reputation matters to us - we won\'t compromise it for a sale.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Aligned Incentives',
    description: 'Not commission-based. Our success depends on your success. We\'re invested in quality outcomes, not just transaction volume.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Relationship-Focused',
    description: 'Small family team, strategic partnerships. We value depth over scale. We don\'t serve hundreds of buyers - we build with a few.',
  },
]

export function SystemProofPoints() {
  return (
    <Section variant="surface" className="py-20">
      <Container>

        <SectionHeader
          align="center"
          title="The Challenges Are Real. Our Systems Are Proven."
          description='Every buyer knows the frustrations: quality varies batch to batch, harvest delays happen without communication, "premium" doesn\'t always mean premium. Here\'s how we address them:'
          logoVariant="mark"
          logoSize="xs"
          className="max-w-[800px] mx-auto mb-12"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofPoints.map((point, index) => (
            <Card
              key={index}
              interactive
              className="p-6 bg-white border border-[var(--color-border-light)] hover:shadow-xl transition-all duration-300"
            >
              <div
                className="mb-4"
                style={{ color: 'var(--color-olive)' }}
              >
                {point.icon}
              </div>
              <h3
                className="font-semibold mb-2"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-dark-text)',
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  color: 'var(--color-medium-gray)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}
              >
                {point.description}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  )
}
