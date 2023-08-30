import React from 'react'
import { useSuspenseQuery } from '@suspensive/react-query'

import { fetchFilms } from '@/utils'
import { ContentWrapper, Heading, Grid, ImageCard } from '@/components'

const MovieListPage: React.FC = () => {
  const { data } = useSuspenseQuery(['films'], fetchFilms)
  const films = data.results

  return (
    <ContentWrapper>
      <Heading>List of Movies</Heading>
      <Grid>
        {films.map((film, index) => (
          <Grid.Item key={index}>
            <ImageCard title={film.title} resourceType="movie" resourceUrl={film.url} />
          </Grid.Item>
        ))}
      </Grid>
    </ContentWrapper>
  )
}

export default MovieListPage
