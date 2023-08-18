const swapiEndpoint = import.meta.env.SWAPI_BASE_URL

if (!swapiEndpoint) {
  throw new Error('Missing SWAPI endpoint configuration. Check your `.env` file.')
}

export const getFilms = () => fetch(`${swapiEndpoint}/films`).then((res) => res.json())
