import PageShell from '@/components/layout/PageShell'
import Header from '@/components/layout/Header'
import Hero from '@/components/dashboard/Hero'
import Grid from '@/components/dashboard/Grid'
import Chart from '@/components/dashboard/Chart'
import Table from '@/components/dashboard/Table'
import Insights from '@/components/dashboard/Insights'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageShell>
        <Hero />
        <Grid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Chart />
          </div>
          <div className="lg:col-span-1">
            <Insights />
          </div>
        </div>

        <Table />
      </PageShell>
    </main>
  )
}
