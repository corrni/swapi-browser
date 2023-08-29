import React from 'react'
import { useParams } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchCharacterById } from '@/utils'

// TODO: move to component that fetches species info
const parseCharacterSpecies = (species: string[]) => species.join(', ')

const CharacterDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['characters', params.id], () => fetchCharacterById(params.id!))

  return (
    <div>
      <h1>Character: {data.name}</h1>
      {!isEmpty(data.species) && <div>{parseCharacterSpecies(data.species)}</div>}
      <p>Gender: {data.gender}</p>
      <p>Homeworld: {data.homeworld}</p>
      <p>Birth year: {data.birth_year}</p>
    </div>
  )
}

export default CharacterDetailsPage
