"use client"

import { useState } from "react"

export default function GameCard({ game }) {
  const [notificationEnabled, setNotificationEnabled] = useState(game.notificationEnabled)

  return (
    <div className="game-card">
      <div className="game-image-container">
        <img src={game.image || "/placeholder.svg"} alt={game.title} className="game-image" />
        <div className="discount-badge">{game.discount}</div>
        <div className="edition-badge">{game.edition.toUpperCase()}</div>
      </div>

      <div className="game-info">
        <div className="game-header">
          <h3 className="game-title">{game.title}</h3>
          <button
            className={`notification-bell ${notificationEnabled ? "active" : ""}`}
            onClick={() => setNotificationEnabled(!notificationEnabled)}
          >
            🔔
          </button>
        </div>

        <p className="game-edition">{game.edition}</p>
        <p className="game-platform">Platform: {game.platform}</p>

        <div className="game-pricing">
          <span className="current-price">{game.currentPrice}</span>
          <span className="original-price">{game.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}
