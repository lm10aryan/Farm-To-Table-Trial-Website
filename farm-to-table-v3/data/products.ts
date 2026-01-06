// ============================================
// TYPE DEFINITIONS
// ============================================

export type ProductID =
  | 'pomo-01'
  | 'banana-01'
  | 'onion-01'
  | 'grape-01'
  | 'coco-01'
  | 'melon-01';

export type SeasonMonth =
  | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun'
  | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export type DefectType = 'Internal' | 'Physical' | 'Skin' | 'Shatter' | 'Crack' | 'Firmness';

export interface ProductSpec {
  id: ProductID;
  name: string;
  slug: string;

  // Technical Specifications
  brixTarget: string | null; // e.g., "14-16°" or null for non-applicable
  defectTolerance: {
    type: DefectType;
    threshold: string; // e.g., "<2%"
  };
  moq: {
    value: number;
    unit: 'Cont.' | 'MT'; // Container or Metric Ton
  };
  leadTime: {
    value: number;
    unit: 'Days';
  };

  // Seasonality
  primarySeason: {
    months: SeasonMonth[];
    description: string; // e.g., "Peak Quality"
  };

  // Brand Assignment
  brands: ('RedLady' | 'Nutrigo')[];

  // Assets
  images: {
    hero: string; // Path to main product image
    thumbnail: string; // Path to card thumbnail
    render3D?: string; // Optional 3D render for animations
  };

  // Marketing Copy
  description: {
    short: string; // One-liner for cards
    long: string; // Full description for detail pages
  };

  // Logistics (for TDS drawer)
  logistics: {
    temperatureRange: string; // e.g., "2-4°C"
    humidityRange: string; // e.g., "85-90%"
    packingWeight: string; // e.g., "10kg/carton"
    shelfLife: string; // e.g., "30 days"
  };
}

// ============================================
// PRODUCT DATA
// ============================================

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
      hero: '/products/pomegranate-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Pomegranate',
      render3D: '/products/pomegranate-3d.png',
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
      hero: '/products/banana-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Banana',
      render3D: '/products/banana-3d.png',
    },
    description: {
      short: 'Class A Grand Naine, consistent caliber, rapid turnover',
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
      hero: '/products/onion-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Red+Onion',
    },
    description: {
      short: '55mm+ caliber, deep purple, high solid content',
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
      value: 18,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr'],
      description: 'Peak Quality',
    },
    brands: ['RedLady', 'Nutrigo'],
    images: {
      hero: '/products/grape-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Grapes',
      render3D: '/products/grape-3d.png',
    },
    description: {
      short: '18°+ Brix, zero berry drop, premium export caliber',
      long: 'Thompson Seedless and Flame varieties. Tested for shatter resistance and uniform sizing. Cold chain maintained from vineyard to port.',
    },
    logistics: {
      temperatureRange: '0-2°C',
      humidityRange: '90-95%',
      packingWeight: '4.5kg/carton',
      shelfLife: '30 days',
    },
  },

  'coco-01': {
    id: 'coco-01',
    name: 'Coconut',
    slug: 'coconut',
    brixTarget: null,
    defectTolerance: {
      type: 'Crack',
      threshold: 'Zero',
    },
    moq: {
      value: 3,
      unit: 'Cont.',
    },
    leadTime: {
      value: 25,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      description: 'Year-Round Availability',
    },
    brands: ['Nutrigo'],
    images: {
      hero: '/products/coconut-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Coconut',
    },
    description: {
      short: 'Fresh grade, zero shell cracks, high water content',
      long: 'Semi-husked coconuts from Kerala coastal farms. Hand-selected for shell integrity and sweetness. Fresh grade ensures maximum water retention.',
    },
    logistics: {
      temperatureRange: '12-15°C',
      humidityRange: '75-80%',
      packingWeight: '12kg/carton (9 coconuts)',
      shelfLife: '45 days',
    },
  },

  'melon-01': {
    id: 'melon-01',
    name: 'Melon',
    slug: 'melon',
    brixTarget: '12°+',
    defectTolerance: {
      type: 'Firmness',
      threshold: '2kg minimum',
    },
    moq: {
      value: 2,
      unit: 'Cont.',
    },
    leadTime: {
      value: 15,
      unit: 'Days',
    },
    primarySeason: {
      months: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
      description: 'Peak Quality',
    },
    brands: ['Nutrigo'],
    images: {
      hero: '/products/melon-hero.jpg',
      thumbnail: 'https://placehold.co/800x600/1A1A1C/6B7A52?text=Melon',
    },
    description: {
      short: '12°+ Brix, firm texture, optimal ripeness window',
      long: 'Honeydew and Cantaloupe varieties. Pressure-tested for firmness. Harvested at optimal maturity for extended shelf life.',
    },
    logistics: {
      temperatureRange: '7-10°C',
      humidityRange: '85-90%',
      packingWeight: '10kg/carton',
      shelfLife: '20 days',
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const getAllProducts = (): ProductSpec[] => {
  return Object.values(PRODUCTS);
};

export const getProductById = (id: ProductID): ProductSpec | undefined => {
  return PRODUCTS[id];
};

export const getProductsByBrand = (brand: 'RedLady' | 'Nutrigo'): ProductSpec[] => {
  return getAllProducts().filter(product => product.brands.includes(brand));
};

export const isInSeason = (product: ProductSpec, currentMonth: SeasonMonth): boolean => {
  return product.primarySeason.months.includes(currentMonth);
};

export const getInSeasonProducts = (currentMonth: SeasonMonth): ProductSpec[] => {
  return getAllProducts().filter(product => isInSeason(product, currentMonth));
};

export const getSeasonStatus = (product: ProductSpec): 'peak' | 'available' | 'limited' | 'unavailable' => {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }) as SeasonMonth;
  const isCurrentlyInSeason = isInSeason(product, currentMonth);

  if (isCurrentlyInSeason) {
    return 'peak';
  }

  return 'available';
};
