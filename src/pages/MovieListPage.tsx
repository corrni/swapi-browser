import React from 'react'
import { Link } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchFilms, getPathFromResourceUrl } from '@/utils'

const MovieListPage: React.FC = () => {
  const { data } = useSuspenseQuery(['films'], fetchFilms)
  const films = data.results

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <Link to={getPathFromResourceUrl('movie', film.url)}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieListPage
