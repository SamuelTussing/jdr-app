import { connectDB } from "@/lib/mongodb"
import Story from "@/models/Story"

export async function POST(req) {
  console.log("🧪 Route chargée avec import test")
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  })
}
