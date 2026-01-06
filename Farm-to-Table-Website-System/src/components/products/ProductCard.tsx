'use client'

import { useState } from 'react'
import Image from 'next/image'

import type { ProductSpec } from '@/data/catalogProducts'

type ProductCardProps = {
  product: ProductSpec
  onClick: (product: ProductSpec) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div
      className="product-card"
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.images.thumbnail}
          alt={product.name}
          fill
          className="product-card-image object-cover"
        />
        <div
          className="product-card-overlay"
          style={{ transform: isRevealed ? 'translateY(0)' : 'translateY(100%)' }}
        >
          <div className="space-y-3 font-mono text-data-sm text-type-secondary">
            <div className="flex justify-between">
              <span>BRIX</span>
              <span className="text-olive-400">{product.brixTarget ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span>MOQ</span>
              <span className="text-type-primary">
                {product.moq.value} {product.moq.unit}
              </span>
            </div>
            <div className="flex justify-between">
              <span>LEAD</span>
              <span className="text-type-primary">
                {product.leadTime.value} {product.leadTime.unit}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-body-xl text-type-primary font-semibold">{product.name}</h3>
          <span className="badge-technical">{product.primarySeason.description}</span>
        </div>
        <p className="text-body-sm text-type-secondary">{product.description.short}</p>
      </div>
    </div>
  )
}
