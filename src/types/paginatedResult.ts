export interface PaginatedResult<ResultType> {
  count: number
  next: string | null
  previous: string | null
  results: ResultType[]
}
