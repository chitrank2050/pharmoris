export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'

export type PriceDirection = 'up' | 'down' | 'stable'

export interface KPICard {
  id: string
  label: string
  value: string
  change: string
  direction: PriceDirection
}

export interface DrugSupply {
  id: string
  drugName: string
  manufacturer: string
  stockStatus: StockStatus
  priceChange: number
  priceDirection: PriceDirection
  lastUpdated: string
}

export interface CostSavingsDataPoint {
  month: string
  savings: number
}
