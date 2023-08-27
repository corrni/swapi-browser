import React from 'react'
import { Link } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchFilms } from '../utils'
import { getResourceIdFromUrl } from '../utils/utils'

const MovieList: React.FC = () => {
  const { data } = useSuspenseQuery(['films'], fetchFilms)
  const films = data.results

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
