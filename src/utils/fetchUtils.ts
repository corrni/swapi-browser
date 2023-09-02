import { swapiEndpoint } from '@/config'
import { Character, Film, NotFoundPayload, PaginatedResult } from '@/types'

export const fetchFilms = (): Promise<PaginatedResult<Film>> =>
  fetch(`${swapiEndpoint}/films`).then((res) => res.json())

export const fetchFilmById = (filmId: string): Promise<Film | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/films/${filmId}`).then((res) => res.json())

export const fetchCharacters = (): Promise<PaginatedResult<Character>> =>
  fetch(`${swapiEndpoint}/people`).then((res) => res.json())

export const fetchCharacterById = (characterId: string): Promise<Character | NotFoundPayload> =>
  fetch(`${swapiEndpoint}/people/${characterId}`).then((res) => res.json())
