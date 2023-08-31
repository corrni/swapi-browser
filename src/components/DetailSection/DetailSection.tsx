import { styled } from 'styled-components'

import { Heading } from '../typographyStyles'
import { TextSection } from './TextSection'

export const DetailCardWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  /* TODO: add breakpoints */
  @media screen and (max-width: 780px) {
    flex-wrap: wrap;
  }
`

export const DetailCardHeading = styled(Heading)`
  padding-bottom: 0.5rem;
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
  Content: DetailCardContent,
  Heading: DetailCardHeading,
  ImageAside: DetailCardImageAside,
  Text: TextSection,
})
