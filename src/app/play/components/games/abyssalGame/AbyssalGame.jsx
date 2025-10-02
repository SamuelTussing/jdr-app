'use client'

import { useState, useEffect } from 'react'
import Accueil from './Accueil'
import ChoixPerso from './ChoixPersonnage'
import CreerPersonnage from './CreerPersonnage'
import ChoixPersoPredef from "./ChoisirPersonnagePredef"
import ChoixCompetences from "./ChoixCompetences"
import IntroJeu from "./IntroJeu"   // exemple pour la suite
import GameEngine from "./GameEngine" // le moteur principal

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

        if (!username) return // pas connecté → pas de load

        const res = await fetch("/api/game/load", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        })

        const data = await res.json()

        if (res.ok && data.success && data.hero) {
          setPlayer(data.hero)
          setStep("jeu") // direct vers la partie si une sauvegarde existe
        }
      } catch (err) {
        console.error("❌ Erreur récupération sauvegarde:", err)
      }
    }

    fetchSave()
  }, [])

  // ⚡ Sauvegarde côté serveur
  const saveToDB = async (hero) => {
    try {
      const username = sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user")).username
        : null

      if (!username) return

      const res = await fetch("/api/game/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, hero }),
      })

      const data = await res.json()
      console.log("✅ Sauvegarde réussie:", data)
    } catch (err) {
      console.error("❌ Erreur sauvegarde:", err)
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
      {step === "accueil" && 
        <Accueil onNext={() => goTo("choix")} />}

      {step === "choix" && (
        <ChoixPerso
          onCreate={() => goTo("creer")}
          onChoose={() => goTo("choixpredef")}
          onReturn={() => goTo("accueil")}
        />
      )}

      {step === "creer" && 
        <CreerPersonnage
          onFinish={(hero) => goTo("choixcompetences", hero)}
          onReturn={() => goTo("accueil")}
        />
      }

      {step === "choixpredef" && 
        <ChoixPersoPredef
          onFinish={(hero) => goTo("choixcompetences", hero)}
          onReturn={() => goTo("accueil")}
        />
      }

      {step === "choixcompetences" && 
        <ChoixCompetences 
          player={player} 
          onFinish={() => goTo("intro")} 
        />
      }

      {step === "intro" && 
        <IntroJeu 
          player={player} 
          onNext={() => goTo("jeu")} 
        />
      }

      {step === "jeu" && 
        <GameEngine player={player} />
      }
    </div>
  )
}
