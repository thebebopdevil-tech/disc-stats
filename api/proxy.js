export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(response.status).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
