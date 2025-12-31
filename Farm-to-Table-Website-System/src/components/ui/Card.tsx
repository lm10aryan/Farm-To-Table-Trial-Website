"use client"

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type CardProps = {
  interactive?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, interactive = false, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg transition-all duration-300',
        interactive && 'cursor-pointer hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('p-6 pb-0', className)} {...rest} />
  }
)

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardContent({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('p-6', className)} {...rest} />
  }
)

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardFooter({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('px-6 pb-6 pt-0', className)} {...rest} />
  }
)
