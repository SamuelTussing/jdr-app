import mongoose from 'mongoose';

const choiceSchema = new mongoose.Schema({
  label: { type: String, required: true },
  nextPage: { type: String, required: true }
});

const pageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  img: { type: String, default: "" }, // 🖼️ nouvelle propriété image
  audio: [String],
  choices: [choiceSchema]
});

const storySchema = new mongoose.Schema({
  _id: String, // ou laisse Mongo générer un ObjectId
  title: { type: String, required: true },
  description: { type: String, required: true },
  pages: [pageSchema]
});

// ✅ Évite les conflits en hot reload (Next.js)
const Story = mongoose.models.Story || mongoose.model('Story', storySchema);

export default Story;
