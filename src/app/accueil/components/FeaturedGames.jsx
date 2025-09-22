import Image from "next/image"
import { useRouter } from "next/navigation"

const featuredGames = [
  {
    id: 1,
    title: "Dragon Academy",
    subtitle: "JDR Medieval Fantasy",
    image: "/dragon.jpg",
  },
  {
    id: 2,
    title: "The Storm",
    subtitle: "JDR en haute altitude",
    image: "/storm.jpg",
  },
  {
    id: 3,
    title: "Abyss",
    subtitle: "Affrontez des horreurs millénaires",
    image: "/abyss.jpg",
  },
]

export default function FeaturedGames() {
    const router = useRouter()

    const handleImageClick = (gameName) => {
      console.log(`Clicked on ${gameName}`)
      if (gameName === "Abyss") {
        router.push("/accueiljeu1")
      }
    }


  return (
    <section className="featured-section">
      <div className="section-container">
        <h2 className="section-title">Les meilleurs JDR aux meilleurs prix</h2>
        <div className="featured-grid">
          {featuredGames.map((game) => (
            <div key={game.id} className="featured-card">
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
