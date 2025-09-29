"use client"

import { useState } from "react"

export default function GameCard({ game }) {
  // si tu passes directement game.productId depuis WishlistGrid, plus besoin du .productId ici
  const product = game.productId || game  

  const [notificationEnabled, setNotificationEnabled] = useState(false)

  return (
    <div className="game-card">
      <div className="game-image-container">
        <img 
          src={product.heroImage || "/placeholder.svg"} 
          alt={product.title} 
          className="game-image" 
        />

        {product.discount && (
          <div className="discount-badge">-{product.discount}%</div>
        )}
        <div className="edition-badge">
          {product.subtitle?.toUpperCase() || "STANDARD"}
        </div>
      </div>

      <div className="game-info">
        <div className="game-header">
          <h3 className="game-title">{product.title}</h3>
          <button
            className={`notification-bell ${notificationEnabled ? "active" : ""}`}
            onClick={() => setNotificationEnabled(!notificationEnabled)}
          >
            🔔
          </button>
        </div>

        <p className="game-edition">{product.subtitle}</p>
        <p className="game-platform">
          {product.platforms?.join(", ") || "Platform: PC"}
        </p>

        <div className="game-pricing">
          <span className="current-price">{product.price} €</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">{product.originalPrice} €</span>
          )}
        </div>
      </div>
    </div>
  )
}
