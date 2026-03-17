import Skeleton from '@/ui/Skeleton'

// Match exact column proportions from real table
const colWidths = ['w-36', 'w-44', 'w-24', 'w-20', 'w-28']
const rowWidths = [
  ['w-32', 'w-40', 'w-16', 'w-14', 'w-24'],
  ['w-40', 'w-44', 'w-20', 'w-16', 'w-20'],
  ['w-28', 'w-36', 'w-16', 'w-12', 'w-24'],
  ['w-36', 'w-40', 'w-24', 'w-14', 'w-20'],
  ['w-44', 'w-36', 'w-20', 'w-16', 'w-24'],
  ['w-32', 'w-44', 'w-16', 'w-12', 'w-20'],
  ['w-40', 'w-40', 'w-24', 'w-14', 'w-24'],
  ['w-28', 'w-36', 'w-20', 'w-16', 'w-20'],
]

export default function TableSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading medicine supply data" className="mb-8">
      {/* Section header — label + record count */}
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>

      <div className="overflow-hidden rounded-sm border border-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full" aria-hidden="true">
            {/* Header — matches sort button layout */}
            <thead>
              <tr className="border-b border-line">
                {colWidths.map((w, i) => (
                  <th key={i} className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Skeleton className={`h-3 ${w}`} />
                      {/* Sort icon placeholder */}
                      <Skeleton className="h-3 w-3 shrink-0" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows — 8 to match PAGE_SIZE */}
            <tbody>
              {rowWidths.map((cols, i) => (
                <tr key={i} className="border-b border-line-dim last:border-0">
                  {/* Drug name */}
                  <td className="px-4 py-3.5">
                    <Skeleton className={`h-3.5 ${cols[0]}`} />
                  </td>
                  {/* Manufacturer */}
                  <td className="px-4 py-3.5">
                    <Skeleton className={`h-3 ${cols[1]}`} />
                  </td>
                  {/* Status badge — matches rounded-sm px-2 py-1 */}
                  <td className="px-4 py-3.5">
                    <Skeleton className={`h-5 ${cols[2]} rounded-sm`} />
                  </td>
                  {/* Price change */}
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1">
                      <Skeleton className="h-3 w-3 shrink-0" />
                      <Skeleton className={`h-3 ${cols[3]}`} />
                    </div>
                  </td>
                  {/* Last updated */}
                  <td className="px-4 py-3.5">
                    <Skeleton className={`h-3 ${cols[4]}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination footer — matches exact layout */}
        <div className="flex items-center justify-between border-t border-line px-4 py-3">
          {/* PAGE X OF Y */}
          <Skeleton className="h-3 w-24" />

          {/* Page buttons — prev + 2 pages + next = 4 buttons */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-7 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
