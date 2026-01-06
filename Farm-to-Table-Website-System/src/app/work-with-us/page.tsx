'use client'

import { useState } from 'react'

import { ContactModal } from '@/components/ContactModal'

export default function WorkWithUsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-base-black text-type-primary">
        <section className="border-b border-type-tertiary py-24">
          <div className="section-container space-y-6 text-center">
            <h1 className="text-display-xl">
              We Handle the Chaos
              <br />
              So You Don&apos;t Have To
            </h1>
            <p className="text-body-xl text-type-secondary">
              Building reliable sourcing partnerships for premium Indian produce
            </p>
            <p className="mx-auto max-w-3xl text-body-lg text-type-secondary">
              10-15 committed buyers. Seasonal planning. Transparent timelines. No spot orders, no surprises.
            </p>
          </div>
        </section>

        <section className="bg-base-off-black py-16">
          <div className="section-container">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-display-md">How We&apos;re Different</h2>
                <p className="text-body-lg text-type-secondary">Most Indian exporters operate on commission. We built a different model.</p>
              </div>
              <div className="card-base overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="space-y-6 border-type-tertiary p-8 md:border-r">
                    <h3 className="border-type-tertiary border-b pb-4 text-center text-body-xl font-semibold">Typical Exporters</h3>
                    <ul className="space-y-4 text-body-md text-type-secondary">
                      {[
                        'Commission-based (incentivized by volume)',
                        'Quality varies shipment to shipment',
                        'Spot pricing negotiations every order',
                        'Ship anything meeting minimum standards',
                        'Transactional relationships',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-red-400">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6 bg-olive-900/10 p-8">
                    <h3 className="border-b border-olive-600/30 pb-4 text-center text-body-xl font-semibold">Farm to Table</h3>
                    <ul className="space-y-4 text-body-md text-type-secondary">
                      {[
                        'Direct partnerships (incentivized by quality)',
                        '30% rejection rate ensures consistency',
                        'Seasonal planning with fixed rates',
                        'Reject shipments rather than compromise',
                        'Long-term relationship focus',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-olive-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="space-y-3 text-center">
                <h2 className="text-display-md">How It Works</h2>
                <p className="text-body-lg text-type-secondary">Simple partnership process focused on what buyers care about</p>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: 'Trial Container',
                    copy:
                      'Start with a sample shipment at standard pricing. No long-term commitment required. You evaluate quality, documentation, and communication. We evaluate payment reliability and feedback quality. Both sides determine if there&apos;s a fit.',
                  },
                  {
                    title: 'Seasonal Planning',
                    copy:
                      'Once the partnership is established, we plan harvest windows together. You get guaranteed allocation during peak season. We get stable offtake that lets us commit to farmers months in advance. Pricing is set seasonally—no per-container negotiations.',
                  },
                  {
                    title: 'Consistent Partnership',
                    copy:
                      'Weekly quality updates during harvest season. Transparent communication about availability. Consistent execution year after year. Most partnerships naturally continue because the model works—buyers get reliability, farmers get stability, we build trust.',
                  },
                ].map((step, index) => (
                  <div key={step.title} className="card-base p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-olive-600 bg-olive-900/50">
                        <span className="font-mono text-data-lg text-olive-400 font-bold">{index + 1}</span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-body-xl font-semibold">{step.title}</h3>
                        <p className="text-body-md text-type-secondary">{step.copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-off-black py-16">
          <div className="section-container">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-3 text-center">
                <h2 className="text-display-md">Behind the Scenes: How We Source</h2>
                <p className="text-body-lg text-type-secondary">Our procurement team handles the complexity so your supply chain stays simple</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: '🗺️',
                    title: 'Sourcing & Relationships',
                    bullets: [
                      'Partner with growers across Nashik, Maharashtra, and key growing regions',
                      'Years of relationship capital, not transactional spot buying',
                      'Know which farms produce what quality, when',
                    ],
                  },
                  {
                    icon: '✂️',
                    title: 'Harvest & Quality Control',
                    bullets: [
                      'Visual inspection at farm gate',
                      'Internal sampling for hidden defects',
                      'Brix testing and firmness validation',
                      'Strict grading and sorting for export specs',
                    ],
                  },
                  {
                    icon: '📦',
                    title: 'Post-Harvest Operations',
                    bullets: [
                      'Packing with damage prevention protocols',
                      'Pre-cooling and cold storage management',
                      'Container stuffing with temperature monitoring',
                      'Complete export documentation',
                    ],
                  },
                ].map((card) => (
                  <div key={card.title} className="card-base space-y-4 p-8">
                    <div className="text-5xl">{card.icon}</div>
                    <h3 className="text-body-xl font-semibold">{card.title}</h3>
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
              <div className="card-base p-8">
                <p className="text-center text-body-lg text-type-primary">
                  This is standard in Indian exports. What&apos;s different: Our team has done this for years. Same people, not seasonal contractors. We know
                  the farms, we know the seasons, we catch problems early.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-3 text-center">
                <h2 className="text-display-md">Who We Serve Best</h2>
                <p className="text-body-lg text-type-secondary">Our partnership model works particularly well for these buyer types</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: '🏪',
                    title: 'Premium Retailers',
                    copy: 'Specialty grocers and high-end supermarkets who need consistent quality for their produce programs.',
                  },
                  {
                    icon: '🍽️',
                    title: 'Food Service Programs',
                    copy: 'Restaurant groups and hotel chains with predictable volume needs and quality-conscious sourcing.',
                  },
                  {
                    icon: '📦',
                    title: 'Quality-Focused Distributors',
                    copy: 'Wholesalers serving premium segments who value transparent specifications and consistent calibration.',
                  },
                  {
                    icon: '🏭',
                    title: 'Industrial Processors',
                    copy: 'Food manufacturers who need specific Brix ranges, caliber consistency, and reliable supply for production planning.',
                  },
                ].map((card) => (
                  <div key={card.title} className="card-base space-y-4 p-8">
                    <div className="text-5xl">{card.icon}</div>
                    <h3 className="text-body-xl font-semibold">{card.title}</h3>
                    <p className="text-body-md text-type-secondary">{card.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-off-black py-16">
          <div className="section-container">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-3 text-center">
                <h2 className="text-display-md">Start a Conversation</h2>
                <p className="text-body-lg text-type-secondary">Share your sourcing requirements and we&apos;ll respond within 48 hours</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="card-base space-y-4 p-8">
                  <h3 className="text-body-xl font-semibold">Request Partnership Discussion</h3>
                  <p className="text-body-md text-type-secondary">
                    Fill out our form with your requirements and we&apos;ll get back to you within 24-48 hours.
                  </p>
                  <button type="button" onClick={() => setIsContactOpen(true)} className="btn-primary w-full">
                    Open Request Form
                  </button>
                </div>
                <div className="card-base space-y-4 p-8">
                  <h3 className="text-body-xl font-semibold">Prefer Email?</h3>
                  <p className="text-body-md text-type-secondary">Reach out directly and we&apos;ll schedule a discovery call.</p>
                  <a href="mailto:partnerships@farmtotabletrading.com" className="btn-secondary inline-block w-full text-center">
                    partnerships@farmtotabletrading.com
                  </a>
                  <p className="text-body-sm text-type-tertiary">We respond to all partnership inquiries within 48 hours during business days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
