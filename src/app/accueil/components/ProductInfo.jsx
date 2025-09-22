export default function ProductInfo({ product }) {
  return (
    <section className="product-info">
      <div className="product-info-container">
        <h3 className="info-title">General information</h3>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Release date:</span>
            <span className="info-value">{product.releaseDate}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Description:</span>
            <span className="info-value">{product.description}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Rating:</span>
            <div className="rating-info">
              <div className="rating-badge-small">
                <span className="rating-letter">{product.rating}</span>
              </div>
              <span className="rating-desc">{product.ratingDescription}</span>
              <span className="rating-additional">In-Game Purchases, Users Interact</span>
            </div>
          </div>

          <div className="info-item">
            <span className="info-label">Language:</span>
            <div className="language-info">
              <div className="language-summary">
                <span>English (Audio, Interface, Subtitle)</span>
                <span>French (Audio, Interface, Subtitle)</span>
                <button className="see-more-btn">see more</button>
              </div>
            </div>
          </div>

          <div className="info-item">
            <span className="info-label">Platforms:</span>
            <span className="info-value">{product.platforms.join(", ")}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Genre:</span>
            <div className="genre-links">
              {product.genres.map((genre, index) => (
                <span key={index} className="genre-link">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="copyright-info">
          <p>
            STAR WARS © & TM 2024 Lucasfilm Ltd. All Rights Reserved. Developed by Ubisoft. Ubisoft TM & © 2024 Ubisoft
            Entertainment. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
