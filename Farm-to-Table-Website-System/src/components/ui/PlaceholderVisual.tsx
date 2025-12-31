import { cn } from '@/lib/utils'

type PlaceholderVisualProps = {
  label: string
  variant: 'real' | 'nano'
  aspect?: '16:10' | '4:3' | '3:2' | 'square'
  className?: string
}

const aspectMap: Record<NonNullable<PlaceholderVisualProps['aspect']>, string> = {
  '16:10': 'aspect-[16/10]',
  '4:3': 'aspect-[4/3]',
  '3:2': 'aspect-[3/2]',
  square: 'aspect-square',
}

const variantStyles: Record<PlaceholderVisualProps['variant'], string> = {
  real: 'bg-[rgba(96,71,47,0.08)] border-[rgba(96,71,47,0.25)] text-[#5c4632]',
  nano: 'bg-[rgba(52,66,94,0.08)] border-[rgba(52,66,94,0.25)] text-[#394662]',
}

export function PlaceholderVisual({ label, variant, aspect = '4:3', className }: PlaceholderVisualProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border px-4 py-5 shadow-[0_20px_45px_rgba(18,14,10,0.12)] backdrop-blur-sm',
        variantStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-2xl border border-dashed border-current/40 bg-white/30 text-center text-xs font-semibold uppercase tracking-wide text-current',
          aspectMap[aspect]
        )}
      >
        <span className="px-6 text-[0.8rem] leading-relaxed text-current/90">{label}</span>
      </div>
    </div>
  )
}
