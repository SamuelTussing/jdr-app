import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()

    // ⚡ récupérer l'user depuis session (ou token)
    const username = "demoUser" // à remplacer par l’utilisateur connecté

    // mettre à jour la sauvegarde du jeu1
    const user = await User.findOneAndUpdate(
      { username },
      { $set: { "saves.jeu1": body } },
      { new: true, upsert: true }
    )

    return NextResponse.json({ success: true, player: user.saves.jeu1 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 })
  }
}
