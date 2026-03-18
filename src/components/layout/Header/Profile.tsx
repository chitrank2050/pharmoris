'use client'

import Image from 'next/image'

export default function Profile() {
  return (
    <div className="hidden items-center gap-3 pl-2 md:flex">
      <div className="text-right">
        <p className="text-xs font-bold text-primary uppercase">Dr. Chitrank</p>
        <p className="text-[10px] tracking-wider text-muted uppercase">Administrator</p>
      </div>
      <div className="h-8 w-8 rounded-full border border-line bg-surface-raised overflow-hidden relative">
        <Image
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          alt="Avatar"
          fill
          unoptimized
          className="object-cover"
        />
      </div>
    </div>
  )
}
