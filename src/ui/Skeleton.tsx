import { cn } from '@/lib/utils'

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('relative overflow-hidden rounded-sm bg-surface-raised', className)}
    >
      {/* Shimmer — translateX only, GPU composited */}
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_ease-in-out_infinite]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(232,237,242,0.04) 50%, transparent 100%)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
