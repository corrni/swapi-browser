import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { fetchFilmById } from '../utils'

const MovieDetails: React.FC = () => {
  const params = useParams<{ id: string }>()
  const { data } = useQuery(['films', params.id], () => fetchFilmById(params.id!))

  // KLUDGE: https://github.com/TanStack/query/issues/1297#issuecomment-730449036
  if (!data) {
    return null
  }

  return (
    <div>
      <h1>Movie {data.title}</h1>
      <p>{data.opening_crawl}</p>
    </div>
  )
}

export default MovieDetails
