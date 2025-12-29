import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { buildMetadata } from '@/components/seo/SEO'
import { getCorePrograms, getSeasonalPrograms, getCatalogPrograms } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { AssuranceLine } from '@/components/ui/AssuranceLine'

export const metadata = buildMetadata({
  title: 'Products',
  description: 'Premium table grapes, pomegranates, and tropicals curated for discerning buyers.',
})

export default function ProductsPage() {
  const corePrograms = getCorePrograms()
  const seasonalPrograms = getSeasonalPrograms()
  const catalogPrograms = getCatalogPrograms()

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="eyebrow">Product Index</p>
            <AssuranceLine />
          </div>
          <h1>Product programs aligned to import windows.</h1>
          <p>
            Modular harvest plans allow you to lock cartons by grade, proactively aligning cold chain loading windows.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="eyebrow">Core Programs</p>
            <AssuranceLine />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {corePrograms.map((product) => (
              <ProductCard key={product.id} product={product} variant="hero" />
            ))}
          </div>
        </div>
        {seasonalPrograms.length > 0 && (
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="eyebrow">Seasonal Programs</p>
              <AssuranceLine />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {seasonalPrograms.map((product) => (
                <ProductCard key={product.id} product={product} variant="seasonal" />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="eyebrow">Catalog</p>
            <AssuranceLine />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {catalogPrograms.map((product) => (
              <ProductCard key={product.id} product={product} variant="catalog" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
