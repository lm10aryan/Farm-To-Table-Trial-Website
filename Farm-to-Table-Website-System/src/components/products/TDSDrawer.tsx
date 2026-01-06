'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import type { ProductSpec, SeasonMonth } from '@/data/catalogProducts'

type TDSDrawerProps = {
  product: ProductSpec | null
  isOpen: boolean
  onClose: () => void
}

const MONTHS: SeasonMonth[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function TDSDrawer({ product, isOpen, onClose }: TDSDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-base-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto border-l border-type-tertiary bg-base-off-black md:w-[600px]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8 p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-display-md text-type-primary">{product.name}</h2>
                  <p className="mt-2 text-body-lg text-type-secondary">Technical Data Sheet</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 transition-colors hover:bg-olive-900/30"
                  aria-label="Close drawer"
                >
                  <X className="h-6 w-6 text-type-secondary" />
                </button>
              </div>

              <div className="badge-technical">{product.primarySeason.description}</div>

              <div className="space-y-2">
                <h3 className="text-body-xl text-olive-400">Overview</h3>
                <p className="text-body-md text-type-secondary">{product.description.long}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-body-xl text-olive-400">Technical Specifications</h3>
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td className="text-type-secondary">Brix Range</td>
                      <td className="text-type-primary">{product.brixTarget ?? 'N/A'}</td>
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
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="text-body-xl text-olive-400">Logistics & Storage</h3>
                <table className="data-table">
                  <tbody>
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

              <div className="space-y-4">
                <h3 className="text-body-xl text-olive-400">Availability</h3>
                <div className="grid grid-cols-6 gap-2">
                  {MONTHS.map((month) => {
                    const isInSeason = product.primarySeason.months.includes(month)
                    return (
                      <div
                        key={month}
                        className={`rounded p-3 text-center text-data-sm ${
                          isInSeason
                            ? 'border border-olive-600 bg-olive-900/50 text-olive-400'
                            : 'border border-type-tertiary bg-base-black text-type-tertiary'
                        }`}
                      >
                        {month}
                      </div>
                    )
                  })}
                </div>
              </div>

              <button type="button" className="btn-primary w-full">
                Request Allocation
              </button>

              <p className="text-center text-body-sm text-type-tertiary">
                Specifications subject to seasonal variation. Contact for current harvest window.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
