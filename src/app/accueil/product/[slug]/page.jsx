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
        // Récupérer le produit
        const resProduct = await fetch(`/api/products/${slug}`)
        if (!resProduct.ok) throw new Error("Produit introuvable")
        const productData = await resProduct.json()
        setProduct(productData)

        // Vérifier si l'utilisateur a acheté le jeu
        const resUser = await fetch(`/api/users/achats`)
        if (!resUser.ok) throw new Error("Impossible de récupérer les achats")
        const userData = await resUser.json()
        if (userData.achats && userData.achats[slug]) {
          setHasBought(userData.achats[slug])
        } else {
          setHasBought(false)
        }

        setLoading(false)
      } catch (err) {
        console.error(err)
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

        <ProductHero product={product} />

        <div className="product-actions">
          {hasBought ? (
            <button
              className="btn-play"
              onClick={() => router.push(`/jdr/${slug}`)}
            >
              Jouer
            </button>
          ) : (
            <button className="btn-buy">Acheter</button>
          )}

          <button className="btn-wishlist">Wishlist</button>
        </div>

        <ProductInfo product={product} />
        <ProductDescription product={product} />
        <ProductEditions product={product} />
      </main>

      <Footer />
    </div>
  )
}
