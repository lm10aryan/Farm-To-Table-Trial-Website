'use client'

import type { ReactNode } from 'react'

import { PomegranateIcon } from '@/components/icons/PomegranateIcon'
import { MelonIcon } from '@/components/icons/MelonIcon'
import { getAllCatalogProducts, ProductSpec, SeasonMonth } from '@/data/catalogProducts'

const MONTHS: SeasonMonth[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const PRODUCT_ICONS: Record<string, ReactNode> = {
  'pomo-01': <PomegranateIcon className="h-7 w-7" />,
  'banana-01': '🍌',
  'onion-01': '🧅',
  'grape-01': '🍇',
  'coco-01': '🥥',
  'melon-01': <MelonIcon className="h-7 w-7" />,
}

const renderIcon = (icon?: React.ReactNode) => {
  if (!icon) return '📦'
  return typeof icon === 'string' ? <span>{icon}</span> : icon
}

export function SeasonalCalendar() {
  const products = getAllCatalogProducts()

  const monthProducts: Record<SeasonMonth, ProductSpec[]> = MONTHS.reduce(
    (acc, month) => {
      acc[month] = products.filter((product) => product.primarySeason.months.includes(month))
      return acc
    },
    {} as Record<SeasonMonth, ProductSpec[]>,
  )

  return (
    <div className="space-y-6 rounded-3xl border border-[#E8E5E0] bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="text-center space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">Seasonal visibility</p>
        <h2 className="text-3xl font-semibold text-[#2C2416]">Harvest Calendar</h2>
        <p className="text-sm text-[#5A4F3D]">Peak quality windows for each SKU</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-12 gap-2">
            {MONTHS.map((month) => (
              <div key={month} className="space-y-2">
                <div className="text-center text-[11px] font-semibold tracking-[0.2em] text-[#6B7A52]">
                  {month.toUpperCase()}
                </div>
                <div className="space-y-1">
                  {monthProducts[month].map((product) => (
                    <div
                      key={product.id}
                      className="flex aspect-square items-center justify-center rounded-lg border border-[#D9D2C6] bg-[#F8F5F1]"
                      title={product.name}
                    >
                      <span className="text-4xl">{renderIcon(PRODUCT_ICONS[product.id])}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 text-sm text-[#5A4F3D]">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-2 rounded-full border border-[#E8E5E0] px-3 py-1">
            <span className="text-xl">{renderIcon(PRODUCT_ICONS[product.id])}</span>
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
