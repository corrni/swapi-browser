// TODO: validate SWAPI resource path
export const getResourceIdFromUrl = (url: string) => url.match(/\d+(\/)?$/)?.[0]
