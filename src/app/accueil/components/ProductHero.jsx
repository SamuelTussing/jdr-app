import Image from "next/image"

export default function ProductHero({ product }) {
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
            <button className="btn-secondary">Add to Wishlist</button>
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
