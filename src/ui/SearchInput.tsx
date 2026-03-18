import { Search } from 'lucide-react'
import { forwardRef } from 'react'
import { Input, InputProps } from './Input'
import { cn } from '@/lib/utils'

const SearchInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      icon={<Search className="w-4 h-4" />}
      className={cn('sm:w-72', className)}
      {...props}
    />
  )
})

SearchInput.displayName = 'SearchInput'

export { SearchInput }
