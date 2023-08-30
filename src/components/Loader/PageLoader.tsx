import { styled } from 'styled-components'
import { CenteredPageSection } from '../sharedStyles'
import { Loader } from './Loader'

const PageLoaderWrapper = styled(CenteredPageSection)`
  margin: 25vh auto;
`

export const PageLoader = () => (
  <PageLoaderWrapper>
    <Loader />
  </PageLoaderWrapper>
)
