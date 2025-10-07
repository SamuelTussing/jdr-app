// app/api/game/getPage/route.js
import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  try {
    await connectDB()
    const { slug, pageId } = await req.json()

    // 🔍 Trouve l'histoire correspondant au slug (title = slug)
    const story = await Story.findOne({ title: slug })
    if (!story) {
      return NextResponse.json({ success: false, error: "Story not found" }, { status: 404 })
    }

    // 🧭 Récupère la page demandée, ou la première si rien n’est précisé
    const page = story.pages.find((p) => p.id === (pageId || "page1"))
    if (!page) {
      return NextResponse.json({ success: false, error: "Page not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
