// Côté API Next.js
import Story from '../../../../models/Story';

export default async function handler(req, res) {
  const { storyId, pageId, choiceLabel, playerStats } = req.body;
  // playerStats = { force, perception, endurance, agilite, intelligence, magie, pv, horreur }

  const story = await Story.findById(storyId);
  const page = story.pages.find(p => p.id === pageId);
  const choice = page.choices.find(c => c.label === choiceLabel);

  // Lancer d20
  const d20 = Math.floor(Math.random() * 20) + 1;

  // Déterminer la statistique utilisée selon le label ou une propriété spécifique
  // Ici par exemple, choix.outcomeStat = "agilite"
  const stat = playerStats.agilite || 0;

  const totalRoll = d20 + stat;

  let nextPageId;
  if (totalRoll <= choice.outcomes.find(o => o.type === "success").chance) {
    nextPageId = choice.outcomes.find(o => o.type === "success").nextPage;
  } else {
    nextPageId = choice.outcomes.find(o => o.type === "failure").nextPage;
  }

  const nextPage = story.pages.find(p => p.id === nextPageId);

  res.status(200).json({ page: nextPage, roll: totalRoll, d20, stat });
}
