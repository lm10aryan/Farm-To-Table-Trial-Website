'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoVariant = 'full' | 'compact' | 'mark'
type LogoSize = 'xs' | 'sm' | 'md' | 'lg'

const LOGO_SRC = '/images/logos/farm-to-table.png'

const SIZE_MAP: Record<
  LogoSize,
  {
    container: string
    mark: string
    wordmark: string
  }
> = {
  xs: { container: 'px-2 py-2.5', mark: 'h-6', wordmark: 'text-[0.75rem]' },
  sm: { container: 'px-2.5 py-3', mark: 'h-7', wordmark: 'text-[0.85rem]' },
  md: { container: 'px-3 py-3.5', mark: 'h-7', wordmark: 'text-[0.95rem]' },
  lg: { container: 'px-3.5 py-4', mark: 'h-8', wordmark: 'text-[1rem]' },
}

type SiteLogoProps = {
  variant?: LogoVariant
  size?: LogoSize
  className?: string
}

export function SiteLogo({ variant = 'compact', size = 'md', className }: SiteLogoProps) {
  const sizeStyles = SIZE_MAP[size]

  if (variant === 'mark') {
    return (
      <span
        className={cn('inline-flex flex-shrink-0 items-center bg-transparent', sizeStyles.container, 'gap-3', className)}
      >
        <Image
          src={LOGO_SRC}
          alt="Farm to Table mark"
          width={160}
          height={48}
          className={cn(sizeStyles.mark, 'w-auto object-contain')}
        />
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex flex-shrink-0 items-center bg-transparent uppercase tracking-[0.35em] gap-3',
        sizeStyles.container,
        className,
      )}
    >
      <Image
        src={LOGO_SRC}
        alt="Farm to Table logo mark"
        width={200}
        height={60}
        className={cn(sizeStyles.mark, 'w-auto object-contain')}
        priority
      />
      <span className={cn('font-semibold leading-none text-type-primary', sizeStyles.wordmark)}>Farm to Table</span>
    </span>
  )
}
