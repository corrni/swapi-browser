if (!import.meta.env.VITE_SW_ASSET_BASE_URL) {
  throw new Error('Missing Star Wars Visual Guide base URL. Check your `.env` file.')
}

export const visualGuideBaseURL = import.meta.env.VITE_SW_ASSET_BASE_URL
