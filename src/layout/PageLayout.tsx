import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@suspensive/react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

import { CenteredPageSection, ErrorFallback, PageLoader, PageHeader } from '@/components'

import { ContentOuterContainer, PageLayoutContainer } from './styles'

export const PageLayout: React.FC = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallback={(boundary) => <ErrorFallback reset={boundary.reset} />}>
          <PageLayoutContainer>
            <PageHeader />
            <ContentOuterContainer>
              <Suspense fallback={<PageLoader />}>
                <CenteredPageSection>
                  <Outlet />
                </CenteredPageSection>
              </Suspense>
            </ContentOuterContainer>
          </PageLayoutContainer>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
