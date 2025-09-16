import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

    // Générer un JWT (ne jamais mettre le mot de passe dedans)
    const token = jwt.sign(
      { id: user._id.toString(), username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    // Supprimer le mot de passe avant envoi
    const { password: _, ...userWithoutPassword } = user.toObject()

    // Réponse avec cookie sécurisé
    const res = NextResponse.json(
      { message: "Connexion réussie", user: userWithoutPassword },
      { status: 200 }
    )

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 1 heure
      path: "/",
    })

    return res
  } catch (error) {
    console.error("Erreur login:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
