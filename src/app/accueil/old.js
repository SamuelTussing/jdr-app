"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import "./accueil.css"

export default function AccueilPage() {
  const router = useRouter()
  const [pseudo, setPseudo] = useState("Joueur") // valeur par défaut

  // Récupère le username depuis sessionStorage côté client
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.username) setPseudo(user.username)
    }
  }, [])

  const handleDisconnectClick = () => {
    sessionStorage.removeItem("user")
    router.replace("/login")
  }

  const handleImageClick = (gameName) => {
    console.log(`Clicked on ${gameName}`)
    router.push("/accueiljeu1")
  }

  const handleOptionsClick = () => console.log("Options clicked")
  const handlePlayerInfoClick = () => console.log("Infos joueur clicked")

  return (
    <div className="container">
      <header className="header">
        <div className="welcome">Bienvenue : {pseudo}</div>
        <button className="disconnectBtn" onClick={handleDisconnectClick}>
          Déconnexion
        </button>
      </header>

      <main className="main">
        <h1 className="title">JDR Library</h1>

        <div className="gamesGrid">
          <div className="gameCard" onClick={() => handleImageClick("The Austral Abyss")}>
            <Image src="/abyss.jpg" alt="The Austral Abyss" width={200} height={200} />
            <div className="gameTitle">The Austral Abyss</div>
          </div>

          <div className="gameCard indisponible" onClick={() => handleImageClick("Dragon Academy")}>
            <Image src="/dragon.jpg" alt="Dragon Academy" width={200} height={200} />
            <div className="gameTitle">Dragon Academy</div>
          </div>

          <div className="gameCard indisponible" onClick={() => handleImageClick("Storms")}>
            <Image src="/storm.jpg" alt="Storms" width={200} height={200} />
            <div className="gameTitle">Storms</div>
          </div>
        </div>

        <div className="bottomButtons">
          <button className="actionBtn" onClick={handleOptionsClick}>Options</button>
          <button className="actionBtn" onClick={handlePlayerInfoClick}>Infos joueur</button>
        </div>
      </main>
    </div>
  )
}
