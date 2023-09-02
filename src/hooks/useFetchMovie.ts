import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchFilmById, isDefinedPayload } from '@/utils'

import { NOT_FOUND_RESULT } from './constants'

export function useFetchMovie(movieId?: string) {
  const { data } = useSuspenseQuery(['films', movieId], () => fetchFilmById(movieId!))

  if (!movieId || !isDefinedPayload(data)) {
    return NOT_FOUND_RESULT
  }

  return { notFound: false, data } as const
}
