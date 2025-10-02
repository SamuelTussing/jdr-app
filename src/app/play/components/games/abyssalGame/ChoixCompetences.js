"use client"
import "./competence.css"
import { useState } from "react"

export default function HeroCompetences({ goTo, setPlayer, player }) {
  const [selectedCapacity, setSelectedCapacity] = useState("occulte")

  const capacities = {
    occulte: {
      title: "Spécialiste des affaires occultes",
      description:
        "Votre expérience dans le domaine occulte n'est plus à démontrer. Vous avez dédié votre vie à l'étude des autres mondes et avez même, malgré vous, rencontré certaines monstruosités.",
      bonus: "+2 magie",
      applyBonus: { attribute: "Magie", value: 2 },
    },
    mercenaire: {
      title: "Ancien mercenaire",
      description: "Vous avez passé des années sur les champs de bataille, vendant vos services au plus offrant. Cette expérience vous a endurci et vous a appris à survivre dans les situations les plus dangereuses.",
      bonus: "+2 force",
      applyBonus: { attribute: "Force", value: 2 }, // exemple
    },
    detective: {
      title: "Détective à la retraite",
      description: "Après une longue carrière dans les forces de l'ordre, vous avez développé un sens aigu de l'observation et de la déduction. Rien n'échappe à votre regard perçant.",
      bonus: "+2 perception.",
      applyBonus: { attribute: "Perception", value: 2 },
    },
    chasseur: {
      title: "Chasseur alpin",
      description: "Les montagnes n'ont plus de secrets pour vous. Vous connaissez chaque sentier, chaque refuge, et savez comment survivre dans les conditions les plus extrêmes.",
      bonus: "+2 agilité",
      applyBonus: { attribute: "Agilité", value: 2 },
    },
    vagabond: {
      title: "Vagabond",
      description: "Vous avez parcouru le monde sans attaches, apprenant à vous adapter à toutes les situations. Cette liberté vous a donné une grande flexibilité d'esprit.",
      bonus: "+2 endurance.",
      applyBonus: { attribute: "Endurance", value: 2 },
    },
    scientifique: {
      title: "Scientifique",
      description: "Votre approche méthodique et votre soif de connaissance vous permettent d'analyser les situations les plus complexes avec logique et précision.",
      bonus: "+2 intelligence.",
      applyBonus: { attribute: "Intelligence", value: 2 },
    }
  }

  const handleConfirm = () => {
    if (!player) return

    const { attribute, value } = capacities[selectedCapacity].applyBonus
    const updatedPlayer = {
      ...player,
      attributes: {
        ...player.attributes,
        [attribute]: (player.attributes[attribute] || 0) + value,
      },
    }

    setPlayer(updatedPlayer)
    goTo("jeu") // ou l’étape suivante après compétences
  }

  return (
    <div className="hero-creator-overlay">
      <div className="hero-creator-modal">
        <button className="close-button" onClick={() => goTo("creer")}>×</button>

        <div className="header">
          <h1 className="main-title">Créer un héros</h1>
          <h2 className="subtitle">Capacité Spéciale</h2>
          <p className="instruction">Choisissez une capacité spéciale</p>
        </div>

        <div className="content">
          <div className="capacity-list">
            {Object.entries(capacities).map(([key, capacity]) => (
              <button
                key={key}
                className={`capacity-item ${selectedCapacity === key ? "active" : ""}`}
                onClick={() => setSelectedCapacity(key)}
              >
                {capacity.title}
              </button>
            ))}
          </div>

          <div className="description-panel">
            <p className="description-text">{capacities[selectedCapacity].description}</p>
            <p className="bonus-text">{capacities[selectedCapacity].bonus}</p>
          </div>
        </div>

        <button className="confirm-button" onClick={handleConfirm}>
          C`&apos`est parti
        </button>
      </div>
    </div>
  )
}
