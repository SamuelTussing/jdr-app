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
    image: "/assassins-creed-shadows-ninja-game.jpg",
  },
  {
    id: 3,
    title: "Cesar vs Cunnilingus",
    description: "Le pire cauchemar de l'Empire Romain",
    image: "/anno-117-pax-romana-city-building-game.jpg",
  },
  {
    id: 4,
    title: "Hell on earth",
    description: "Un JDR post-apocalyptique immersif",
    image: "/rainbow-six-siege-tactical-shooter.jpg",
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
