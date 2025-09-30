// pages/api/users/achats.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const { email } = req.body; // récupéré depuis sessionStorage côté front
    if (!email) return res.status(400).json({ error: 'Email manquant' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });

    res.status(200).json({ achats: user.achats });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Impossible de récupérer les achats' });
  }
}
