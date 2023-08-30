import React from 'react'
import { Link } from 'react-router-dom'

import { getPathFromResourceUrl } from '@/utils'
import { useCharacterUrls } from '@/context'
import { useFetchCharacters } from '@/hooks'
import { ContentWrapper, Grid, Heading } from '@/components'

const CharacterListPage: React.FC = () => {
  const { characterUrls } = useCharacterUrls()
  const characters = useFetchCharacters(characterUrls)

  return (
    <ContentWrapper>
      <Heading>List of Characters</Heading>
      <Grid>
        {characters.map((character, index) => (
          <Grid.Item key={index}>
            <Link to={getPathFromResourceUrl('character', character.url)}>{character.name}</Link>
          </Grid.Item>
        ))}
      </Grid>
    </ContentWrapper>
  )
}

export default CharacterListPage
