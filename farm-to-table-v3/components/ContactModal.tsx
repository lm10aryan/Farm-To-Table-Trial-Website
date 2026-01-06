'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import { getAllProducts } from '@/data/products'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const products = getAllProducts()
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    message: '',
  })

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleProductToggle = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted:', { ...formData, products: selectedProducts })
    alert('Form submitted! (Backend integration needed)')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-base-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-base-off-black border border-type-tertiary rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-display-md text-type-primary">
                    Request Custom Specifications
                  </h2>
                  <p className="text-body-md text-type-secondary mt-2">
                    Tell us about your requirements and we&apos;ll respond within 48 hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-olive-900/30 rounded-lg transition-colors"
                  aria-label="Close contact modal"
                >
                  <X className="w-6 h-6 text-type-secondary" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body-sm text-type-secondary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm text-type-secondary mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(event) =>
                        setFormData({ ...formData, company: event.target.value })
                      }
                      className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-3">
                    Products Interested In
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {products.map((product) => (
                      <label
                        key={product.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedProducts.includes(product.id)
                            ? 'border-olive-600 bg-olive-900/20'
                            : 'border-type-tertiary hover:border-olive-600/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleProductToggle(product.id)}
                          className="sr-only"
                        />
                        <span className="text-body-sm text-type-primary">{product.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">
                    Volume Requirements
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 10 containers/month"
                    value={formData.volume}
                    onChange={(event) => setFormData({ ...formData, volume: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-sm text-type-secondary mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your specific requirements, destination markets, quality standards, etc."
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    className="w-full px-4 py-3 bg-base-black border border-type-tertiary rounded-lg text-type-primary focus:border-olive-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Request
                </button>

                <p className="text-body-sm text-type-tertiary text-center">
                  Response time: 24-48 hours
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
