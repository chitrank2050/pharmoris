export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'

export type PriceDirection = 'up' | 'down' | 'stable' | 'info'

export interface KPICard {
  id: string
  label: string
  value: string
  change: string
  direction: PriceDirection
  icon: string
  description: string
}

export interface DrugSupply {
  id: string
  drugName: string
  manufacturer: string
  description: string
  stockStatus: StockStatus
  priceChange: number
  priceDirection: PriceDirection
  lastUpdated: string
}

export interface CostSavingsDataPoint {
  month: string
  savings: number
}
