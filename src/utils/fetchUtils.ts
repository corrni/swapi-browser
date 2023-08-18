import { Character, Film, PaginatedResult } from '../types'

const swapiEndpoint = import.meta.env.SWAPI_BASE_URL

if (!swapiEndpoint) {
  throw new Error('Missing SWAPI endpoint configuration. Check your `.env` file.')
}

export const getFilms = (): Promise<PaginatedResult<Film>> => fetch(`${swapiEndpoint}/films`).then((res) => res.json())
export const getCharacters = (): Promise<PaginatedResult<Character>> =>
  fetch(`${swapiEndpoint}/people`).then((res) => res.json())
