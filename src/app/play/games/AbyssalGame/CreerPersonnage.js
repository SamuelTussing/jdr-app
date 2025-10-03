"use client"

import { useState } from "react"
import "./hero-creator.css"

export default function HeroCreator({ goTo }) {
  const [heroName, setHeroName] = useState("Sergueï")
  const [remainingPoints, setRemainingPoints] = useState(5)
  const [selectedAttribute, setSelectedAttribute] = useState("Magie")

    const selectAttribute = (attr) => {
    setSelectedAttribute(attr)
  }

    const attributeDescriptions = {
    Force:
      "La force détermine la puissance physique du héros. Un niveau de force élevé permet de porter des équipements lourds, d'infliger plus de dégâts au corps à corps et de résister aux effets physiques.",
    Perception:
      "La perception influence la capacité du héros à détecter les dangers cachés, à remarquer les détails importants et à avoir une meilleure précision avec les armes à distance.",
    Endurance:
      "L'endurance détermine la résistance du héros à la fatigue, aux maladies et aux poisons. Elle influence également les points de vie et la capacité à maintenir un effort prolongé.",
    Agilité:
      "L'agilité affecte la vitesse de déplacement, la dextérité et la capacité d'esquive du héros. Un niveau élevé permet d'être plus rapide et plus précis dans les actions.",
    Intelligence:
      "L'intelligence détermine les capacités de raisonnement, de mémoire et d'apprentissage du héros. Elle influence la maîtrise des sorts et la résolution d'énigmes complexes.",
    Magie:
      "La magie détermine les connaissances du héros dans le domaine du surnaturel. Un niveau de magie élevé permet de mieux comprendre les sciences occultes, de résister à la folie induit par l'horreur et d'appliquer des formes de magie simple.",
    "Points de vie max":
      "Les points de vie maximum représentent la santé totale du héros. Cette valeur est calculée automatiquement en additionnant l'Endurance + la Magie + 1. Plus cette valeur est élevée, plus le héros peut encaisser de dégâts.",
    "Horreur max":
      "L'horreur maximum détermine la résistance mentale du héros face aux événements traumatisants. Cette valeur est calculée automatiquement en additionnant l'Intelligence + la Magie + 1. Une valeur élevée permet de mieux résister à la folie.",
  }

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
        <button className="close-button" onClick={() => goTo("accueil")}>×</button>

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

        <div className="attributes-section">
          <h2 className="attributes-title">Aptitudes : Encore {remainingPoints} points</h2>
          <div className="attributes-grid">
            {Object.entries(attributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item">
                <button className={`attribute-button ${selectedAttribute === attr ? "selected" : ""}`} onClick={() => selectAttribute(attr)}>{attr}</button>
                <div className="attribute-controls">
                  <button className="control-button" onClick={() => decrementAttribute(attr)} disabled={value <= 0}>-</button>
                  <span>{value}</span>
                  <button className="control-button" onClick={() => incrementAttribute(attr)} disabled={remainingPoints <= 0 || value === 10}>+</button>
                </div>
              </div>
            ))}

            {Object.entries(calculatedAttributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item calculated">
                <button className={`attribute-button ${selectedAttribute === attr ? "selected" : ""}`}
                  onClick={() => selectAttribute(attr)}>{attr}</button>
                <div className="attribute-controls">
                  <span className="attribute-value calculated-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="description-section">
          <h3 className="description-title">{selectedAttribute}</h3>
          <p className="description-text">{attributeDescriptions[selectedAttribute]}</p>
        </div>

        <button
          className="next-button"
          onClick={() =>
            goTo("choixcompetences", {
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