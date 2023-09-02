import { Suspense } from 'react'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchCharacterById, getResourceIdFromUrl, isDefinedPayload } from '@/utils'
import { ImageCard, Loader } from '@/components'

interface CharacterCardProps {
  characterUrl: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ characterUrl }) => {
  return (
    <Suspense fallback={<Loader />}>
      <CharacterCardComponent characterUrl={characterUrl} />
    </Suspense>
  )
}

function CharacterCardComponent({ characterUrl }: CharacterCardProps) {
  const characterId = getResourceIdFromUrl(characterUrl)!
  const { data } = useSuspenseQuery(['character', characterId], () => fetchCharacterById(characterId))

  if (!isDefinedPayload(data)) {
    return null
  }

  return <ImageCard title={data.name} resourceType="character" resourceUrl={data.url} />
}
