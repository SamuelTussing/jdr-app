// pages/api/game/getPage.js
import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    await connectDB()
    const { title, pageId } = req.body
    const story = await Story.findOne({ title })
    if (!story) return res.status(404).json({ error: "Story not found" })

    const page = story.pages.find((p) => p.id === pageId)
    if (!page) return res.status(404).json({ error: "Page not found" })

    res.status(200).json({ page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    res.status(500).json({ error: "Server error" })
  }
}
