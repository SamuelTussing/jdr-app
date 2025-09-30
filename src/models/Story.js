import mongoose from 'mongoose';

const choiceSchema = new mongoose.Schema({
  label: { type: String, required: true },
  nextPage: { type: String, required: true }
});

const pageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  audio: [String],
  choices: [choiceSchema]
});

const storySchema = new mongoose.Schema({
  _id: String, // tu peux aussi laisser MongoDB générer un ObjectId
  title: { type: String, required: true },
  description: { type: String, required: true },
  pages: [pageSchema]
});

// Vérifie si le modèle existe déjà pour éviter les erreurs lors du hot reload (Next.js)
const Story = mongoose.models.Story || mongoose.model('Story', storySchema);

export default Story;
