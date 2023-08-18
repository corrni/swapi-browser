import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getFilms } from '../utils'

const MovieList: React.FC = () => {
  const query = useQuery(['films'], getFilms)

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  console.log(query.data)

  return <div>List of movies</div>
}

export default MovieList
