'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SiteLogo } from '@/components/SiteLogo'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  logoVariant?: 'full' | 'compact' | 'mark'
  logoSize?: 'xs' | 'sm'
  className?: string
  actions?: ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  logoVariant,
  logoSize = 'xs',
  className,
  actions,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {logoVariant && (
        <div className={cn(align === 'center' ? 'flex justify-center' : '')}>
          <SectionLogoSlot variant={logoVariant} size={logoSize} />
        </div>
      )}
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{eyebrow}</p>
      )}
      <div className={cn('space-y-3', align === 'center' && 'mx-auto max-w-3xl')}>
        <h2 className="text-display-md text-type-primary">{title}</h2>
        {description && (
          <p className="text-body-lg leading-relaxed text-type-secondary">{description}</p>
        )}
      </div>
      {actions && <div className={cn(align === 'center' ? 'flex justify-center' : '')}>{actions}</div>}
    </div>
  )
}

function SectionLogoSlot({ variant, size }: { variant: 'full' | 'compact' | 'mark'; size: 'xs' | 'sm' }) {
  return <SiteLogo variant={variant} size={size} />
}
