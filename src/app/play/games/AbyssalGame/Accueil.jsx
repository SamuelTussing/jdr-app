'use client'
import "./accueilaustralabyss.css"
import Link from "next/link"

export default function Accueil({ goTo }) {
  return (
    <div className="game-container1">
      <div className="game-background">
        <div className="game-content">
          <h1 className="game-title">Nouvelle Partie</h1>

          <div className="button-container">
            <button className="game-button" onClick={() => goTo("choix")}>
              Commencer aventure
            </button>
            <button className="game-button inactif">Continuer</button>
            <Link href="/accueil" className="game-button">
              Retour au menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
