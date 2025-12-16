"use client"

import { useState } from "react"
import AdminSidebar from "./AdminSidebar"

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="admin-wrapper">
      <AdminSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className={`admin-main ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>{children}</div>
    </div>
  )
}