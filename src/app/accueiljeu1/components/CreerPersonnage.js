"use client"

import { useState } from "react"
import "./hero-creator.css"

export default function HeroCreator({ onReturn, onFinish }) {
  const [heroName, setHeroName] = useState("Sergueï")
  const [remainingPoints, setRemainingPoints] = useState(5)
  const [selectedAttribute, setSelectedAttribute] = useState("Magie")

  const [attributes, setAttributes] = useState({
    Force: 5,
    Perception: 5,
    Endurance: 5,
    Agilité: 5,
    Intelligence: 5,
    Magie: 5,
  })

  const calculatedAttributes = {
    "Points de vie max": attributes.Endurance + attributes.Magie + 1,
    "Horreur max": attributes.Intelligence + attributes.Magie + 1,
  }

  const incrementAttribute = (attr) => {
    if (remainingPoints > 0) {
      setAttributes((prev) => ({ ...prev, [attr]: prev[attr] + 1 }))
      setRemainingPoints((prev) => prev - 1)
    }
  }

  const decrementAttribute = (attr) => {
    if (attributes[attr] > 0) {
      setAttributes((prev) => ({ ...prev, [attr]: prev[attr] - 1 }))
      setRemainingPoints((prev) => prev + 1)
    }
  }

  return (
    <div className="hero-creator">
      <div className="hero-creator-container">
        <button className="close-button" onClick={onReturn}>×</button>

        <h1 className="title3">Créer un héros</h1>

        <div className="name-section">
          <label className="name-label">Nom :</label>
          <input
            type="text"
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            className="name-input"
          />
        </div>

        {/* Attributs */}
        <div className="attributes-section">
          <h2 className="attributes-title">Aptitudes : Encore {remainingPoints} points</h2>
          <div className="attributes-grid">
            {Object.entries(attributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item">
                <button>{attr}</button>
                <div className="attribute-controls">
                  <button onClick={() => decrementAttribute(attr)} disabled={value <= 0}>-</button>
                  <span>{value}</span>
                  <button onClick={() => incrementAttribute(attr)} disabled={remainingPoints <= 0 || value === 10}>+</button>
                </div>
              </div>
            ))}

            {Object.entries(calculatedAttributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item calculated">
                <button>{attr}</button>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton suivant → envoie les données */}
        <button
          className="next-button"
          onClick={() =>
            onFinish({
              name: heroName,
              attributes,
              calculatedAttributes,
            })
          }
        >
          Suivant &gt;
        </button>
      </div>
    </div>
  )
}
