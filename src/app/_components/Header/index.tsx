'use client'

import dynamic from 'next/dynamic'

import HeaderSkeleton from './Skeleton'

const Header = dynamic(() => import('./Header'), { ssr: false, loading: () => <HeaderSkeleton /> })

export default Header
