'use client'

import { getAllProducts, ProductSpec, SeasonMonth } from '@/data/products'

const MONTHS: SeasonMonth[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const PRODUCT_EMOJIS: Record<string, string> = {
  'pomo-01': '🍎',
  'banana-01': '🍌',
  'onion-01': '🧅',
  'grape-01': '🍇',
  'coco-01': '🥥',
  'melon-01': '🍈',
}

export function SeasonalCalendar() {
  const products = getAllProducts()

  const monthProducts: Record<SeasonMonth, ProductSpec[]> = MONTHS.reduce((acc, month) => {
    acc[month] = products.filter((product) => product.primarySeason.months.includes(month))
    return acc
  }, {} as Record<SeasonMonth, ProductSpec[]>)

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-display-md text-type-primary">
          Harvest Calendar
        </h2>
        <p className="text-body-md text-type-secondary">
          Peak quality windows for each product
        </p>
      </div>

      <div className="card-base overflow-x-auto">
        <div className="min-w-[600px] p-4">
          <div className="grid grid-cols-12 gap-2">
            {MONTHS.map((month) => (
              <div key={month} className="space-y-2">
                <div className="text-center pb-1 border-b border-type-tertiary">
                  <span className="font-mono text-data-sm text-olive-400">
                    {month.toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  {monthProducts[month].map((product) => (
                    <div
                      key={product.id}
                      className="aspect-square flex items-center justify-center text-xl bg-olive-900/20 rounded border border-olive-600/30"
                      title={product.name}
                    >
                      {PRODUCT_EMOJIS[product.id] || '📦'}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 text-body-sm">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-1.5 text-type-secondary">
            <span className="text-lg">{PRODUCT_EMOJIS[product.id]}</span>
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
