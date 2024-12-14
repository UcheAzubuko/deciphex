import styled from 'styled-components'
import { pxToRem } from '../../utils/px-to-rem'
import { theme } from '../../styles/theme'

export const AppPageWrapper = styled.div`
  padding: 0 ${pxToRem(18)};
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${pxToRem(36)};
  }
`
