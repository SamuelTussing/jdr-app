import TopBar from "../accueil/components/TopBar"
import Header from "../accueil/components/Header"
import WishlistContent from "../accueil/components/WishlistContent"
import "../accueil/accueil.css"
import "./wishlist.css"

export default function WishlistPage() {
  return (
    <div className="wishlist-page">
      <TopBar />
      <Header />
      <WishlistContent />
    </div>
  )
}
