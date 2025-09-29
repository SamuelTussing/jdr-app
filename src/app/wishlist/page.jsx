"use client"

import { useEffect, useState } from "react"
import TopBar from "../accueil/components/TopBar"
import Header from "../accueil/components/Header"
import WishlistContent from "./components/WishlistContent"
import "../accueil/accueil.css"
import "./wishlist.css"

export default function WishlistPage() {
  const [wishlistGames, setWishlistGames] = useState([])

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user")) // si tu stockes l'user côté client
    if (!user?._id) return

    fetch(`/api/wishlist?userId=${user._id}`)
      .then((res) => res.json())
      .then((data) => setWishlistGames(data))
      .catch((err) => console.error("Erreur récupération wishlist:", err))
  }, [])

  return (
    <div className="wishlist-page">
      <TopBar />
      <Header />
      <WishlistContent games={wishlistGames} />
    </div>
  )
}
