"use client"

import AdminLayout from "../components/admin/AdminLayout"
import AdminHeader from "../components/admin/AdminHeader"
import DashboardContent from "../components/admin/DashboardContent"
import OrdersContent from "../components/admin/OrdersContent"
import ProductsContent from "../components/admin/ProductsContent"
import CustomersContent from "../components/admin/CustomersContent"
import AnalyticsContent from "../components/admin/AnalyticsContent"
import MarketingContent from "../components/admin/MarketingContent"
import SettingsContent from "../components/admin/SettingsContent"
import "./admin.css"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminWorld() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include", // envoie les cookies httpOnly
        })

        if (!res.ok) {
          router.push("/admin_login")
          return
        }

        // si tout est ok
        setLoading(false)
      } catch (err) {
        router.push("/admin_login")
      }
    }

    checkAdmin()
  }, [])

  if (loading) return <p>Chargement...</p>

    const renderContent = (activeTab) => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />
      case "orders":
        return <OrdersContent />
      case "products":
        return <ProductsContent />
      case "customers":
        return <CustomersContent />
      case "analytics":
        return <AnalyticsContent />
      case "marketing":
        return <MarketingContent />
      case "settings":
        return <SettingsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
<AdminLayout>
      {(activeTab) => (
        <>
          <AdminHeader />
          {renderContent(activeTab)}
        </>
      )}
    </AdminLayout>
  )
}
