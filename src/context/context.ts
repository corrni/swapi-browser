import { createContext } from 'react'

interface ContextValue {
  addCharacterUrls: (urls: string[]) => void
  characterUrls: string[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const CharacterUrlContext = createContext<ContextValue | null>(null)
