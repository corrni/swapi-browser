// TODO: validate SWAPI resource path
export const getResourceIdFromUrl = (url: string) => url.match(/\d+(\/)?$/)?.[0]

type ResourceType = 'movie' | 'character'

export const getPathFromResourceUrl = (resourceType: ResourceType, resourceUrl: string) =>
  `/${resourceType}/${getResourceIdFromUrl(resourceUrl)}`
