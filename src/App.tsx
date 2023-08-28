import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/config'
import { MovieCharacterProvider } from '@/context'

const MovieList = React.lazy(() => import('@/pages/MovieList'))
const MovieDetails = React.lazy(() => import('@/pages/MovieDetails'))
const CharacterList = React.lazy(() => import('@/pages/CharacterList'))
const CharacterDetails = React.lazy(() => import('@/pages/CharacterDetails'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCharacterProvider>
            <Routes>
              <Route index path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
            </Routes>
          </MovieCharacterProvider>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
