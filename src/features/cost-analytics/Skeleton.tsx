import Skeleton from '@/components/ui/Skeleton'

export default function ChartSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading chart" className="mb-8">
      {/* Section label */}
      <Skeleton className="mb-4 h-3 w-44" />

      <div className="overflow-hidden rounded-sm border border-line bg-surface">
        {/* Header — mirrors chart header exactly */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-6 py-4">
          {/* Left — latest value + subtitle */}
          <div>
            <Skeleton className="mb-1.5 h-7 w-20" />
            <Skeleton className="h-3 w-40" />
          </div>

          {/* Right — PEAK + GROWTH stats */}
          <div className="flex gap-6">
            <div className="flex flex-col items-end gap-1.5">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </div>

        {/* Chart body — 240px tall matches ResponsiveContainer height */}
        <div className="px-2 py-4">
          <div className="relative h-[300px] w-full overflow-hidden">
            {/* Y axis placeholder */}
            <div className="absolute inset-y-0 left-0 flex w-[52px] flex-col justify-between py-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-2.5 w-10" />
              ))}
            </div>

            {/* Chart area */}
            <div className="absolute inset-y-0 left-[60px] right-0 flex flex-col justify-between py-2">
              {/* Grid lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-px w-full bg-line-dim" />
              ))}
            </div>

            {/* Fake area curve — svg shimmer shape */}
            <div className="absolute bottom-8 left-[60px] right-0 h-[160px]">
              <Skeleton
                className="h-full w-full opacity-40"
                style={{
                  clipPath:
                    'polygon(0 80%, 12% 60%, 25% 70%, 37% 45%, 50% 30%, 62% 15%, 75% 10%, 87% 5%, 100% 8%, 100% 100%, 0 100%)',
                }}
              />
            </div>

            {/* X axis labels */}
            <div className="absolute bottom-0 left-[60px] right-0 flex justify-between">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-2.5 w-6" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
