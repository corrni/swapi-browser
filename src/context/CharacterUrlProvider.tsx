import { useCallback, useState } from 'react'

import { CharacterUrlContext } from './context'

export const CharacterUrlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characterUrls, setCharacterUrls] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleAddCharacterUrls = useCallback((nextUrls: string[]) => {
    setCharacterUrls((previousUrls) => [
      ...previousUrls,
      ...nextUrls.filter((characterUrl) => !previousUrls.includes(characterUrl)),
    ])
  }, [])

  return (
    <CharacterUrlContext.Provider
      value={{
        addCharacterUrls: handleAddCharacterUrls,
        characterUrls,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CharacterUrlContext.Provider>
  )
}
