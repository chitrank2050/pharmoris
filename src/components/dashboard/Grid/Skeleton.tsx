import Skeleton from '@/components/ui/Skeleton'

export default function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
          <Skeleton className="h-3 w-32 mb-2" />
          <Skeleton className="h-8 w-24 mb-4" />
          <div className="flex items-center gap-1.5 mt-4">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      ))}
    </div>
  )
}
