import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { theme } from '../../styles/theme'
import { pxToRem } from '../../utils/px-to-rem'

export const DropdownTrigger = styled(DropdownMenu.Trigger)`
  display: flex;
  align-items: center;
  column-gap: ${pxToRem(15)};
  font-family: 'Inter', sans-serif;
  height: ${pxToRem(32)};
  background-color: #7d90b2;
  color: ${theme.colors.white};
  padding: ${pxToRem(6)} ${pxToRem(12)};
  font-size: ${theme.fontSizes.base};
  border-radius: ${pxToRem(6)};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
  width: max-content;

  &:hover {
    background-color: #7d90b2;
    color: ${theme.colors.white};
  }

  &.is-table {
    background-color: transparent;
    height: auto;

    &:hover {
      background-color: transparent;
      color: transparent;
    }
  }
`

export const DropdownContent = styled(DropdownMenu.Content)`
  background-color: ${theme.colors.white};
  border-radius: ${pxToRem(6)};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: ${pxToRem(5)} 0;
  min-width: 150px;
`

export const DropdownItem = styled(DropdownMenu.Item)`
  padding: ${pxToRem(5)} ${pxToRem(10)};
  font-size: ${theme.fontSizes.base};
  color: #1a212c;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.lightBlue};
    color: #1a212c;
  }
`

export const DropdownSeparator = styled(DropdownMenu.Separator)`
  height: ${pxToRem(1)};
  background-color: #e5e5e5;
  margin: ${pxToRem(4)} 0;
`
