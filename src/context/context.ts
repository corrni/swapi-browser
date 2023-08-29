import { createContext } from 'react'

interface ContextValue {
  characterUrls: string[]
  addCharacterUrls: React.Dispatch<string[]>
}

export const CharacterUrlContext = createContext<ContextValue | null>(null)
