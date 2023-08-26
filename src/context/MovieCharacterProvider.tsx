import { useState } from 'react'

import { MovieCharacterContext } from './context'
import { useStableHandler } from '../hooks'

export const MovieCharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<string[]>([])

  const handleAddCharacters = useStableHandler((charactersToAdd: string[]) => {
    setCharacters((previousCharacters) => [
      ...previousCharacters,
      ...charactersToAdd.filter((character) => !characters.includes(character)),
    ])
  })

  return (
    <MovieCharacterContext.Provider value={{ characters, addCharacters: handleAddCharacters }}>
      {children}
    </MovieCharacterContext.Provider>
  )
}
