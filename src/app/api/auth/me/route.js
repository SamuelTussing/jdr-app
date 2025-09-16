// src/app/api/auth/me/route.js
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function GET(req) {
  const token = req.cookies.get("token")?.value
  if (!token) return NextResponse.json({ user: null }, { status: 401 })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.json({ user: { username: decoded.username } })
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
