import Skeleton from '@/ui/Skeleton'

export default function TableSkeleton() {
  return (
    <>
      {/* Header Shell */}
      <div className="p-8 border-b border-line-dim flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-10 w-full sm:w-72 rounded-xl" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-page">
              {['w-32', 'w-48', 'w-24', 'w-24', 'w-32'].map((w, i) => (
                <th key={i} className="px-8 py-4">
                  <Skeleton className={`h-3 ${w}`} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line-dim">
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={i}>
                <td className="px-8 py-5">
                  <Skeleton className="h-4 w-40 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </td>
                <td className="px-8 py-5">
                  <Skeleton className="h-4 w-36" />
                </td>
                <td className="px-8 py-5">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>
                <td className="px-8 py-5">
                  <Skeleton className="h-4 w-12" />
                </td>
                <td className="px-8 py-5">
                  <Skeleton className="h-3 w-24 ml-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-5 border-t border-line-dim flex items-center justify-between bg-surface-raised/50">
        <Skeleton className="h-4 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24 rounded-lg" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      </div>
    </>
  )
}
