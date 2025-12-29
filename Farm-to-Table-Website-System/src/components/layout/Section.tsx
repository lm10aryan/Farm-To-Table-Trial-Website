import { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionVariant = 'default' | 'muted' | 'surface'
type SectionDensity = 'default' | 'comfortable' | 'compact'
type SectionTone = 'flat' | 'hero' | 'system' | 'authority'

const variantStyles: Record<SectionVariant, string> = {
  default: '',
  muted: 'bg-muted/10',
  surface: 'bg-surface',
}

const densityStyles: Record<SectionDensity, string> = {
  default: 'py-16 sm:py-24',
  comfortable: 'py-12 sm:py-18',
  compact: 'py-8 sm:py-12',
}

type SectionProps<T extends ElementType = 'section'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: SectionVariant
  density?: SectionDensity
  tone?: SectionTone
}

export function Section<T extends ElementType = 'section'>({
  as,
  children,
  className,
  variant = 'default',
  density = 'default',
  tone = 'flat',
}: SectionProps<T>) {
  const Tag = (as || 'section') as ElementType
  return (
    <Tag
      data-tone={tone}
      className={cn('section-shell', densityStyles[density], variantStyles[variant], className)}
    >
      {children}
    </Tag>
  )
}
