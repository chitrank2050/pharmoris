'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { DRUG_SUPPLY_DATA } from '@/data/supply'
import type { DrugSupply } from '@/types'
import { cn } from '@/lib/utils'

type SortKey = keyof Pick<
  DrugSupply,
  'drugName' | 'manufacturer' | 'stockStatus' | 'priceChange' | 'lastUpdated'
>
type SortDir = 'asc' | 'desc'

const PAGE_SIZE = 8

const statusConfig = {
  'In Stock': 'text-[var(--color-accent)] bg-[var(--color-accent-dim)]',
  'Low Stock': 'text-[var(--color-warning)] bg-[var(--color-warning)]/10',
  'Out of Stock': 'text-[var(--color-danger)] bg-[var(--color-danger)]/10',
}

const columns: { key: SortKey; label: string }[] = [
  { key: 'drugName', label: 'Drug Name' },
  { key: 'manufacturer', label: 'Manufacturer' },
  { key: 'stockStatus', label: 'Stock Status' },
  { key: 'priceChange', label: 'Price Change' },
  { key: 'lastUpdated', label: 'Last Updated' },
]

export default function SupplyTable() {
  const [sortKey, setSortKey] = useState<SortKey>('drugName')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [page, setPage] = useState(0)

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(0)
  }

  const sorted = useMemo(() => {
    return [...DRUG_SUPPLY_DATA].sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })
  }, [sortKey, sortDir])

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const paginated = sorted.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ArrowUpDown className="h-3 w-3 opacity-30" />
    return sortDir === 'asc' ? (
      <ArrowUp className="h-3 w-3 text-accent" />
    ) : (
      <ArrowDown className="h-3 w-3 text-accent" />
    )
  }

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-widest text-text-muted">MEDICINE SUPPLY</p>
        <p className="font-mono text-xs text-text-muted">{sorted.length} RECORDS</p>
      </div>

      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort(col.key)}
                      className={cn([
                        'flex items-center gap-2 font-mono text-xs tracking-widest text-text-secondary transition-colors hover:text-text-primary',
                      ])}
                    >
                      {col.label.toUpperCase()}
                      <SortIcon col={col.key} />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="group border-b border-border-subtle transition-colors last:border-0 hover:bg-surface-raised"
                >
                  <td className="px-4 py-3.5 text-sm text-text-primary">{row.drugName}</td>
                  <td className="px-4 py-3.5 font-mono text-xs text-text-secondary">
                    {row.manufacturer}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={cn([
                        'rounded-sm px-2 py-1 font-mono text-xs',
                        statusConfig[row.stockStatus],
                      ])}
                    >
                      {row.stockStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`flex items-center gap-1 font-mono text-xs ${
                        row.priceDirection === 'up'
                          ? 'text-danger'
                          : row.priceDirection === 'down'
                            ? 'text-accent'
                            : 'text-text-secondary'
                      }`}
                    >
                      {row.priceDirection === 'up' && <TrendingUp className="h-3 w-3" />}
                      {row.priceDirection === 'down' && <TrendingDown className="h-3 w-3" />}
                      {row.priceDirection === 'stable' && <Minus className="h-3 w-3" />}
                      {row.priceChange > 0 ? '+' : ''}
                      {row.priceChange}%
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-text-muted">
                    {row.lastUpdated}
                  </td>
                </motion.tr>
              ))}

              {/* Filler rows to maintain height
              {Array.from({ length: PAGE_SIZE - paginated.length + 1 }).map((_, i) => (
                <tr
                  key={`filler-${i}`}
                  className="border-b border-border-subtle last:border-0"
                >
                  <td className="px-4 py-3.5" colSpan={5}>
                    <span className="block h-4" />
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <p className="font-mono text-xs text-text-muted">
            PAGE {page + 1} OF {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-text-secondary transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn([
                  'flex h-7 w-7 items-center justify-center rounded-sm border font-mono text-xs transition-colors',
                  i === page
                    ? 'border-accent/50 bg-accent-dim text-accent'
                    : 'border-border text-text-secondary hover:border-accent/30 hover:text-text-primary',
                ])}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-text-secondary transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
