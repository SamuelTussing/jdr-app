import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  console.log("📡 [API] getPage called")
  try {
    await connectDB()
    const { slug, pageId } = await req.json()

    // On suppose que slug === _id dans ta DB (ex: "story1")
    const story = await Story.findById(slug)
    if (!story) {
      console.error("❌ Story not found for slug:", slug)
      return NextResponse.json(
        { success: false, error: "Story not found" },
        { status: 404 }
      )
    }

    const page = story.pages.find((p) => p.id === pageId)
    if (!page) {
      console.error("❌ Page not found for pageId:", pageId)
      return NextResponse.json(
        { success: false, error: "Page not found" },
        { status: 404 }
      )
    }

    console.log("✅ Page trouvée :", page.id)
    return NextResponse.json({ success: true, page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
