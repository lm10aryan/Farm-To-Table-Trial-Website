import Link from 'next/link'
import type { Program } from '@/data/types'
import { Card } from './Card'
import { AssuranceLine } from './AssuranceLine'

type ProductCardProps = {
  product: Program
  variant?: 'hero' | 'seasonal' | 'catalog'
}

const variantClassName: Record<NonNullable<ProductCardProps['variant']>, string> = {
  hero: 'p-6 sm:p-7',
  seasonal: 'p-5',
  catalog: 'p-5',
}

export function ProductCard({ product, variant = 'catalog' }: ProductCardProps) {
  const badge = product.programType === 'core' ? 'Core Program' : 'Seasonal'

  return (
    <Link href={`/products/${product.id}`} className="block focus-visible:outline-none">
      <Card
        interactive
        className={`${variantClassName[variant]} h-full space-y-4`}
      >
        <div className="space-y-2">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-text/10 px-3 py-1 text-xs font-semibold text-text">
              {badge}
            </span>
          )}
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-wide text-muted">{product.originRegion}</p>
            <h3 className="text-2xl font-semibold text-text">{product.productName}</h3>
          </div>
          <p className="text-sm text-muted">{product.heroLine}</p>
        </div>
        {product.programType === 'seasonal' && product.seasonLabel && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-text">
            Season: {product.seasonLabel}
          </div>
        )}
        <p className="text-xs text-muted">Availability: {product.availabilityWindow}</p>
        <AssuranceLine />
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          {product.formats.slice(0, 2).map((format) => (
            <span key={format} className="rounded-full border border-border/60 px-3 py-1">
              {format}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  )
}
