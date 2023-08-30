import { styled } from 'styled-components'

import { TextSection } from './TextSection'

export const DetailCardWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  /* TODO: add breakpoints */
  @media screen and (max-width: 780px) {
    flex-wrap: wrap;
  }
`

export const DetailCardImageAside = styled.img`
  max-width: 100%;

  /* TODO: add breakpoints */
  @media screen and (min-width: 780px) {
    max-width: 40%;
  }
`

export const DetailCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const DetailSection = Object.assign(DetailCardWrapper, {
  ImageAside: DetailCardImageAside,
  Content: DetailCardContent,
  Text: TextSection,
})
