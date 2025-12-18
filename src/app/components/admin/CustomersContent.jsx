"use client"

export default function CustomersContent() {
  const customers = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@email.com",
      orders: 12,
      totalSpent: "€1,245.89",
      lastOrder: "2024-12-16",
      status: "VIP",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie.martin@email.com",
      orders: 8,
      totalSpent: "€876.50",
      lastOrder: "2024-12-15",
      status: "Actif",
    },
    {
      id: 3,
      name: "Pierre Durand",
      email: "pierre.durand@email.com",
      orders: 3,
      totalSpent: "€234.97",
      lastOrder: "2024-12-10",
      status: "Nouveau",
    },
    {
      id: 4,
      name: "Sophie Bernard",
      email: "sophie.bernard@email.com",
      orders: 15,
      totalSpent: "€2,156.78",
      lastOrder: "2024-12-14",
      status: "VIP",
    },
  ]

  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Base de clients</h2>
        <div className="header-actions">
          <button className="btn-secondary">Exporter</button>
          <button className="btn-primary">Ajouter un client</button>
        </div>
      </div>

      <div className="stats-row-mini">
        <div className="mini-stat">
          <div className="mini-stat-value">2,456</div>
          <div className="mini-stat-label">Clients totaux</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">1,234</div>
          <div className="mini-stat-label">Clients actifs</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">156</div>
          <div className="mini-stat-label">Nouveaux ce mois</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">89</div>
          <div className="mini-stat-label">Clients VIP</div>
        </div>
      </div>

      <div className="filters-bar">
        <input type="text" placeholder="Rechercher un client..." className="search-input" />
        <select className="filter-select">
          <option>Tous les statuts</option>
          <option>VIP</option>
          <option>Actif</option>
          <option>Nouveau</option>
        </select>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Commandes</th>
              <th>Total dépensé</th>
              <th>Dernière commande</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="customer-name">{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.orders}</td>
                <td className="customer-total">{customer.totalSpent}</td>
                <td>{customer.lastOrder}</td>
                <td>
                  <span className={`status-badge ${customer.status === "VIP" ? "status-vip" : "status-active"}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn">👁️</button>
                    <button className="action-btn">✏️</button>
                    <button className="action-btn">💬</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
