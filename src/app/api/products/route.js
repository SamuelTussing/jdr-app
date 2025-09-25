//RECUPERER LES JEUX EXISTANT POUR LES AFFICHER DANS LA PAGE D4ACCUEIL DYNAMIQUEMENT

import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product" // on crée ce modèle mongoose

export async function GET() {
  try {
    await connectDB()
    const products = await Product.find({}).select("title subtitle image slug") // on récupère juste les infos nécessaires
    return NextResponse.json(products)
  } catch (error) {
    console.error("Erreur API GET /products:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
