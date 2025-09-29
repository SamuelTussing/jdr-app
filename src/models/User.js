import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    achats: {
      jeu1: { type: Boolean, default: false },
      jeu2: { type: Boolean, default: false },
    },
    wishlist: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // référence à ta collection Product
        },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", UserSchema)
