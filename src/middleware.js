import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export function middleware(req) {
  try {
    // Récupère le token depuis le cookie
    const token = req.cookies.get("auth_token")?.value

    if (!token) {
      // Pas de token → redirection vers login
      return NextResponse.redirect(new URL("/adminWorld", req.url))
    }

    // Décode le JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Vérifie le rôle admin
    if (decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/admin_login", req.url))
    }

    // Tout est ok → accès autorisé
    return NextResponse.next()

  } catch (err) {
    // Token invalide ou expiré
    return NextResponse.redirect(new URL("/admin_login", req.url))
  }
}

export const config = {
  matcher: ["/adminWorld/:path*"], // protège toutes les pages sous /adminWorld
}
