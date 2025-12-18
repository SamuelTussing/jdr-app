"use client"

export default function OrdersContent() {
  const orders = [
    {
      id: "#ORD-2024-001",
      customer: "Jean Dupont",
      date: "2024-12-16",
      total: "€89.99",
      status: "Livré",
      items: 2,
    },
    {
      id: "#ORD-2024-002",
      customer: "Marie Martin",
      date: "2024-12-15",
      total: "€149.97",
      status: "En cours",
      items: 3,
    },
    {
      id: "#ORD-2024-003",
      customer: "Pierre Durand",
      date: "2024-12-15",
      total: "€59.99",
      status: "En attente",
      items: 1,
    },
    {
      id: "#ORD-2024-004",
      customer: "Sophie Bernard",
      date: "2024-12-14",
      total: "€199.98",
      status: "Livré",
      items: 4,
    },
    {
      id: "#ORD-2024-005",
      customer: "Luc Petit",
      date: "2024-12-14",
      total: "€79.99",
      status: "Annulé",
      items: 1,
    },
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case "Livré":
        return "status-delivered"
      case "En cours":
        return "status-processing"
      case "En attente":
        return "status-pending"
      case "Annulé":
        return "status-cancelled"
      default:
        return ""
    }
  }

  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Gestion des commandes</h2>
        <div className="header-actions">
          <button className="btn-secondary">Exporter</button>
          <button className="btn-primary">Nouvelle commande</button>
        </div>
      </div>

      <div className="filters-bar">
        <input type="text" placeholder="Rechercher une commande..." className="search-input" />
        <select className="filter-select">
          <option>Tous les statuts</option>
          <option>Livré</option>
          <option>En cours</option>
          <option>En attente</option>
          <option>Annulé</option>
        </select>
        <select className="filter-select">
          <option>Cette semaine</option>
          <option>Ce mois</option>
          <option>Cette année</option>
        </select>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Client</th>
              <th>Date</th>
              <th>Articles</th>
              <th>Total</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.items}</td>
                <td className="order-total">{order.total}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>{order.status}</span>
                </td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn">👁️</button>
                    <button className="action-btn">✏️</button>
                    <button className="action-btn">🗑️</button>
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
