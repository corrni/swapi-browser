/* eslint-disable */

/**
 * A Star Wars film
 */
export interface Film {
  /**
   * The title of this film.
   */
  title: string
  /**
   * The episode number of this film.
   */
  episode_id: number
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string
  /**
   * The director of this film.
   */
  director: string
  /**
   * The producer(s) of this film.
   */
  producer: string
  /**
   * The release date at original creator country.
   */
  release_date: string
  /**
   * The people resources featured within this film.
   */
  characters: string[]
  /**
   * The planet resources featured within this film.
   */
  planets: string[]
  /**
   * The starship resources featured within this film.
   */
  starships: string[]
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: string[]
  /**
   * The species resources featured within this film.
   */
  species: string[]
  /**
   * The url of this resource
   */
  url: string
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string
}
