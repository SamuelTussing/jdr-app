export default function ChoixPersonnage({ onCreer, onExistant }) {
  return (
    <div>
      <h2>Choisir votre personnage</h2>
      <button onClick={onCreer}>Créer un personnage</button>
      <button onClick={onExistant}>Choisir un existant</button>
    </div>
  )
}