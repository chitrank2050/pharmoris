import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, icon, ...props }, ref) => {
  return (
    <div className="relative group w-full">
      {icon && (
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-accent flex items-center justify-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        ref={ref}
        className={cn(
          'w-full py-2.5 text-sm border border-line-dim rounded-xl transition-all outline-none bg-page/50 focus:bg-surface shadow-sm focus:shadow-md focus:border-accent',
          icon ? 'pl-11 pr-5' : 'px-4',
          className
        )}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input'

export { Input }
