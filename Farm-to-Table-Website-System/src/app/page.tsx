'use client'

import { useState } from 'react'

import { ProductCard } from '@/components/products/ProductCard'
import { TDSDrawer } from '@/components/products/TDSDrawer'
import { getAllCatalogProducts, type ProductSpec, type SeasonMonth } from '@/data/catalogProducts'

export default function HomePage() {
  const products = getAllCatalogProducts()
  const [selectedProduct, setSelectedProduct] = useState<ProductSpec | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCardClick = (product: ProductSpec) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => setIsDrawerOpen(false)

  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }) as SeasonMonth
  const inSeasonProducts = products.filter((product) => product.primarySeason.months.includes(currentMonth))
  const displayProducts = inSeasonProducts.length > 0 ? inSeasonProducts : products

  return (
    <>
      <div className="min-h-screen bg-base-black text-type-primary">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="section-container z-10 space-y-8 text-center">
            <h1 className="text-display-xl text-type-primary">
              Premium Indian Produce.
              <br />
              Engineered for Consistency.
            </h1>
            <p className="mb-4 mx-auto max-w-4xl text-body-lg text-type-secondary">
              We handle the chaos of Indian sourcing so you get reliable quality, season after season.
            </p>
            <p className="mx-auto max-w-4xl text-body-md text-type-tertiary">
              Two brands. Six products. Zero compromise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="btn-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </button>
              <button type="button" className="btn-secondary">
                Download Product Specs
              </button>
            </div>
          </div>
          <div className="gradient-overlay" />
        </section>

        <section className="py-16">
          <div className="section-container">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-display-md text-type-primary">Why Indian Exports Are Difficult</h2>
                <p className="text-body-lg text-type-secondary">
                  India grows world-class produce. Getting it consistently to international markets is chaos.
                </p>
              </div>
              <div className="card-base p-8 md:p-12">
                <h3 className="mb-6 text-body-xl font-semibold text-type-primary">The Reality of Indian Sourcing:</h3>
                <ul className="space-y-4 text-body-md text-type-secondary">
                  {[
                    'Thousands of small, fragmented farms across regions',
                    'Quality varies by location, by week, even by farm',
                    'Tropical climate creates unpredictable seasonal swings',
                    'Internal defects invisible to the eye until destination',
                    'Most exporters lack scientific grading equipment',
                    'Commission-based models incentivize volume, not quality',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 text-olive-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-type-tertiary pt-6 text-body-lg text-type-primary">
                  Result: Surprise rejections at port. Inconsistent specs. Communication breakdowns. Lost trust. Buyers doing damage control instead of running
                  their business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-off-black py-16">
          <div className="section-container">
            <div className="mx-auto max-w-6xl space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-display-md text-type-primary">Our System: Built to Handle Complexity</h2>
                <p className="mx-auto max-w-3xl text-body-lg text-type-secondary">
                  We&apos;ve spent years building deep expertise in India&apos;s agricultural landscape. Same team. Scientific protocols. Direct farm relationships.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: '🗺️',
                    title: 'Knowledge-Driven Sourcing',
                    bullets: [
                      'Partner with growers across multiple regions',
                      'Years of relationship capital, not transactional spot buying',
                      'Track seasonal patterns, quality shifts week-by-week',
                      'Know which farms produce what quality, when',
                    ],
                  },
                  {
                    icon: '🔬',
                    title: 'Scientific Quality Control',
                    bullets: [
                      'Brix testing, internal sampling, pressure testing',
                      'Skilled team—same people for years, not seasonal contractors',
                      '30% rejection rate at source, not at your port',
                      'Three-layer inspection before container loading',
                    ],
                  },
                  {
                    icon: '🤝',
                    title: 'Everyone Wins',
                    bullets: [
                      'Farmers: Stable pricing above market rates',
                      'Workers: Year-round employment, fair wages',
                      'Team: Invested in quality, not volume quotas',
                      'Buyers: Consistent specs, transparent process',
                    ],
                  },
                ].map((card) => (
                  <div key={card.title} className="card-base space-y-4 p-8">
                    <div className="text-5xl">{card.icon}</div>
                    <h3 className="text-body-xl font-semibold text-type-primary">{card.title}</h3>
                    <ul className="space-y-3 text-body-sm text-type-secondary">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 flex-shrink-0 text-olive-400">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mx-auto max-w-3xl text-center text-body-lg text-type-secondary">
                You have fixed schedules and enough stress already. We handle the chaos so you can focus on your business.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="py-24">
          <div className="section-container space-y-12">
            <div className="space-y-3 text-center">
              <h2 className="text-display-lg text-type-primary">Current Harvest Window</h2>
              <p className="text-body-lg text-type-secondary">
                {inSeasonProducts.length > 0
                  ? `${inSeasonProducts.length} products at peak quality this month`
                  : 'Year-round availability across our product range'}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={handleCardClick} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-base-off-black py-24">
          <div className="section-container">
            <div className="mx-auto max-w-4xl space-y-12 text-center">
              <div className="space-y-4">
                <h2 className="text-display-md text-type-primary">Two Brands, One System</h2>
                <p className="text-body-lg text-type-secondary">Different market segments. Same quality standards.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="card-base overflow-hidden">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 text-6xl">
                    🍎
                  </div>
                  <div className="space-y-6 p-8 text-left">
                    <div className="inline-flex items-center gap-3 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-body-lg font-semibold text-accent-gold">
                      Red Lady
                    </div>
                    <h3 className="text-body-xl font-semibold text-type-primary">Boutique Retail Standards</h3>
                    <p className="text-body-md text-type-secondary">
                      For premium retailers who demand the highest standards. Every piece hand-graded, Brix-tested, lot-traced.
                    </p>
                    <p className="text-body-sm italic text-type-secondary">
                      We&apos;ve refused shipments rather than compromise. That&apos;s why the brand has earned trust with premium buyers across Middle East,
                      Europe, and Southeast Asia.
                    </p>
                    <div className="border-t border-type-tertiary pt-4 text-body-sm text-type-tertiary">Featured: Pomegranates, Grapes</div>
                  </div>
                </div>
                <div className="card-base overflow-hidden">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent-steel/20 to-accent-steel/5 text-6xl">
                    🛒
                  </div>
                  <div className="space-y-6 p-8 text-left">
                    <div className="inline-flex items-center gap-3 rounded-full border border-accent-steel/30 bg-accent-steel/10 px-4 py-2 text-body-lg font-semibold text-accent-steel">
                      Nutrigo
                    </div>
                    <h3 className="text-body-xl font-semibold text-type-primary">Program-Scale Reliability</h3>
                    <p className="text-body-md text-type-secondary">
                      For wholesalers seeking reliable quality at scale. Consistent grading, transparent specs, dependable supply.
                    </p>
                    <p className="text-body-sm italic text-type-secondary">
                      Built for program planning with buyers who understand that &quot;volume-quality&quot; means scaling standards, not compromising them.
                    </p>
                    <div className="border-t border-type-tertiary pt-4 text-body-sm text-type-tertiary">
                      Featured: Bananas, Red Onions, Coconuts, Melons (+ shared products)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <div className="animate-glow-pulse absolute inset-0 mx-auto my-auto h-96 w-96 rounded-full bg-olive-500/10 blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:items-center">
              <div className="text-center md:text-left">
                <div className="text-[10rem] font-bold leading-none text-olive-500 text-glow-olive md:text-[14rem]">30%</div>
                <div className="font-mono text-data-lg text-type-secondary">REJECTION RATE</div>
              </div>
              <div className="space-y-6">
                <h3 className="text-display-md text-type-primary">We Reject 30% at the Gate</h3>
                <p className="text-body-lg text-type-secondary">
                  On average, we reject more than 30% of the best-quality produce during grading—so you don&apos;t reject it at your port.
                </p>
                <div className="space-y-3 border-t border-type-tertiary pt-4">
                  {[
                    'Visual inspection + internal sampling at farm gate',
                    'Brix testing and firmness validation at packing house',
                    'Final quality check before container loading',
                  ].map((step, idx) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-olive-600 bg-olive-900/50 text-xs text-olive-400">
                        {idx + 1}
                      </div>
                      <p className="text-body-sm text-type-secondary">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mx-auto max-w-3xl text-center text-body-lg text-type-secondary pt-8 md:mx-0 md:text-left">
                  This is why we cost more than spot-market exporters. And why buyers come back season after season.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-off-black py-24">
          <div className="section-container">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-display-lg text-type-primary">Ready to establish a partnership?</h2>
              <p className="text-body-lg text-type-secondary">We work with 10-15 committed buyers. Not transactional ordering.</p>
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                Request Product Allocation
              </button>
              <p className="text-body-sm text-type-tertiary">Partnership inquiries typically receive response within 48 hours</p>
            </div>
          </div>
        </section>
      </div>

      <TDSDrawer product={selectedProduct} isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  )
}
