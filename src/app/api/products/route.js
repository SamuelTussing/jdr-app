// src/app/api/products/route.js
import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET() {
  try {
    await connectDB()
    // ⚠️ vérifie bien que "Product" pointe sur la collection "products"
    const products = await Product.find({})
    return NextResponse.json(products)
  } catch (error) {
    console.error("❌ Erreur API GET /products:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
