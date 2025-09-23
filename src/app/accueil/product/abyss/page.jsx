import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductHero from "../../components/ProductHero"
import ProductInfo from "../../components/ProductInfo"
import ProductDescription from "../../components/ProductDescription"
import ProductEditions from "../../components/ProductEditions"
import "./product.css"

export default function ProductPage({ params }) {
  // Mock product data - in real app this would come from API/database
  const product = {
    id: params.id,
    title: "Abyss",
    subtitle: "Standard Edition",
    price: 10,
    originalPrice: 10,
    discount: null,
    releaseDate: "August 30, 2024",
    platforms: ["PC (Digital)", "PS5 (Digital)", "Xbox (Digital)"],
    rating: "T",
    ratingDescription: " Violence, Mild Language",
    genres: ["JDR", "Action/Adventure", "Open World"],
    description:
      "Les communications avec un avant poste situé en Antarctique ont été perdu. Partez en expéditions aux confins de la Terre afin de lever le voile sur les mystères de votre agence.",
    heroImage: "/abyss.jpg",
    screenshots: [
      "/avant-poste.png",
      "/abyss.jpg",
      "/antarctic.webp",
    ],
    languages: [
      { name: "English", interface: true, audio: true, subtitle: true },
      { name: "French", interface: true, audio: true, subtitle: true },
      { name: "German", interface: true, audio: false, subtitle: true },
      { name: "Spanish - Spain", interface: true, audio: false, subtitle: true },
      { name: "Japanese", interface: true, audio: true, subtitle: true },
    ],
  }

  return (
    <div className="product-page">
      <TopBar />
      <Header />

      <main className="product-main">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">...</span>
          <span>Star Wars Outlaws</span>
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
