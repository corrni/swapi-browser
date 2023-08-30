import { useState, useMemo, useCallback } from 'react'

import { useCharacterUrls } from '@/context'

const PAGE_SIZE = 10

export function usePaginatedCharacterUrls() {
  const { characterUrls } = useCharacterUrls()
  const [currentPage, setCurrentPage] = useState(1)

  const data = useMemo(() => characterUrls.slice(0, PAGE_SIZE * currentPage), [characterUrls, currentPage])
  const hasMore = useMemo(() => PAGE_SIZE * currentPage < characterUrls.length, [characterUrls.length, currentPage])

  const fetchMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [hasMore])

  return { characterUrls: data, hasMore, fetchMore }
}
