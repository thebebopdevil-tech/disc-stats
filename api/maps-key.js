export default function handler(req, res) {
  const key = process.env.MAPS_API_KEY || '';
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(`window.MAPS_API_KEY = ${JSON.stringify(key)};`);
}
