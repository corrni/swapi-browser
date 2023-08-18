import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

const MovieList = React.lazy(() => import('./routes/MovieList'))
const MovieDetails = React.lazy(() => import('./routes/MovieDetails'))
const CharacterList = React.lazy(() => import('./routes/CharacterList'))
const CharacterDetails = React.lazy(() => import('./routes/CharacterDetails'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
