import { createGlobalStyle } from 'styled-components'

export const CSSVariables = createGlobalStyle`
  :root {
    /* Typography */
    --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --body-font-size: 16px;

    /* Layout */
    --header-wrapper-sep-color: lightgray;
    --header-wrapper-height: 5rem;
  }
`
