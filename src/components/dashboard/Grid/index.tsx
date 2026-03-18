'use client'

import dynamic from 'next/dynamic'

import GridSkeleton from './Skeleton'

const Grid = dynamic(() => import('./Grid'), { ssr: false, loading: () => <GridSkeleton /> })

export default Grid
