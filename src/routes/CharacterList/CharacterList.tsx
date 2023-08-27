import React from 'react'

import { useMovieCharacters } from '../../context'
import { useFetchCharacters } from './useFetchCharacters'
import { Link } from 'react-router-dom'
import { getResourceIdFromUrl } from '../../utils'

const CharacterList: React.FC = () => {
  const { characters: characterUrls } = useMovieCharacters()
  const characters = useFetchCharacters(characterUrls)

  return (
    <div>
      <h1>Character list</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <Link to={`/character/${getResourceIdFromUrl(character.url)}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterList
