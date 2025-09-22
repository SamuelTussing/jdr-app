import Image from "next/image"

const featuredGames = [
  {
    id: 1,
    title: "For Honor",
    subtitle: "JDR Medieval Fantasy",
    image: "/for-honor-medieval-warrior-combat-game.jpg",
  },
  {
    id: 2,
    title: "The Hunter",
    subtitle: "Viking adventure epic",
    image: "/assassins-creed-valhalla-viking-adventure.jpg",
  },
  {
    id: 3,
    title: "Elf : The Gate",
    subtitle: "ULTIMATE EDITION",
    image: "/avatar-frontiers-of-pandora-ultimate-edition.jpg",
  },
]

export default function FeaturedGames() {
  return (
    <section className="featured-section">
      <div className="section-container">
        <h2 className="section-title">Les meilleurs JDR aux meilleurs prix</h2>
        <div className="featured-grid">
          {featuredGames.map((game) => (
            <div key={game.id} className="featured-card">
              <Image src={game.image || "/placeholder.svg"} alt={game.title} className="featured-image" />
              <div className="featured-overlay">
                <h3 className="featured-title">{game.title}</h3>
                <p className="featured-subtitle">{game.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
