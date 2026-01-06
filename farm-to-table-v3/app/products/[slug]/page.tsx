import { notFound } from 'next/navigation'

import { getAllProducts, ProductSpec } from '@/data/products'

import { ProductPageContent } from './ProductPageContent'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

async function getProduct(slug: string): Promise<ProductSpec | null> {
  const products = getAllProducts()
  return products.find((product) => product.slug === slug) ?? null
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return <ProductPageContent product={product} />
}
