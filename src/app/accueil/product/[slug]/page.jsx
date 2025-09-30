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
  if (!slug) return;

  const fetchData = async () => {
    try {
      console.log("Début du fetch pour le produit :", slug);

      // 1️⃣ Récupérer le produit
      const resProduct = await fetch(`/api/products/${slug}`);
      if (!resProduct.ok) {
        const text = await resProduct.text();
        console.error("Erreur récupération produit :", text);
        throw new Error("Produit introuvable");
      }
      const productData = await resProduct.json();
      console.log("Produit récupéré :", productData);
      setProduct(productData);

      // 2️⃣ Récupérer l'utilisateur depuis sessionStorage
      const user = JSON.parse(sessionStorage.getItem("user"));
      const email = user?.email;
      console.log("Email récupéré depuis sessionStorage :", email);

      if (!email) {
        console.warn("Aucun utilisateur connecté");
        setHasBought(false);
        setLoading(false);
        return;
      }

      // 3️⃣ Récupérer les achats depuis l'API
      const resUser = await fetch(`/api/users/achats`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!resUser.ok) {
        const text = await resUser.text();
        console.error("Erreur récupération achats :", text);
        throw new Error("Impossible de récupérer les achats");
      }

      const userData = await resUser.json();
      console.log("Achats récupérés :", userData.achats);

      const bought = userData.achats?.[slug] || false;
      console.log(`Le jeu ${slug} a été acheté ?`, bought);

      setHasBought(bought);
      setLoading(false);

    } catch (err) {
      console.error("Erreur dans fetchData :", err);
      setHasBought(false);
      setLoading(false);
    }
  };

  fetchData();
}, [slug]);



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
          onPlay={() => {
            console.log("Clicked Play for slug:", slug)
            router.push(`/accueil/product/${slug}`)
          }}
        />

        <ProductInfo product={product} />
        <ProductDescription product={product} />
        <ProductEditions product={product} />
      </main>

      <Footer />
    </div>
  )
}
