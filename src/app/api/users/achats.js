import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  // ✅ Autoriser uniquement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ achats: {}, error: 'Email manquant' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.warn('Utilisateur introuvable pour email:', email);
      return res.status(404).json({ achats: {}, error: 'Utilisateur introuvable' });
    }

    // Renvoie toujours un objet achats même vide
    const achats = user.achats || {};
    return res.status(200).json({ achats });
    
  } catch (err) {
    console.error('Erreur API achats:', err);
    return res.status(500).json({ achats: {}, error: 'Impossible de récupérer les achats' });
  }
}
