import Skeleton from '@/components/ui/Skeleton'

export default function GridSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading key performance indicators" className="mb-8">
      {/* Section label */}
      <Skeleton className="mb-4 h-3 w-16" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm border border-line bg-surface p-6"
          >
            {/* Top row — label + icon */}
            <div className="mb-4 flex items-start justify-between">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-7 w-7 rounded-sm" />
            </div>

            {/* Value */}
            <Skeleton className="mb-2 h-8 w-20" />

            {/* Change */}
            <Skeleton className="h-3 w-32" />

            {/* Bottom accent line */}
            <span className="absolute inset-x-0 bottom-0 h-px bg-line" />
          </div>
        ))}
      </div>
    </section>
  )
}
