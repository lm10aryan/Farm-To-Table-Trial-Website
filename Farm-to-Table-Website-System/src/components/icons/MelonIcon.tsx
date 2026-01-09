import type { SVGProps } from 'react'

export function MelonIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="melon-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1f1f1f" />
          <stop offset="100%" stopColor="#040404" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="22" fill="url(#melon-body)" stroke="#050505" strokeWidth="3" />
      <path d="M32 10v44" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 14c8 6 20 6 28 0" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 50c8-6 20-6 28 0" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
