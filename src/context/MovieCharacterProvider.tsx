import { useCallback, useState } from 'react'

import { MovieCharacterContext } from './context'

export const MovieCharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<string[]>([])

  const handleAddCharacters = useCallback((charactersToAdd: string[]) => {
    setCharacters((previousCharacters) => [
      ...previousCharacters,
      ...charactersToAdd.filter((character) => !previousCharacters.includes(character)),
    ])
  }, [])

  return (
    <MovieCharacterContext.Provider value={{ characters, addCharacters: handleAddCharacters }}>
      {children}
    </MovieCharacterContext.Provider>
  )
}
