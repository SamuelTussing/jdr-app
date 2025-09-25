"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Gauche */}
        <div className="header-left">
          <Link href="/" className="store-logo">
            WetCameltoe STORE
          </Link>

          <nav className="main-nav">
            {/* Jeux */}
            <div className="nav-item-wrapper">
              <button
                className="nav-item"
                onClick={() => toggleMenu("games")}
              >
                Jeux ▼
              </button>
              {openMenu === "games" && (
                <div className="dropdown-menu">
                  <Link href="/games/livres-heros" className="dropdown-item">
                    Livres dont vous êtes le héros
                  </Link>
                  <Link href="/games/campagnes-5e" className="dropdown-item">
                    Campagnes 5e édition
                  </Link>
                  <Link href="/games/one-shots" className="dropdown-item">
                    One Shots
                  </Link>
                </div>
              )}
            </div>

            {/* DLC */}
            <div className="nav-item-wrapper">
              <button
                className="nav-item"
                onClick={() => toggleMenu("dlc")}
              >
                DLC ▼
              </button>
              {openMenu === "dlc" && (
                <div className="dropdown-menu">
                  <Link href="/dlc/packs" className="dropdown-item">
                    Packs de contenu
                  </Link>
                  <Link href="/dlc/bonus" className="dropdown-item">
                    Bonus exclusifs
                  </Link>
                </div>
              )}
            </div>

            {/* Promos */}
            <div className="nav-item-wrapper">
              <button
                className="nav-item"
                onClick={() => toggleMenu("deals")}
              >
                Promos ▼
              </button>
              {openMenu === "deals" && (
                <div className="dropdown-menu">
                  <Link href="/deals/jdr" className="dropdown-item">
                    JDR en promo
                  </Link>
                  <Link href="/deals/dlc" className="dropdown-item">
                    DLC en promo
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Droite */}
        <div className="header-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for Games"
              className="search-input"
            />
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
