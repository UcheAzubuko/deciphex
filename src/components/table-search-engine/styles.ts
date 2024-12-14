import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { pxToRem } from '../../utils/px-to-rem'

export const TableSearchEngine = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid #68718229;
  border-radius: ${pxToRem(6)};
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: ${pxToRem(320)};
  }
`

export const SearchIconContainer = styled.div`
  margin: 0 ${pxToRem(9)} 0 ${pxToRem(13)};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: ${theme.fontSizes.base};
  color: ${theme.textColors.default};
  background-color: transparent;

  &::-webkit-input-placeholder {
    font-size: ${theme.fontSizes.base};
    font-weight: 400;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    font-size: ${theme.fontSizes.base};
    font-weight: 400;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    font-size: ${theme.fontSizes.base};
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    font-size: ${theme.fontSizes.base};
    font-weight: 400;
  }
`
