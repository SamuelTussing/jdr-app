import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET(req, { params }) {
  try {
    console.log("🟡 API /products/[slug] appelée")

    console.log("🟡 PARAMS REÇUS :", params)

    const { slug } = params || {}
    console.log("🟡 SLUG REÇU :", slug, "| type:", typeof slug)

    if (!slug) {
      console.log("🔴 SLUG MANQUANT")
      return NextResponse.json(
        { error: "Slug manquant" },
        { status: 400 }
      )
    }

    await connectDB()
    console.log("🟢 MongoDB connecté")

    const normalizedSlug = slug.trim().toLowerCase()
    console.log("🟡 SLUG NORMALISÉ :", normalizedSlug)

    const product = await Product.findOne({
      slug: normalizedSlug
    })

    console.log("🟡 PRODUIT TROUVÉ :", product)

    if (!product) {
      console.log("🔴 PRODUIT INTROUVABLE POUR SLUG :", normalizedSlug)
      return NextResponse.json(
        { error: "Produit introuvable" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)

  } catch (error) {
    console.error("❌ ERREUR API /products/[slug] :", error)
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    )
  }
}
