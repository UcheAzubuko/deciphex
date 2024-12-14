import { styled } from 'styled-components'
import { pxToRem } from '../../utils/px-to-rem'
import { theme } from '../../styles/theme'

export const PaginatorWrapper = styled.div`
  margin-top: ${pxToRem(51)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${pxToRem(12)};
`

export const PaginatorMetaData = styled.div`
  font-size: ${pxToRem(12)};
  font-weight: ${theme.fontWeights.semibold};
  line-height: 14.52px;
  letter-spacing: 0.05em;
  color: ${theme.textColors.tableHeader};
`

export const PaginatorControls = styled.div`
  display: flex;
  align-items: center;

  > div {
    color: #687182;
    font-size: ${pxToRem(12)};
    font-weight: ${theme.fontWeights.medium};
    line-height: 18px;
    letter-spacing: 0.03em;
    margin-right: ${pxToRem(10)};
    margin-left: ${pxToRem(4)};
  }
`

export const PaginatorButton = styled.button<{ disabled?: boolean }>`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? '#eee' : '#fff')};
  color: #171c26;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${pxToRem(6)};
  box-shadow: 0px 2px 5px 0px #5960781a;
  box-shadow: 0px 0px 0px 1px #464f6029;
  box-shadow: 0px 1px 1px 0px #0000001a;
  font-size: ${pxToRem(12)};
  font-weight: ${theme.fontWeights.medium};
  line-height: 18px;
  letter-spacing: 0.03em;

  &.text-button {
    cursor: default;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
  }
`
