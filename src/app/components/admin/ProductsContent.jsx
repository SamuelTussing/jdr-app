"use client"

export default function ProductsContent() {
  const products = [
    {
      id: 1,
      name: "Assassin's Creed Shadows",
      category: "Action-Aventure",
      price: "€69.99",
      stock: 145,
      sales: 1240,
      image: "/assassins-creed-shadows-ninja-game.jpg",
    },
    {
      id: 2,
      name: "Star Wars Outlaws",
      category: "Action-Aventure",
      price: "€59.99",
      stock: 89,
      sales: 856,
      image: "/star-wars-outlaws-hero.jpg",
    },
    {
      id: 3,
      name: "Rainbow Six Siege",
      category: "FPS",
      price: "€19.99",
      stock: 234,
      sales: 3420,
      image: "/rainbow-six-siege-tactical-shooter.jpg",
    },
    {
      id: 4,
      name: "Anno 117: Pax Romana",
      category: "Stratégie",
      price: "€49.99",
      stock: 67,
      sales: 542,
      image: "/anno-117-pax-romana-city-building-game.jpg",
    },
  ]

  return (
    <div className="content-section">
      <div className="section-header">
        <h2>Catalogue de produits</h2>
        <div className="header-actions">
          <button className="btn-secondary">Importer</button>
          <button className="btn-primary">Ajouter un produit</button>
        </div>
      </div>

      <div className="filters-bar">
        <input type="text" placeholder="Rechercher un produit..." className="search-input" />
        <select className="filter-select">
          <option>Toutes les catégories</option>
          <option>Action-Aventure</option>
          <option>FPS</option>
          <option>Stratégie</option>
          <option>RPG</option>
        </select>
        <select className="filter-select">
          <option>En stock</option>
          <option>Stock faible</option>
          <option>Rupture de stock</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card-admin">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image-admin" />
            <div className="product-info-admin">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-stats">
                <div className="stat-item">
                  <span className="stat-label">Prix:</span>
                  <span className="stat-value">{product.price}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Stock:</span>
                  <span className="stat-value">{product.stock}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Ventes:</span>
                  <span className="stat-value">{product.sales}</span>
                </div>
              </div>
              <div className="product-actions">
                <button className="btn-secondary-sm">Modifier</button>
                <button className="btn-danger-sm">Supprimer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
