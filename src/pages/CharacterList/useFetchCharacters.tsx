import { useQueries } from '@tanstack/react-query'
import { compact } from 'lodash'

import { useMemoizedArray } from '../../hooks'
import { fetchCharacterById, getResourceIdFromUrl } from '../../utils'

export function useFetchCharacters(urls: string[]) {
  const queries = useQueries({
    queries: urls.map((url) => {
      const characterId = getResourceIdFromUrl(url)!

      return {
        queryKey: ['character', characterId],
        queryFn: () => fetchCharacterById(characterId),
        // Dirty hack to deal with `useQueries` re-renders
        // SEE: https://github.com/TanStack/query/issues/5137
        staleTime: Infinity,
      }
    }),
  })

  const result = compact(queries.map((query) => query.data))

  return useMemoizedArray(result)
}
