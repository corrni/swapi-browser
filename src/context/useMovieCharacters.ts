import { useContext } from 'react'

import { MovieCharacterContext } from './context'

export const useMovieCharacters = () => {
  const context = useContext(MovieCharacterContext)

  if (!context) {
    throw new Error('Missing character context. Component must be wrapped with `MovieCharacterProvider`.')
  }

  return context
}
