import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  try {
    await connectDB()
    const { storyId, pageId } = await req.json()

    const story = await Story.findById(storyId)
    if (!story) {
      return NextResponse.json({ success: false, error: "Story not found" }, { status: 404 })
    }

    const page = story.pages.find((p) => p.id === pageId)
    if (!page) {
      return NextResponse.json({ success: false, error: "Page not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
