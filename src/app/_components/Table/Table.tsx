'use client'

import { useState, useMemo, useCallback, memo } from 'react'
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
import {
  staggerContainerVariants,
  slideInLeftVariants,
  hoverSubtle,
  springs,
} from '@/lib/animations'

type SortKey = keyof Pick<
  DrugSupply,
  'drugName' | 'manufacturer' | 'stockStatus' | 'priceChange' | 'lastUpdated'
>
type SortDir = 'asc' | 'desc'

const PAGE_SIZE = 8

const statusConfig: Record<DrugSupply['stockStatus'], string> = {
  'In Stock': 'text-accent bg-accent-dim',
  'Low Stock': 'text-warning bg-warning/10',
  'Out of Stock': 'text-danger bg-danger/10',
}

const columns: { key: SortKey; label: string }[] = [
  { key: 'drugName', label: 'Drug Name' },
  { key: 'manufacturer', label: 'Manufacturer' },
  { key: 'stockStatus', label: 'Stock Status' },
  { key: 'priceChange', label: 'Price Change' },
  { key: 'lastUpdated', label: 'Last Updated' },
]

// Memoised sort icon — transform only
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

// Memoised row — opacity overlay for hover, no bg-color animation
const TableRow = memo(function TableRow({ row, index }: { row: DrugSupply; index: number }) {
  return (
    <motion.tr
      variants={slideInLeftVariants}
      custom={index}
      style={{ willChange: 'transform, opacity', position: 'relative' }}
      className="group border-b border-border-subtle last:border-0"
    >
      {/* GPU hover overlay — opacity only, no paint */}
      <motion.td
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface-raised"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ willChange: 'opacity' }}
      />

      <td className="relative px-4 py-3.5 text-sm text-text-primary">{row.drugName}</td>
      <td className="relative px-4 py-3.5 font-mono text-xs text-text-secondary">
        {row.manufacturer}
      </td>
      <td className="relative px-4 py-3.5">
        <span className={`rounded-sm px-2 py-1 font-mono text-xs ${statusConfig[row.stockStatus]}`}>
          {row.stockStatus}
        </span>
      </td>
      <td className="relative px-4 py-3.5">
        <span
          aria-label={`${row.priceDirection === 'up' ? 'Increased' : row.priceDirection === 'down' ? 'Decreased' : 'Unchanged'} by ${Math.abs(row.priceChange)}%`}
          className={`flex items-center gap-1 font-mono text-xs ${
            row.priceDirection === 'up'
              ? 'text-danger'
              : row.priceDirection === 'down'
                ? 'text-accent'
                : 'text-text-secondary'
          }`}
        >
          {row.priceDirection === 'up' && <TrendingUp className="h-3 w-3" aria-hidden="true" />}
          {row.priceDirection === 'down' && <TrendingDown className="h-3 w-3" aria-hidden="true" />}
          {row.priceDirection === 'stable' && <Minus className="h-3 w-3" aria-hidden="true" />}
          {row.priceChange > 0 ? '+' : ''}
          {row.priceChange}%
        </span>
      </td>
      <td className="relative px-4 py-3.5 font-mono text-xs text-text-muted">
        <time dateTime={row.lastUpdated}>{row.lastUpdated}</time>
      </td>
    </motion.tr>
  )
})

// Memoised pagination button
const PageButton = memo(function PageButton({
  onClick,
  disabled,
  active,
  children,
  ariaLabel,
}: {
  onClick: () => void
  disabled?: boolean
  active?: boolean
  children: React.ReactNode
  ariaLabel: string
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      whileHover={disabled ? {} : { scale: 1.1, transition: springs.snappy }}
      whileTap={disabled ? {} : { scale: 0.9, transition: springs.micro }}
      style={{ willChange: 'transform' }}
      className={`flex h-7 w-7 items-center justify-center rounded-sm border font-mono text-xs outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-30 ${
        active ? 'border-accent/50 bg-accent-dim text-accent' : 'border-border text-text-secondary'
      }`}
    >
      {children}
    </motion.button>
  )
})

export default function SupplyTable() {
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
  const fillerCount = PAGE_SIZE - paginated.length

  return (
    <section aria-label="Medicine supply data" className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-widest text-text-muted" aria-hidden="true">
          MEDICINE SUPPLY
        </p>
        <p className="font-mono text-xs text-text-muted" aria-live="polite">
          {sorted.length} RECORDS
        </p>
      </div>

      <div className="overflow-hidden rounded-sm border border-border bg-surface">
        <div className="overflow-x-auto">
          <table
            role="table"
            aria-label="Medicine supply data table"
            aria-rowcount={sorted.length}
            className="w-full"
          >
            <thead>
              <tr role="row" className="border-b border-border">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    role="columnheader"
                    scope="col"
                    aria-sort={
                      sortKey === col.key
                        ? sortDir === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : 'none'
                    }
                    className="px-4 py-3 text-left"
                  >
                    <motion.button
                      onClick={() => handleSort(col.key)}
                      {...hoverSubtle}
                      style={{ willChange: 'transform' }}
                      className="flex items-center gap-2 font-mono text-xs tracking-widest text-text-secondary outline-none focus-visible:text-accent"
                    >
                      {col.label.toUpperCase()}
                      <SortIcon col={col.key} sortKey={sortKey} sortDir={sortDir} />
                    </motion.button>
                  </th>
                ))}
              </tr>
            </thead>

            <motion.tbody variants={staggerContainerVariants} initial="hidden" animate="visible">
              {paginated.map((row, index) => (
                <TableRow key={row.id} row={row} index={index} />
              ))}

              {/* Filler rows — fixed height on last page */}
              {Array.from({ length: fillerCount }).map((_, i) => (
                <tr
                  key={`filler-${i}`}
                  aria-hidden="true"
                  className="border-b border-border-subtle last:border-0"
                >
                  <td className="px-4 py-3.5" colSpan={5}>
                    <span className="block h-4" />
                  </td>
                </tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav
          aria-label="Table pagination"
          className="flex items-center justify-between border-t border-border px-4 py-3"
        >
          <p className="font-mono text-xs text-text-muted" aria-live="polite" aria-atomic="true">
            PAGE {page + 1} OF {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <PageButton
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              ariaLabel="Previous page"
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            </PageButton>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PageButton
                key={i}
                onClick={() => setPage(i)}
                active={i === page}
                ariaLabel={`Page ${i + 1}`}
              >
                {i + 1}
              </PageButton>
            ))}

            <PageButton
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              ariaLabel="Next page"
            >
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </PageButton>
          </div>
        </nav>
      </div>
    </section>
  )
}
