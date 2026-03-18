import Skeleton from '@/components/ui/Skeleton'

export default function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-surface p-6 rounded-2xl border border-line shadow-sm">
          <div className="flex justify-between items-start mb-5">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-8 w-32 mb-4" />
          <Skeleton className="h-3 w-48" />
        </div>
      ))}
    </div>
  )
}
