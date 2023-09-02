import { useEffect } from 'react'

import { useCharacterUrls } from '@/context'
import { useMemoizedArray } from '@/hooks'

export function useAddCharacterUrlsToContext(urls: string[] = []) {
  const { addCharacterUrls } = useCharacterUrls()
  const characterUrls = useMemoizedArray(urls)

  useEffect(() => {
    addCharacterUrls(characterUrls)
  }, [addCharacterUrls, characterUrls])
}
