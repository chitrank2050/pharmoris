import Skeleton from '@/ui/Skeleton'

export default function TableSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading supply data" className="mb-8">
      {/* Table header skeleton */}
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-16" />
      </div>

      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        <div className="border-b border-border bg-surface-raised px-4 py-3">
          <div className="flex gap-4">
            <Skeleton className="h-3 w-1/4" />
            <Skeleton className="h-3 w-1/4" />
            <Skeleton className="h-3 w-1/4" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
