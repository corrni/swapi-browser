import React, { Suspense } from 'react'
import { useSuspenseQueries } from '@suspensive/react-query'

import { Character } from '@/types'
import { fetchSpeciesById, getResourceIdFromUrl, isDefinedPayload } from '@/utils'

interface CharacterSpeciesProps {
  urls: Character['species']
}

export const CharacterSpecies: React.FC<CharacterSpeciesProps> = ({ urls }) => {
  if (!urls.length) {
    return <React.Fragment>n/a</React.Fragment>
  }

  return (
    <Suspense fallback={<span>...</span>}>
      <SpeciesDetailComponent urls={urls} />
    </Suspense>
  )
}

function SpeciesDetailComponent({ urls }: CharacterSpeciesProps) {
  const queries = useSuspenseQueries({
    queries: urls.map((url) => {
      const speciesId = getResourceIdFromUrl(url)!

      return {
        queryKey: ['species', speciesId],
        queryFn: () => fetchSpeciesById(speciesId),
      }
    }),
  })

  const characterSpecies = queries
    .map((query) => query.data)
    .filter(isDefinedPayload)
    .map(({ name }) => name)
    .join(', ')

  return <React.Fragment>{characterSpecies}</React.Fragment>
}
