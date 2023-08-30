import { styled } from 'styled-components'

import { CenteredPageSection } from '../sharedStyles'

export const LoaderWrapper = styled(CenteredPageSection)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const LoaderComponent = styled.div`
  border: var(--loader-border-size) solid var(--color-slate-200);
  border-top: var(--loader-border-size) solid var(--color-slate-700);
  border-radius: 50%;
  width: var(--loader-wrapper-size);
  height: var(--loader-wrapper-size);
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
