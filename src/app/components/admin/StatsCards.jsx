"use client"
export default function StatsCards() {
  const stats = [
    {
      title: "Ventes du jour",
      value: "12,456 €",
      change: "+12.5%",
      trend: "up",
      icon: "💰",
    },
    {
      title: "Commandes",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: "🛍️",
    },
    {
      title: "Nouveaux clients",
      value: "42",
      change: "+23.1%",
      trend: "up",
      icon: "👥",
    },
    {
      title: "Taux de conversion",
      value: "3.24%",
      change: "-2.4%",
      trend: "down",
      icon: "📊",
    },
  ]

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-details">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.trend}`}>
              <span className="change-arrow">{stat.trend === "up" ? "↗" : "↘"}</span>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
