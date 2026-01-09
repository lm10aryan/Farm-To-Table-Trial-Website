'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SeasonalCalendar } from '@/components/products/SeasonalCalendar'
import { ContactModal } from '@/components/products/ContactModal'
import { getAllCatalogProducts } from '@/data/catalogProducts'

export default function ProductsPage() {
  const products = getAllCatalogProducts()
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <section className="py-16 border-b border-type-tertiary">
        <div className="section-container text-center space-y-3">
          <h1 className="text-display-lg text-type-primary mb-3">Product Catalog</h1>
          <p className="text-body-lg text-type-secondary">
            Six products. Scientific grading. Transparent specifications.
          </p>
        </div>
      </section>

      <Section tone="system">
        <Container>
          <SeasonalCalendar />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">Programs</p>
            <h2 className="text-3xl font-semibold text-[#2C2416]">Our Products</h2>
            <p className="text-[#5A4F3D]">Click any SKU to view the technical data sheet.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                interactive
                className="group overflow-hidden rounded-[28px] border border-[#E4E0D7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/products/${product.slug}`} className="flex h-full flex-col">
                  <div className="relative h-72 w-full overflow-hidden bg-[#171310]">
                    <Image
                      src={product.images.thumbnail}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-8 text-center">
                    <h3 className="text-[1.45rem] font-semibold text-[#2C2416] tracking-tight">{product.name}</h3>
                    <p className="text-body-sm text-[#5A4F3D] leading-relaxed">{product.description.short}</p>
                    <div className="mt-auto pt-4 text-sm font-semibold text-[#6B7A52] transition group-hover:text-[#4a5a2d]">
                      View details →
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="authority">
        <Container className="space-y-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Need more information?</p>
          <h2 className="text-3xl font-semibold">Download the complete catalog</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Full logistics specs, quality tolerances, and harvest calendars for every SKU.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary">
              Download Product Catalog (PDF)
            </Button>
            <Button size="lg" onClick={() => setIsContactOpen(true)} variant="ghost" className="text-white">
              Request Custom Specifications
            </Button>
          </div>
        </Container>
      </Section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
