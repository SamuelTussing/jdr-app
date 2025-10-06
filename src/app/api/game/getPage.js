import Story from "../../../models/Story"
import { connectDB } from "@/lib/mongodb"

export default async function handler(req, res) {
  try {
    await connectDB()
    const { storyId, pageId } = req.body

    const story = await Story.findById(storyId)
    if (!story) return res.status(404).json({ error: "Story not found" })

    const page = story.pages.find((p) => p.id === pageId)
    if (!page) return res.status(404).json({ error: "Page not found" })

    return res.status(200).json({ page })
  } catch (err) {
    console.error("❌ getPage error:", err)
    res.status(500).json({ error: "Server error" })
  }
}
