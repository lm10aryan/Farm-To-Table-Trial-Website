import { cn } from '@/lib/utils'
import { Chip } from './Chip'

const defaultBadges = [
  'Food Safety Program',
  'Residue Monitoring',
  'Traceability',
  'Cold Chain SOP',
]

type ComplianceBadgesProps = {
  badges?: string[]
  className?: string
}

export function ComplianceBadges({ badges = defaultBadges, className }: ComplianceBadgesProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {badges.map((badge) => (
        <Chip key={badge}>{badge}</Chip>
      ))}
    </div>
  )
}
