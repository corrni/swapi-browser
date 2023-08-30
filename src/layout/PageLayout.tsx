import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { CenteredPageSection, Loader as PageLoader, PageHeader } from '@/components'
import { ContentOuterContainer, PageLayoutContainer } from './styles'

export const PageLayout: React.FC = () => {
  return (
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
  )
}
