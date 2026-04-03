export default async function handler(req: any, res: any) {
  const { path } = req.query

  const pathArray = Array.isArray(path) ? path : path ? [path] : []
  const endpoint = pathArray.join('/')

  if (!endpoint) {
    return res.status(400).json({ message: 'Path was not provided' })
  }

  const query = new URLSearchParams(req.query)
  query.delete('path')

  const url = `https://kinopoiskapiunofficial.tech/api/${endpoint}${query.toString() ? `?${query}` : ''}`

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "X-API-KEY": process.env.KINOPOISK_API_KEY!,
        "Content-Type": "application/json",
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    })

    const data = await response.json()

    res.status(response.status).json(data)
  } catch (error) {
    res.status(500).json({ message: "Proxy error", error })
  }
}