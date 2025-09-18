'use client'

import { useState, useEffect } from 'react'
import Accueil from './components/Accueil'
import ChoixPerso from './components/ChoixPersonnage'
import CreerPersonnage from './components/CreerPersonnage'
import ChoixPersoPredef from "./components/ChoisirPersonnagePredef"
import ChoixCompetences from "./components/ChoixCompetences" // si tu l’as déjà

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

  return (
    <div>
      {step === "accueil" && 
        <Accueil onNext={() => setStep("choix")} />}

      {step === "choix" && (
        <ChoixPerso
          onCreate={() => setStep("creer")}
          onChoose={() => setStep("choixpredef")}
          onReturn={() => setStep("accueil")}
        />
      )}

      {step === "creer" && 
        <CreerPersonnage
          onFinish={(hero) => {
            setPlayer(hero)       // stocke le perso dans la page mère
            saveToDB(hero)        // sauvegarde en BDD
            setStep("choixcompetences") // passe à l’étape suivante
          }}
          onReturn={() => setStep("accueil")}
        />
      }

      {step === "choixpredef" && 
        <ChoixPersoPredef
          onFinish={(hero) => {
            setPlayer(hero)
            saveToDB(hero)
            setStep("choixcompetences")
          }}
          onReturn={() => setStep("accueil")}
        />
      )}

      {step === "choixcompetences" && 
        <ChoixCompetences player={player} />
      }
    </div>
  )
}
