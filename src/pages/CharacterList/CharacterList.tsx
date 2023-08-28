import React from 'react'
import { Link } from 'react-router-dom'

import { getPathFromResourceUrl } from '../../utils'
import { useMovieCharacters } from '../../context'
import { useFetchCharacters } from './useFetchCharacters'

const CharacterList: React.FC = () => {
  const { characters: characterUrls } = useMovieCharacters()
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

export default CharacterList
