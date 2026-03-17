'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpDown, ArrowUp, ArrowDown, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { DRUG_SUPPLY_DATA } from '@/data/supply'
import type { DrugSupply } from '@/types'

type SortKey = keyof Pick<
  DrugSupply,
  'drugName' | 'manufacturer' | 'stockStatus' | 'priceChange' | 'lastUpdated'
>
type SortDir = 'asc' | 'desc'

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

export default function Table() {
  const [sortKey, setSortKey] = useState<SortKey>('drugName')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
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

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ArrowUpDown className="h-3 w-3 opacity-30" />
    return sortDir === 'asc' ? (
      <ArrowUp className="h-3 w-3 text-[var(--color-accent)" />
    ) : (
      <ArrowDown className="h-3 w-3 text-var(--color-accent)" />
    )
  }

  return (
    <section className="mb-8">
      <p className="mb-4 font-mono text-xs tracking-widest text-text-muted">MEDICINE SUPPLY</p>

      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        {/* Desktop table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 text-left">
                    <button
                      onClick={() => handleSort(col.key)}
                      className="flex items-center gap-2 font-mono text-xs tracking-widest text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {col.label.toUpperCase()}
                      <SortIcon col={col.key} />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, index) => (
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
                      className={`rounded-sm px-2 py-1 font-mono text-xs ${statusConfig[row.stockStatus]}`}
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
