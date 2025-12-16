"use client"

import AdminLayout from "../components/admin/AdminLayout"
import AdminHeader from "../components/admin/AdminHeader"
import DashboardContent from "../components/admin/DashboardContent"
import "./admin.css"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import jwt from "jsonwebtoken"

export default function AdminWorld() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((c) => c.startsWith("auth_token="))
      ?.split("=")[1]

    if (!token) {
      router.push("/admin_login")
      return
    }

    try {
      const decoded = jwt.decode(token)
      if (decoded?.role !== "admin") {
        router.push("/admin_login")
        return
      }
      setLoading(false)
    } catch {
      router.push("/admin_login")
    }
  }, [])

  if (loading) return <p>Chargement...</p>

  return (
    <AdminLayout>
      <AdminHeader />
      <DashboardContent />
    </AdminLayout>
  )
}
