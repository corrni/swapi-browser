import { useMemo, useCallback } from 'react'

import { useCharacterUrls } from '@/context'

const PAGE_SIZE = 10

export function usePaginatedCharacterUrls() {
  const { characterUrls, currentPage, setCurrentPage } = useCharacterUrls()

  const data = useMemo(() => characterUrls.slice(0, PAGE_SIZE * currentPage), [characterUrls, currentPage])
  const hasMore = useMemo(() => PAGE_SIZE * currentPage < characterUrls.length, [characterUrls.length, currentPage])

  const fetchMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [hasMore, setCurrentPage])

  return { characterUrls: data, hasMore, fetchMore }
}
