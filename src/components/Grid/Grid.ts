import styled from 'styled-components'

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-listitem-min-width), 1fr));
`

const GridItem = styled.ul`
  background-color: var(--color-slate-100);
  padding: 0.75rem;
  min-height: var(--grid-listitem-min-width);
`

export const Grid = Object.assign(GridContainer, {
  Item: GridItem,
})
