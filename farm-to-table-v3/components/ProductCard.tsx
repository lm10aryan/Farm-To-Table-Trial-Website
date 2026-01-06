'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProductSpec } from '@/data/products'
import Image from 'next/image'

interface ProductCardProps {
  product: ProductSpec
  onClick: (product: ProductSpec) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <motion.div
      className="product-card"
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={product.images.thumbnail}
          alt={product.name}
          fill
          className="product-card-image object-cover"
        />

        {/* Hover Overlay */}
        <motion.div
          className="product-card-overlay"
          initial={{ y: '100%' }}
          animate={{ y: isRevealed ? 0 : '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Technical Data */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-data-sm text-type-secondary">BRIX</span>
              <span className="font-mono text-data-sm text-olive-400">
                {product.brixTarget || 'N/A'}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-mono text-data-sm text-type-secondary">MOQ</span>
              <span className="font-mono text-data-sm text-type-primary">
                {product.moq.value} {product.moq.unit}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-mono text-data-sm text-type-secondary">LEAD</span>
              <span className="font-mono text-data-sm text-type-primary">
                {product.leadTime.value} {product.leadTime.unit}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Info (Always Visible) */}
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-body-xl text-type-primary font-semibold">
            {product.name}
          </h3>

          {/* Season Badge */}
          <span className="badge-technical text-xs">
            {product.primarySeason.description}
          </span>
        </div>

        <p className="text-body-sm text-type-secondary line-clamp-2">
          {product.description.short}
        </p>
      </div>
    </motion.div>
  )
}
