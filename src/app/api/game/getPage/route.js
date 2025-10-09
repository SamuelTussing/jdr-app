import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true, msg: "✅ route /api/game/getPage works" });
}