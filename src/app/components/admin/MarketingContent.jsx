"use client"

export default function MarketingContent() {
  const campaigns = [
    { id: 1, name: "Soldes d'Automne", status: "Actif", reach: "12.5K", conversion: "3.2%", spent: "€1,240" },
    { id: 2, name: "Black Friday", status: "Programmé", reach: "0", conversion: "0%", spent: "€0" },
    { id: 3, name: "Lancement AC Shadows", status: "Actif", reach: "8.9K", conversion: "4.5%", spent: "€890" },
    { id: 4, name: "Newsletter Décembre", status: "Terminé", reach: "25.3K", conversion: "2.8%", spent: "€450" },
  ]

  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Campagnes marketing</h2>
        <div className="header-actions">
          <button className="btn-secondary">Rapports</button>
          <button className="btn-primary">Nouvelle campagne</button>
        </div>
      </div>

      <div className="stats-row-mini">
        <div className="mini-stat">
          <div className="mini-stat-value">€2,580</div>
          <div className="mini-stat-label">Budget total</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">46.7K</div>
          <div className="mini-stat-label">Portée totale</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">3.4%</div>
          <div className="mini-stat-label">Taux de conversion moyen</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">€12,450</div>
          <div className="mini-stat-label">Revenus générés</div>
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Nom de la campagne</th>
              <th>Statut</th>
              <th>Portée</th>
              <th>Taux de conversion</th>
              <th>Budget dépensé</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="campaign-name">{campaign.name}</td>
                <td>
                  <span
                    className={`status-badge ${
                      campaign.status === "Actif"
                        ? "status-active"
                        : campaign.status === "Programmé"
                          ? "status-pending"
                          : "status-delivered"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.reach}</td>
                <td>{campaign.conversion}</td>
                <td>{campaign.spent}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn">📊</button>
                    <button className="action-btn">✏️</button>
                    <button className="action-btn">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="marketing-tools">
        <h3>Outils marketing</h3>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">📧</div>
            <h4>Email Marketing</h4>
            <p>Créer et envoyer des newsletters</p>
            <button className="btn-secondary-sm">Accéder</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🎯</div>
            <h4>Publicités</h4>
            <p>Gérer les campagnes publicitaires</p>
            <button className="btn-secondary-sm">Accéder</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">💰</div>
            <h4>Promotions</h4>
            <p>Créer des codes promo et réductions</p>
            <button className="btn-secondary-sm">Accéder</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">📱</div>
            <h4>Réseaux sociaux</h4>
            <p>Planifier des publications</p>
            <button className="btn-secondary-sm">Accéder</button>
          </div>
        </div>
      </div>
    </div>
  )
}
