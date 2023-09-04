import styled from 'styled-components'

export const HeaderOuterContainer = styled.header`
  display: flex;
  height: var(--header-wrapper-height);
  border-bottom: 1px solid var(--header-wrapper-sep-color);
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 2px 0px var(--header-drop-shadow-color);
`

export const NavSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
