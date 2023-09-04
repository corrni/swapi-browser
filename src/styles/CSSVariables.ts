import { createGlobalStyle } from 'styled-components'

export const CSSVariables = createGlobalStyle`
  :root {
    /* Colors */
    --color-slate-50: #f8fafc;
    --color-slate-100: #f1f5f9;
    --color-slate-200: #e2e8f0;
    --color-slate-300: #cbd5e1;
    --color-slate-500: #64748b;
    --color-slate-700: #334155;
    --color-black: #000;


    /* Typography */
    --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --body-font-size: 16px;

    /* Loader component */
      --loader-wrapper-size: 32px;
      --loader-border-size: 4px;

    /* Layout > Header */
    --header-wrapper-sep-color: var(--color-slate-300);
    --header-wrapper-height: 5rem;
    --header-drop-shadow-color: color-mix(in srgb, var(--color-slate-300) 40%, transparent);

    /* Layout > SW logo */
    --header-logo-color: var(--color-black);
    --header-logo-desktop-size: 4rem;
    --header-logo-mobile-size: 3rem;

    /* Layout > Page listing grid */
    --grid-listitem-min-height: 350px;
    --grid-listitem-min-width: 250px;
  }
`
