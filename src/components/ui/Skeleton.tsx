import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export default function Skeleton({ className, style }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn('relative overflow-hidden rounded-sm bg-surface-raised', className)}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          willChange: 'transform',
          ...style,
        }}
      />
    </div>
  )
}
