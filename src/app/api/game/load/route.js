import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()

    const { username } = body

    if (!username) {
      return NextResponse.json({ success: false, error: "Username manquant" }, { status: 400 })
    }

    const user = await User.findOne({ username })

    if (!user || !user.saves?.abyssal) {
      return NextResponse.json({ success: false, error: "Aucune sauvegarde trouvée" }, { status: 404 })
    }

    return NextResponse.json({ success: true, hero: user.saves.abyssal })
  } catch (error) {
    console.error("❌ Erreur load:", error)
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 })
  }
}
