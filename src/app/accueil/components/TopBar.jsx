"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"



export default function TopBar() {
    const router = useRouter()

    const handleDisconnectClick = () => {
    sessionStorage.removeItem("user")
    router.replace("/login")
  }

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <Link href="/" className="top-bar-logo">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">U</span>
            </div>
            <span>WetCameltoe</span>
          </Link>
          <div className="top-bar-links">
            <Link href="/help" className="top-bar-link">
              Help ↗
            </Link>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="discount-badge">Get 20% discount with 🪙 100*</div>
          <button className="login-btn">👤 Mon Compte</button>
            <button href="/help" className="top-bar-link" onClick={handleDisconnectClick}>
              Deconnexion
            </button>
        </div>
      </div>
    </div>
  )
}
