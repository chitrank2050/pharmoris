import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-100 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent-hover shadow-md',
        secondary:
          'bg-surface border border-line-dim text-secondary hover:bg-surface-raised hover:border-line-dim shadow-sm',
        tertiary:
          'bg-page/50 border border-line-dim text-muted hover:bg-surface hover:text-primary shadow-sm',
        ghost: 'bg-transparent text-muted hover:bg-surface-raised hover:text-primary',
        outline: 'border border-line-dim bg-transparent hover:bg-surface-raised text-secondary',
      },
      size: {
        xs: 'px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider',
        sm: 'px-3.5 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'h-9 w-9 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
