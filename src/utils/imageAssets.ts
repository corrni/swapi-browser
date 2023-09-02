import { visualGuideBaseURL } from '@/config'

import { getResourceIdFromUrl } from './utils'

export const getMovieImageSrcByUrl = (episodeUrl: string) =>
  `${visualGuideBaseURL}/films/${getResourceIdFromUrl(episodeUrl)}.jpg`

export const getCharacterImageSrcByUrl = (characterUrl: string) =>
  `${visualGuideBaseURL}/characters/${getResourceIdFromUrl(characterUrl)}.jpg`
