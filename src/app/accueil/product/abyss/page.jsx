import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductHero from "../../components/ProductHero"
import ProductInfo from "../../components/ProductInfo"
import ProductDescription from "../../components/ProductDescription"
import ProductEditions from "../../components/ProductEditions"
import "../product.css"

export default function ProductPage({ params }) {
  // Mock product data - in real app this would come from API/database
  const product = {
    id: params.id,
    title: "Star Wars Outlaws",
    subtitle: "Standard Edition",
    price: 69.99,
    originalPrice: 69.99,
    discount: null,
    releaseDate: "August 30, 2024",
    platforms: ["PC (Digital)", "PS5 (Digital)", "Xbox (Digital)"],
    rating: "T",
    ratingDescription: "Simulated Gambling, Violence, Mild Language",
    genres: ["Shooter", "Action/Adventure", "Open World"],
    description:
      "Play up to 3 days early with Ubisoft+ Premium, the Gold or the Ultimate Edition. Experience the first-ever open world Star Wars™ game and explore distinct locations across the galaxy.",
    heroImage: "/star-wars-outlaws-hero.jpg",
    screenshots: [
      "/star-wars-outlaws-screenshot-1.jpg",
      "/star-wars-outlaws-screenshot-2.jpg",
      "/star-wars-outlaws-screenshot-3.jpg",
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
          <span className="breadcrumb-current">Star Wars Outlaws</span>
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
