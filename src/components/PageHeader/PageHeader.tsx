import React from 'react'
import { Link } from 'react-router-dom'

import { CenteredPageSection } from '../sharedStyles'
import { NavSection, HeaderOuterContainer } from './styles'
import { StarWarsLogo } from '../Logo'
import { NavigationMenu } from '../NavigationMenu'

export const PageHeader: React.FC = () => {
  return (
    <HeaderOuterContainer>
      <CenteredPageSection>
        <NavSection>
          <Link to="/">
            <StarWarsLogo />
          </Link>
          <NavigationMenu />
        </NavSection>
      </CenteredPageSection>
    </HeaderOuterContainer>
  )
}
