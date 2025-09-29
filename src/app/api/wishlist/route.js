import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import Product from "@/models/Product"

// ✅ Récupérer la wishlist d’un user
export async function GET(req) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "userId manquant" }, { status: 400 })
    }

    const user = await User.findById(userId).populate("wishlist.productId")

    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    return NextResponse.json(user.wishlist, { status: 200 })
  } catch (error) {
    console.error("Erreur GET wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

// ✅ Ajouter un produit à la wishlist
export async function POST(req) {
  try {
    await connectDB()

    const body = await req.json()
    const { userId, productId } = body

    if (!userId || !productId) {
      return NextResponse.json({ error: "userId et productId requis" }, { status: 400 })
    }

    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    // Vérifie si déjà dans la wishlist
    const alreadyExists = user.wishlist.some((item) => item.productId.toString() === productId)
    if (alreadyExists) {
      return NextResponse.json({ message: "Produit déjà dans la wishlist" }, { status: 200 })
    }

    user.wishlist.push({ productId })
    await user.save()

    return NextResponse.json({ message: "Produit ajouté à la wishlist" }, { status: 201 })
  } catch (error) {
    console.error("Erreur POST wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

// ✅ Supprimer un produit de la wishlist
export async function DELETE(req) {
  try {
    await connectDB()

    const body = await req.json()
    const { userId, productId } = body

    if (!userId || !productId) {
      return NextResponse.json({ error: "userId et productId requis" }, { status: 400 })
    }

    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })
    }

    user.wishlist = user.wishlist.filter(
      (item) => item.productId.toString() !== productId
    )
    await user.save()

    return NextResponse.json({ message: "Produit retiré de la wishlist" }, { status: 200 })
  } catch (error) {
    console.error("Erreur DELETE wishlist:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
