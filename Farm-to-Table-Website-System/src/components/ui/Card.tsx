"use client"

import { forwardRef, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type CardProps = {
  interactive?: boolean
} & HTMLAttributes<HTMLDivElement> &
  MotionProps

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, interactive = false, ...rest },
  ref
) {
  const { whileHover: customWhileHover, whileTap: customWhileTap, ...motionRest } = rest
  return (
    <motion.div
      ref={ref}
      className={cn(
        'rounded-[1.5rem] border border-border/70 bg-surface shadow-sm transition-all duration-200',
        interactive && 'cursor-pointer',
        className
      )}
      whileHover={
        interactive
          ? { y: -6, boxShadow: '0 22px 36px rgba(24, 18, 12, 0.15)' }
          : customWhileHover
      }
      whileTap={interactive ? { y: -2 } : customWhileTap}
      {...motionRest}
    >
      {children}
    </motion.div>
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
