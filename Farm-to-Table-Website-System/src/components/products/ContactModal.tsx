'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import { getAllCatalogProducts } from '@/data/catalogProducts'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const products = getAllCatalogProducts()
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

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Contact submission', { ...formData, products: selectedProducts })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B7A52]">
                  Request specs
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#2C2416]">
                  Tell us about your requirements
                </h2>
                <p className="mt-2 text-sm text-[#5A4F3D]">
                  We respond to allocation requests within 24-48 hours.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close contact modal"
                className="rounded-full border border-[#E8E5E0] p-2 text-[#5A4F3D] transition hover:bg-[#F6F3EF]"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-[#5A4F3D]">
                  <span className="font-semibold text-[#2C2416]">Name *</span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="w-full rounded-lg border border-[#E8E5E0] px-4 py-2.5 text-sm text-[#2C2416] focus:border-[#6B7A52] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-[#5A4F3D]">
                  <span className="font-semibold text-[#2C2416]">Company *</span>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(event) => handleChange('company', event.target.value)}
                    className="w-full rounded-lg border border-[#E8E5E0] px-4 py-2.5 text-sm text-[#2C2416] focus:border-[#6B7A52] focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-[#5A4F3D]">
                <span className="font-semibold text-[#2C2416]">Email *</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="w-full rounded-lg border border-[#E8E5E0] px-4 py-2.5 text-sm text-[#2C2416] focus:border-[#6B7A52] focus:outline-none"
                />
              </label>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#2C2416]">Products of interest</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {products.map((product) => {
                    const active = selectedProducts.includes(product.id)
                    return (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => toggleProduct(product.id)}
                        className={`rounded-lg border px-4 py-2 text-left text-sm transition ${
                          active
                            ? 'border-[#6B7A52] bg-[#F3F7ED] text-[#2C2416]'
                            : 'border-[#E8E5E0] text-[#5A4F3D] hover:border-[#C4BBAF]'
                        }`}
                      >
                        {product.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              <label className="space-y-2 text-sm text-[#5A4F3D]">
                <span className="font-semibold text-[#2C2416]">Volume requirements</span>
                <input
                  type="text"
                  placeholder="e.g. 5 containers/month"
                  value={formData.volume}
                  onChange={(event) => handleChange('volume', event.target.value)}
                  className="w-full rounded-lg border border-[#E8E5E0] px-4 py-2.5 text-sm text-[#2C2416] focus:border-[#6B7A52] focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-sm text-[#5A4F3D]">
                <span className="font-semibold text-[#2C2416]">Additional details</span>
                <textarea
                  rows={4}
                  placeholder="Let us know about destination markets, quality specs, certifications required, etc."
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="w-full rounded-lg border border-[#E8E5E0] px-4 py-2.5 text-sm text-[#2C2416] focus:border-[#6B7A52] focus:outline-none"
                />
              </label>

              <div className="flex flex-col gap-2 text-sm text-[#5A4F3D] sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#6B7A52] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5A6846] sm:w-auto"
                >
                  Submit Request
                </button>
                <p className="text-center text-xs text-[#A39B8F] sm:text-left">
                  Response time: 24-48 hours
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
