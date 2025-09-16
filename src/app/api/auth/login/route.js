import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    // Connexion mongoose
    const db = await connectDB()
    const User = db.model("User", new db.Schema({
      username: String,
      password: String,
      email: String,
      achats: {
        jeu1: Boolean,
        jeu2: Boolean,
      },
    }), "users")

    // Vérifier si l’utilisateur existe
    const user = await User.findOne({ username })
    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 })
    }

    // Retirer le mot de passe du retour
    const { password: _, ...userWithoutPassword } = user.toObject()

    return NextResponse.json(
      { message: "Connexion réussie", user: userWithoutPassword },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur login:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
