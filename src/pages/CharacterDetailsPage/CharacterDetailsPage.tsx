import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchCharacterById, getCharacterImageSrcById } from '@/utils'
import { ContentWrapper, Heading, DetailSection } from '@/components'

import { CharacterSpecies, CharacterHomeworld } from './components'

const CharacterDetailsPage: React.FC = () => {
  const params = useParams()
  const { data } = useSuspenseQuery(['characters', params.id], () => fetchCharacterById(params.id!))

  if ('detail' in data) {
    return (
      <ContentWrapper>
        <Heading>404: The character was not found</Heading>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <DetailSection>
        <DetailSection.ImageAside src={getCharacterImageSrcById(data.url)} />
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
