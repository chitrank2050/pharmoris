import PageShell from '@/components/layout/PageShell'
import Header from '@/components/layout/Header'
import Grid from '@/components/dashboard/Grid'
import Chart from '@/components/dashboard/Chart'
import Table from '@/components/dashboard/Table'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageShell>
        <Grid />
        <Table />
        <Chart />
      </PageShell>
    </main>
  )
}
