"use client"

export default function SalesChart() {
  const data = [
    { day: "Lun", value: 4200 },
    { day: "Mar", value: 5800 },
    { day: "Mer", value: 4500 },
    { day: "Jeu", value: 6200 },
    { day: "Ven", value: 7800 },
    { day: "Sam", value: 9200 },
    { day: "Dim", value: 6500 },
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="chart-card">
      <div className="card-header">
        <h3 className="card-title">Ventes de la semaine</h3>
        <select className="period-select">
          <option>7 derniers jours</option>
          <option>30 derniers jours</option>
          <option>3 derniers mois</option>
        </select>
      </div>
      <div className="chart-content">
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar-item">
              <div className="bar-wrapper">
                <div className="bar" style={{ height: `${(item.value / maxValue) * 100}%` }}>
                  <span className="bar-value">{item.value}€</span>
                </div>
              </div>
              <div className="bar-label">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
