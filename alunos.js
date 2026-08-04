export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    const response = await fetch(
      'https://tjaxzkssmpfhxpegvetm.supabase.co/functions/v1/dashboard-reader',
      {
        method: 'GET',
        headers: {
          'x-con-secret': process.env.CON_SECRET,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ erro: text });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}
