/* eslint-disable */

/**
 * A planet.
 */
export interface Planet {
  /**
   * The name of this planet.
   */
  name: string
  /**
   * The diameter of this planet in kilometers.
   */
  diameter: string
  /**
   * The number of standard hours it takes for this planet to complete a single rotation on its axis.
   */
  rotation_period: string
  /**
   * The number of standard days it takes for this planet to complete a single orbit of its local star.
   */
  orbital_period: string
  /**
   * A number denoting the gravity of this planet. Where 1 is normal.
   */
  gravity: string
  /**
   * The average populationof sentient beings inhabiting this planet.
   */
  population: string
  /**
   * The climate of this planet. Comma-seperated if diverse.
   */
  climate: string
  /**
   * the terrain of this planet. Comma-seperated if diverse.
   */
  terrain: string
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies of water.
   */
  surface_water: string
  /**
   * An array of Film URL Resources that this planet has appeared in.
   */
  films: string[]
  /**
   * An array of People URL Resources that live on this planet.
   */
  residents: string[]
  /**
   * The hypermedia URL of this resource.
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
