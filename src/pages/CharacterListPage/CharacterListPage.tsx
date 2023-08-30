import React from 'react'

import { usePaginatedCharacterUrls } from '@/hooks'
import { ContentWrapper, Grid, Heading } from '@/components'

import { CharacterCard } from './CharacterCard'
import { LinkButton } from './styles'

const CharacterListPage: React.FC = () => {
  const { characterUrls, hasMore, fetchMore } = usePaginatedCharacterUrls()

  return (
    <ContentWrapper>
      <Heading>List of Characters</Heading>
      <Grid>
        {characterUrls.map((characterUrl, index) => (
          <Grid.Item key={index}>
            <CharacterCard characterUrl={characterUrl} />
          </Grid.Item>
        ))}
      </Grid>
      <LinkButton disabled={!hasMore} onClick={fetchMore}>
        Fetch more characters
      </LinkButton>
    </ContentWrapper>
  )
}

export default CharacterListPage
