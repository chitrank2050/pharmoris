'use client'

import dynamic from 'next/dynamic'

import TableSkeleton from './Skeleton'

const Table = dynamic(() => import('./Table'), { ssr: false, loading: () => <TableSkeleton /> })

export default Table
