import { useState } from "react"

export default function CreerPersonnage({ onFinish }) {
  const [name, setName] = useState("")
  const [force, setForce] = useState(5)

  const handleSubmit = () => {
    if (!name.trim()) return alert("Entrez un nom")
    // ici tu pourrais sauvegarder le perso
    onFinish({ name, force })
  }

  return (
    <div>
      <h2>Créer un personnage</h2>
      <input placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={force} onChange={(e) => setForce(parseInt(e.target.value))} />
      <button onClick={handleSubmit}>Valider</button>
    </div>
  )
}