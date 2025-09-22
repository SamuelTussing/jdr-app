import GameCard from "./GameCard"

export default function WishlistGrid() {
  const wishlistGames = [
    {
      id: 1,
      title: "Avatar: Frontiers of Pandora",
      edition: "Ultimate Edition",
      platform: "PC (Digital)",
      currentPrice: "$32.50",
      originalPrice: "$129.99",
      discount: "-75%",
      image: "/sci-fi-game-character-with-wings.jpg",
      notificationEnabled: true,
    },
    {
      id: 2,
      title: "Star Wars Outlaws",
      edition: "Standard Edition",
      platform: "PC (Digital)",
      currentPrice: "$31.50",
      originalPrice: "$69.99",
      discount: "-55%",
      image: "/action-adventure-game-characters.jpg",
      notificationEnabled: true,
    },
  ]

  return (
    <div className="wishlist-grid">
      {wishlistGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
