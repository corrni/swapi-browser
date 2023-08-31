import React from 'react'
import { Link } from 'react-router-dom'

import { usePaginatedCharacterUrls } from '@/hooks'
import { ContentWrapper, Grid, Heading, Button } from '@/components'

import { CharacterCard } from './CharacterCard'

const CharacterListPage: React.FC = () => {
  const { characterUrls, hasMore, fetchMore } = usePaginatedCharacterUrls()

  if (!characterUrls.length) {
    return (
      <ContentWrapper>
        <Heading>No characters are available yet.</Heading>
        <p>
          This page only list characters from <Link to="/">any movies</Link> you have visted.
        </p>
      </ContentWrapper>
    )
  }

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
      <Button disabled={!hasMore} onClick={fetchMore}>
        Fetch more characters
      </Button>
    </ContentWrapper>
  )
}

export default CharacterListPage
