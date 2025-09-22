import Image from "next/image"

export default function ProductDescription({ product }) {
  return (
    <section className="product-description">
      <div className="product-description-container">
        <div className="description-content">
          <h3 className="description-title">About {product.title}</h3>
          <div className="description-text">
            <p>
              Experience the first-ever open world Star Wars game, set between the events of The Empire Strikes Back and
              Return of the Jedi. Play as Kay Vess, a scoundrel seeking freedom and the means to start a new life, along
              with her companion Nix. Fight, steal, and outwit your way through the galaxy's crime syndicates as you
              join the galaxy's most wanted.
            </p>
            <p>
              Explore distinct planets across the galaxy, both iconic and new. From Tatooine's cantinas to the lush
              jungles of Akiva, each location brings its own unique challenges and opportunities. Live the high-stakes
              lifestyle of an outlaw, taking on high-risk, high-reward missions from the galaxy's crime syndicates.
            </p>
          </div>
        </div>

        <div className="description-media">
          <div className="screenshot-gallery">
            {product.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-item">
                <Image
                  src={
                    screenshot ||
                    `/placeholder.svg?height=200&width=300&query=Star Wars Outlaws screenshot ${index + 1}`
                  }
                  alt={`${product.title} Screenshot ${index + 1}`}
                  width={300}
                  height={200}
                  className="screenshot-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="key-features">
          <h4 className="features-title">Key Features</h4>
          <ul className="features-list">
            <li>Experience the first-ever open world Star Wars game</li>
            <li>Play as Kay Vess, an emerging scoundrel seeking freedom</li>
            <li>Explore distinct planets across the galaxy</li>
            <li>Live the high-stakes lifestyle of an outlaw</li>
            <li>Fight, steal, and outwit your way through crime syndicates</li>
            <li>Discover both iconic and new Star Wars locations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
