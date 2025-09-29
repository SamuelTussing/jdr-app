import Image from "next/image"
import { useState } from "react"

export default function ProductHero({ product }) {

  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)

const handleAddToWishlist = async () => {
  try {
    setLoading(true)

    // 🔑 récupération user depuis sessionStorage
    const user = JSON.parse(sessionStorage.getItem("user"))
    if (!user?._id) {
      alert("Vous devez être connecté pour ajouter à la wishlist")
      return
    }

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user._id,   // ✅ ici c’est user._id
        productId: product._id,
      }),
    })

    if (!res.ok) throw new Error("Erreur ajout wishlist")

    setAdded(true)
  } catch (err) {
    console.error("Erreur front wishlist:", err)
    alert("Impossible d'ajouter à la wishlist")
  } finally {
    setLoading(false)
  }
}

  return (
    <section className="product-hero">
      <div className="product-hero-container">
        <div className="product-hero-image">
          <Image
            src={product.heroImage || "/placeholder.svg?height=600&width=800&query=Star Wars Outlaws game hero image"}
            alt={product.title}
            width={800}
            height={600}
            className="hero-pics"
            priority
          />
        </div>

        <div className="product-hero-content">
          <div className="rating-info">
            <span className="rating-text">{product.ratingDescription}</span>
          </div>

          <h1 className="product-title">{product.title}</h1>
          <h2 className="product-subtitle">{product.subtitle}</h2>

          <div className="product-meta">
            <div className="release-date">
              <span className="meta-label">Release date:</span>
              <span className="meta-value">{product.releaseDate}</span>
            </div>

            <div className="platforms">
              {product.platforms.map((platform, index) => (
                <span key={index} className="platform-badge">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="product-pricing">
            <div className="price-section">
              <span className="current-price">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="product-actions">
            <button className="btn-primary">Acheter</button>
            <button
              className="btn-secondary"
              onClick={handleAddToWishlist}
              disabled={loading || added}
            >
              {added ? "✔ Ajouté à la Wishlist" : loading ? "Ajout..." : "Add to Wishlist"}
            </button>
          </div>

          <div className="product-genres">
            <span className="genres-label">Genre:</span>
            {product.genres.map((genre, index) => (
              <span key={index} className="genre-link">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
