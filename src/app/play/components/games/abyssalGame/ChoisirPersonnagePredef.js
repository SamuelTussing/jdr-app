'use client'

import { useState } from "react"
import "./hero-creator.css"
import Image from "next/image"

export default function HeroSelector({ goTo, setPlayer }) {
  const [heroName, setHeroName] = useState("Max")
  const [selectedAttribute, setSelectedAttribute] = useState("Magie")
  const [selectedHero, setSelectedHero] = useState(0)

  const predefinedHeroes = [
    {
      name: "Max",
      image: "/max.jpg",
      attributes: { Force: 8, Perception: 8, Endurance: 7, Agilité: 5, Intelligence: 6, Magie: 1 },
      specialAbility: "+2 Perception lors d'une attaque avec un pistolet.",
    },
    {
      name: "Tom",
      image: "/tom.jpg",
      attributes: { Force: 6, Perception: 7, Endurance: 8, Agilité: 4, Intelligence: 8, Magie: 2 },
      specialAbility: "+1 Endurance lors des tests de résistance.",
    },
    {
      name: "Otacon",
      image: "/otacon.jpg",
      attributes: { Force: 4, Perception: 6, Endurance: 5, Agilité: 8, Intelligence: 8, Magie: 4 },
      specialAbility: "+2 Agilité lors des actions furtives.",
    },
  ]

  const currentHero = predefinedHeroes[selectedHero]
  const attributes = currentHero.attributes
  const calculatedAttributes = {
    "Points de vie max": attributes.Endurance + attributes.Magie + 1,
    "Horreur max": attributes.Intelligence + attributes.Magie + 1,
  }

  const attributeDescriptions = {
    Force: "La force détermine la puissance physique du héros. ...",
    Perception: "La perception influence la capacité du héros ...",
    Endurance: "L'endurance détermine la résistance du héros ...",
    Agilité: "L'agilité affecte la vitesse de déplacement ...",
    Intelligence: "L'intelligence détermine les capacités de raisonnement ...",
    Magie: "La magie détermine les connaissances du héros ...",
    "Points de vie max": "Les points de vie maximum représentent ...",
    "Horreur max": "L'horreur maximum détermine la résistance mentale ...",
  }

  const selectHero = (heroIndex) => {
    setSelectedHero(heroIndex)
    setHeroName(predefinedHeroes[heroIndex].name)
  }

  const selectAttribute = (attr) => {
    setSelectedAttribute(attr)
  }

  return (
    <div className="hero-creator">
      <div className="hero-creator-container">
        <button className="close-button" onClick={() => goTo("choixpredef")}>×</button>

        <h1 className="title">Choisir un héros</h1>

        <div className="hero-selection">
          {predefinedHeroes.map((hero, index) => (
            <div key={index} className="hero-option">
              <div
                className={`hero-portrait ${selectedHero === index ? "selected" : ""}`}
                onClick={() => selectHero(index)}
              >
                <Image src={hero.image || "/placeholder.svg"} alt={hero.name} width={150} height={150} />
              </div>
              <span className="hero-name">{hero.name}</span>
            </div>
          ))}
        </div>

        <div className="name-section">
          <label className="name-label">Nom :</label>
          <input type="text" value={heroName} onChange={(e) => setHeroName(e.target.value)} className="name-input" />
        </div>

        <div className="attributes-section">
          <h2 className="attributes-title">Aptitudes</h2>
          <div className="attributes-grid">
            {Object.entries(attributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item readonly">
                <button
                  className={`attribute-button ${selectedAttribute === attr ? "selected" : ""}`}
                  onClick={() => selectAttribute(attr)}
                >
                  {attr}
                </button>
                <div className="attribute-controls">
                  <span className="attribute-value">{value}</span>
                </div>
              </div>
            ))}
            {Object.entries(calculatedAttributes).map(([attr, value]) => (
              <div key={attr} className="attribute-item calculated">
                <button
                  className={`attribute-button ${selectedAttribute === attr ? "selected" : ""}`}
                  onClick={() => selectAttribute(attr)}
                >
                  {attr}
                </button>
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

        <div className="special-ability-section">
          <h3 className="special-ability-title">Capacité spéciale</h3>
          <p className="special-ability-text">{currentHero.specialAbility}</p>
        </div>

        <button
          className="next-button"
          onClick={() => {
            setPlayer({ ...currentHero, name: heroName })
            goTo("choixcompetences")
          }}
        >
          Suivant &gt;
        </button>
      </div>
    </div>
  )
}
