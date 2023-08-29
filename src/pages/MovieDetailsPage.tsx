import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { useCharacterUrls } from '@/context'
import { fetchFilmById } from '@/utils'
import { useMemoizedArray } from '@/hooks'

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['films', params.id], () => fetchFilmById(params.id!))
  useAddCharacterUrlsToContext(data.characters)

  return (
    <div>
      <h1>Movie: {data.title}</h1>
      <p>{data.opening_crawl}</p>
    </div>
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
