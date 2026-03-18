'use client'

import dynamic from 'next/dynamic'

import ChartSkeleton from './Skeleton'

const Chart = dynamic(() => import('./Chart'), { ssr: false, loading: () => <ChartSkeleton /> })

export default Chart
