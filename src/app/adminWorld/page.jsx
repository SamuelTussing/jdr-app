"use client"

import AdminLayout from "../components/admin/AdminLayout"
import AdminHeader from "../components/admin/AdminHeader"
import DashboardContent from "../components/admin/DashboardContent"
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

  return (
    <AdminLayout>
      <AdminHeader />
      <DashboardContent />
    </AdminLayout>
  )
}
