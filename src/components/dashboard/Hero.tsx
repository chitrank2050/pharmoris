import { Download, PlusCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      id="hero-section"
    >
      <div id="hero-text-animate">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Overview</h1>
        <p className="text-muted mt-1.5 text-sm">
          Real-time pharmaceutical monitoring and supply analytics.
        </p>
      </div>
      <div className="flex gap-3" id="hero-actions-animate">
        <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-line rounded-lg text-sm font-medium hover:bg-surface-raised hover:border-line transition-all shadow-sm active:scale-95 text-secondary">
          <Download className="w-4 h-4 text-muted" />
          Export PDF
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-all shadow-md shadow-accent/10 active:scale-95">
          <PlusCircle className="w-4 h-4" />
          New Analysis
        </button>
      </div>
    </section>
  )
}
