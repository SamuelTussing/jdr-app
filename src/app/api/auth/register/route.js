import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    const { username, email, password } = await req.json()

    if (!username || !email || !password) {
      return new Response(JSON.stringify({ error: "Tous les champs sont obligatoires" }), { status: 400 })
    }

    await connectDB()
    console.log("📡 Connexion MongoDB active :", mongoose.connection.name)

    // Vérifier si l'email ou le username existe déjà
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Utilisateur déjà existant" }), { status: 400 })
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      achats: { abyssal: false, storm: false }
    })

    await newUser.save()

    return new Response(JSON.stringify({ message: "Utilisateur créé avec succès" }), { status: 201 })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 })
  }
}