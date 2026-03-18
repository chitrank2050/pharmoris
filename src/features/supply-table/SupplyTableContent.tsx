'use client'

import { useState, useMemo, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpDown, ArrowUp, ArrowDown, Search } from 'lucide-react'
import { DRUG_SUPPLY_DATA } from '@/data/supply'
import type { DrugSupply } from '@/types'
import { staggerContainerVariants, slideInLeftVariants } from '@/lib/animations'
import { cn } from '@/lib/utils'

type SortKey = keyof Pick<
  DrugSupply,
  'drugName' | 'manufacturer' | 'stockStatus' | 'priceChange' | 'lastUpdated'
>
type SortDir = 'asc' | 'desc'

const PAGE_SIZE = 4

const statusConfig: Record<DrugSupply['stockStatus'], string> = {
  'In Stock': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Low Stock': 'text-amber-700 bg-amber-50 border-amber-200',
  'Out of Stock': 'text-rose-700 bg-rose-50 border-rose-200',
}

const columns: { key: SortKey; label: string; align?: 'right' | 'left' }[] = [
  { key: 'drugName', label: 'Drug Name' },
  { key: 'manufacturer', label: 'Manufacturer' },
  { key: 'stockStatus', label: 'Status' },
  { key: 'priceChange', label: 'Price Change' },
  { key: 'lastUpdated', label: 'Last Updated', align: 'right' },
]

const SortIcon = memo(function SortIcon({
  col,
  sortKey,
  sortDir,
}: {
  col: SortKey
  sortKey: SortKey
  sortDir: SortDir
}) {
  if (sortKey !== col) return <ArrowUpDown className="h-3 w-3 opacity-30" aria-hidden="true" />
  return sortDir === 'asc' ? (
    <ArrowUp className="h-3 w-3 text-accent" aria-hidden="true" />
  ) : (
    <ArrowDown className="h-3 w-3 text-accent" aria-hidden="true" />
  )
})

const TableRow = memo(function TableRow({ row, index }: { row: DrugSupply; index: number }) {
  return (
    <motion.tr
      variants={slideInLeftVariants}
      custom={index}
      className="group transition-colors hover:bg-page/50 cursor-pointer"
    >
      <td className="px-8 py-5">
        <span className="font-semibold text-primary block leading-tight">{row.drugName}</span>
        <span className="text-[11px] text-muted font-medium mt-1 block tracking-tight">
          {row.description}
        </span>
      </td>
      <td className="px-8 py-5 text-sm text-secondary font-medium italic">{row.manufacturer}</td>
      <td className="px-8 py-5">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border',
            statusConfig[row.stockStatus]
          )}
        >
          {row.stockStatus}
        </span>
      </td>
      <td className="px-8 py-5 text-sm font-bold text-primary">
        <span className="flex items-center gap-1">
          {row.priceDirection === 'up' && '+'}
          {row.priceChange}%
        </span>
      </td>
      <td className="px-8 py-5 text-right text-xs font-semibold text-muted">{row.lastUpdated}</td>
    </motion.tr>
  )
})

export default function TableContent() {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('drugName')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [page, setPage] = useState(0)

  const handleSort = useCallback((key: SortKey) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
        return prev
      }
      setSortDir('asc')
      setPage(0)
      return key
    })
  }, [])

  const filtered = useMemo(() => {
    return DRUG_SUPPLY_DATA.filter(
      (item) =>
        item.drugName.toLowerCase().includes(search.toLowerCase()) ||
        item.manufacturer.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })
  }, [filtered, sortKey, sortDir])

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const paginated = sorted.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <>
      <div className="p-8 border-b border-line-dim flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-primary">Medicine Supply</h3>
          <p className="text-sm text-muted">
            Live inventory tracking across primary regional distribution hubs.
          </p>
        </div>
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted transition-colors group-focus-within:text-accent" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(0)
            }}
            placeholder="Search drug name..."
            className="pl-11 pr-5 py-2.5 text-sm border border-line rounded-xl w-full sm:w-72 focus:border-accent transition-all outline-none bg-page/50 focus:bg-surface shadow-sm focus:shadow-md"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-page/30">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-8 py-4 text-[11px] font-bold text-muted uppercase tracking-widest',
                    col.align === 'right' && 'text-right'
                  )}
                >
                  <button
                    onClick={() => handleSort(col.key)}
                    className={cn(
                      'flex items-center gap-2 hover:text-primary transition-colors',
                      col.align === 'right' && 'ml-auto'
                    )}
                  >
                    {col.label}
                    <SortIcon col={col.key} sortKey={sortKey} sortDir={sortDir} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <motion.tbody
            key={page + search + sortKey + sortDir}
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-line-dim"
          >
            {paginated.map((row, index) => (
              <TableRow key={row.id} row={row} index={index} />
            ))}
          </motion.tbody>
        </table>
      </div>

      <div className="px-8 py-5 border-t border-line-dim flex items-center justify-between bg-page/10">
        <p className="text-xs font-medium text-muted">
          Showing <span className="font-bold text-primary">{paginated.length}</span> of{' '}
          <span className="font-bold text-primary">{sorted.length.toLocaleString()}</span> medicines
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-line rounded-lg hover:bg-surface text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-line rounded-lg hover:bg-surface text-secondary hover:border-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
