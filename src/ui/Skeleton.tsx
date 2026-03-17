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
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_ease-in-out_infinite]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(232,237,242,0.04) 50%, transparent 100%)',
          willChange: 'transform',
          ...style,
        }}
      />
    </div>
  )
}
