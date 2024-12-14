import styled from 'styled-components'
import { pxToRem } from '../../utils/px-to-rem'
import { theme } from '../../styles/theme'

export const AppHeader = styled.header`
  padding: 0 ${pxToRem(18)};
  margin: ${pxToRem(24)} 0;

  h1 {
    font-size: ${pxToRem(18)};
    font-weight: ${theme.fontWeights.medium};
    line-height: 29.05px;
    color: ${theme.textColors.default};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${pxToRem(36)};

    h1 {
      font-size: ${pxToRem(24)};
    }
  }
`
