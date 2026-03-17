'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import type { KPICard } from '@/types'
import { cn } from '@/lib/utils'

interface Props {
  card: KPICard
  index: number
}

const directionConfig = {
  up: {
    icon: TrendingUp,
    color: 'text-[var(--color-accent)]',
    bg: 'bg-[var(--color-accent-dim)]',
  },
  down: {
    icon: TrendingDown,
    color: 'text-[var(--color-danger)]',
    bg: 'bg-[var(--color-danger)]/10',
  },
  stable: {
    icon: Minus,
    color: 'text-[var(--color-text-secondary)]',
    bg: 'bg-[var(--color-surface-raised)]',
  },
}

export default function Card({ card, index }: Props) {
  const { icon: Icon, color, bg } = directionConfig[card.direction]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-sm border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-surface-raised"
    >
      {/* Top row */}
      <div className="mb-4 flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-text-secondary">
          {card.label.toUpperCase()}
        </span>
        <div className={cn(['flex h-7 w-7 items-center justify-center rounded-sm', bg])}>
          <Icon className={cn(['h-3.5 w-3.5', color])} strokeWidth={2.5} />
        </div>
      </div>

      {/* Value */}
      <p className="mb-2 font-display text-3xl font-800 tracking-tight text-text-primary">
        {card.value}
      </p>

      {/* Change */}
      <p className={cn(['font-mono text-xs', color])}>{card.change}</p>

      {/* Bottom accent line — reveals on hover */}
      <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  )
}
