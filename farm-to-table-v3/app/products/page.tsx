'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactModal } from '@/components/ContactModal'
import { SeasonalCalendar } from '@/components/SeasonalCalendar'
import { getAllProducts } from '@/data/products'

export default function ProductsPage() {
  const products = getAllProducts()
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-base-black">
        <section className="py-16 border-b border-type-tertiary">
          <div className="section-container text-center">
            <h1 className="text-display-lg text-type-primary mb-3">
              Product Catalog
            </h1>
            <p className="text-body-lg text-type-secondary">
              Six products. Scientific grading. Transparent specifications.
            </p>
          </div>
        </section>

        <section className="py-16 bg-base-off-black">
          <div className="section-container">
            <SeasonalCalendar />
          </div>
        </section>

        <section className="py-16">
          <div className="section-container space-y-12">
            <div className="text-center">
              <h2 className="text-display-md text-type-primary">
                Our Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`} className="group">
                  <div className="card-base overflow-hidden hover:border-olive-600 transition-all duration-300 hover:shadow-olive-glow">
                    <div className="relative aspect-[4/3] overflow-hidden bg-base-charcoal">
                      <Image
                        src={product.images.thumbnail}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 text-center space-y-3">
                      <h3 className="text-body-xl text-type-primary font-semibold">
                        {product.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-900/30 border border-olive-600/50 rounded-full">
                        <span className="font-mono text-data-sm text-olive-400">
                          {product.primarySeason.description}
                        </span>
                      </div>
                      <div className="pt-2">
                        <span className="text-body-sm text-olive-400 group-hover:text-olive-300 transition-colors">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-base-off-black">
          <div className="section-container">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-display-md text-type-primary">
                  Need More Information?
                </h2>
                <p className="text-body-lg text-type-secondary">
                  Download our complete product catalog or request custom specifications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Download Product Catalog (PDF)
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Request Custom Specifications
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
