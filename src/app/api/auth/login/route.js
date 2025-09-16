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

    // Générer le JWT
    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET manquant dans les variables d'environnement")
      return NextResponse.json({ error: "Erreur de configuration" }, { status: 500 })
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    // Définir un cookie HttpOnly
    const res = NextResponse.json({ message: "Connexion réussie" }, { status: 200 })
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
      path: "/",
    })

    return res
  } catch (error) {
    console.error("❌ Erreur login:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
