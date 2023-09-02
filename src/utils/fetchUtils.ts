import { swapiEndpoint } from '@/config'
import { Character, Film, NotFoundPayload, PaginatedResult, Planet, Species } from '@/types'

export function isDefinedPayload<T extends object>(value: T | NotFoundPayload): value is T {
  return !('detail' in value)
}

export const fetchFilms = (): Promise<PaginatedResult<Film>> =>
  fetch(`${swapiEndpoint}/films`).then((res) => res.json())

export const fetchFilmById = (filmId: string): Promise<Film | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/films/${filmId}`).then((res) => res.json())

export const fetchCharacters = (): Promise<PaginatedResult<Character>> =>
  fetch(`${swapiEndpoint}/people`).then((res) => res.json())

export const fetchCharacterById = (characterId: string): Promise<Character | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/people/${characterId}`).then((res) => res.json())

export const fetchSpeciesById = (speciesId: string): Promise<Species | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/species/${speciesId}`).then((res) => res.json())

export const fetchPlanetById = (planetId: string): Promise<Planet | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/planets/${planetId}`).then((res) => res.json())
