import WishlistBanner from "./WishlistBanner"
import WishlistHeader from "./WishlistHeader"
import NotificationSettings from "./NotificationSettings"
import WishlistGrid from "./WishlistGrid"

export default function WishlistContent({ games }) {
  return (
    <main className="wishlist-content">
      <WishlistBanner />
      <div className="wishlist-container">
        <WishlistHeader />
        <NotificationSettings />
        <WishlistGrid games={games}/>
      </div>
    </main>
  )
}