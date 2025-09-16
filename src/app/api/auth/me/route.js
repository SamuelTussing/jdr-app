import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value
    if (!token) return NextResponse.json({ user: null })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.json({ user: { username: decoded.username, userId: decoded.userId } })
  } catch (err) {
    console.error("Erreur /auth/me :", err)
    return NextResponse.json({ user: null })
  }
}
