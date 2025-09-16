import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcrypt"

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("jdr-app")
    const usersCollection = db.collection("users")

    // Vérifie si l'utilisateur existe
    const user = await usersCollection.findOne({ username })
    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Vérifie le mot de passe avec bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 })
    }

    // Ici tu pourrais générer un JWT ou une session
    // Pour le moment on renvoie juste le profil sans le mot de passe
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { message: "Connexion réussie", user: userWithoutPassword },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur login:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
