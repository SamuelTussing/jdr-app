import GameCard from "./GameCard"

export default function WishlistGrid({games}) {


  return (
    <div className="wishlist-grid">
      {games.length === 0 ? (
        <p>Aucun jeu dans votre wishlist.</p>
      ) : (
        games.map((game, idx) => <GameCard key={idx} game={game.productId} />)
      )}
    </div>
  )
}
