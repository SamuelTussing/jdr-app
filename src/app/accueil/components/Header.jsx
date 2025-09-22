import Link from "next/link"
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link href="/" className="store-logo">
            WetCameltoe STORE
          </Link>
          <nav className="main-nav">
            <Link href="/games" className="nav-item">
              Jeux ▼
            </Link>
            <Link href="/dlc" className="nav-item">
              DLC ▼
            </Link>
            <Link href="/deals" className="nav-item">
              Promos ▼
            </Link>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search for Games" className="search-input" />
            <span className="search-icon">🔍</span>
          </div>
          <div className="header-actions">
            <Link href="/wishlist" className="action-item">
              ♡ Wishlist
            </Link>
            <Link href="/cart" className="action-item">
              🛒 Panier
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
