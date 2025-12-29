import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { ComplianceBadges } from '@/components/ui/ComplianceBadges'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AssuranceLine } from '@/components/ui/AssuranceLine'
import { MotionDiv } from '@/components/ui/motion'
import { heroFade, fadeInUp } from '@/components/ui/motionVariants'

const brandProof = [
  { name: 'Farm to Table', src: '/images/logos/farm-to-table.png', width: 150, height: 60 },
  { name: 'Red Lady', src: '/images/logos/red-lady.png', width: 130, height: 60 },
  { name: 'Nutrigo', src: '/images/logos/nutrigo.png', width: 130, height: 60 },
]

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

export default function HomePage() {
  return (
    <>
      <Section variant="surface" tone="hero">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <MotionDiv {...heroFade()}>
            <div className="relative space-y-7">
              <div className="pointer-events-none absolute -inset-y-10 -left-16 w-64 rounded-[120px] bg-gradient-to-r from-black/10 via-black/0 to-transparent opacity-40 blur-3xl" />
              <div className="relative z-10 max-w-xl space-y-7">
                <div className="space-y-2">
                  <p className="eyebrow">Farm to Table</p>
                  <AssuranceLine />
                </div>
                <h1 className="max-w-[16ch] text-[var(--font-size-display)] leading-[1.08] text-text">
                  Source-side allocation control.
                </h1>
                <p className="text-lg text-muted">
                  Nasik clusters → Gulf & SEA importers; QC windows logged per lot.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" size="lg">
                    Request allocation plan
                  </Button>
                  <Button href="/products" variant="secondary" size="lg">
                    View available programs
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="eyebrow">Assurance lanes</p>
                  <AssuranceLine />
                  <ComplianceBadges />
                </div>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv {...heroFade(0.1)}>
            <MediaFrame
              src="/images/placeholders/hero.jpg"
              alt="Packhouse crew inspecting cartons"
              priority
              aspect="16:10"
              glow
            />
          </MotionDiv>
        </Container>
      </Section>

      <Section variant="muted" density="comfortable">
        <Container className="space-y-4">
          <div className="space-y-2">
            <p className="eyebrow">Brands that reference our lots</p>
            <AssuranceLine />
          </div>
          <Card className="flex flex-wrap items-center justify-between gap-6 px-6 py-4">
            {brandProof.map((brand) => (
              <div key={brand.name} className="flex items-center gap-3 text-sm text-muted">
                <Image
                  src={brand.src}
                  alt={`${brand.name} placeholder logo`}
                  width={brand.width}
                  height={brand.height}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Card>
        </Container>
      </Section>

      <Section tone="authority">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="eyebrow">On-ground system</p>
              <AssuranceLine />
            </div>
            <h2 className="text-text">Field procedures logged daily.</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Harvest window control recorded lot-wise.</li>
              <li>• Packhouse staging held under four hours.</li>
              <li>• Dual pre-cool steps documented for each mode.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['/images/placeholders/process-01.jpg', '/images/placeholders/process-02.jpg', '/images/placeholders/reality-01.jpg'].map(
              (src, index) => (
                <MotionDiv key={src} {...fadeInUp(index * 0.1)}>
                  <MediaFrame
                    src={src}
                    alt={
                      index === 0
                        ? 'Field sampling logbook photo'
                        : index === 1
                          ? 'Packing line detail photograph'
                          : 'Cooling tunnel inspection image'
                    }
                    aspect="4:3"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                </MotionDiv>
              )
            )}
          </div>
        </Container>
      </Section>

      <Section variant="surface" density="comfortable">
        <Container>
          <Card className="flex flex-col gap-6 p-8 text-center">
            <h2 className="text-text">Ready to plan allocations?</h2>
            <p className="mx-auto text-muted">
              Share your SKU mix, port preferences, and QA specs—we will revert with plots, pack windows, and pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                Request allocation plan
              </Button>
              <Button href={whatsappLink} variant="secondary" size="lg">
                Block export slots
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}
