'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import type { ProductSpec } from '@/data/catalogProducts'

type ProductPageContentProps = {
  product: ProductSpec
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    message: '',
  })

  const mediaItems = [
    { type: 'image' as const, src: product.images.hero, alt: `${product.name} - Product Shot 1` },
    { type: 'image' as const, src: product.images.thumbnail, alt: `${product.name} - Product Shot 2` },
    { type: 'video' as const, src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Grading+Process+Video', alt: 'Grading Process' },
    { type: 'image' as const, src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Farm+Photo+1', alt: 'Farm View 1' },
    { type: 'image' as const, src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Farm+Photo+2', alt: 'Farm View 2' },
  ]

  const nextMedia = () => setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  const prevMedia = () => setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted:', { ...formData, product: product.name })
    alert('Request submitted! (Backend integration needed)')
  }

  return (
    <div className="min-h-screen bg-base-black">
      <section className="border-b border-type-tertiary py-16">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl bg-[#0b0a09]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.images.hero}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h1 className="mb-3 text-display-lg text-type-primary">{product.name}</h1>
                <div className="inline-flex items-center gap-2 rounded-full border border-olive-600 px-4 py-2">
                  <span className="font-mono text-data-md text-olive-400">{product.primarySeason.description}</span>
                </div>
                <p className="mt-4 text-body-md text-type-secondary">{product.description.short}</p>
              </div>
              <div className="card-base space-y-3 p-6">
                <div className="flex items-center justify-between border-b border-type-tertiary pb-3">
                  <span className="text-body-sm text-type-secondary uppercase tracking-wide">
                    {product.brixTarget ? 'Brix' : product.slug === 'red-onion' ? 'Caliber' : 'Grade'}
                  </span>
                  <span className="font-mono text-data-lg text-olive-400">
                    {product.brixTarget ?? (product.slug === 'red-onion' ? '55mm+' : 'Premium')}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-type-tertiary pb-3">
                  <span className="text-body-sm text-type-secondary uppercase tracking-wide">MOQ</span>
                  <span className="font-mono text-data-lg text-type-primary">
                    {product.moq.value} {product.moq.unit}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-type-secondary uppercase tracking-wide">Lead Time</span>
                  <span className="font-mono text-data-lg text-type-primary">
                    {product.leadTime.value} {product.leadTime.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-off-black py-16">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-display-md text-type-primary">Technical Specifications</h2>
              <div className="card-base p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-type-tertiary">
                    {[
                      { label: 'Brix Range', value: product.brixTarget ?? 'N/A' },
                      {
                        label: 'Defect Tolerance',
                        value: `${product.defectTolerance.threshold} ${product.defectTolerance.type}`,
                      },
                      { label: 'Minimum Order', value: `${product.moq.value} ${product.moq.unit}` },
                      { label: 'Lead Time', value: `${product.leadTime.value} ${product.leadTime.unit}` },
                      { label: 'Temperature', value: product.logistics.temperatureRange },
                      { label: 'Humidity', value: product.logistics.humidityRange },
                      { label: 'Packing', value: product.logistics.packingWeight },
                      { label: 'Shelf Life', value: product.logistics.shelfLife },
                    ].map((row) => (
                      <tr key={row.label}>
                        <td className="py-3 text-body-sm text-type-secondary">{row.label}</td>
                        <td className="py-3 text-right font-mono text-body-md text-type-primary">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-display-md text-type-primary">Product Overview</h2>
              <div className="space-y-6">
                <p className="text-body-md text-type-secondary leading-relaxed">{product.description.long}</p>
                <div className="card-base space-y-4 p-6">
                  <h3 className="text-body-lg font-semibold text-olive-400">Quality Standards</h3>
                  <ul className="space-y-3">
                    {[
                      'Scientific grading with Brix testing on every container',
                      'Internal defect screening before cold-chain loading',
                      'Temperature and humidity monitoring from farm to port',
                      'Transparent harvest tracking with week-numbered windows',
                      '30% rejection rate at gate ensures consistent quality',
                      'Dedicated allocation windows during peak season',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-sm text-type-secondary">
                        <span className="mt-0.5 flex-shrink-0 text-olive-400">✓</span>
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
        <div className="section-container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-display-md text-type-primary">How We Grade {product.name}</h2>
            <p className="mx-auto max-w-2xl text-body-md text-type-secondary">
              Every shipment goes through our four-step quality verification process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: '👁️', title: 'Visual Inspection', desc: 'External quality screening at farm gate' },
              { icon: '🔬', title: 'Internal Sampling', desc: 'Random pulp tests for hidden defects' },
              { icon: '📊', title: 'Brix Testing', desc: 'Digital meters log every container' },
              { icon: '📦', title: 'Container Loading', desc: 'Dual loggers for temperature + humidity' },
            ].map((item) => (
              <div key={item.title} className="card-base space-y-4 p-6 text-center">
                <div className="text-5xl">{item.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-body-lg font-semibold text-type-primary">{item.title}</h3>
                  <p className="text-body-sm text-type-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-base space-y-4 p-6">
            <h3 className="text-center text-body-lg font-semibold text-olive-400">Process Documentation</h3>
            <div className="relative overflow-hidden rounded-2xl bg-[#0b0a09]">
              <div className="relative aspect-video w-full">
                {mediaItems[currentMediaIndex].type === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center text-type-secondary">
                    <div className="text-center">
                      <div className="mb-4 text-6xl">▶️</div>
                      <p className="text-body-md">{mediaItems[currentMediaIndex].alt}</p>
                      <p className="mt-2 text-body-sm">(Video placeholder - add actual video URL)</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={mediaItems[currentMediaIndex].src}
                    alt={mediaItems[currentMediaIndex].alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <button
                type="button"
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-olive-600 bg-base-black/80 p-3 transition hover:bg-base-black"
              >
                <ChevronLeft className="h-6 w-6 text-olive-400" />
              </button>
              <button
                type="button"
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-olive-600 bg-base-black/80 p-3 transition hover:bg-base-black"
              >
                <ChevronRight className="h-6 w-6 text-olive-400" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentMediaIndex ? 'bg-olive-400' : 'bg-type-tertiary hover:bg-type-secondary'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center text-body-sm text-type-tertiary">
              {currentMediaIndex + 1} / {mediaItems.length} - {mediaItems[currentMediaIndex].alt}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-off-black py-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-display-md text-type-primary">Request {product.name} Allocation</h2>
              <p className="text-body-md text-type-secondary">
                Share your monthly demand, destination ports, and quality standards. We respond to allocation requests within 48 hours.
              </p>
            </div>
            <div className="card-base p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-body-sm text-type-secondary">
                    <span className="font-semibold text-type-primary">Name *</span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="w-full rounded-lg border border-type-tertiary bg-base-black px-4 py-3 text-type-primary focus:border-olive-600 focus:outline-none"
                    />
                  </label>
                  <label className="space-y-2 text-body-sm text-type-secondary">
                    <span className="font-semibold text-type-primary">Company *</span>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                      className="w-full rounded-lg border border-type-tertiary bg-base-black px-4 py-3 text-type-primary focus:border-olive-600 focus:outline-none"
                    />
                  </label>
                </div>
                <label className="space-y-2 text-body-sm text-type-secondary">
                  <span className="font-semibold text-type-primary">Email *</span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full rounded-lg border border-type-tertiary bg-base-black px-4 py-3 text-type-primary focus:border-olive-600 focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-body-sm text-type-secondary">
                  <span className="font-semibold text-type-primary">Volume Requirements</span>
                  <input
                    type="text"
                    placeholder="e.g., 5 containers/month"
                    value={formData.volume}
                    onChange={(event) => setFormData({ ...formData, volume: event.target.value })}
                    className="w-full rounded-lg border border-type-tertiary bg-base-black px-4 py-3 text-type-primary focus:border-olive-600 focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-body-sm text-type-secondary">
                  <span className="font-semibold text-type-primary">Additional Details</span>
                  <textarea
                    rows={4}
                    placeholder="Certifications, inspection notes, delivery terms..."
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    className="w-full resize-none rounded-lg border border-type-tertiary bg-base-black px-4 py-3 text-type-primary focus:border-olive-600 focus:outline-none"
                  />
                </label>
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Submit Request
                </button>
                <p className="text-center text-body-sm text-type-tertiary">Response in 24-48 hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
