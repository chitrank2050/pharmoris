import { Suspense } from 'react'
import CostSavingsChart from './Chart'
import ChartSkeleton from './Skeleton'

export default function ChartSection() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <CostSavingsChart />
    </Suspense>
  )
}
