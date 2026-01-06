export type ProductID =
  | 'pomo-01'
  | 'banana-01'
  | 'onion-01'
  | 'grape-01'
  | 'coco-01'
  | 'melon-01'

export type SeasonMonth =
  | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun'
  | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

export type DefectType = 'Internal' | 'Physical' | 'Skin' | 'Shatter' | 'Crack' | 'Firmness'

export interface ProductSpec {
  id: ProductID
  name: string
  slug: string
  brixTarget: string | null
  defectTolerance: {
    type: DefectType
    threshold: string
  }
  moq: {
    value: number
    unit: 'Cont.' | 'MT'
  }
  leadTime: {
    value: number
    unit: 'Days'
  }
  primarySeason: {
    months: SeasonMonth[]
    description: string
  }
  brands: ('RedLady' | 'Nutrigo')[]
  images: {
    hero: string
    thumbnail: string
    render3D?: string
  }
  description: {
    short: string
    long: string
  }
  logistics: {
    temperatureRange: string
    humidityRange: string
    packingWeight: string
    shelfLife: string
  }
}

export const PRODUCTS: Record<ProductID, ProductSpec> = {
  'pomo-01': {
    id: 'pomo-01',
    name: 'Pomegranate',
    slug: 'pomegranate',
    brixTarget: '14-16°',
    defectTolerance: {
      type: 'Internal',
      threshold: '<2%',
    },
    moq: {
      value: 2,
      unit: 'Cont.',
    },
    leadTime: {
      value: 21,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      description: 'Peak Quality',
    },
    brands: ['RedLady', 'Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Pomegranate+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Pomegranate',
      render3D: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Pomegranate+3D',
    },
    description: {
      short: 'Ruby arils, 14-16° Brix, zero internal defects',
      long: 'Premium Bhagwa variety from Maharashtra. Rigorous internal inspection ensures consistent sweetness and zero browning.',
    },
    logistics: {
      temperatureRange: '2-4°C',
      humidityRange: '85-90%',
      packingWeight: '4.5kg/carton',
      shelfLife: '45 days',
    },
  },
  'banana-01': {
    id: 'banana-01',
    name: 'Banana',
    slug: 'banana',
    brixTarget: null,
    defectTolerance: {
      type: 'Physical',
      threshold: '<1%',
    },
    moq: {
      value: 1,
      unit: 'Cont.',
    },
    leadTime: {
      value: 14,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      description: 'Year-Round Availability',
    },
    brands: ['Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Banana+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Banana',
      render3D: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Banana+3D',
    },
    description: {
      short: 'Controlled ripening ensures optimal eating window at destination',
      long: 'Sourced from high-altitude farms in Tamil Nadu. Controlled ripening chambers ensure optimal eating window at destination.',
    },
    logistics: {
      temperatureRange: '13-14°C',
      humidityRange: '90-95%',
      packingWeight: '13kg/carton',
      shelfLife: '21 days',
    },
  },
  'onion-01': {
    id: 'onion-01',
    name: 'Red Onion',
    slug: 'red-onion',
    brixTarget: null,
    defectTolerance: {
      type: 'Skin',
      threshold: '<3%',
    },
    moq: {
      value: 5,
      unit: 'Cont.',
    },
    leadTime: {
      value: 10,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      description: 'Prime Season',
    },
    brands: ['Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Red+Onion+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Red+Onion',
    },
    description: {
      short: 'Deep purple arils, extended shelf life, premium export caliber',
      long: 'Nashik red onions renowned for pungency and storage stability. Ideal for industrial processing and retail.',
    },
    logistics: {
      temperatureRange: 'Ambient',
      humidityRange: '65-70%',
      packingWeight: '25kg/mesh bag',
      shelfLife: '90 days',
    },
  },
  'grape-01': {
    id: 'grape-01',
    name: 'Grapes',
    slug: 'grapes',
    brixTarget: '18°+',
    defectTolerance: {
      type: 'Shatter',
      threshold: 'Zero',
    },
    moq: {
      value: 2,
      unit: 'Cont.',
    },
    leadTime: {
      value: 21,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      description: 'Export Window',
    },
    brands: ['RedLady', 'Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Grapes+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Grapes',
    },
    description: {
      short: 'Zero berry drop, premium export caliber, shatter-proof handling',
      long: 'Grown in Nasik under tightly managed QA protocols. Dual loggers in every container for temperature and humidity tracking.',
    },
    logistics: {
      temperatureRange: '0-1°C',
      humidityRange: '90-95%',
      packingWeight: '4.5kg/carton',
      shelfLife: '35 days',
    },
  },
  'coco-01': {
    id: 'coco-01',
    name: 'Coconut',
    slug: 'coconut',
    brixTarget: null,
    defectTolerance: {
      type: 'Crack',
      threshold: '<1%',
    },
    moq: {
      value: 3,
      unit: 'Cont.',
    },
    leadTime: {
      value: 18,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      description: 'Steady Output',
    },
    brands: ['Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Coconut+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Coconut',
    },
    description: {
      short: 'Fresh grade, zero shell cracks, high water content for premium buyers',
      long: 'Kerala-grown coconuts packed in ventilated HDPE bags. Each shipment receives moisture and weight logging before dispatch.',
    },
    logistics: {
      temperatureRange: '12-14°C',
      humidityRange: '85-90%',
      packingWeight: '20kg/sack',
      shelfLife: '30 days',
    },
  },
  'melon-01': {
    id: 'melon-01',
    name: 'Melon',
    slug: 'melon',
    brixTarget: '14-16°',
    defectTolerance: {
      type: 'Firmness',
      threshold: '<3%',
    },
    moq: {
      value: 3,
      unit: 'Cont.',
    },
    leadTime: {
      value: 24,
      unit: 'Days',
    },
    primarySeason: {
      months: ['May', 'Jun', 'Jul', 'Aug'],
      description: 'Summer Window',
    },
    brands: ['Nutrigo'],
    images: {
      hero: 'https://placehold.co/1600x1200/1A1A1C/6B7A52?text=Melon+Hero',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Melon',
    },
    description: {
      short: 'Firm texture, optimal ripeness window, consistent netting and sweetness',
      long: 'South Gujarat melons with pulp sampling per lot. Packed in ventilated cartons with desiccants for long-haul sea freight.',
    },
    logistics: {
      temperatureRange: '7-10°C',
      humidityRange: '85-90%',
      packingWeight: '10kg/carton',
      shelfLife: '25 days',
    },
  },
}

export const getAllCatalogProducts = (): ProductSpec[] => {
  return Object.values(PRODUCTS)
}

export const getProductBySlug = (slug: string): ProductSpec | undefined => {
  return getAllCatalogProducts().find((product) => product.slug === slug)
}

export const getProductsByBrand = (brand: 'RedLady' | 'Nutrigo'): ProductSpec[] => {
  return getAllCatalogProducts().filter((product) => product.brands.includes(brand))
}

export const isInSeason = (product: ProductSpec, month: SeasonMonth): boolean => {
  return product.primarySeason.months.includes(month)
}

export const getSeasonStatus = (product: ProductSpec, month: SeasonMonth): 'peak' | 'off' => {
  return isInSeason(product, month) ? 'peak' : 'off'
}
