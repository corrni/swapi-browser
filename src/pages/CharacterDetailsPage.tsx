import React from 'react'
import { useParams } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchCharacterById } from '@/utils'
import { ContentWrapper, Heading } from '@/components'

// TODO: move to component that fetches species info
const parseCharacterSpecies = (species: string[]) => species.join(', ')

const CharacterDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['characters', params.id], () => fetchCharacterById(params.id!))

  return (
    <ContentWrapper>
      <Heading>Characters / {data.name}</Heading>
      {!isEmpty(data.species) && <div>{parseCharacterSpecies(data.species)}</div>}
      <p>Gender: {data.gender}</p>
      <p>Homeworld: {data.homeworld}</p>
      <p>Birth year: {data.birth_year}</p>
    </ContentWrapper>
  )
}

export default CharacterDetailsPage
