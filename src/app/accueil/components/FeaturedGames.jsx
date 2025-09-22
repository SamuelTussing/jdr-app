import Image from "next/image"
import { useRouter } from "next/navigation"

const featuredGames = [
  {
    id: 1,
    title: "Dragon Academy",
    subtitle: "JDR Medieval Fantasy",
    image: "/dragon.jpg",
    slug: "dragon-academy",
  },
  {
    id: 2,
    title: "The Storm",
    subtitle: "JDR en haute altitude",
    image: "/storm.jpg",
    slug: "abyss",
  },
  {
    id: 3,
    title: "Abyss",
    subtitle: "Affrontez des horreurs millénaires",
    image: "/abyss.jpg",
    slug: "abyss",
  },
]

export default function FeaturedGames() {
    const router = useRouter()

  const handleImageClick = (game) => {
    console.log(`Clicked on ${game.title}`)
    if (game.title === "Abyss") {
      router.push("/accueiljeu1") // page spéciale
    } else {
      router.push(`/product/${game.slug}`) // page dynamique
    }
  }


  return (
    <section className="featured-section">
      <div className="section-container">
        <h2 className="section-title">Les meilleurs JDR aux meilleurs prix</h2>
        <div className="featured-grid">
          {featuredGames.map((game) => (
            <div key={game.id}
                className="featured-card"
                onClick={() => handleImageClick(game.title)}>
              <Image src={game.image || "/placeholder.svg"} alt={game.title} className="featured-image"
                width={373} 
                height={420} 
                unoptimized  />
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
