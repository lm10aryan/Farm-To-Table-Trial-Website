import { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ChipVariant = 'subtle' | 'outline'

type ChipProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  icon?: ReactNode
  className?: string
  variant?: ChipVariant
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const variantStyles: Record<ChipVariant, string> = {
  subtle: 'bg-surface text-muted border border-border/70',
  outline: 'bg-transparent text-text border border-text/20',
}

export function Chip<T extends ElementType = 'span'>({
  as,
  children,
  icon,
  className,
  variant = 'subtle',
  ...rest
}: ChipProps<T>) {
  const Tag = (as || 'span') as ElementType
  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-200 hover:border-accent/60 hover:bg-accent/5 hover:text-text',
        variantStyles[variant],
        className
      )}
      {...rest}
    >
      {icon && <span className="text-xs">{icon}</span>}
      {children}
    </Tag>
  )
}
