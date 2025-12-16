import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export function middleware(req) {
  const token = req.cookies.get("auth_token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/admin_login", req.url))
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/admin_login", req.url))
  }
}

export const config = {
  matcher: ["/adminWorld/:path*"],
}
