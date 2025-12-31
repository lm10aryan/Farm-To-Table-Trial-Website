import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { buildMetadata } from '@/components/seo/SEO'
import { Card } from '@/components/ui/Card'
import { AssuranceLine } from '@/components/ui/AssuranceLine'

export const metadata = buildMetadata({
  title: 'System',
  description: 'Field-to-port operating model for premium fresh produce exports.',
})

const systemPillars = [
  'Field clusters logged via spray diaries',
  'Harvest gate uses Brix and firmness readings',
  'Packhouse run sheets mapped to vessel bookings',
  'Cold chain monitored with live logger feeds',
]

export default function SystemPage() {
  return (
    <Section tone="authority">
      <Container className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="eyebrow">System Overview</p>
            <AssuranceLine />
          </div>
          <h1>Field discipline through to vessel handoff.</h1>
          <p>Lot files: agronomy, packing, dispatch only.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {systemPillars.map((pillar) => (
            <Card key={pillar} interactive className="p-5">
              <p className="text-sm font-semibold text-text">{pillar}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
