"use client"
export default function RecentOrders() {
  const orders = [
    {
      id: "#ORD-2451",
      customer: "Jean Dupont",
      product: "Star Wars Outlaws - Ultimate Edition",
      amount: "129.99€",
      status: "completed",
      date: "16/12/2024 14:32",
    },
    {
      id: "#ORD-2450",
      customer: "Marie Martin",
      product: "Avatar: Frontiers of Pandora",
      amount: "69.99€",
      status: "processing",
      date: "16/12/2024 13:18",
    },
    {
      id: "#ORD-2449",
      customer: "Pierre Leroy",
      product: "Rainbow Six Siege - Year 8 Pass",
      amount: "29.99€",
      status: "completed",
      date: "16/12/2024 11:45",
    },
    {
      id: "#ORD-2448",
      customer: "Sophie Bernard",
      product: "For Honor - Complete Edition",
      amount: "39.99€",
      status: "pending",
      date: "16/12/2024 10:22",
    },
    {
      id: "#ORD-2447",
      customer: "Luc Moreau",
      product: "Anno 117: Pax Romana",
      amount: "59.99€",
      status: "completed",
      date: "16/12/2024 09:15",
    },
  ]

  const statusLabels = {
    completed: "Terminée",
    processing: "En cours",
    pending: "En attente",
  }

  return (
    <div className="orders-card">
      <div className="card-header">
        <h3 className="card-title">Commandes récentes</h3>
        <button className="view-all-btn">Voir tout</button>
      </div>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Commande</th>
              <th>Client</th>
              <th>Produit</th>
              <th>Montant</th>
              <th>Statut</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td className="order-product">{order.product}</td>
                <td className="order-amount">{order.amount}</td>
                <td>
                  <span className={`status-badge ${order.status}`}>{statusLabels[order.status]}</span>
                </td>
                <td className="order-date">{order.date}</td>
                <td>
                  <div className="order-actions">
                    <button className="action-btn" title="Voir">
                      👁️
                    </button>
                    <button className="action-btn" title="Modifier">
                      ✏️
                    </button>
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
