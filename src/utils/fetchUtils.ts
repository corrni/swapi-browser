import { swapiEndpoint } from '@/config'
import { Character, Film, PaginatedResult } from '@/types'

export const fetchFilms = (): Promise<PaginatedResult<Film>> =>
  fetch(`${swapiEndpoint}/films`).then((res) => res.json())

export const fetchFilmById = (filmId: string): Promise<Film> =>
  fetch(`${swapiEndpoint}/films/${filmId}`).then((res) => res.json())

export const fetchCharacters = (): Promise<PaginatedResult<Character>> =>
  fetch(`${swapiEndpoint}/people`).then((res) => res.json())

export const fetchCharacterById = (characterId: string): Promise<Character> =>
  fetch(`${swapiEndpoint}/people/${characterId}`).then((res) => res.json())
