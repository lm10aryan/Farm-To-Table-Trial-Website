import type { Program } from './types'

/**
 * How to add a new program (SKU)
 * 1) Add a new object to `programs[]`
 * 2) Ensure `id` is slug-safe and matches the URL: /products/{id}
 * 3) Set programType:
 *    - "core" for always-visible hero programs
 *    - "seasonal" for seasonal section (set seasonLabel + seasonalPriority)
 * 4) Fill the spec fields (formats, gradesOrCalibers, harvestWindow, qcTolerances, residueFocus)
 * 5) No other code changes should be required.
 */
export const programs: Program[] = [
  {
    id: 'table-grapes',
    programType: 'core',
    productName: 'Table Grapes',
    originRegion: 'Nasik, India',
    heroLine: 'ARRA / Thompson lot logging.',
    availabilityWindow: 'Dec – Apr',
    formats: ['5kg cartons', '4.5kg punnets'],
    shippingModes: ['air', 'sea'],
    gradesOrCalibers: 'Class I, supermarket spec 18mm+',
    harvestWindow: 'Week 48 – Week 14',
    residueFocus: 'EU MRL compliant, sulphur diaries logged per plot.',
    qcTolerances: '<2% soft berries, color charts filed per batch.',
    preferredCalibers: '18mm+ bunches',
    coldChainNotes: 'Pre-cool to 0.5°C; dual logger on each container.',
    operationalNotes: 'Peak allocations lock 4 weeks prior; QC specs pre-agreed.',
    orderCTA: 'Request allocation plan',
  },
  {
    id: 'pomegranates',
    programType: 'core',
    productName: 'Pomegranates',
    originRegion: 'Nasik, India',
    heroLine: 'Bhagwa pallets with Brix logs.',
    availabilityWindow: 'Aug – Mar',
    formats: ['3.5kg cartons', 'Aril cups (pilot)'],
    shippingModes: ['air', 'sea'],
    gradesOrCalibers: 'Count 9–12 premium',
    harvestWindow: 'Week 32 – Week 10',
    residueFocus: 'Zero carbendazim pledge; third-party swabs archived.',
    qcTolerances: 'Crack tolerance <1%, blush coverage documented per lot.',
    preferredCalibers: '300–450g fruit',
    coldChainNotes: '4°C loading with humidity control packs.',
    operationalNotes: 'Consolidated weeks only; aril LOIs run as fixed lots.',
    orderCTA: 'Request allocation plan',
  },
  {
    id: 'watermelon',
    programType: 'core',
    productName: 'Watermelon',
    originRegion: 'North Maharashtra',
    heroLine: 'Mini seedless lots cut-counted.',
    availabilityWindow: 'Nov – Feb',
    formats: ['Net-wrapped singles', 'Bulk bins'],
    shippingModes: ['sea'],
    gradesOrCalibers: '1.5–2.5kg seedless',
    harvestWindow: 'Week 45 – Week 6',
    residueFocus: 'Low nitrate tunnels with random pulp tests.',
    qcTolerances: 'Sugar 11°Brix+, firmness logs archived.',
    preferredCalibers: '1.5–2.3kg seedless',
    coldChainNotes: 'Load at 10°C; vented cartons for airflow.',
    operationalNotes: 'Three-week lead; vessel consolidation with vented cartons.',
    orderCTA: 'Block export slots',
  },
  {
    id: 'guava',
    programType: 'seasonal',
    productName: 'Guava',
    originRegion: 'Western Maharashtra',
    heroLine: 'Pink guava staging cells.',
    availabilityWindow: 'Aug – Nov',
    formats: ['2kg trays', 'Loose cartons'],
    shippingModes: ['air'],
    gradesOrCalibers: 'Count 12–18 ripeness-controlled',
    harvestWindow: 'Week 32 – Week 46',
    residueFocus: 'Pesticide-lite orchards monitored weekly.',
    qcTolerances: 'Ripeness tolerance ±1 stage; bruise logs maintained.',
    preferredCalibers: '180–250g fruit',
    coldChainNotes: 'Load at 8°C with breathable liners.',
    seasonLabel: 'AUG – NOV',
    seasonalPriority: 1,
    operationalNotes: 'Sample-driven; staging rooms reserved per cycle.',
    orderCTA: 'Request allocation plan',
  },
  {
    id: 'dragon-fruit',
    programType: 'seasonal',
    productName: 'Dragon Fruit',
    originRegion: 'South Gujarat',
    heroLine: 'Dragon fruit graded via refractometer logs.',
    availabilityWindow: 'May – Sep',
    formats: ['4kg cartons'],
    shippingModes: ['air'],
    gradesOrCalibers: 'Count 8–12 premium',
    harvestWindow: 'Week 20 – Week 36',
    residueFocus: 'Foliar program built around low-residue inputs.',
    qcTolerances: 'Color 4+ on internal scale; dryness tolerance <2%.',
    preferredCalibers: '350–550g fruit',
    coldChainNotes: 'Load at 7°C; avoid condensation via liners.',
    seasonLabel: 'MAY – SEP',
    seasonalPriority: 2,
    operationalNotes: 'Promotional windows only; air freight aligned one week prior.',
    orderCTA: 'Request allocation plan',
  },
  {
    id: 'custard-apple',
    programType: 'seasonal',
    productName: 'Custard Apple',
    originRegion: 'Nasik clusters',
    heroLine: 'Soft fruit routed via ripening cells.',
    availabilityWindow: 'Dec – Jan',
    formats: ['Foam trays'],
    shippingModes: ['air'],
    gradesOrCalibers: 'Large 8–10 count',
    harvestWindow: 'Week 48 – Week 2',
    residueFocus: 'Organic-compliant sprays only.',
    qcTolerances: 'Handled with foam nets; bruise <1%.',
    preferredCalibers: '200–260g fruit',
    coldChainNotes: 'Load at 13°C; ripening rooms pre-booked.',
    seasonLabel: 'DEC – JAN',
    seasonalPriority: 3,
    operationalNotes: 'Weekly air blocks; ripening cells assigned per buyer.',
    orderCTA: 'Block export slots',
  },
]

export function getCorePrograms() {
  return programs.filter((program) => program.programType === 'core')
}

export function getSeasonalPrograms() {
  return programs
    .filter((program) => program.programType === 'seasonal')
    .sort((a, b) => (a.seasonalPriority ?? 0) - (b.seasonalPriority ?? 0))
}

export function getCatalogPrograms() {
  return programs
}

export function getProgramById(id: string) {
  return programs.find((program) => program.id === id)
}
