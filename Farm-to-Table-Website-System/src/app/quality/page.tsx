import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ComplianceBadges } from '@/components/ui/ComplianceBadges'
import { buildMetadata } from '@/components/seo/SEO'
import { Card } from '@/components/ui/Card'
import { AssuranceLine } from '@/components/ui/AssuranceLine'

export const metadata = buildMetadata({
  title: 'Quality',
  description: 'Quality guardrails engineered for export buyers.',
})

export default function QualityPage() {
  return (
    <Section tone="authority">
      <Container className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="eyebrow">Quality Doctrine</p>
            <AssuranceLine />
          </div>
          <h1>Process assurances for every carton.</h1>
          <p>Residue, QC, cold chain records per lot.</p>
        </div>
        <div className="space-y-2">
          <p className="eyebrow">Compliance badges</p>
          <AssuranceLine />
          <ComplianceBadges />
        </div>
        <Card className="p-6">
          <p className="text-sm font-semibold text-text">Quality signals</p>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            <li>• Residue focus defined per market.</li>
            <li>• Cold chain monitored from packhouse to dispatch.</li>
            <li>• Lot-wise documentation maintained for handover.</li>
          </ul>
        </Card>
      </Container>
    </Section>
  )
}
