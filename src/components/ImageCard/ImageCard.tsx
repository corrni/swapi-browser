import React from 'react'

import { ResourceType } from '@/types'
import { getCharacterImageSrcById, getMovieImageSrcByEpisode, getPathFromResourceUrl } from '@/utils'

import { CardImage, CardTitle, CardWrapper, CardLink } from './styles'

interface ImageCardProps {
  resourceType: ResourceType
  resourceUrl: string
  title: string
}

export const ImageCard: React.FC<ImageCardProps> = ({ resourceType, resourceUrl, title }) => {
  const isCharacter = resourceType === 'character'
  const imageSrc = isCharacter ? getCharacterImageSrcById(resourceUrl) : getMovieImageSrcByEpisode(resourceUrl)
  const altText = isCharacter ? `Character image for: ${title}` : `Movie cover for: ${title}`

  return (
    <CardLink to={getPathFromResourceUrl(resourceType, resourceUrl)}>
      <CardWrapper>
        <CardImage src={imageSrc} alt={altText} />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </CardLink>
  )
}
