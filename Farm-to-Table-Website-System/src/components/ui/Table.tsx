import { HTMLAttributes, TableHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Table({ className, ...rest }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-sm">
      <table className={cn('w-full border-collapse text-sm text-text', className)} {...rest} />
    </div>
  )
}

export function TableHeader({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn('bg-surface-alt text-text uppercase text-[0.65rem] tracking-[0.35em]', className)}
      {...rest}
    />
  )
}

export function TableBody({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('divide-y divide-border/60', className)} {...rest} />
}

export function TableRow({ className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={cn('transition-colors even:bg-surface-alt/40 hover:bg-surface-alt/70', className)} {...rest} />
  )
}

export function TableHead({ className, ...rest }: HTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn('px-4 py-3 text-left font-semibold', className)} {...rest} />
}

export function TableCell({ className, ...rest }: HTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn('px-4 py-3 text-muted', className)} {...rest} />
}
