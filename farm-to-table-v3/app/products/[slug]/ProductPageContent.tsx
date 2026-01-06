'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ProductSpec } from '@/data/products'

interface ProductPageContentProps {
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
    {
      type: 'video' as const,
      src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Grading+Process+Video',
      alt: 'Grading Process',
    },
    {
      type: 'image' as const,
      src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Farm+Photo+1',
      alt: 'Farm View 1',
    },
    {
      type: 'image' as const,
      src: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Farm+Photo+2',
      alt: 'Farm View 2',
    },
  ]

  const nextMedia = () => setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  const prevMedia = () => setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted:', { ...formData, product: product.name })
    alert('Request submitted! (Backend integration needed)')
  }

  return (
    <div className="min-h-screen bg-base-black">
      <section className="py-16 border-b border-type-tertiary">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-4">
              <div className="relative aspect-[4/3] bg-base-charcoal rounded-lg overflow-hidden">
                <Image src={product.images.hero} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex gap-3 overflow-x-auto">
                <div className="w-20 h-20 bg-base-charcoal rounded border-2 border-olive-600 flex-shrink-0">
                  <Image
                    src={product.images.hero}
                    alt={`${product.name} Thumbnail 1`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-20 h-20 bg-base-charcoal rounded border border-type-tertiary flex-shrink-0">
                  <Image
                    src={product.images.thumbnail}
                    alt={`${product.name} Thumbnail 2`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-display-lg text-type-primary mb-3">{product.name}</h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-900/30 border border-olive-600 rounded-full">
                  <span className="font-mono text-data-md text-olive-400">{product.primarySeason.description}</span>
                </div>
              </div>

              <div className="card-base p-6 space-y-4">
                <h3 className="text-body-lg text-olive-400 font-semibold">Key Specifications</h3>
                <div className="space-y-3 font-mono text-data-md">
                  <div className="flex justify-between pb-2 border-b border-type-tertiary">
                    <span className="text-type-secondary">
                      {product.brixTarget ? 'BRIX' : product.name === 'Red Onion' ? 'CALIBER' : 'GRADE'}
                    </span>
                    <span className="text-olive-400">
                      {product.brixTarget || (product.name === 'Red Onion' ? '55mm+' : 'Premium')}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-type-tertiary">
                    <span className="text-type-secondary">MOQ</span>
                    <span className="text-type-primary">
                      {product.moq.value} {product.moq.unit}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-type-secondary">LEAD TIME</span>
                    <span className="text-type-primary">
                      {product.leadTime.value} {product.leadTime.unit}
                    </span>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full">Request Sample Shipment</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-off-black">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-display-md text-type-primary">Technical Specifications</h2>
              <div className="card-base p-6">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td className="text-type-secondary">Brix Range</td>
                      <td className="text-type-primary">{product.brixTarget || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Defect Tolerance</td>
                      <td className="text-type-primary">
                        {product.defectTolerance.threshold} {product.defectTolerance.type}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Minimum Order Quantity</td>
                      <td className="text-type-primary">
                        {product.moq.value} {product.moq.unit}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Lead Time</td>
                      <td className="text-type-primary">
                        {product.leadTime.value} {product.leadTime.unit}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Temperature Range</td>
                      <td className="text-type-primary">{product.logistics.temperatureRange}</td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Humidity Range</td>
                      <td className="text-type-primary">{product.logistics.humidityRange}</td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Packing Weight</td>
                      <td className="text-type-primary">{product.logistics.packingWeight}</td>
                    </tr>
                    <tr>
                      <td className="text-type-secondary">Shelf Life</td>
                      <td className="text-type-primary">{product.logistics.shelfLife}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-display-md text-type-primary">Product Overview</h2>
              <div className="space-y-4 text-body-lg text-type-secondary">
                <p>{product.description.long}</p>
              </div>

              <div className="card-base p-6 space-y-4">
                <h3 className="text-body-xl text-olive-400 font-semibold">Quality Highlights</h3>
                <ul className="space-y-2 text-body-md text-type-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-1">•</span>
                    <span>Scientific grading with Brix testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-1">•</span>
                    <span>Internal defect screening before loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-1">•</span>
                    <span>Cold chain maintained from farm to port</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-1">•</span>
                    <span>Transparent harvest window tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-display-md text-type-primary">
              How We Grade {product.name}
            </h2>
            <p className="text-body-lg text-type-secondary max-w-3xl mx-auto">
              Every shipment goes through our four-step quality verification process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Visual Inspection', desc: 'External quality check at farm gate' },
              { step: '2', title: 'Internal Sampling', desc: 'Random sample testing for internal defects' },
              { step: '3', title: 'Brix Testing', desc: 'Scientific sweetness verification' },
              { step: '4', title: 'Container Loading', desc: 'Final check before shipment' },
            ].map((item) => (
              <div key={item.step} className="card-base p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center">
                  <span className="font-mono text-data-lg text-olive-400 font-bold">{item.step}</span>
                </div>
                <h3 className="text-body-lg text-type-primary font-semibold">{item.title}</h3>
                <p className="text-body-sm text-type-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-base p-6 space-y-4">
            <h3 className="text-body-xl text-olive-400 font-semibold text-center">
              Process Documentation
            </h3>

            <div className="relative aspect-video bg-base-black rounded-lg overflow-hidden">
              {mediaItems[currentMediaIndex].type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center text-type-secondary">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-body-md">{mediaItems[currentMediaIndex].alt}</p>
                    <p className="text-body-sm mt-2">(Video placeholder - add actual video URL)</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={mediaItems[currentMediaIndex].src}
                  alt={mediaItems[currentMediaIndex].alt}
                  fill
                  className="object-cover"
                />
              )}

              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-base-black/80 hover:bg-base-black rounded-full border border-olive-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-olive-400" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-base-black/80 hover:bg-base-black rounded-full border border-olive-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-olive-400" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMediaIndex ? 'bg-olive-400' : 'bg-type-tertiary hover:bg-type-secondary'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-body-sm text-type-tertiary text-center">
              {currentMediaIndex + 1} / {mediaItems.length} - {mediaItems[currentMediaIndex].alt}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-off-black">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-display-md text-type-primary">Request Product Allocation</h2>
              <p className="text-body-lg text-type-secondary">
                Interested in {product.name}? Tell us about your requirements.
              </p>
            </div>

            <div className="card-base p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body-sm text-type-secondary mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm text-type-secondary mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                      className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">Volume Requirements</label>
                  <input
                    type="text"
                    placeholder="e.g., 5 containers/month"
                    value={formData.volume}
                    onChange={(event) => setFormData({ ...formData, volume: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your specific requirements, destination markets, quality standards, etc."
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Submit Request
                </button>

                <p className="text-body-sm text-type-tertiary text-center">Response time: 24-48 hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
