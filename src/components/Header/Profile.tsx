'use client'

import Image from 'next/image'

export default function Profile() {
  return (
    <div className="hidden items-center gap-3 pl-2 md:flex">
      <div className="text-right">
        <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Dr. Chitrank</p>
        <p className="text-[9px] text-muted uppercase tracking-widest font-700">Administrator</p>
      </div>
      <div className="h-8 w-8 rounded-full border border-border bg-surface-raised overflow-hidden relative">
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
