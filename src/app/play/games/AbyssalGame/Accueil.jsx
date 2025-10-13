'use client'
import "./accueilaustralabyss.css"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Accueil({ goTo }) {
  const [hasSave, setHasSave] = useState(false)
  const [saveData, setSaveData] = useState(null)
  const [loading, setLoading] = useState(true)

  // ⚡ Vérifie s'il existe une sauvegarde
  useEffect(() => {
    const fetchSave = async () => {
      try {
        const userStr = sessionStorage.getItem("user")
        const username = userStr ? JSON.parse(userStr).username : null
        if (!username) return setLoading(false)

        const res = await fetch("/api/game/load", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        })

        if (!res.ok) {
          console.warn("Aucune sauvegarde trouvée.")
          setHasSave(false)
          return
        }

        const data = await res.json()

        // ✅ On vérifie la structure renvoyée par ton backend
        if (data.success && data.save) {
          setHasSave(true)
          setSaveData(data.save) // on garde l’objet complet { hero, currentStep }
        } else {
          setHasSave(false)
        }
      } catch (err) {
        console.error("❌ Erreur vérification sauvegarde:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchSave()
  }, [])

  // 🕹️ Quand le joueur clique sur "Continuer"
  const handleContinue = () => {
    if (!saveData) return
    const hero = saveData.hero
    const currentStep = saveData.currentStep || "jeu"

    console.log("➡️ Reprise partie depuis:", currentStep, hero)
  }
  if (loading) {
    return (
      <div className="game-container1">
        <div className="game-background">
          <div className="game-content">
            <h1 className="game-title">Chargement...</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="game-container1">
      <div className="game-background">
        <div className="game-content">
          <h1 className="game-title">Nouvelle Partie</h1>

          <div className="button-container">
            <button className="game-button" onClick={() => goTo("choix")}>
              Commencer aventure
            </button>

            <button
              className={`game-button ${!hasSave ? "inactif" : ""}`}
              onClick={handleContinue}
              disabled={!hasSave}
            >
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
