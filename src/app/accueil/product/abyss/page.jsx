"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
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
  const [product, setProduct] = useState(null)


  useEffect(() => {
  if (!slug) return
  fetch(`/api/products/${slug}`)
    .then((res) => {
      if (!res.ok) throw new Error("Produit introuvable")
      return res.json()
    })
    .then((data) => setProduct(data))
    .catch((err) => console.error(err))
}, [slug])


  return (
    <div className="product-page">
      <TopBar />
      <Header />

      <main className="product-main">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">...</span>
          <span>{product.title}</span>
          <span className="breadcrumb-separator">...</span>
          <span className="breadcrumb-current">Abyss</span>
        </div>

        <ProductHero product={product} />
        <ProductInfo product={product} />
        <ProductDescription product={product} />
        <ProductEditions product={product} />
      </main>

      <Footer />
    </div>
  )
}
