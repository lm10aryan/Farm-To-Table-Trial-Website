import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type DividerProps = HTMLAttributes<HTMLDivElement>

export function Divider({ className, ...rest }: DividerProps) {
  return <div className={cn('h-px w-full bg-border/70', className)} {...rest} />
}
