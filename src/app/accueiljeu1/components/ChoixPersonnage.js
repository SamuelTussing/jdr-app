'use client'

import "./choixperso.css"

export default function ChoixPerso({ onCreate, onChoose, onReturn }) { 
  const handleCreateHero = () => {
    console.log("Créer un héros clicked")
    if (onCreate) onCreate()
  }

  const handleChoosePredefHero = () => {
    console.log("Choisir un héros prédéfini clicked")
    if (onChoose) onChoose()
  }

  const handleReturn = () => {
    console.log("Retour clicked")
    if (onReturn) onReturn()
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Choisissez votre héros</h1>

        <div className="buttonGroup">
          <button className="chooseButton" onClick={handleCreateHero}>
            Créer un héros
          </button>

          <button className="chooseButton" onClick={handleChoosePredefHero}>
            Choisir un héros prédéfini
          </button>
        </div>

        <button className="returnButton" onClick={handleReturn}>
          Retour
        </button>
      </div>
    </div>
  )
}
