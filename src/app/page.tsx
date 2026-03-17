import PageShell from '@/layout/PageShell'

import Header from './_components/Header'
import Grid from './_components/Grid'
import Table from './_components/Table'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageShell>
        <Grid />
        <Table />
      </PageShell>
    </main>
  )
}
