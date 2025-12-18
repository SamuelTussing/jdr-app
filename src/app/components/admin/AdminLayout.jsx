"use client"

import { useState } from "react"
import AdminSidebar from "./AdminSidebar"

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="admin-wrapper">
      <AdminSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className={`admin-main ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {typeof children === "function" ? children(activeTab) : children}
      </div>
    </div>
  )
}
