import { visualGuideBaseURL } from '@/config'

import { getResourceIdFromUrl } from './utils'

export const getMovieImageSrcByEpisode = (episodeUrl: string) =>
  `${visualGuideBaseURL}/films/${getResourceIdFromUrl(episodeUrl)}.jpg`

export const getCharacterImageSrcById = (characterUrl: string) =>
  `${visualGuideBaseURL}/characters/${getResourceIdFromUrl(characterUrl)}.jpg`
