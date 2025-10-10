import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  try {
    await connectDB()
    const { title, pageId, choiceLabel, playerStats } = await req.json()

    // 🔍 Chercher l’histoire
    const story = await Story.findOne({ slug: title })
    if (!story) {
      return NextResponse.json({ success: false, error: "Story not found" }, { status: 404 })
    }

    // 📖 Trouver la page et le choix
    const page = story.pages.find(p => p.id === pageId)
    if (!page) {
      return NextResponse.json({ success: false, error: "Page not found" }, { status: 404 })
    }

    const choice = page.choices.find(c => c.label === choiceLabel)
    if (!choice) {
      return NextResponse.json({ success: false, error: "Choice not found" }, { status: 404 })
    }

    // 🎲 Lancer le dé
    const d20 = Math.floor(Math.random() * 20) + 1
    const stat = playerStats?.agilite || 0
    const totalRoll = d20 + stat

    // 🧭 Aller à la prochaine page (pour l’instant sans succès/échec complexe)
    const nextPageId = choice.nextPage
    const nextPage = story.pages.find(p => p.id === nextPageId)

    if (!nextPage) {
      return NextResponse.json({ success: false, error: "Next page not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      page: nextPage,
      d20,
      stat,
      roll: totalRoll,
    })
  } catch (err) {
    console.error("❌ nextPage error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
