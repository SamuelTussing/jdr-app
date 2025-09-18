"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import "./accueil.css"

export default function AccueilPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Récupère l'utilisateur depuis sessionStorage
    const storedUser = sessionStorage.getItem("user")
    if (!storedUser) {
      // Pas connecté → redirection vers login
      router.replace("/login")
      return
    }

    setUser(JSON.parse(storedUser))
    setLoading(false)
  }, [router])

  if (loading) return <div>Chargement...</div>

  const handleDisconnectClick = () => {
    sessionStorage.removeItem("user")
    router.replace("/login")
  }

  const handleImageClick = (gameName) => {
    console.log(`Clicked on ${gameName}`)
    router.push("/accueiljeu1") // exemple
  }

  const handleOptionsClick = () => console.log("Options clicked")
  const handlePlayerInfoClick = () => console.log("Infos joueur clicked")

  return (
    <div className="container">
      <header className="header">
        <div className="welcome">Bienvenue : {user.username}</div>
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