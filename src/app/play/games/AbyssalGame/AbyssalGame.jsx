'use client'

import { useState, useEffect } from 'react'
import Accueil from './Accueil'
import ChoixPerso from './ChoixPersonnage'
import CreerPersonnage from './CreerPersonnage'
import ChoixPersoPredef from "./ChoisirPersonnagePredef"
import ChoixCompetences from "./ChoixCompetences"
import IntroJeu from "./IntroJeu"
import GameEngine from "./GameEngine"

export default function JeuPage() {
  const [step, setStep] = useState("accueil")
  const [player, setPlayer] = useState(null)

  // ⚡ Charger une sauvegarde si elle existe (depuis MongoDB)
  useEffect(() => {
    const fetchSave = async () => {
      try {
        const username = sessionStorage.getItem("user")
          ? JSON.parse(sessionStorage.getItem("user")).username
          : null

        if (!username) return

        const res = await fetch("/api/game/load", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        })

        const data = await res.json()

        if (res.ok && data.success && data.hero) {
          setPlayer(data.hero)
          setStep("jeu")
        }
      } catch (err) {
        console.error("❌ Erreur récupération sauvegarde:", err)
      }
    }

    fetchSave()
  }, [])

  // ⚡ Sauvegarde côté serveur
async function saveToDB(hero) {
  try {
    const userStr = sessionStorage.getItem("user")
    const username = userStr ? JSON.parse(userStr).username : null

    if (!username) {
      console.warn("Aucun utilisateur connecté → sauvegarde ignorée")
      return
    }

    const res = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        hero,
      }),
    })

    const data = await res.json()
    if (!data.success) {
      console.error("Erreur save:", data.error)
    } else {
      console.log("✅ Hero sauvegardé:", data.player)
    }
  } catch (err) {
    console.error("❌ Erreur de connexion API:", err)
  }
}

  // ⚡ Fonction centralisée
  const goTo = (newStep, hero = null) => {
    if (hero) {
      setPlayer(hero)
      saveToDB(hero)
    }
    setStep(newStep)
  }

  return (
    <div>
      {step === "accueil" && <Accueil goTo={goTo} />}
      {step === "choix" && <ChoixPerso goTo={goTo} />}
      {step === "creer" && <CreerPersonnage goTo={goTo} />}
      {step === "choixpredef" && <ChoixPersoPredef goTo={goTo} />}
      {step === "choixcompetences" && <ChoixCompetences player={player} goTo={goTo} />}
      {step === "intro" && <IntroJeu player={player} goTo={goTo} />}
      {step === "jeu" && <GameEngine player={player} />}
    </div>
  )
}
