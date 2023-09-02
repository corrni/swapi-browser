import React from 'react'
import { useParams } from 'react-router-dom'

import { getMovieImageSrcByUrl } from '@/utils'
import { ContentWrapper, Heading, DetailSection } from '@/components'
import { useAddCharacterUrlsToContext, useFetchMovie } from '@/hooks'

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { notFound, data } = useFetchMovie(params.id)
  useAddCharacterUrlsToContext(notFound ? [] : data.characters)

  if (notFound) {
    return (
      <ContentWrapper>
        <Heading>404: The movie was not found</Heading>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <DetailSection>
        <DetailSection.ImageAside src={getMovieImageSrcByUrl(data.url)} />
        <DetailSection.Content>
          <DetailSection.Heading>{data.title}</DetailSection.Heading>
          <DetailSection.Text intro="Date Created:">{data.release_date}</DetailSection.Text>
          <DetailSection.Text intro="Director:">{data.director}</DetailSection.Text>
          <DetailSection.Text intro="Producer(s):">{data.producer}</DetailSection.Text>
          <DetailSection.Text intro="Opening Crawl:" breakOnIntro>
            {data.opening_crawl}
          </DetailSection.Text>
        </DetailSection.Content>
      </DetailSection>
    </ContentWrapper>
  )
}

export default MovieDetailsPage
