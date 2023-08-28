import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  /* Eric Meyer Reset */
  ${reset}

  /* Sensible defaults */
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
  }

  :root {
    font-family: var(--body-font-family);

    /* Baseline for rem units */
    font-size: var(--body-font-size);
  }
`
