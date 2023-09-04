import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  position: relative;
`

export const ContentOuterContainer = styled.main`
  width: 100%;
  height: calc(100vh - var(--header-wrapper-height));
  margin-top: var(--header-wrapper-height);
`
