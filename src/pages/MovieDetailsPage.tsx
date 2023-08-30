import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { useCharacterUrls } from '@/context'
import { fetchFilmById } from '@/utils'
import { useMemoizedArray } from '@/hooks'
import { ContentWrapper, Heading } from '@/components'

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['films', params.id], () => fetchFilmById(params.id!))
  useAddCharacterUrlsToContext(data.characters)

  return (
    <ContentWrapper>
      <Heading>Movies / {data.title}</Heading>
      <p>{data.opening_crawl}</p>
    </ContentWrapper>
  )
}

function useAddCharacterUrlsToContext(urls: string[]) {
  const { addCharacterUrls } = useCharacterUrls()
  const characterUrls = useMemoizedArray(urls)

  useEffect(() => {
    addCharacterUrls(characterUrls)
  }, [addCharacterUrls, characterUrls])
}

export default MovieDetailsPage
