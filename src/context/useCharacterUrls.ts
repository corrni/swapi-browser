import { useContext } from 'react'

import { CharacterUrlContext } from './context'

export const useCharacterUrls = () => {
  const context = useContext(CharacterUrlContext)

  if (!context) {
    throw new Error('Missing character context. Component must be wrapped with `CharacterUrlProvider`.')
  }

  return context
}
