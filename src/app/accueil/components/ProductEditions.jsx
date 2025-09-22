export default function ProductEditions({ product }) {
  const editions = [
    {
      name: "Standard Edition",
      price: 69.99,
      originalPrice: 69.99,
      discount: null,
      features: ["Base Game", "Digital Download"],
      current: true,
    },
    {
      name: "Gold Edition",
      price: 109.99,
      originalPrice: 109.99,
      discount: null,
      features: ["Base Game", "Season Pass", "3 Days Early Access", "Digital Soundtrack"],
    },
    {
      name: "Ultimate Edition",
      price: 129.99,
      originalPrice: 129.99,
      discount: null,
      features: [
        "Base Game",
        "Season Pass",
        "3 Days Early Access",
        "Digital Soundtrack",
        "Character Pack",
        "Exclusive Mission",
      ],
    },
  ]

  return (
    <section className="product-editions" id="comparison-table">
      <div className="product-editions-container">
        <h3 className="editions-title">Editions</h3>

        <div className="editions-grid">
          {editions.map((edition, index) => (
            <div key={index} className={`edition-card ${edition.current ? "current-edition" : ""}`}>
              <div className="edition-header">
                <h4 className="edition-name">{edition.name}</h4>
                {edition.current && <span className="current-badge">Current</span>}
              </div>

              <div className="edition-pricing">
                <span className="edition-price">${edition.price}</span>
                {edition.originalPrice > edition.price && (
                  <span className="edition-original-price">${edition.originalPrice}</span>
                )}
                {edition.discount && <span className="edition-discount">-{edition.discount}%</span>}
              </div>

              <div className="edition-features">
                <ul className="features-list">
                  {edition.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="edition-actions">
                {edition.current ? (
                  <button className="btn-primary">Pre-Order</button>
                ) : (
                  <button className="btn-secondary">Select Edition</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
