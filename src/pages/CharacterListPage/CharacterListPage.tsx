import React from 'react'
import { Link } from 'react-router-dom'

import { getPathFromResourceUrl } from '@/utils'
import { useCharacterUrls } from '@/context'
import { useFetchCharacters } from '@/hooks'

const CharacterListPage: React.FC = () => {
  const { characterUrls } = useCharacterUrls()
  const characters = useFetchCharacters(characterUrls)

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <Link to={getPathFromResourceUrl('character', character.url)}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterListPage
