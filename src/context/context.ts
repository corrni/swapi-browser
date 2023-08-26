import { createContext } from 'react'

interface ContextValue {
  characters: string[]
  addCharacters: React.Dispatch<string[]>
}

export const MovieCharacterContext = createContext<ContextValue | null>(null)
