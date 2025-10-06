import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  try {
    await connectDB()
    const { title, pageId } = await req.json()

    console.log("📩 Requête getPage:", { title, pageId })

    // Cherche par titre d'abord
    let story = await Story.findOne({ title: title })

    // Si pas trouvé, essaie par _id
    if (!story) {
      console.log("⚠️ Aucune story trouvée par titre, tentative via _id")
      story = await Story.findById(title)
    }

    if (!story) {
      console.log("❌ Story non trouvée du tout")
      return NextResponse.json(
        { success: false, error: "Story not found" },
        { status: 404 }
      )
    }

    const page = story.pages.find((p) => p.id === pageId)
    if (!page) {
      console.log("⚠️ Page introuvable dans la story:", pageId)
      return NextResponse.json(
        { success: false, error: "Page not found" },
        { status: 404 }
      )
    }

    console.log("✅ Page trouvée:", page.id)

    return NextResponse.json({ success: true, page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    )
  }
}
