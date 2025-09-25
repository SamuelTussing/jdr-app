import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET(req, { params }) {
  try {
    await connectDB()

    const product = await Product.findOne({ slug: params.slug }).lean()

    if (!product) {
      return NextResponse.json(
        { error: "Produit introuvable" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("❌ Erreur API /products/[slug]:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}