import { Suspense } from 'react'
import GridContent from './GridContent'
import GridSkeleton from './Skeleton'

export default function KPIGrid() {
  return (
    <section aria-label="Key performance indicators" className="mb-10">
      <Suspense fallback={<GridSkeleton />}>
        <GridContent />
      </Suspense>
    </section>
  )
}
