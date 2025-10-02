"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import AbyssalGame from "../games/AbyssalGame/AbyssalGame";



export default function PlayPage() {
  const { slug } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchGame = async () => {
      try {
        const res = await fetch(`/api/products/${slug}`)
        if (!res.ok) throw new Error("Jeu introuvable")
        const data = await res.json()
        setGame(data)
      } catch (err) {
        console.error("Erreur lors du chargement du jeu:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [slug])

  if (loading) return <div>Chargement du jeu...</div>
  if (!game) return <div>Jeu introuvable</div>

  // Mapping slug -> composant du jeu
  const renderGame = () => {
    switch (slug) {
      case "dragon-academy":
        return <DragonAcademyGame data={game} />
      case "storm":
        return <StormGame data={game} />
      case "abyssal":
        return <AbyssalGame data={game} />
      default:
        return <div>🚧 Jeu non encore implémenté : {slug}</div>
    }
  }

  return (
    <main className="play-page">
      <h1>{game.title}</h1>
      {renderGame()}
    </main>
  )
}
