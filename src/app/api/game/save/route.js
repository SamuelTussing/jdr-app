import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()

    const { username, hero } = body

    if (!username) {
      return NextResponse.json({ success: false, error: "Username manquant" }, { status: 400 })
    }

    // Mettre à jour la sauvegarde pour jeu1
    const user = await User.findOneAndUpdate(
      { username },
      { $set: { "saves.jeu1": hero } },
      { new: true, upsert: true }
    )

    return NextResponse.json({ success: true, player: user.saves.jeu1 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 })
  }
}