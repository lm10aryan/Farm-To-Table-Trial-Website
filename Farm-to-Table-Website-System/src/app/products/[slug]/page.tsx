import { notFound } from 'next/navigation'

import { buildMetadata } from '@/components/seo/SEO'
import { getAllCatalogProducts, getProductBySlug } from '@/data/catalogProducts'

import { ProductPageContent } from './ProductPageContent'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllCatalogProducts().map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  return buildMetadata({
    title: product ? `${product.name} — Technical Data Sheet` : 'Product not found',
    description: product?.description.short ?? 'Requested product is unavailable.',
  })
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductPageContent product={product} />
}
