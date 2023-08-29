import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
`

export const HeaderOuterContainer = styled.header`
  display: flex;
  height: var(--header-wrapper-height);
  border-bottom: 1px solid var(--header-wrapper-sep-color);
`

export const NavSection = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`

export const ContentOuterContainer = styled.main`
  width: 100%;
  height: calc(100vh - var(--header-wrapper-height));
`

export const CenteredPageSection = styled.section`
  margin: 0px auto;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 80rem;
`
