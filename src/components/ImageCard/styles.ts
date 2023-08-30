import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`

export const CardLink = styled(Link)`
  color: var(--color-slate-600);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
`

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
`

export const CardTitle = styled.span``
