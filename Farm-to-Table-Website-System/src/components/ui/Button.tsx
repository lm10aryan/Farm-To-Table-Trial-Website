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
  loading?: boolean
}

export type ButtonProps = BaseButtonProps & (AnchorLikeProps | ButtonLikeProps)

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-olive)] text-white border border-[var(--color-olive)]/80 shadow-[0_16px_32px_rgba(135,153,41,0.35)] hover:bg-[#6d7a21] hover:shadow-[0_22px_40px_rgba(135,153,41,0.38)] active:translate-y-0.5',
  secondary:
    'bg-[var(--color-light-gray)] text-[var(--color-dark-text)] border border-[var(--color-border-light)]/80 shadow-none hover:border-[var(--color-dark-text)]/30 hover:bg-[var(--color-border-light)] active:translate-y-0.5',
  ghost:
    'bg-transparent text-[var(--color-olive)] border border-transparent hover:border-[var(--color-border-light)]/60 hover:bg-[var(--color-light-gray)] active:bg-[var(--color-border-light)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-4 py-2 rounded-full',
  md: 'text-sm px-5 py-2.5 rounded-full',
  lg: 'text-base px-6 py-3 rounded-full',
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold transition-all duration-200 tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-olive)]/50 disabled:cursor-not-allowed disabled:opacity-60'

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 mr-2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, loading = false, ...rest } = props
  const composedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest
    return (
      <Link href={href} className={composedClassName} {...anchorProps}>
        {loading && <LoadingSpinner />}
        {children}
      </Link>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  const { type, disabled, ...remaining } = buttonProps

  return (
    <button
      className={composedClassName}
      type={type ?? 'button'}
      disabled={loading || disabled}
      {...remaining}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  )
}
