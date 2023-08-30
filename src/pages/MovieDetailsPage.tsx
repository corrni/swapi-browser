import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { useCharacterUrls } from '@/context'
import { fetchFilmById, getMovieImageSrcByEpisode } from '@/utils'
import { useMemoizedArray } from '@/hooks'
import { ContentWrapper, Heading, DetailSection } from '@/components'

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['films', params.id], () => fetchFilmById(params.id!))
  useAddCharacterUrlsToContext(data.characters)

  // @ts-expect-error TODO: Add 404 response to fetch helper
  if (data.detail === 'Not found') {
    return (
      <ContentWrapper>
        <Heading>404: The movie was not found</Heading>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      <DetailSection>
        <DetailSection.ImageAside src={getMovieImageSrcByEpisode(data.url)} />
        <DetailSection.Content>
          <Heading>{data.title}</Heading>
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

function useAddCharacterUrlsToContext(urls: string[] = []) {
  const { addCharacterUrls } = useCharacterUrls()
  const characterUrls = useMemoizedArray(urls)

  useEffect(() => {
    addCharacterUrls(characterUrls)
  }, [addCharacterUrls, characterUrls])
}

export default MovieDetailsPage
