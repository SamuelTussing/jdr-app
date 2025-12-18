"use client"

export default function AnalyticsContent() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Statistiques avancées</h2>
        <div className="header-actions">
          <select className="filter-select">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
            <option>3 derniers mois</option>
            <option>Cette année</option>
          </select>
        </div>
      </div>

      <div className="stats-row-mini">
        <div className="mini-stat">
          <div className="mini-stat-icon">📊</div>
          <div>
            <div className="mini-stat-value">€45,678</div>
            <div className="mini-stat-label">Revenus moyens/jour</div>
          </div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-icon">🎯</div>
          <div>
            <div className="mini-stat-value">3.2%</div>
            <div className="mini-stat-label">Taux de conversion</div>
          </div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-icon">👥</div>
          <div>
            <div className="mini-stat-value">12,456</div>
            <div className="mini-stat-label">Visiteurs uniques</div>
          </div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-icon">⏱️</div>
          <div>
            <div className="mini-stat-value">4m 32s</div>
            <div className="mini-stat-label">Temps moyen sur site</div>
          </div>
        </div>
      </div>

      <div className="analytics-charts">
        <div className="chart-container-large">
          <h3>Évolution du trafic</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "75%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
            </div>
          </div>
        </div>

        <div className="chart-container-small">
          <h3>Sources de trafic</h3>
          <div className="traffic-sources">
            <div className="source-item">
              <div className="source-bar" style={{ width: "70%", backgroundColor: "#0078f3" }}></div>
              <span>Direct: 70%</span>
            </div>
            <div className="source-item">
              <div className="source-bar" style={{ width: "15%", backgroundColor: "#00c9ff" }}></div>
              <span>Recherche: 15%</span>
            </div>
            <div className="source-item">
              <div className="source-bar" style={{ width: "10%", backgroundColor: "#ff6b35" }}></div>
              <span>Réseaux sociaux: 10%</span>
            </div>
            <div className="source-item">
              <div className="source-bar" style={{ width: "5%", backgroundColor: "#ffa500" }}></div>
              <span>Autres: 5%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="top-pages">
        <h3>Pages les plus visitées</h3>
        <div className="pages-list">
          <div className="page-item">
            <span className="page-name">/store/star-wars-outlaws</span>
            <span className="page-views">4,523 vues</span>
          </div>
          <div className="page-item">
            <span className="page-name">/store/assassins-creed-shadows</span>
            <span className="page-views">3,876 vues</span>
          </div>
          <div className="page-item">
            <span className="page-name">/deals</span>
            <span className="page-views">2,945 vues</span>
          </div>
          <div className="page-item">
            <span className="page-name">/store/rainbow-six-siege</span>
            <span className="page-views">2,234 vues</span>
          </div>
        </div>
      </div>
    </div>
  )
}
