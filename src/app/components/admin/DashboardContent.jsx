"use client"

import StatsCards from "./StatsCards"
import RecentOrders from "./RecentOrders"
import SalesChart from "./SalesChart"
import TopProducts from "./TopProducts"

export default function DashboardContent() {
  return (
    <div className="dashboard-content">
      <StatsCards />

      <div className="dashboard-grid">
        <div className="grid-large">
          <SalesChart />
        </div>

        <div className="grid-small">
          <TopProducts />
        </div>
      </div>

      <div className="dashboard-full">
        <RecentOrders />
      </div>
    </div>
  )
}
