import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req) {
  try {
    const { username, password } = await req.json()
    if (!username || !password) return NextResponse.json({ error: "Champs manquants" }, { status: 400 })

    const db = await connectDB()
    const User = db.models.User || db.model(
      "User",
      new db.Schema({
        username: String,
        password: String,
        email: String,
        achats: { jeu1: Boolean, jeu2: Boolean }
      }),
      "users"
    )

    const user = await User.findOne({ username })
    if (!user) return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 })

    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET manquant")

    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "7d" })

    const res = NextResponse.json({ message: "Connexion réussie" })
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return res
  } catch (error) {
    console.error("❌ Erreur login:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
