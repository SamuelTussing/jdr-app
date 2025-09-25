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
  descriptionLong1: String, // 👈 nouvelle propriété
  descriptionLong2: String, // 👈 nouvelle propriété
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
  featuresList: [String], // 👈 nouvelle propriété
})

// ⚡ éviter de redéfinir le modèle si déjà existant
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema, "products")