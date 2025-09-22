import TopBar from "@/components/TopBar"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductCarousel from "@/components/ProductCarousel"
import FeaturedGames from "@/components/FeaturedGames"
import "./accueil.css"

export default function AccueilPage() {

  const handleDisconnectClick = () => {
    sessionStorage.removeItem("user")
    router.replace("/login")
  }


  return (
    <div className="homepage">
      <TopBar />
      <Header />
      <HeroSection />
      <ProductCarousel />
      <FeaturedGames />
    </div>
  )
}