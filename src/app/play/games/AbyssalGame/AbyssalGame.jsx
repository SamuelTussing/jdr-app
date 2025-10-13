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
        const userStr = sessionStorage.getItem("user")
        const username = userStr ? JSON.parse(userStr).username : null
        if (!username) return

        const res = await fetch("/api/game/load", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        })

        const data = await res.json()
        if (res.ok && data.success && data.save) {
          const save = data.save
          console.log("✅ Sauvegarde chargée :", save)

          // 🧩 BONUS : si la sauvegarde indique une page (ex: "page3"), on reprend directement le jeu à cette page
          if (save.currentStep?.startsWith("page")) {
            setStep("jeu")
            setPlayer({ ...save.hero, currentPage: save.currentStep })
          } else {
            setStep(save.currentStep || "accueil")
            setPlayer(save.hero)
          }
        }
      } catch (err) {
        console.error("❌ Erreur récupération sauvegarde:", err)
      }
    }

    fetchSave()
  }, [])

  // ⚡ Sauvegarde côté serveur (hero + currentStep)
  async function saveToDB(hero, currentStep) {
    try {
      const userStr = sessionStorage.getItem("user")
      const username = userStr ? JSON.parse(userStr).username : null
      if (!username) {
        console.warn("Aucun utilisateur connecté → sauvegarde ignorée")
        return
      }

      console.log("📤 saveToDB payload:", { username, hero, currentStep })

      const res = await fetch("/api/game/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, hero, currentStep }),
      })

      const data = await res.json()
      if (!data.success) {
        console.error("Erreur save:", data.error)
      } else {
        console.log("✅ Hero sauvegardé :", data.player)
      }
    } catch (err) {
      console.error("❌ Erreur de connexion API:", err)
    }
  }

  // ⚡ Fonction centralisée pour changer d'étape et sauvegarder
  const goTo = (newStep, hero = null) => {
    const updatedHero = hero || player
    if (updatedHero) {
      setPlayer(updatedHero)

      // 🧠 Si on est dans le jeu, on sauvegarde la page courante (currentPage)
      const stepToSave =
        newStep === "jeu"
          ? updatedHero.currentPage || "page1"
          : newStep

      saveToDB(updatedHero, stepToSave)
    }

    setStep(newStep)
  }

  return (
    <div>
      {step === "accueil" && <Accueil goTo={goTo} />}
      {step === "choix" && <ChoixPerso goTo={goTo} />}
      {step === "creer" && <CreerPersonnage goTo={goTo} />}
      {step === "choixpredef" && <ChoixPersoPredef goTo={goTo} setPlayer={setPlayer} />}
      {step === "choixcompetences" && <ChoixCompetences player={player} goTo={goTo} />}
      {step === "intro" && <IntroJeu player={player} goTo={goTo} />}
      {step === "jeu" && <GameEngine player={player} goTo={goTo} />}
    </div>
  )
}
