import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { buildMetadata } from '@/components/seo/SEO'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AssuranceLine } from '@/components/ui/AssuranceLine'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Reach the Farm to Table team for allocations and samples.',
})

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

export default function ContactPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Contact</p>
          <AssuranceLine />
        </div>
        <h1>Share your demand plan.</h1>
        <p>
          Send packing specs, preferred Incoterms, and compliance requests—we respond with volume, pricing, and QA track.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold text-text">Direct email</p>
            <p className="mt-2 text-lg font-semibold text-text">{CONTACT_EMAIL}</p>
            <p className="mt-3 text-sm text-muted">We respond within one business day.</p>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="sm" className="mt-4 w-fit">
              Request allocation plan
            </Button>
          </Card>
          <Card className="p-6">
            <p className="text-sm font-semibold text-text">WhatsApp updates</p>
            <p className="mt-2 text-lg font-semibold text-text">{WHATSAPP_NUMBER}</p>
            <p className="mt-3 text-sm text-muted">Use for quick logistics or sample requests.</p>
            <Button href={whatsappLink} variant="primary" size="sm" className="mt-4 w-fit">
              Block export slots
            </Button>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
