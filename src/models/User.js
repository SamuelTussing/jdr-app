import mongoose from "mongoose"

const HeroSchema = new mongoose.Schema(
  {
    name: String,
    attributes: {
      Force: Number,
      Perception: Number,
      Endurance: Number,
      Agilite: Number,
      Intelligence: Number,
      Magie: Number,
    },
    calculatedAttributes: {
      "Points de vie max": Number,
      "Horreur max": Number,
    },
    // éventuellement la capacité choisie
    capacity: String,
  },
  { _id: false } // pas besoin d’un _id pour chaque hero embedded
)

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },

    achats: {
      abyssal: { type: Boolean, default: false },
      storm: { type: Boolean, default: false },
    },

    wishlist: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        addedAt: { type: Date, default: Date.now },
      },
    ],

    // 👉 Ajout du champ saves
    saves: {
      abyssal: HeroSchema, // ton perso pour jeu1
      storm: HeroSchema, // tu peux prévoir d'autres jeux
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", UserSchema)
