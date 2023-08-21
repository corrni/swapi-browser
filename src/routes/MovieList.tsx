import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { compact } from 'lodash'

import { fetchFilms } from '../utils'
import { Link } from 'react-router-dom'
import { getResourceIdFromUrl } from '../utils/utils'

const MovieList: React.FC = () => {
  const { data } = useQuery(['films'], fetchFilms)

  const films = compact(data?.results)

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <Link to={`/movie/${getResourceIdFromUrl(film.url)}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
