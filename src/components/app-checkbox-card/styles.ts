import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { theme } from '../../styles/theme'
import { pxToRem } from '../../utils/px-to-rem'

export const AppCheckboxWrapper = styled.div`
  position: relative;
`

export const CardWrapper = styled.div`
  position: absolute;
  left:  ${pxToRem(-74)};
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} 0;
  z-index: 10;
  box-shadow: 0px 3px 6px 0px #4b515b26;
  max-width: ${pxToRem(160)};74
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckboxItemWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: ${pxToRem(10)} ${pxToRem(16)};
  cursor: pointer;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  > label {
    display: inline-block;
    margin-left: ${pxToRem(8)};
    color: #1a212c;
    cursor: pointer;
  }

  &:hover {
    background-color: ${theme.colors.lightBlue};
  }
`

export const StyledCheckbox = styled(Checkbox.Root)`
  all: unset;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border: ${pxToRem(1)} solid #6f809e;
  border-radius: ${pxToRem(3)};
  background-color: ${theme.colors.white};

  &[data-state='checked'] {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`

export const StyledIndicator = styled(Checkbox.Indicator)`
  color: white;
  font-size: ${theme.fontSizes.base};
`
