import styled from 'styled-components'

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  /* TODO: add to variables */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const GridItem = styled.ul`
  background-color: var(--color-slate-100);
  padding: 0.75rem;
  min-height: 350px;
`

export const Grid = Object.assign(GridContainer, {
  Item: GridItem,
})
