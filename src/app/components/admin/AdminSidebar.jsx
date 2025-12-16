"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminSidebar({ isOpen, onToggle }) {
  const [activeTab, setActiveTab] = useState("dashboard")

  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: "📊",
      href: "/admin",
    },
    {
      id: "orders",
      label: "Commandes",
      icon: "🛒",
      href: "/admin/orders",
      badge: "12",
    },
    {
      id: "products",
      label: "Produits",
      icon: "📦",
      href: "/admin/products",
    },
    {
      id: "customers",
      label: "Clients",
      icon: "👥",
      href: "/admin/customers",
    },
    {
      id: "analytics",
      label: "Statistiques",
      icon: "📈",
      href: "/admin/analytics",
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: "📢",
      href: "/admin/marketing",
    },
    {
      id: "settings",
      label: "Paramètres",
      icon: "⚙️",
      href: "/admin/settings",
    },
  ]

  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🎮</span>
          {isOpen && <span className="logo-text">UBISOFT ADMIN</span>}
        </div>
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? "◀" : "▶"}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && (
              <>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </>
            )}
          </Link>
        ))}
      </nav>

      {isOpen && (
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <div className="user-name">Admin User</div>
              <div className="user-role">Administrateur</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
