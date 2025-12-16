"use client"

export default function AdminHeader() {
  const shortcuts = [
    { icon: "➕", label: "Nouveau produit", action: "new-product" },
    { icon: "📧", label: "Messages", count: 5, action: "messages" },
    { icon: "🔔", label: "Notifications", count: 3, action: "notifications" },
    { icon: "❓", label: "Aide", action: "help" },
  ]

  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 className="page-title">Tableau de bord</h1>
        <div className="breadcrumb">
          <span>Accueil</span>
          <span className="separator">/</span>
          <span className="current">Tableau de bord</span>
        </div>
      </div>

      <div className="header-right">
        <div className="header-shortcuts">
          {shortcuts.map((shortcut, index) => (
            <button key={index} className="shortcut-btn" title={shortcut.label}>
              <span className="shortcut-icon">{shortcut.icon}</span>
              {shortcut.count && <span className="shortcut-badge">{shortcut.count}</span>}
            </button>
          ))}
        </div>

        <div className="header-search">
          <input type="text" placeholder="Rechercher..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  )
}
