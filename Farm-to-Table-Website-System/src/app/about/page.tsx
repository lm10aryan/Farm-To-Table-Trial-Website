import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { buildMetadata } from '@/components/seo/SEO'
import { Card } from '@/components/ui/Card'
import { AssuranceLine } from '@/components/ui/AssuranceLine'

export const metadata = buildMetadata({
  title: 'About',
  description: 'Farm to Table background and buyer promise.',
})

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">About Farm to Table</p>
          <AssuranceLine />
        </div>
        <h1>An export desk built for procurement teams.</h1>
        <p>
          This is placeholder text describing the founding team, agronomy partners, and logistics controls that keep
          the supply predictable for importers.
        </p>
        <Card className="p-6">
          <p className="text-sm font-semibold text-text">What this section will hold</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>• Leadership bios and audit history.</li>
            <li>• Packhouse and consolidation timelines.</li>
            <li>• Buyer testimonials or trade references.</li>
          </ul>
        </Card>
      </Container>
    </Section>
  )
}
