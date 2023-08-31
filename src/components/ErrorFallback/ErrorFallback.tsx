import React from 'react'

import { Button } from '../Button'
import { CenteredPageSection } from '../sharedStyles'
import { Heading } from '../typographyStyles'

interface ErrorFallbackProps {
  reset: () => void
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ reset }) => {
  return (
    <CenteredPageSection>
      <Heading>An error occurred.</Heading>
      <Button onClick={reset}>Try again</Button>
    </CenteredPageSection>
  )
}
