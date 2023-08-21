import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { fetchCharacterById } from '../utils'

const parseCharacterSpecies = (species: string[]) => species.join(', ')

const CharacterDetails: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useQuery(['characters', params.id], () => fetchCharacterById(params.id!))

  // KLUDGE: https://github.com/TanStack/query/issues/1297#issuecomment-730449036
  if (!data) {
    return null
  }

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

export default CharacterDetails
