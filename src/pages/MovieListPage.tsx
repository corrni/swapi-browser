import React from 'react'
import { Link } from 'react-router-dom'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchFilms, getPathFromResourceUrl } from '@/utils'
import { ContentWrapper, Heading, Grid } from '@/components'

const MovieListPage: React.FC = () => {
  const { data } = useSuspenseQuery(['films'], fetchFilms)
  const films = data.results

  return (
    <ContentWrapper>
      <Heading>Movies</Heading>
      <Grid>
        {films.map((film, index) => (
          <Grid.Item key={index}>
            <Link to={getPathFromResourceUrl('movie', film.url)}>{film.title}</Link>
          </Grid.Item>
        ))}
      </Grid>
    </ContentWrapper>
  )
}

export default MovieListPage
