"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductHero from "../../components/ProductHero"
import ProductInfo from "../../components/ProductInfo"
import ProductDescription from "../../components/ProductDescription"
import ProductEditions from "../../components/ProductEditions"
import "./product.css"

export default function ProductPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [hasBought, setHasBought] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchData = async () => {
      try {
        // 1️⃣ Récupérer le produit
        const resProduct = await fetch(`/api/products/${slug}`)
        if (!resProduct.ok) throw new Error("Produit introuvable")
        const productData = await resProduct.json()
        setProduct(productData)

        // 2️⃣ Récupérer l'utilisateur et ses achats depuis sessionStorage
        const email = sessionStorage.getItem("email")
        if (!email) {
          setHasBought(false)
          setLoading(false)
          return
        }

        const resUser = await fetch(`/api/users/achats`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })

        if (!resUser.ok) throw new Error("Impossible de récupérer les achats")
        const userData = await resUser.json()

        setHasBought(userData.achats?.[slug] || false)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setHasBought(false)
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  // Affichage pendant le chargement
  if (loading || !product) {
    return (
      <div className="product-page">
        <TopBar />
        <Header />
        <main className="product-main">
          <div>Chargement...</div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="product-page">
      <TopBar />
      <Header />

      <main className="product-main">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">...</span>
          <span className="breadcrumb-current">{product.title}</span>
        </div>

        <ProductHero
        product={product}
        hasBought={hasBought}
        onPlay={()=>router.push(`accueil/product/${slug}`)} />
        <ProductInfo product={product} />
        <ProductDescription product={product} />
        <ProductEditions product={product} />
      </main>

      <Footer />
    </div>
  )
}
