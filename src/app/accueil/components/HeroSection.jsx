import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="autumn-leaves">
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Offre spéciale ! Jusqu'à 50% de remise!</h1>
          <p className="hero-subtitle">10€ offert dès 30€ d'achat avec le code: RENTREE</p>
          <button className="hero-cta">Acheter</button>
          <p className="hero-disclaimer">Offre valable jusqu'au 30 octobre 2025 inclus. Terms and conditions apply.</p>
        </div>
        <div className="hero-images">
          <div className="hero-image">
            <Image src="/action-adventure-game-characters.jpg" alt="Game 1" />
          </div>
          <div className="hero-image">
            <Image src="/fantasy-warrior-game-art.jpg" alt="Game 2" />
          </div>
          <div className="hero-image">
            <Image src="/sci-fi-game-character-with-wings.jpg" alt="Game 3" />
          </div>
        </div>
      </div>
    </section>
  )
}
