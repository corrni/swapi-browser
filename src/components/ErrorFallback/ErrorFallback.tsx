import React from 'react'

import { CenteredPageSection, Heading, LinkButton } from '@/components'

interface ErrorFallbackProps {
  reset: () => void
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ reset }) => {
  return (
    <CenteredPageSection>
      <Heading>An error occurred.</Heading>
      <LinkButton onClick={reset}>Try again</LinkButton>
    </CenteredPageSection>
  )
}
