'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { TDSDrawer } from '@/components/TDSDrawer'
import { getAllProducts, ProductSpec } from '@/data/products'

export default function HomePage() {
  const products = getAllProducts()
  const [selectedProduct, setSelectedProduct] = useState<ProductSpec | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCardClick = (product: ProductSpec) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  // Get current month for season filtering
  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }) as any
  const inSeasonProducts = products.filter(p =>
    p.primarySeason.months.includes(currentMonth)
  )

  // Show all products if no products in current season, otherwise show in-season only
  const displayProducts = inSeasonProducts.length > 0 ? inSeasonProducts : products

  return (
    <>
      <div className="min-h-screen bg-base-black">

        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="section-container text-center space-y-8 z-10">
            <h1 className="text-display-xl text-type-primary">
              Premium Indian Produce.
              <br />
              Engineered for Consistency.
            </h1>
            <p className="text-body-xl text-type-secondary max-w-3xl mx-auto">
              Two brands. Six products. Zero compromise on quality.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </button>
              <button className="btn-secondary">
                Download Product Specs
              </button>
            </div>
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-base-black via-transparent to-base-black pointer-events-none" />
        </section>

        {/* SECTION 2: PROBLEM → SOLUTION */}
        <section className="py-24 bg-base-off-black">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-type-primary mb-4">
                Why Premium Buyers Choose Us
              </h2>
              <p className="text-body-lg text-type-secondary max-w-2xl mx-auto">
                We've built a system that solves the core challenges of Indian produce exports.
              </p>
            </div>

            {/* Problem Icons */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-status-error/10 border border-status-error/30 flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Quality Variation
                </h3>
                <p className="text-body-sm text-type-secondary">
                  Tropical climate creates seasonal quality swings. Most exporters ship anything meeting minimum standards.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-status-error/10 border border-status-error/30 flex items-center justify-center">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Hidden Defects
                </h3>
                <p className="text-body-sm text-type-secondary">
                  Internal defects discovered at destination. Commission-based exporters optimize for volume, not consistency.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-status-error/10 border border-status-error/30 flex items-center justify-center">
                  <span className="text-3xl">💔</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Broken Trust
                </h3>
                <p className="text-body-sm text-type-secondary">
                  Communication breakdowns and hidden agendas damage long-term relationships.
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className="relative my-16">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-type-tertiary"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-base-off-black text-olive-400 font-mono text-data-md">
                  OUR SOLUTION
                </span>
              </div>
            </div>

            {/* Solution Icons */}
            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Scientific Grading
                </h3>
                <p className="text-body-sm text-type-secondary">
                  Brix testing, soil analysis, moisture monitoring. We reject shipments that don't meet standards.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Deep Partnerships
                </h3>
                <p className="text-body-sm text-type-secondary">
                  10-15 committed buyers, not hundreds of transactions. Farmers receive stable income above market rates.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-body-xl text-type-primary font-semibold">
                  Everyone Wins
                </h3>
                <p className="text-body-sm text-type-secondary">
                  Quality stays consistent season-to-season. Buyers get exactly what they paid for.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: PRODUCTS GRID */}
        <section id="products" className="py-24">
          <div className="section-container space-y-12">

            <div className="text-center space-y-4">
              <h2 className="text-display-lg text-type-primary">
                Current Harvest Window
              </h2>
              <p className="text-body-lg text-type-secondary">
                {inSeasonProducts.length > 0
                  ? `${inSeasonProducts.length} products at peak quality this month`
                  : 'Year-round availability across our product range'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleCardClick}
                />
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: BRANDS EXPLANATION */}
        <section className="py-24 bg-base-off-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-12">

              <div className="text-center space-y-4">
                <h2 className="text-display-md text-type-primary">
                  Two Brands, One System
                </h2>
                <p className="text-body-lg text-type-secondary">
                  Different market segments. Same quality standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Red Lady */}
                <div className="card-base overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 flex items-center justify-center">
                    <span className="text-6xl">🍎</span>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full">
                      <span className="text-body-lg text-accent-gold font-semibold">Red Lady</span>
                    </div>
                    <h3 className="text-body-xl text-type-primary font-semibold">
                      Boutique Retail Standards
                    </h3>
                    <p className="text-body-md text-type-secondary">
                      For premium retailers who demand the highest standards. Every piece hand-graded, Brix-tested, lot-traced.
                    </p>
                    <p className="text-body-sm text-type-secondary italic">
                      We've refused shipments of Red Lady produce rather than compromise—that's why the brand has earned trust with premium buyers across Middle East, Europe, and Southeast Asia.
                    </p>
                    <div className="pt-4 border-t border-type-tertiary">
                      <p className="text-body-sm text-type-tertiary">
                        Featured: Pomegranates, Grapes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nutrigo */}
                <div className="card-base overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-accent-steel/20 to-accent-steel/5 flex items-center justify-center">
                    <span className="text-6xl">📦</span>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent-steel/10 border border-accent-steel/30 rounded-full">
                      <span className="text-body-lg text-accent-steel font-semibold">Nutrigo</span>
                    </div>
                    <h3 className="text-body-xl text-type-primary font-semibold">
                      High-Volume Reliability
                    </h3>
                    <p className="text-body-md text-type-secondary">
                      For wholesalers seeking reliable quality at scale. Consistent grading, transparent specs, dependable supply.
                    </p>
                    <p className="text-body-sm text-type-secondary italic">
                      Built for program planning with buyers who understand that 'volume-quality' doesn't mean compromising standards—it means scaling them.
                    </p>
                    <div className="pt-4 border-t border-type-tertiary">
                      <p className="text-body-sm text-type-tertiary">
                        Featured: Bananas, Red Onions, Coconuts, Melons (+ shared products)
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: REJECTION CALLOUT */}
        <section className="py-32 relative overflow-hidden">

          {/* Background Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-olive-500/10 rounded-full blur-3xl animate-glow-pulse" />
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-5xl mx-auto">

              {/* Visual Stats Grid */}
              <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Big Number */}
                <div className="text-center md:text-left">
                  <div className="inline-block relative">
                    <div className="text-[10rem] md:text-[14rem] font-bold text-olive-500 text-glow-olive leading-none">
                      30%
                    </div>
                    <div className="mt-4 font-mono text-data-lg text-type-secondary">
                      REJECTION RATE
                    </div>
                  </div>
                </div>

                {/* Right: Explanation */}
                <div className="space-y-6">
                  <h3 className="text-display-md text-type-primary">
                    Quality filtering happens at the gate
                  </h3>
                  <p className="text-body-lg text-type-secondary">
                    Internal defect screening, Brix verification, and pressure testing before loading. Not after arrival.
                  </p>

                  {/* Process Steps */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-olive-400 text-xs">1</span>
                      </div>
                      <p className="text-body-sm text-type-secondary">
                        Visual inspection + internal sampling at farm gate
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-olive-400 text-xs">2</span>
                      </div>
                      <p className="text-body-sm text-type-secondary">
                        Brix testing and firmness validation at packing house
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-olive-400 text-xs">3</span>
                      </div>
                      <p className="text-body-sm text-type-secondary">
                        Final quality check before container loading
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: CTA */}
        <section className="py-24 bg-base-off-black">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center space-y-8">

              <h2 className="text-display-lg text-type-primary">
                Ready to establish a partnership?
              </h2>

              <p className="text-body-lg text-type-secondary">
                We work with 10-15 committed buyers. Not transactional ordering.
              </p>

              <button className="btn-primary text-lg px-8 py-4">
                Request Product Allocation
              </button>

              <p className="text-body-sm text-type-tertiary">
                Partnership inquiries typically receive response within 48 hours
              </p>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-type-tertiary">
          <div className="section-container">
            <div className="text-center space-y-4">
              <p className="text-body-md text-type-primary font-semibold">
                Farm to Table Trading LLP
              </p>
              <p className="text-body-sm text-type-secondary">
                Nashik, Maharashtra, India
              </p>
              <p className="text-body-sm text-type-tertiary">
                © 2025 Farm to Table Trading LLP. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </div>

      {/* TDS Drawer */}
      <TDSDrawer
        product={selectedProduct}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </>
  )
}
