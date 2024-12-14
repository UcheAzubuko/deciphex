import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { pxToRem } from '../../utils/px-to-rem'

type AppButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

export const Button = styled.button<AppButtonProps>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(6)};
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  font-size: ${theme.fontSizes.base};
  font-weight: 500;
  padding: ${pxToRem(6)} ${pxToRem(12)};
  line-height: 20px;
  border-radius: ${pxToRem(6)};
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  color: white;

  ${({ variant }) => variant === 'primary' && css``}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: white;
    `}

  ${({ variant }) =>
    variant === 'danger' &&
    css`
      background-color: #dc3545;
      color: white;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e0e0e0;
      color: #9e9e9e;
      cursor: not-allowed;
    `}
`
