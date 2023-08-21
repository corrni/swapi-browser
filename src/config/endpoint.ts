if (!import.meta.env.VITE_SWAPI_BASE_URL) {
  throw new Error('Missing SWAPI endpoint configuration. Check your `.env` file.')
}

export const swapiEndpoint = import.meta.env.VITE_SWAPI_BASE_URL
