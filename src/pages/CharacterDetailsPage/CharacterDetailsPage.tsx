import React from 'react'
import { useParams } from 'react-router-dom'

import { getCharacterImageSrcByUrl } from '@/utils'
import { ContentWrapper, Heading, DetailSection } from '@/components'
import { useFetchCharacter } from '@/hooks'

import { CharacterSpecies, CharacterHomeworld } from './components'

const CharacterDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { notFound, data } = useFetchCharacter(params.id)

  if (notFound) {
    return (
      <ContentWrapper>
        <Heading>404: The character was not found</Heading>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <DetailSection>
        <DetailSection.ImageAside src={getCharacterImageSrcByUrl(data.url)} />
        <DetailSection.Content>
          <DetailSection.Heading>Characters / {data.name}</DetailSection.Heading>
          <DetailSection.Text intro="Species:">
            <CharacterSpecies urls={data.species} />
          </DetailSection.Text>
          <DetailSection.Text intro="Birth Year:">{data.birth_year}</DetailSection.Text>
          <DetailSection.Text intro="Height:">{data.height}</DetailSection.Text>
          <DetailSection.Text intro="Mass:">{data.mass}</DetailSection.Text>
          <DetailSection.Text intro="Gender:">{data.gender}</DetailSection.Text>
          <DetailSection.Text intro="Hair Color:">{data.hair_color}</DetailSection.Text>
          <DetailSection.Text intro="Skin Color:">{data.skin_color}</DetailSection.Text>
          <DetailSection.Text intro="Home world:">
            <CharacterHomeworld url={data.homeworld} />
          </DetailSection.Text>
        </DetailSection.Content>
      </DetailSection>
    </ContentWrapper>
  )
}

export default CharacterDetailsPage
