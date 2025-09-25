import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  releaseDate: String,
  platforms: [String],
  rating: String,
  ratingDescription: String,
  genres: [String],
  description: String,
  heroImage: String,
  screenshots: [String],
  languages: [
    {
      name: String,
      interface: Boolean,
      audio: Boolean,
      subtitle: Boolean,
    },
  ],
})

// ⚡ éviter de redéfinir le modèle si déjà existant (hot reload Next.js)
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema)
