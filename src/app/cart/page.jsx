"use client"

import TopBar from "../accueil/components/TopBar"
import Header from "../accueil/components/Header"
import Footer from "../accueil/components/Footer"
import CartContent from "../accueil/components/CartContent"
import "./cart.css"

export default function CartPage() {
  return (
    <div>
      <TopBar />
      <Header />
      <CartContent />
      <Footer />
    </div>
  )
}
