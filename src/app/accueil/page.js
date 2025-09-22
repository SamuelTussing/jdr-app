"use client"

import { useState, useEffect } from "react"
import TopBar from "./components/TopBar"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProductCarousel from "./components/ProductCarousel"
import FeaturedGames from "./components/FeaturedGames"
import "./accueil.css"

export default function AccueilPage() {

  const [pseudo, setPseudo] = useState("Joueur")

    useEffect(() => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.username) setPseudo(user.username)
    }
  }, [])


  return (
    <div className="homepage">
      <TopBar pseudo={pseudo}/>
      <Header />
      <HeroSection />
      <ProductCarousel />
      <FeaturedGames />
    </div>
  )
}