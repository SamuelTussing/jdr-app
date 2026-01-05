import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import User from "@/models/User"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export async function GET(req, { params }) {
  try {
    await connectDB()

    // 🔐 Lire le token depuis le cookie
    const token = req.cookies.get("auth_token")?.value

    if (!token) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      )
    }

    // 🔓 Déchiffrement du token
    let decoded
    try {
      decoded = jwt.verify(token, JWT_SECRET)
    } catch {
      return NextResponse.json(
        { error: "Token invalide" },
        { status: 401 }
      )
    }

    const { slug } = params

    // 🔎 Récupérer le user complet
    const user = await User.findById(decoded.userId)

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur introuvable" },
        { status: 404 }
      )
    }


    // 🎮 Retourner les données du jeu
    const product = await Product.findOne({ slug })
    if (!product) {
      return NextResponse.json(
        { error: "Produit introuvable" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)

  } catch (error) {
    console.error("❌ Erreur API GET /products/[slug]:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
