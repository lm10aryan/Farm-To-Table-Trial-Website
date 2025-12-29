import { cn } from '@/lib/utils'

type AssuranceLineProps = {
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function AssuranceLine({ align = 'left', className }: AssuranceLineProps) {
  const alignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[align]

  return (
    <div className={cn('flex', alignment, className)} aria-hidden>
      <span className="flex w-20 items-center gap-2">
        <span className="block h-[2px] flex-1 rounded-full bg-text/40" />
        <span className="flex gap-[2px]">
          <span className="h-1 w-1 rounded-sm bg-accent/70" />
          <span className="h-1 w-1 rounded-sm bg-accent/50" />
          <span className="h-1 w-1 rounded-sm bg-accent/30" />
        </span>
      </span>
    </div>
  )
}
