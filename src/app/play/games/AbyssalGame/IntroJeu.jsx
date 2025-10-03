"use client"

import "./introjeu.css"

export default function IntroJeu({ player, goTo }) {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">Bienvenue {player?.name || "héros"} !</h1>

        <p>
          <strong>Abyssal</strong> est un jeu interactif dans lequel chacun de vos choix 
          a une conséquence sur le déroulé de l'aventure.
        </p>

        <p>
          Votre héros possède des compétences qui lui sont uniques et qui lui permettront 
          de surmonter les épreuves qui l'attendent.
        </p>

        <p>
          Certains choix nécessitent un <strong>lancé de dé à 20 faces (d20)</strong>.  
          Pas de panique, les lancés de dés sont gérés automatiquement par l'application.
        </p>

        <p>
          Par exemple, vous pouvez apercevoir ce type de choix :  
          <em>"Fouiller la zone (PER 15)"</em>  
          → Cela signifie que pour réaliser cette action, le joueur doit réussir un test 
          de <strong>Perception</strong> avec une difficulté de <strong>15</strong>.
        </p>

        <p>
            L'aventure prendra fin prématurément si le joueur voit ses points de vie atteindre 0 ce qui résulte en une <strong>mort</strong> ou si les points d'horreur
            atteingnent leur maximum, le héros devient alors <strong>dément</strong>.
        </p>

        <p>
          L'application lance alors un d20, ajoute la valeur de Perception de votre héros, 
          et compare le total à la difficulté :  
          <br />
          • Si le résultat est <strong>≥ 15</strong> → le test est <span className="success">réussi</span>.  
          <br />
          • Si le résultat est <strong>&lt; 15</strong> → le test est <span className="fail">échoué</span>.
        </p>

        <p>
            Le jeu possède un système de sauvegarde automatique vous permettant de reprendre l'aventure plus tard.
            Nous vous conseillons de vous munir d'un crayon et d'une feuille afin de dessiner une carte au fil de la partie afin
            de ne pas vous perdre.
        </p>

        <div className="intro-actions">
          <button className="intro-button" onClick={() => goTo("jeu")}>
            Commencer l'aventure
          </button>
        </div>
      </div>
    </div>
  )
}
