'use client'

import Image from 'next/image'

import { ProductCard } from '@/components/products/ProductCard'
import { HeroFinal } from '@/components/HeroFinal'
import { ChaosFinal } from '@/components/ChaosFinal'
import { SystemFinal } from '@/components/SystemFinal'
import { RejectionSectionRevamped } from '@/components/RejectionSectionRevamped'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { getAllCatalogProducts, type SeasonMonth } from '@/data/catalogProducts'

export default function HomePage() {
  const products = getAllCatalogProducts()

  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }) as SeasonMonth
  const inSeasonProducts = products.filter((product) => product.primarySeason.months.includes(currentMonth))
  const displayProducts = inSeasonProducts.length > 0 ? inSeasonProducts : products

  return (
    <>
      <div className="min-h-screen bg-base-black">
        {/* NEW FINAL SECTIONS */}
        <HeroFinal />
        <ChaosFinal />
        <SystemFinal />

        {/* EXISTING GOOD SECTIONS */}
        {/* Current Harvest Window */}
        <section id="products" className="py-section bg-base-off-black">
          <div className="section-container space-y-12">
            <div className="space-y-3 text-center">
              <h2 className="text-display-lg text-type-primary mb-6">Current Harvest Window</h2>
              <p className="text-body-lg text-type-secondary max-w-[65ch] mx-auto">
                {inSeasonProducts.length > 0
                  ? `${inSeasonProducts.length} products at peak quality this month`
                  : 'Year-round availability across our product range'}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Two Brands section */}
        <section className="py-section bg-base-black">
          <div className="section-container">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <SectionHeader
                title="Two Brands, One System"
                description="Different market segments. Same quality standards."
                logoVariant="mark"
                logoSize="xs"
              />
              <div className="grid gap-8 md:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-2xl">
                  <div className="flex h-80 items-center justify-center bg-gradient-to-br from-accent-gold/25 to-accent-gold/5">
                    <div className="relative h-44 w-80 drop-shadow-[0_20px_60px_rgba(139,148,95,0.6)]">
                      <Image src="/images/logos/red-lady.svg" alt="Red Lady logo" fill className="object-contain" priority sizes="320px" />
                    </div>
                  </div>
                  <div className="space-y-5 p-7 lg:p-8">
                    <div className="inline-flex items-center gap-3 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-1.5 text-body-lg font-semibold text-accent-gold">
                      Red Lady
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-body-xl font-semibold text-white">Boutique Retail Standards</h3>
                      <p className="text-body-sm text-white/80 leading-relaxed">For premium retailers who cannot compromise.</p>
                    </div>
                    <ul className="space-y-2 text-white/80 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-olive-400">•</span>
                        <span>Hand-graded, piece by piece</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive-400">•</span>
                        <span>Brix-tested and lot-traced</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-olive-400">•</span>
                        <span>Shipped only when standards are met</span>
                      </li>
                    </ul>
                    <p className="text-body-xs text-white/60 leading-relaxed">Built for buyers who value precision over volume.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-2xl">
                  <div className="flex h-80 items-center justify-center bg-gradient-to-br from-accent-steel/30 to-accent-steel/5">
                    <div className="relative h-44 w-80 drop-shadow-[0_20px_60px_rgba(118,144,170,0.6)]">
                      <Image src="/images/logos/nutrigo.svg" alt="Nutrigo logo" fill className="object-contain" sizes="320px" />
                    </div>
                  </div>
                  <div className="space-y-5 p-7 lg:p-8">
                    <div className="inline-flex items-center gap-3 rounded-full border border-accent-steel/30 bg-accent-steel/10 px-4 py-1.5 text-body-lg font-semibold text-accent-steel">
                      Nutrigo
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-body-xl font-semibold text-white">Program-Scale Reliability</h3>
                      <p className="text-body-sm text-white/80 leading-relaxed">For wholesalers planning at scale with confidence.</p>
                    </div>
                    <ul className="space-y-2 text-white/80 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-steel">•</span>
                        <span>Consistent grading across volumes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-steel">•</span>
                        <span>Transparent specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-steel">•</span>
                        <span>Predictable, dependable supply</span>
                      </li>
                    </ul>
                    <p className="text-body-xs text-white/60 leading-relaxed">Designed for long-term programs, not spot trading.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RejectionSectionRevamped />

        {/* CTA section */}
        <section className="py-section bg-base-off-black">
          <div className="section-container">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-display-lg text-type-primary mb-6">Ready to establish a partnership?</h2>
              <p className="text-body-lg text-type-secondary max-w-[65ch] mx-auto">We work with 10-15 committed buyers. Not transactional ordering.</p>
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                Request Product Allocation
              </button>
              <p className="text-body-sm text-type-tertiary">Partnership inquiries typically receive response within 48 hours</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
