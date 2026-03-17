import Skeleton from '@/ui/Skeleton'

export default function HeaderSkeleton() {
  return (
    <header aria-hidden="true" className="sticky top-0 z-50 border-b border-border bg-bg/90">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — icon + wordmark */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-sm" />
            <Skeleton className="h-4 w-28" />
          </div>

          {/* Desktop nav — 4 items */}
          <div className="hidden items-center gap-1 md:flex">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="mx-2 h-3 w-16" />
            ))}
          </div>

          {/* Right actions — theme + bell + settings */}
          <div className="flex items-center gap-2">
            <Skeleton className="hidden h-8 w-8 rounded-sm md:block" />
            <Skeleton className="hidden h-8 w-8 rounded-sm md:block" />
            <Skeleton className="hidden h-8 w-8 rounded-sm md:block" />
            {/* Mobile hamburger */}
            <Skeleton className="h-8 w-8 rounded-sm md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
