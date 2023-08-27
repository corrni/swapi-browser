import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { useMovieCharacters } from '../context'
import { fetchFilmById } from '../utils'

const MovieDetails: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useSuspenseQuery(['films', params.id], () => fetchFilmById(params.id!))
  const { addCharacters } = useMovieCharacters()

  useEffect(() => {
    addCharacters(data.characters)
  }, [addCharacters, data.characters])

  return (
    <div>
      <h1>Movie: {data.title}</h1>
      <p>{data.opening_crawl}</p>
    </div>
  )
}

export default MovieDetails
