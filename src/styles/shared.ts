import styled from 'styled-components'
import { pxToRem } from '../utils/px-to-rem'
import { theme } from './theme'

export const TableControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  width: 100%;

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(16)};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    > div:nth-child(2) {
      flex-direction: row;
      align-items: center;
    }
  }
`

export const CheckboxCardControl = styled.div`
  position: relative;

  div:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 40px;
  }
`
