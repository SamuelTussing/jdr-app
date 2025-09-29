"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function FeaturedGames() {
  const router = useRouter() 
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Erreur fetch products:", err))
  }, [])

  const handleImageClick = (game) => {
    console.log(`Clicked on ${game.title}`)
    if (game.title === "Abyss") {
      router.push("/accueiljeu1") // page spéciale
    } else {
      router.push(`/accueil/product/${game.slug}`) // route dynamique
    }
  }

  if (games.length === 0) {
    return <div>Chargement des jeux...</div>
  }

  return (
    <section className="featured-section">
      <div className="section-container">
        <h2 className="section-title">Les meilleurs JDR aux meilleurs prix</h2>
        <div className="featured-grid">
          {games.map((game) => (
            <div
              key={game._id}
              className="featured-card"
              onClick={() => handleImageClick(game)}
            >
              <Image
                src={game.heroImage || "/placeholder.svg"}
                alt={game.title}
                className="featured-image"
                width={373}
                height={420}
                unoptimized
              />
              <div className="featured-overlay">
                <h3 className="featured-title">{game.title}</h3>
                <p className="featured-subtitle">{game.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
