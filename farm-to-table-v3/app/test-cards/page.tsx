'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { TDSDrawer } from '@/components/TDSDrawer'
import { getAllProducts, ProductSpec } from '@/data/products'

export default function TestCardsPage() {
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

  return (
    <>
      <div className="min-h-screen bg-base-black p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-display-lg text-type-primary">
              Product Cards + TDS Drawer Test
            </h1>
            <p className="text-body-lg text-type-secondary">
              Phase 3 + 4: Click any card to open Technical Data Sheet
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleCardClick}
              />
            ))}
          </div>

          {/* Instructions */}
          <div className="card-base p-8 space-y-4 border-olive-600">
            <h3 className="text-body-xl text-olive-400">Test Checklist:</h3>
            <ul className="text-body-sm text-type-secondary space-y-2 list-disc list-inside">
              <li>Click any card - drawer should slide in from right</li>
              <li>ESC key closes drawer</li>
              <li>Clicking backdrop (dark overlay) closes drawer</li>
              <li>Body scroll is locked when drawer is open</li>
              <li>All technical data displays correctly in tables</li>
              <li>Season timeline shows highlighted months</li>
              <li>On mobile, drawer is full width</li>
            </ul>
          </div>
        </div>
      </div>

      <TDSDrawer
        product={selectedProduct}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </>
  )
}
