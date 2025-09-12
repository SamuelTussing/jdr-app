'use client'

import { useState } from 'react'
import Accueil from './components/Accueil'
import ChoixPerso from './components/ChoixPersonnage'
import CreerPersonnage from './components/CreerPersonnage'

/*PAGE MERE POUR LE JEU */

export default function JeuPage() {
  const [step, setStep] = useState("accueil")

  return (
    <div>
      {step === "accueil" && <Accueil onNext={() => setStep("choix")} />}

      {step === "choix" && (
        <ChoixPerso
          onCreate={() => setStep("creer")}
          onChoose={() => console.log("Choisir un perso existant")}
          onReturn={() => setStep("accueil")}
        />
      )}

      {step === "creer" && <CreerPersonnage onFinish={() => setStep("jeu")} />}
    </div>
  )
}