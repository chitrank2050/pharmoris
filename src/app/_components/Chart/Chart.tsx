'use client'

import { memo, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  type TooltipContentProps,
} from 'recharts'
import { COST_SAVINGS_DATA } from '@/data/chart'
import { fadeUpVariants } from '@/lib/animations'
import { tokens } from '@/lib/tokens'

function formatSavings(value: number) {
  if (value >= 1_000_000) return `£${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `£${(value / 1_000).toFixed(0)}K`
  return `£${value}`
}

const ChartTooltip = memo(function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-sm border border-border bg-surface-raised px-3 py-2 shadow-xl">
      <p className="mb-1 text-xs text-muted">{label}</p>
      <p className="font-display text-sm font-700 text-accent">
        {formatSavings(payload[0].value as number)}
      </p>
    </div>
  )
})

const ChartBody = memo(function ChartBody() {
  const tooltipContent = useCallback(
    (props: TooltipContentProps) => <ChartTooltip {...props} />,
    []
  )

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={COST_SAVINGS_DATA} margin={{ top: 10, right: 4, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tokens.colors.accent} stopOpacity={0.25} />
            <stop offset="100%" stopColor={tokens.colors.accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="month"
          tick={{ fill: tokens.colors.textSecondary, fontSize: 10, fontFamily: tokens.fonts.mono }}
          axisLine={false}
          tickLine={false}
          dy={8}
        />
        <YAxis
          tickFormatter={formatSavings}
          tick={{ fill: tokens.colors.textSecondary, fontSize: 10, fontFamily: tokens.fonts.mono }}
          axisLine={false}
          tickLine={false}
          width={52}
        />
        <Tooltip
          content={tooltipContent}
          cursor={{ stroke: tokens.colors.border, strokeWidth: 1 }}
        />
        <Area
          type="monotone"
          dataKey="savings"
          stroke={tokens.colors.accent}
          strokeWidth={1.5}
          fill="url(#savingsGradient)"
          dot={false}
          activeDot={{ r: 4, fill: tokens.colors.accent, stroke: tokens.colors.bg, strokeWidth: 2 }}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
})

export default function CostSavingsChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const peak = Math.max(...COST_SAVINGS_DATA.map((d) => d.savings))
  const latest = COST_SAVINGS_DATA[COST_SAVINGS_DATA.length - 1].savings
  const growth = (
    ((latest - COST_SAVINGS_DATA[0].savings) / COST_SAVINGS_DATA[0].savings) *
    100
  ).toFixed(0)

  return (
    <section aria-label="Cost savings over time chart" className="mb-8">
      <p className="mb-4 text-xs tracking-widest text-muted" aria-hidden="true">
        COST SAVINGS OVER TIME
      </p>

      <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ willChange: 'transform, opacity' }}
        className="overflow-hidden rounded-sm border border-border bg-surface"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-4">
          <div>
            <p className="font-display text-2xl font-700 text-primary">{formatSavings(latest)}</p>
            <p className="mt-0.5 text-xs text-secondary">Latest recorded savings</p>
          </div>
          <div className="flex gap-6">
            <div className="text-right">
              <p className="text-xs text-muted">PEAK</p>
              <p className="mt-0.5 font-display text-sm font-600 text-primary">
                {formatSavings(peak)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted">GROWTH</p>
              <p className="mt-0.5 font-display text-sm font-600 text-accent">+{growth}%</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="px-2 py-4">
          <ChartBody />
        </div>
      </motion.div>
    </section>
  )
}
