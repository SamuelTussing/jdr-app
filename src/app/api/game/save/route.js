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

    // Mettre à jour la sauvegarde pour abyssal
    await User.findOneAndUpdate(
      { username },
      { $set: { "saves.abyssal": hero } },
      { new: true, upsert: true }
    )

    // Renvoyer directement le hero pour éviter undefined
    return NextResponse.json({ success: true, player: hero })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 })
  }
}
