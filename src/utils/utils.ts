import { ResourceType } from '@/types'

// TODO: validate SWAPI resource path
export const getResourceIdFromUrl = (url: string) => url.match(/(\d+)(\/)?$/)?.[0].slice(0, -1)

export const getPathFromResourceUrl = (resourceType: ResourceType, resourceUrl: string) =>
  `/${resourceType}/${getResourceIdFromUrl(resourceUrl)}`
