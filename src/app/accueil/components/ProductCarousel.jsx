"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
const products = [
  {
    id: 1,
    title: "Offre d'automne ! 50% de remise",
    description: "Offre limitée sur une sélection de jeux",
    image: "/autumn-sale-gaming-promotion.jpg",
    badge: "PROMO",
  },
  {
    id: 2,
    title: "Dragon Academy",
    description: "Devenez dresseur de dragons",
    image: "/dragon.jpg",
  },
  {
    id: 3,
    title: "Abyss",
    description: "Survivrez vous à l'Antarctique ?",
    image: "/abyss.jpg",
  },
  {
    id: 4,
    title: "Storm",
    description: "Une aventure de haut vol",
    image: "/storm.jpg",
  }, 
]

export default function ProductCarousel() {
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
    <section className="product-section">
      <div className="section-container">
        <div className="product-carousel">
          {games.map((game) => (
            <div 
            key={game._id} 
            className="product-card">
              onClick={() => handleImageClick(game)}
              <Image 
              src={game.heroImage || "/placeholder.svg"}
              alt={game.title}
              className="product-image"
                width={280}
                height={160}
                unoptimized
              
              />
              <div className="product-info1">
                <h3 className="product-title">{game.title}</h3>
                <p className="product-description">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
