// src/app/api/game/save/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("📡 [API] /api/game/save body:", body);

    const { username, hero, currentStep } = body;

    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username manquant" },
        { status: 400 }
      );
    }

    // Construit l'objet $set dynamiquement pour ne rien écraser inutilement
    const setObj = {};
    if (typeof hero !== "undefined") setObj["saves.abyssal.hero"] = hero;
    if (typeof currentStep !== "undefined") setObj["saves.abyssal.currentStep"] = currentStep;

    if (Object.keys(setObj).length === 0) {
      // Rien à mettre à jour
      return NextResponse.json(
        { success: false, error: "Aucun champ à mettre à jour (hero / currentStep absent)" },
        { status: 400 }
      );
    }

    const user = await User.findOneAndUpdate(
      { username },
      { $set: setObj },
      { new: true, upsert: true }
    );

    // Si upsert a créé un document vide (rare), assure-toi qu'on renvoie la structure attendue
    const saved = user?.saves?.abyssal ?? { hero: hero ?? null, currentStep: currentStep ?? "accueil" };

    // Renvoyer la partie sauvegarde mise à jour pour confirmation
    return NextResponse.json({ success: true, player: saved });
  } catch (error) {
    console.error("❌ /api/game/save error:", error);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
