import { API_CONFIG } from './config'

export abstract class BaseApi {
  protected baseUrl: string

  constructor() {
    this.baseUrl = API_CONFIG.KINOPOISK.BASE_URL
  }

  protected async fetchWithAuth(url: string, options: RequestInit = {}) {
    const cleanUrl = url.replace(/^\/+/, '')
    const [path, query] = cleanUrl.split('?')
    const queryString = query ? `&${query}` : ''
    const apiUrl = `${this.baseUrl}?path=${encodeURIComponent(path)}${queryString}`

    const response = await fetch(apiUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }
}

