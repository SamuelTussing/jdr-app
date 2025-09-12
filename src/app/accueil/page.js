"use client"
import Image from "next/image";
import { useState } from "react"
import "./accueil.css"


export default function Home() {
  const [pseudo] = useState("$pseudo")

  const handleImageClick = (gameName) => {
    console.log(`Clicked on ${gameName}`)
    // Ajoutez ici la logique de navigation ou d'action
  }

  const handleOptionsClick = () => {
    console.log("Options clicked")
    // Ajoutez ici la logique pour les options
  }

  const handlePlayerInfoClick = () => {
    console.log("Infos joueur clicked")
    // Ajoutez ici la logique pour les infos joueur
  }

  const handleDisconnectClick = () => {
    console.log("Déconnexion clicked")
    // Ajoutez ici la logique de déconnexion
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="welcome">Bienvenue : {pseudo}</div>
        <button className="disconnectBtn" onClick={handleDisconnectClick}>
          Déconnexion
        </button>
      </header>

      {/* Main Content */}
      <main className="main">
        <h1 className="title">JDR Library</h1>

        {/* Game Images */}
        <div className="gamesGrid">
          <div className="gameCard" onClick={() => handleImageClick("The Austral Abyss")}>
            <Image src="/abyss.jpg" alt="The Austral Abyss" className="gameImage" width={200} height={200}/>
            <div className="gameTitle">The Austral Abyss</div>
          </div>

          <div className="gameCard" onClick={() => handleImageClick("Dragon Academy")}>
            <Image src="/dragon.jpg" alt="Dragon Academy" className="gameImage" width={200} height={200} />
            <div className="gameTitle">Dragon Academy</div>
          </div>

          <div className="gameCard" onClick={() => handleImageClick("Storms")}>
            <Image src="/storm.jpg" alt="Storms" className="gameImage" width={200} height={200}/>
            <div className="gameTitle">Storms</div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="bottomButtons">
          <button className="actionBtn" onClick={handleOptionsClick}>
            Options
          </button>
          <button className="actionBtn "onClick={handlePlayerInfoClick}>
            Infos joueur
          </button>
        </div>
      </main>
    </div>
  )
}