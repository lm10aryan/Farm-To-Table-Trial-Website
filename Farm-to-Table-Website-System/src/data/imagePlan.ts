export type ImageType = 'REAL PHOTO' | 'NANO BANANA' | 'GEN-AI DIAGRAM' | 'NONE'

type SectionImagePlan = {
  section: string
  imageType: ImageType
  purpose: string
  brief: string
  notes: string
  assetFolder: string
  fileName: string
  aspectRatio: string
  minResolution: string
  cropSafeArea: string
  altTextTemplate: string
  fallback: string
}

export const assetFolders = {
  realHome: 'public/images/real/home',
  nanoHome: 'public/images/nano/home',
  nanoProducts: 'public/images/nano/products',
  nanoBrands: 'public/images/nano/brands',
} as const

export const assetNamingRules = [
  'home-hero-01.jpg  // REAL photo, hero proof image',
  'home-process-0X.jpg // REAL photo strip for process timeline',
  'home-proof-packing.jpg // REAL photo for export-ready packing card',
  'home-proof-qc.jpg // REAL photo for QC card',
  'brand-carton-redlady.jpg // REAL photo for Red Lady brand card',
  'brand-carton-nutrigo.jpg // REAL photo for Nutrigo brand card',
  'nano-home-hero-placeholder.png // Nano fallback (if ever needed)',
  'product-card-<slug>.png // Nano Banana product tiles e.g., product-card-pomegranate.png',
  'brand-stamp-<brand>.png // Nano Banana badge e.g., brand-stamp-redlady.png',
]

export const homeImagePlan: SectionImagePlan[] = [
  {
    section: 'Hero',
    imageType: 'REAL PHOTO',
    purpose: 'Show hands-on inspection to prove proximity to work.',
    brief: 'Hands sorting fruit on packhouse table, active inspection moment, natural warehouse light.',
    notes: 'No posing, prefer diagonal composition with produce crates visible.',
    assetFolder: assetFolders.realHome,
    fileName: 'home-hero-01.jpg',
    aspectRatio: '16:10',
    minResolution: '2400x1500px',
    cropSafeArea: 'Keep hands and fruit in center 60% of frame; avoid cropping out tools.',
    altTextTemplate: 'Hands sorting fresh produce on a packhouse table during inspection.',
    fallback: 'Use existing PlaceholderVisual REAL variant with the same label.',
  },
  {
    section: 'Proof of involvement',
    imageType: 'NONE',
    purpose: 'Purely textual; reinforces operational focus.',
    brief: 'No imagery to avoid repeating the involvement narrative.',
    notes: 'If a placeholder is required during dev, reuse Nano blank block.',
    assetFolder: 'N/A',
    fileName: 'N/A',
    aspectRatio: '-',
    minResolution: '-',
    cropSafeArea: '-',
    altTextTemplate: 'None required.',
    fallback: 'Keep Section text-only.',
  },
  {
    section: 'Process snapshot strip',
    imageType: 'REAL PHOTO',
    purpose: 'Show three key interventions visually.',
    brief: 'Shot 1: hands grading fruit; Shot 2: labeling cartons; Shot 3: cold room pallets staging with thermometer.',
    notes: 'Sequence should move left to right in process order.',
    assetFolder: assetFolders.realHome,
    fileName: 'home-process-0#.jpg (01,02,03)',
    aspectRatio: '4:3',
    minResolution: '1600x1200px each',
    cropSafeArea: 'Center 50% must capture action (hands, label, pallets).',
    altTextTemplate: 'Hands [action] while [process detail], e.g., Hands labeling export cartons.',
    fallback: 'PlaceholderVisual REAL variant with labelled description.',
  },
  {
    section: 'Evidence-first – Export-ready packing',
    imageType: 'REAL PHOTO',
    purpose: 'Back rejection stance with actual packing proof.',
    brief: 'Close-up of finished cartons with visible format + inner packing details.',
    notes: 'Include a rejection tag or marker if possible.',
    assetFolder: assetFolders.realHome,
    fileName: 'home-proof-packing.jpg',
    aspectRatio: '4:3',
    minResolution: '2000x1500px',
    cropSafeArea: 'Show carton lip + label area in central band.',
    altTextTemplate: 'Close-up of packed cartons prepared for export.',
    fallback: 'PlaceholderVisual REAL variant with “packed cartons” label.',
  },
  {
    section: 'Evidence-first – Quality checks',
    imageType: 'REAL PHOTO',
    purpose: 'Show QC checklist in use.',
    brief: 'Hand holding QC checklist or logbook with pen, produce visible in background.',
    notes: 'Ensure handwriting legible; avoid blank template.',
    assetFolder: assetFolders.realHome,
    fileName: 'home-proof-qc.jpg',
    aspectRatio: '4:3',
    minResolution: '2000x1500px',
    cropSafeArea: 'Checklist + hand stay within safe zone; background blur acceptable.',
    altTextTemplate: 'QC checklist being reviewed beside packed produce.',
    fallback: 'PlaceholderVisual REAL variant with checklist label.',
  },
  {
    section: 'Product grid',
    imageType: 'NANO BANANA',
    purpose: 'Abstract, consistent representation of risk focus per product.',
    brief: 'Stylized illustrations referencing each product’s operational risk cue (size gauges, ripeness icons).',
    notes: 'Use warm neutral background, subtle drop shadow, consistent framing.',
    assetFolder: assetFolders.nanoProducts,
    fileName: 'product-card-<product>.png',
    aspectRatio: '4:3',
    minResolution: '1600x1200px (exported @2x)',
    cropSafeArea: 'Keep produce centered with 12% padding around edges.',
    altTextTemplate: '<Product> Nano illustration highlighting <risk>.',
    fallback: 'PlaceholderVisual NANO variant with schematic label.',
  },
  {
    section: 'Brands – carton proof',
    imageType: 'REAL PHOTO',
    purpose: 'Show actual branded packaging.',
    brief: 'Carton or label close-up featuring Red Lady Pomo and Nutrigo packaging textures.',
    notes: 'Include edge wear or tape to keep it real; avoid pristine 3D renders.',
    assetFolder: assetFolders.realHome,
    fileName: 'brand-carton-redlady.jpg / brand-carton-nutrigo.jpg',
    aspectRatio: '4:3',
    minResolution: '1800x1350px',
    cropSafeArea: 'Brand text + packing texture must stay in central area; avoid cropping logos.',
    altTextTemplate: 'Close-up of <Brand> export carton and labeling.',
    fallback: 'PlaceholderVisual REAL variant labelled “carton/label close-up”.',
  },
  {
    section: 'Brands – stamp inset',
    imageType: 'NANO BANANA',
    purpose: 'Abstract “standard” badge supporting disciplined system.',
    brief: 'Nano Banana style seal/stamp graphic referencing “Program Standard” concept.',
    notes: 'No certification wording; keep text-free and iconographic.',
    assetFolder: assetFolders.nanoBrands,
    fileName: 'brand-stamp-standard.png',
    aspectRatio: '1:1',
    minResolution: '1200x1200px',
    cropSafeArea: 'Icon should fill 70% of frame; keep circular edges intact.',
    altTextTemplate: 'Stylized badge representing internal program standards.',
    fallback: 'PlaceholderVisual NANO variant labelled “Standard stamp”.',
  },
  {
    section: 'Final CTA',
    imageType: 'NONE',
    purpose: 'Keep the CTA purely typographic.',
    brief: 'No imagery to maintain calm closing tone.',
    notes: 'Rely on typography and spacing only.',
    assetFolder: 'N/A',
    fileName: 'N/A',
    aspectRatio: '-',
    minResolution: '-',
    cropSafeArea: '-',
    altTextTemplate: 'None required.',
    fallback: 'N/A',
  },
]

export const realPhotoShotList = {
  shots: [
    'Hands sorting and inspecting fruit on a packhouse table (wide + close).',
    'QC checklist or logbook held in hand with annotations visible (close-up).',
    'Packing line assembling cartons / inner packing being placed (detail).',
    'Labeling cartons or applying lot codes / inkjet marks (detail).',
    'Cold room or pre-cool area with pallets staged and temperature display (wide).',
    'Dispatch staging bay showing strapped pallets ready for loading (wide, natural light).',
  ],
  mustCapture: [
    'Hands performing the task (no empty scenes).',
    'Real tools: clipboards, tape, pallet jacks, thermometers.',
    'Authentic textures: carton edges, produce skin, floor scuffs.',
  ],
  avoid: [
    'Corporate posing or smiling at camera.',
    'Studio lighting or glossy gradients.',
    'Visible branding unrelated to Farm to Table.',
  ],
  lensAndAngle: [
    'Close focus (50mm equivalent) for hands + tools.',
    'Shallow depth for detail shots; wider 24–28mm for staging areas.',
    'Eye-level or slightly above to keep scene honest.',
  ],
}

export const nanoBananaPrompts: Record<string, { prompt: string; size: string; notes: string }> = {
  pomegranates: {
    prompt:
      'Stylized illustration of two pomegranates, one sliced to show arils, with subtle grading gauges nearby; warm neutral background, slight shadow, no text, no packaging, no watermarks, no people, no country flags.',
    size: '1600x1200px (4:3)',
    notes: 'Emphasize skin texture and internal quality reference.',
  },
  grapes: {
    prompt:
      'Stylized bunch of green table grapes hanging slightly, a few berries highlighted for drop risk; clean warm background, consistent angle, no labels, no packaging, no people, no flags.',
    size: '1600x1200px (4:3)',
    notes: 'Show gentle motion lines or gauges near pedicel.',
  },
  melons: {
    prompt:
      'Two melons with one cut wedge showing flesh, subtle transit timeline icon, warm neutral background, consistent camera angle, no text, no packaging, no people, no flags.',
    size: '1600x1200px (4:3)',
    notes: 'Convey harvest timing vs transit via small iconography.',
  },
  bananas: {
    prompt:
      'Cluster of export bananas on foam padding with ripeness stage markers, stylized, warm neutral background, soft shadow, no packaging, no text, no people, no flags.',
    size: '1600x1200px (4:3)',
    notes: 'Highlight stage control without logos.',
  },
  coconuts: {
    prompt:
      'Pair of coconuts, one husked and one split to show shell thickness, subtle weight scale icon, warm neutral background, no text, no packaging, no people, no flags.',
    size: '1600x1200px (4:3)',
    notes: 'Emphasize shell condition and weight consistency.',
  },
  redOnions: {
    prompt:
      'Stack of red onions with drying nets and curing airflow lines, stylized, warm neutral background, soft drop shadow, no text, no packaging, no people, no flags.',
    size: '1600x1200px (4:3)',
    notes: 'Surface texture + cured skin flakes should be visible.',
  },
  brandStamp: {
    prompt:
      'Minimal circular badge with abstract checkmark + lines, Nano Banana style, warm neutral palette, no words, no certification text.',
    size: '1200x1200px (1:1)',
    notes: 'Used for brand standard inset, keep geometry crisp.',
  },
}

export const imageAcceptanceCriteria = {
  realPhoto: {
    pass: [
      'Hands performing work with authentic tools and materials.',
      'Ambient or natural light with visible texture and mild imperfections.',
      'Action clearly tied to export process (sorting, packing, QC, staging).',
    ],
    fail: [
      'Corporate pose or staged smiles toward camera.',
      'Glossy studio lighting or heavy retouching.',
      'Empty warehouse shots without people doing the work.',
    ],
  },
  nanoBanana: {
    pass: [
      'Consistent camera angle, padding, and background color.',
      'No text, labels, watermarks, or packaging elements.',
      'Subtle shadow + stylized cues referencing operational risks.',
    ],
    fail: [
      'Photorealistic renders that look like stock photos.',
      'Mismatched backgrounds or proportions between products.',
      'Inclusion of people, flags, or marketing slogans.',
    ],
  },
  genAiDiagram: {
    pass: ['Minimal line work, label-light, supportive only if text unclear.'],
    fail: ['Overly complex infographics or anything implying certifications.'],
  },
}
