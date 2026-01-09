'use client'

import Image from 'next/image'
import Link from 'next/link'

import type { ProductSpec } from '@/data/catalogProducts'

type ProductCardProps = {
  product: ProductSpec
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-[28px] border border-[#E4E0D7]/80 bg-gradient-to-b from-[#F9F7F0] to-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-72 w-full overflow-hidden bg-[#171310]">
        <Image
          src={product.images.thumbnail}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
          sizes="(min-width: 1024px) 24rem, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="flex flex-col items-center gap-3 px-8 py-8 text-center">
        <h3 className="text-[1.3rem] font-semibold text-[#2C2416] tracking-tight">{product.name}</h3>
        <p className="text-body-sm text-[#5A4F3D] leading-relaxed">{product.description.short}</p>
        <div className="mt-2 font-semibold text-[#6B7A52]">View product →</div>
      </div>
    </Link>
  )
}
