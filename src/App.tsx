import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from './config'

const MovieList = React.lazy(() => import('./routes/MovieList'))
const MovieDetails = React.lazy(() => import('./routes/MovieDetails'))
const CharacterList = React.lazy(() => import('./routes/CharacterList'))
const CharacterDetails = React.lazy(() => import('./routes/CharacterDetails'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
