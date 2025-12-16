import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export async function GET(req) {
  try {
    const token = req.cookies.get("auth_token")?.value

    if (!token) {
      return NextResponse.json({ error: "Non connecté" }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
    }

    // Tout est ok
    return NextResponse.json({ message: "Admin authentifié" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 })
  }
}
