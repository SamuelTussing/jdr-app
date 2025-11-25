import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import Product from "@/models/Product"
import { verifyToken } from "@/lib/auth"

// 📌 Récupère la wishlist du user authentifié
export async function GET(req) {
  try {
    await connectDB()

    // 🧠 Vérifie token
    const decoded = verifyToken(req)
    if (!decoded) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const user = await User.findById(decoded.userId).populate("wishlist.productId")

    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    return NextResponse.json(user.wishlist, { status: 200 })
  } catch (error) {
    console.error("Erreur GET wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

// 📌 Ajoute un produit à la wishlist
export async function POST(req) {
  try {
    await connectDB()

    const decoded = verifyToken(req)
    if (!decoded) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { productId } = await req.json()
    if (!productId) {
      return NextResponse.json({ error: "productId requis" }, { status: 400 })
    }

    const user = await User.findById(decoded.userId)
    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    const exists = user.wishlist.some(
      (item) => item.productId.toString() === productId
    )

    if (exists) {
      return NextResponse.json({ message: "Déjà dans la wishlist" }, { status: 200 })
    }

    user.wishlist.push({ productId })
    await user.save()

    return NextResponse.json({ message: "Ajouté à la wishlist" }, { status: 201 })
  } catch (error) {
    console.error("Erreur POST wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

// 📌 Supprime un produit
export async function DELETE(req) {
  try {
    await connectDB()

    const decoded = verifyToken(req)
    if (!decoded) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { productId } = await req.json()
    if (!productId) {
      return NextResponse.json({ error: "productId requis" }, { status: 400 })
    }

    const user = await User.findById(decoded.userId)
    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    user.wishlist = user.wishlist.filter(
      (item) => item.productId.toString() !== productId
    )

    await user.save()

    return NextResponse.json({ message: "Retiré de la wishlist" }, { status: 200 })
  } catch (error) {
    console.error("Erreur DELETE wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
