import { connectDB } from '../../../../lib/mongodb';
import User from '../../../../models/User';

export async function GET(req) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email manquant' }), { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: 'Utilisateur introuvable' }), { status: 404 });
    }

    return new Response(JSON.stringify({ achats: user.achats }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Impossible de récupérer les achats' }), { status: 500 });
  }
}
