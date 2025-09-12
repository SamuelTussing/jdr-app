"use client"
import Image from "next/image";
import { useState } from "react"
import "./accueilaustralabyss.css"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function JeuPage() {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState("")

  const startGame = () => {
    if (playerName.trim()) {
      setGameStarted(true)
    } else {
      alert("Veuillez entrer votre nom pour commencer")
    }
  }

  if (gameStarted) {
    return (
      <div className="game-container">
        <div className="game-background">
          <div className="game-content">
            <h1 className="game-title">Bienvenue dans Abysse Austral</h1>
            <div className="game-story">
              <p className="story-text">
                Bonjour {playerName}, vous embarquez dans un voyage mystérieux à travers les terres glacées...
              </p>
              <p className="story-text">Le train s`&apos;`enfonce dans la brume hivernale. Que voulez-vous faire ?</p>

              <div className="button-container">
                <button className="game-button" onClick={() => alert("Vous regardez par la fenêtre...")}>
                  Regarder par la fenêtre
                </button>
                <button className="game-button" onClick={() => alert("Vous explorez le wagon...")}>
                  Explorer le wagon
                </button>
                <button className="game-button" onClick={() => alert("Vous vous reposez...")}>
                  Se reposer
                </button>
                <Link href="/" className="game-button">
                  Retour au menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="game-container">
      <div className="game-background">
        <div className="game-content">
          <h1 className="game-title">Nouvelle Partie</h1>

            <div className="button-container">
              <button className="game-button" onClick={startGame}>
                Commencer aventure
              </button>
              <button className="game-button inactif" onClick={startGame}>
                Continuer
              </button>
              <Link href="/accueil" className="game-button">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}