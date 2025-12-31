'use client'

import { ElementType, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

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
  animated?: boolean
}

export function Section<T extends ElementType = 'section'>({
  as,
  children,
  className,
  variant = 'default',
  density = 'default',
  tone = 'flat',
  animated = true,
}: SectionProps<T>) {
  const { ref, isInView } = useInView()
  const Tag = (as || 'section') as ElementType

  if (!animated) {
    return (
      <Tag
        data-tone={tone}
        className={cn('section-shell', densityStyles[density], variantStyles[variant], className)}
      >
        {children}
      </Tag>
    )
  }

  return (
    <motion.section
      ref={ref}
      data-tone={tone}
      className={cn('section-shell', densityStyles[density], variantStyles[variant], className)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
