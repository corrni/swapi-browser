import { QueryClient } from '@tanstack/react-query'

// Should be safe to cache SWAPI data for 1 day
const DEFAULT_CACHE_PERIOD = 1000 * 60 * 60 * 24

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: DEFAULT_CACHE_PERIOD,
      cacheTime: DEFAULT_CACHE_PERIOD,
    },
  },
})
