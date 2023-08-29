import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/config'
import { CharacterUrlProvider } from '@/context'
import { PageLayout } from '@/layout'

const MovieListPage = React.lazy(() => import('@/pages/MovieListPage'))
const MovieDetailsPage = React.lazy(() => import('@/pages/MovieDetailsPage'))
const CharacterListPage = React.lazy(() => import('@/pages/CharacterListPage'))
const CharacterDetailsPage = React.lazy(() => import('@/pages/CharacterDetailsPage'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CharacterUrlProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<MovieListPage />} />
              <Route path="movie/:id" element={<MovieDetailsPage />} />
              <Route path="characters" element={<CharacterListPage />} />
              <Route path="character/:id" element={<CharacterDetailsPage />} />
            </Route>
          </Routes>
        </CharacterUrlProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
