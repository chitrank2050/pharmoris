'use client'

import TableContent from './SupplyTableContent'
import TableSkeleton from './SupplyTableSkeleton'

/**
 * SupplyTable Server-Ready Component
 * Renders the section and handles the suspense boundary for table content.
 */
export default function SupplyTable() {
  return (
    <section aria-label="Medicine supply data" className="mb-12">
      <div className="bg-surface rounded-2xl border border-line shadow-sm overflow-hidden min-h-[600px]">
        <TableContent />
      </div>
    </section>
  )
}
