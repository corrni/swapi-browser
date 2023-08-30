import React from 'react'
import { useCharacterUrls } from '@/context'
import { useFetchCharacters } from '@/hooks'
import { ContentWrapper, Grid, Heading, ImageCard } from '@/components'

const CharacterListPage: React.FC = () => {
  const { characterUrls } = useCharacterUrls()
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
    </ContentWrapper>
  )
}

export default CharacterListPage
