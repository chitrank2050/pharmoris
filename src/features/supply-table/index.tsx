'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Skeleton from './SupplyTableSkeleton'

const Content = dynamic(() => import('./SupplyTable'), {
  ssr: false,
  loading: () => <Skeleton />,
})

export default function SupplyTableFeature() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Content />
    </Suspense>
  )
}
