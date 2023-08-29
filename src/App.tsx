import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/config'
import { MovieCharacterProvider } from '@/context'
import { PageLayout } from '@/layout'

const MovieList = React.lazy(() => import('@/pages/MovieList'))
const MovieDetails = React.lazy(() => import('@/pages/MovieDetails'))
const CharacterList = React.lazy(() => import('@/pages/CharacterList'))
const CharacterDetails = React.lazy(() => import('@/pages/CharacterDetails'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MovieCharacterProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<MovieList />} />
              <Route path="movie/:id" element={<MovieDetails />} />
              <Route path="characters" element={<CharacterList />} />
              <Route path="character/:id" element={<CharacterDetails />} />
            </Route>
          </Routes>
        </MovieCharacterProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
