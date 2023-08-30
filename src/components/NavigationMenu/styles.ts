import styled from 'styled-components'

export const MenuWrapper = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    color: var(--color-slate-500);
  }
`

export const MenuItem = styled.li<{ active: boolean }>`
  a {
    ${(props) => props.active && 'color: var(--color-slate-700);'}
    font-weight: bold;
    text-decoration: none;
  }
`
