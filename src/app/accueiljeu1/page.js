'use client'
import { useState } from "react"
import Accueil from "./components/Accueil"
import ChoixPersonnage from "./components/ChoixPersonnage"
import CreerPersonnage from "./components/CreerPersonnage"

export default function JeuPage() {
  const [step, setStep] = useState("accueil")
  const [player, setPlayer] = useState(null)

  return (
    <div className="game-container">
      {step === "accueil" && <Accueil onStart={() => setStep("choix")} />}
      {step === "choix" && (
        <ChoixPersonnage
          onCreer={() => setStep("creer")}
          onExistant={() => alert("Choisir existant")}
        />
      )}
      {step === "creer" && (
        <CreerPersonnage
          onFinish={(newPlayer) => {
            setPlayer(newPlayer)
            setStep("jeu")
          }}
        />
      )}
      {step === "jeu" && <h2>Bienvenue {player.name} dans le jeu !</h2>}
    </div>
  )
}