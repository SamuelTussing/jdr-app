"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function GameCard({ game }) {
  const product = game.productId || game  
  const [notificationEnabled, setNotificationEnabled] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (!product?.slug) return
    router.push(`/accueil/product/${product.slug}`)
  }

  return (
    <div className="game-card" onClick={handleClick} style={{ cursor: "pointer" }}>
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
            onClick={(e) => {
              e.stopPropagation() // ✅ empêche le clic sur la cloche d'ouvrir la fiche produit
              setNotificationEnabled(!notificationEnabled)
            }}
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
