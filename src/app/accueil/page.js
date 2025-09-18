"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import "./accueil.css"

export default function Home() {
  const router = useRouter()
  const [pseudo, setPseudo] = useState("")
  const [loading, setLoading] = useState(true)

  // Vérifie si l'utilisateur est connecté via sessionStorage
  useEffect(() => {
    const userData = sessionStorage.getItem("user")

    if (!userData) {
      router.push("/login") // Pas de user → retour login
      return
    }

    try {
      const parsedUser = JSON.parse(userData)
      setPseudo(parsedUser.username || "Joueur")
      setLoading(false)
    } catch (err) {
      console.error("Erreur parsing user sessionStorage:", err)
      sessionStorage.removeItem("user")
      router.push("/login")
    }
  }, [router])

  // Gestion des clics sur les jeux
  const handleImageClick = (gameName) => {
    console.log(`Clicked on ${gameName}`)
    router.push("/accueiljeu1") // redirige vers la page du jeu
  }

  const handleOptionsClick = () => console.log("Options clicked")
  const handlePlayerInfoClick = () => console.log("Infos joueur clicked")

  // Déconnexion
  const handleDisconnectClick = () => {
    sessionStorage.clear() // On vide la session côté client
    router.push("/login")
  }

  if (loading) return <div>Chargement...</div>

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

        {/* Bottom Buttons */}
        <div className="bottomButtons">
          <button className="actionBtn" onClick={handleOptionsClick}>Options</button>
          <button className="actionBtn" onClick={handlePlayerInfoClick}>Infos joueur</button>
        </div>
      </main>
    </div>
  )
}
