import Link from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type AnchorLikeProps = {
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonLikeProps = ButtonHTMLAttributes<HTMLButtonElement>

type BaseButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

export type ButtonProps = BaseButtonProps & (AnchorLikeProps | ButtonLikeProps)

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white border border-accent/80 shadow-[0_16px_32px_rgba(160,70,20,0.35)] hover:bg-[#8f3c14] hover:shadow-[0_22px_40px_rgba(160,70,20,0.38)] active:translate-y-0.5',
  secondary:
    'bg-transparent text-text border border-border/80 shadow-none hover:border-text/30 hover:bg-muted/5 active:translate-y-0.5',
  ghost:
    'text-text border border-transparent hover:border-border/60 hover:bg-muted/10 active:bg-muted/20',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-4 py-2 rounded-full',
  md: 'text-sm px-5 py-2.5 rounded-full',
  lg: 'text-base px-6 py-3 rounded-full',
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold transition-all duration-200 tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/50 disabled:cursor-not-allowed disabled:opacity-60'

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const composedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest
    return (
      <Link href={href} className={composedClassName} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  const { type, ...remaining } = buttonProps

  return (
    <button className={composedClassName} type={type ?? 'button'} {...remaining}>
      {children}
    </button>
  )
}
