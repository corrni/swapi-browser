import React, { Suspense } from 'react'
import { useSuspenseQuery } from '@suspensive/react-query'

import { Character } from '@/types'
import { fetchPlanetById, getResourceIdFromUrl, isDefinedPayload } from '@/utils'

interface CharacterHomeworldProps {
  url: Character['homeworld']
}

export const CharacterHomeworld: React.FC<CharacterHomeworldProps> = ({ url }) => {
  return (
    <Suspense fallback={<span>...</span>}>
      <HomeworldDetailComponent url={url} />
    </Suspense>
  )
}

function HomeworldDetailComponent({ url }: CharacterHomeworldProps) {
  const planetId = getResourceIdFromUrl(url)!
  const { data } = useSuspenseQuery(['planet', planetId], () => fetchPlanetById(planetId))

  return isDefinedPayload(data) ? data.name : 'n/a'
}
