import React from 'react'

import { CenteredPageSection, Heading } from '@/components'

interface ErrorFallbackProps {
  reset: () => void
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ reset }) => {
  return (
    <CenteredPageSection>
      <Heading>An error occurred.</Heading>
      <button onClick={reset}>Try again</button>
    </CenteredPageSection>
  )
}
