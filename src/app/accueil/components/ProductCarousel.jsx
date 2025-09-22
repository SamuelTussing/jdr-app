import Image from "next/image"
const products = [
  {
    id: 1,
    title: "Offre d'automne ! 50% de remise",
    description: "Offre limitée sur une sélection de jeux",
    image: "/autumn-sale-gaming-promotion.jpg",
    badge: "PROMO",
  },
  {
    id: 2,
    title: "Dragon Academy",
    description: "Devenez dresseur de dragons",
    image: "/dragon.jpg",
  },
  {
    id: 3,
    title: "Abyss",
    description: "Survivrez vous à l'Antarctique ?",
    image: "/abyss.jpg",
  },
  {
    id: 4,
    title: "Storm",
    description: "Une aventure de haut vol",
    image: "/storm.jpg",
  },
]

export default function ProductCarousel() {
  return (
    <section className="product-section">
      <div className="section-container">
        <div className="product-carousel">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <Image src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
