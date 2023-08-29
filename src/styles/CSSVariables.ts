import { createGlobalStyle } from 'styled-components'

export const CSSVariables = createGlobalStyle`
  :root {
    /* Colors */
    --color-black: #000;
    --color-slate-500: #64748b;
    --color-slate-700: #334155;


    /* Typography */
    --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --body-font-size: 16px;

    /* Layout > Header */
    --header-wrapper-sep-color: lightgray;
    --header-wrapper-height: 5rem;

    /* Layout > SW logo */
    --header-logo-color: var(--color-black);
    --header-logo-desktop-size: 4rem;
    --header-logo-mobile-size: 3rem;
  }
`
