export type ProgramType = 'core' | 'seasonal'
export type ShippingMode = 'air' | 'sea'

export type Program = {
  /** slug-safe identifier used for routing */
  id: string
  programType: ProgramType
  productName: string
  originRegion: string
  heroLine: string
  availabilityWindow: string
  formats: string[]
  shippingModes: ShippingMode[]
  gradesOrCalibers: string
  harvestWindow: string
  residueFocus: string
  qcTolerances: string
  seasonLabel?: string
  seasonalPriority?: number
  preferredCalibers?: string
  coldChainNotes?: string
  operationalNotes: string
  orderCTA: string
  // future imagery placeholders
  heroImage?: string
  processImage?: string
  qcImage?: string
}
