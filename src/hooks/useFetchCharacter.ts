import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchCharacterById, isDefinedPayload } from '@/utils'

import { NOT_FOUND_RESULT } from './constants'

export function useFetchCharacter(characterId?: string) {
  const { data } = useSuspenseQuery(['films', characterId], () => fetchCharacterById(characterId!))

  if (!characterId || !isDefinedPayload(data)) {
    return NOT_FOUND_RESULT
  }

  return { notFound: false, data } as const
}
