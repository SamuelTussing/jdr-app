'use client'

import "./choixperso.css"

export default function ChoixPerso({ goTo }) {
  return (
    <div className="container2">
      <div className="content2">
        <h1 className="title2">Choisissez votre héros</h1>

        <div className="buttonGroup">
          <button 
            className="chooseButton" 
            onClick={() => goTo("creer")} 
          >
            Créer un héros
          </button>

          <button 
            className="chooseButton" 
            onClick={() => goTo("choixpredef")}
          >
            Choisir un héros prédéfini
          </button>
        </div>

        <button 
          className="returnButton" 
          onClick={() => goTo("accueil")}
        >
          Retour
        </button>
      </div>
    </div>
  )
}
