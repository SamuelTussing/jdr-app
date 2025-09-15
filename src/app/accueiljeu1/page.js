'use client'

import { useState } from 'react'
import Accueil from './components/Accueil'
import ChoixPerso from './components/ChoixPersonnage'
import CreerPersonnage from './components/CreerPersonnage'
import ChoixPersoPredef from "./components/ChoisirPersonnagePredef"

/*PAGE MERE POUR LE JEU */

export default function JeuPage() {
  const [step, setStep] = useState("accueil")

  return (
    <div>
      {step === "accueil" && 
      <Accueil 
      onNext={() => setStep("choix")}
      />}

      {step === "choix" && (
        <ChoixPerso
          onCreate={() => setStep("creer")}
          onChoose={() => setStep("choixpredef")}
          onReturn={() => setStep("accueil")}
        />
      )}

      {step === "creer" && 
      <CreerPersonnage
      onFinish={() => setStep("jeu")} 
      onReturn={() => setStep("accueil")}
      />}

      {step === "choixpredef" && 
      <ChoixPersoPredef
      onFinish={() => setStep("jeu")} 
      onReturn={() => setStep("accueil")}
      />}
    </div>
  )
}