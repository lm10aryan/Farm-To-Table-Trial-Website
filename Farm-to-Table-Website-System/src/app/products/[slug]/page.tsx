import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { buildMetadata } from '@/components/seo/SEO'
import { AssuranceLine } from '@/components/ui/AssuranceLine'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'
import { programs, getProgramById } from '@/data/products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.id }))
}

export function generateMetadata({ params }: ProductPageProps) {
  const program = getProgramById(params.slug)
  return buildMetadata({
    title: program ? program.productName : 'Program not found',
    description: program ? program.heroLine : 'Requested program is unavailable.',
  })
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const program = getProgramById(params.slug)

  if (!program) {
    return (
      <Section>
        <Container className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Program offline</p>
          <h1 className="text-3xl font-semibold">SKU not available.</h1>
          <p className="text-muted">Refer to current programs.</p>
          <Button href="/products" size="md" className="mx-auto w-fit">
            View available programs
          </Button>
        </Container>
      </Section>
    )
  }

  const specRows = [
    { label: 'Harvest window', value: program.harvestWindow },
    { label: 'Preferred calibers', value: program.preferredCalibers ?? program.gradesOrCalibers },
    { label: 'QC tolerances', value: program.qcTolerances },
    { label: 'Cold chain notes', value: program.coldChainNotes ?? 'Cold chain specs shared per booking.' },
  ]

  return (
    <Section>
      <Container className="space-y-6">
        <Link href="/products" className="text-sm text-muted underline-offset-4 hover:underline">
          ← Back to products
        </Link>
        <div className="space-y-2">
          <p className="eyebrow">Program overview</p>
          <AssuranceLine />
        </div>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-text/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-text">
              {program.programType === 'core' ? 'Core Program' : 'Seasonal'}
            </span>
            {program.programType === 'seasonal' && program.seasonLabel && (
              <span className="rounded-full border border-text/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-text">
                {program.seasonLabel}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-semibold text-text">{program.productName}</h1>
          <p className="text-lg text-muted">{program.heroLine}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Origin: {program.originRegion}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Availability: {program.availabilityWindow}</p>
        </div>

        <Card className="grid gap-6 p-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-text">Formats</p>
            <p className="mt-2 text-sm text-muted">{program.formats.join(', ')}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Shipping modes</p>
            <p className="mt-2 text-sm text-muted">
              {program.shippingModes.map((mode) => mode.toUpperCase()).join(', ')}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Grades / calibers</p>
            <p className="mt-2 text-sm text-muted">{program.gradesOrCalibers}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Residue focus</p>
            <p className="mt-2 text-sm text-muted">{program.residueFocus}</p>
          </div>
        </Card>

        <div className="space-y-3">
          <div className="space-y-2">
            <p className="eyebrow">Specification table</p>
            <AssuranceLine />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specRows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-semibold text-text">{row.label}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Card className="space-y-3 p-6">
          <p className="text-sm font-semibold text-text">Operational notes</p>
          <p className="text-sm text-muted">{program.operationalNotes}</p>
        </Card>

        <Button href="/contact" size="md" className="w-fit">
          {program.orderCTA}
        </Button>
      </Container>
    </Section>
  )
}
