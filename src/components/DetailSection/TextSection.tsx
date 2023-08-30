import React from 'react'
import styled from 'styled-components'

const DetailTextIntro = styled.strong<{ breakOnIntro: boolean }>`
  font-weight: 600;
  ${(props) => props.breakOnIntro && 'display: block;'}
`

export const DetailTextWrapper = styled.p`
  line-height: 1.2rem;
`

interface ParagraphProps {
  intro?: string
  breakOnIntro?: boolean
  children: React.ReactNode
}

export const TextSection: React.FC<ParagraphProps> = ({ intro = null, breakOnIntro = false, children }) => {
  return (
    <DetailTextWrapper>
      {intro && <DetailTextIntro breakOnIntro={breakOnIntro}>{intro}</DetailTextIntro>}
      {!breakOnIntro && <React.Fragment>&nbsp;</React.Fragment>}
      {children}
    </DetailTextWrapper>
  )
}
