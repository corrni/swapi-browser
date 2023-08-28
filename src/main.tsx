import React from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyles, CSSVariables } from '@/styles'

import { App } from './App'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <CSSVariables />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
