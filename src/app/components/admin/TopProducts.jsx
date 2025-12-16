"use client"
export default function TopProducts() {
  const products = [
    { name: "Star Wars Outlaws", sales: 245, revenue: "7,350€", trend: "up" },
    { name: "Avatar: Frontiers", sales: 189, revenue: "6,138€", trend: "up" },
    { name: "Rainbow Six Siege", sales: 167, revenue: "3,340€", trend: "down" },
    { name: "For Honor", sales: 134, revenue: "2,680€", trend: "up" },
    { name: "Anno 117", sales: 98, revenue: "2,940€", trend: "up" },
  ]

  return (
    <div className="chart-card">
      <div className="card-header">
        <h3 className="card-title">Produits populaires</h3>
      </div>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-rank">{index + 1}</div>
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-stats">
                {product.sales} ventes • {product.revenue}
              </div>
            </div>
            <div className={`product-trend ${product.trend}`}>{product.trend === "up" ? "↗" : "↘"}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
