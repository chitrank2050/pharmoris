import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'raised' | 'transparent'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border border-line-dim shadow-sm transition-all',
          variant === 'default' && 'bg-surface p-8',
          variant === 'raised' && 'bg-surface-raised p-8',
          variant === 'transparent' && 'bg-transparent p-0 border-none shadow-none',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }
