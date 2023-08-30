import React from 'react'

import { useFetchCharacters, usePaginatedCharacterUrls } from '@/hooks'
import { ContentWrapper, Grid, Heading, ImageCard } from '@/components'

const CharacterListPage: React.FC = () => {
  const { characterUrls, hasMore, fetchMore } = usePaginatedCharacterUrls()
  const characters = useFetchCharacters(characterUrls)

  return (
    <ContentWrapper>
      <Heading>List of Characters</Heading>
      <Grid>
        {characters.map((character, index) => (
          <Grid.Item key={index}>
            <ImageCard title={character.name} resourceType="character" resourceUrl={character.url} />
          </Grid.Item>
        ))}
      </Grid>
      <button disabled={!hasMore} onClick={fetchMore}>
        Fetch more
      </button>
    </ContentWrapper>
  )
}

export default CharacterListPage
