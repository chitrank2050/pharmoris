'use client'

import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer p-1.5 rounded-full hover:bg-page transition-all">
      <div className="h-8 w-8 rounded-full border border-line overflow-hidden group-hover:border-accent group-hover:shadow-md transition-all shadow-sm">
        <Image
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          alt="User Avatar"
          width={32}
          height={32}
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="hidden md:block">
        <span className="text-sm font-bold text-primary block leading-none">Sarah Chen</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1 block">
          Clinical Lead
        </span>
      </div>
    </div>
  )
}
