"use client"
import Image from "next/image";
import { useState } from "react"
import "./accueil.css"
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter()
  const [pseudo] = useState("$pseudo")

  const handleImageClick = (gameName) => {
    console.log(`Clicked on ${gameName}`)
    // Ajoutez ici la logique de navigation ou d'action
    router.push('/accueiljeu1') // redirige vers la page d'accueil
  }

  const handleOptionsClick = () => {
    console.log("Options clicked")
    // Ajoutez ici la logique pour les options
  }

  const handlePlayerInfoClick = () => {
    console.log("Infos joueur clicked")
    // Ajoutez ici la logique pour les infos joueur
  }


    const handleDisconnectClick = async () => {
      console.log("Déconnexion clicked")
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="welcome">Bienvenue : {pseudo}</div>
        <button className="disconnectBtn" type="submit" onClick={handleDisconnectClick}>
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

          <div className="gameCard indisponible" onClick={() => handleImageClick("Dragon Academy")}>
            <Image src="/dragon.jpg" alt="Dragon Academy" className="gameImage" width={200} height={200} />
            <div className="gameTitle">Dragon Academy</div>
          </div>

          <div className="gameCard indisponible" onClick={() => handleImageClick("Storms")}>
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