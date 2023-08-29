import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageHeader } from './PageHeader'
import { CenteredPageSection, ContentOuterContainer, PageLayoutContainer } from './styles'

export const PageLayout: React.FC = () => {
  return (
    <PageLayoutContainer>
      <PageHeader />
      <ContentOuterContainer>
        <CenteredPageSection>
          <Suspense fallback={<div>Content loader...</div>}>
            <Outlet />
          </Suspense>
        </CenteredPageSection>
      </ContentOuterContainer>
    </PageLayoutContainer>
  )
}
