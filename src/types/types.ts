export type ResourceType = 'movie' | 'character'

export interface NotFoundPayload {
  detail: string
}

export interface PaginatedResult<ResultType> {
  count: number
  next: string | null
  previous: string | null
  results: ResultType[]
}
