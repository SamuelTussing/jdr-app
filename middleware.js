import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export function middleware(req) {
  const token = req.cookies.get("token")?.value

  // Si pas de token → redirection vers login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  try {
    // Vérifier le JWT
    jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.next()
  } catch (err) {
    console.error("JWT invalide:", err)
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

// Choisis les routes protégées
export const config = {
  matcher: [
    "/accueil/:path*",   // protège /accueil et ses sous-routes
    "/accueiljeu1/:path*", // protège /accueiljeu1
  ],
}
