import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import {
  PageLayoutContainer,
  ContentOuterContainer,
  NavSection,
  HeaderOuterContainer,
  CenteredPageSection,
} from './styles'

export const PageLayout: React.FC = () => {
  return (
    <PageLayoutContainer>
      <HeaderOuterContainer>
        <CenteredPageSection>
          <NavSection>site navigation</NavSection>
        </CenteredPageSection>
      </HeaderOuterContainer>
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
