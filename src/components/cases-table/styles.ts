import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon, MinusIcon } from '@radix-ui/react-icons'
import { pxToRem } from '../../utils/px-to-rem'
import { theme } from '../../styles/theme'

export const TableWrapper = styled.div`
  margin: ${pxToRem(24)} 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > div:first-child {
    overflow: auto;
    border: ${pxToRem(1)} solid #e5e7eb;
    border-radius: 0 0 ${pxToRem(8)} ${pxToRem(8)};
  }
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  background: white;
  width: 100%;
`

export const TableHead = styled.thead`
  background-color: ${theme.colors.lightMist};
  color: ${theme.textColors.tableHeader};
  font-size: ${pxToRem(12)};
  font-weight: ${theme.fontWeights.semibold};
  line-height: 14.52px;
  letter-spacing: 0.05em;
  white-space: nowrap;
  text-transform: uppercase;
`

export const TableHeaderRow = styled.tr``

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #e5e7eb;
`

export const TableBody = styled.tbody`
  overflow: auto;
  width: 100%;
  max-width: 100%;
  max-height: ${pxToRem(792)};
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.lightMist};
  }
`

export const TableCell = styled.td`
  padding: ${pxToRem(16)};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  line-height: 16.94px;
  text-align: left;
`

export const PriorityChip = styled.span`
  display: inline-block;
  font-size: ${pxToRem(10)};
  font-weight: ${theme.fontWeights.medium};
  line-height: 12.1px;
  letter-spacing: 0.05em;
  padding: ${pxToRem(6)} ${pxToRem(8)};
  color: ${theme.colors.white};
  border-radius: ${pxToRem(80)};
  text-transform: uppercase;
  white-space: nowrap;

  &.low {
    background-color: #1b4ed1;
  }

  &.high {
    background-color: #ae001f;
  }
`

export const Status = styled.span`
  display: inline-block;
  font-size: ${pxToRem(10)};
  font-weight: ${theme.fontWeights.medium};
  line-height: 12.1px;
  letter-spacing: 0.05em;
  border-radius: ${pxToRem(80)};
  padding: ${pxToRem(6)} ${pxToRem(8)};
  color: ${theme.colors.white};
  background: #4d4c76;
  text-transform: uppercase;
  white-space: nowrap;

  &.accepted {
    background-color: #1b4ed1;
  }

  &.rejected {
    background-color: #ae001f;
  }
`

export const Assignee = styled.span`
  white-space: nowrap;
`

export const Description = styled.div`
  min-width: 360px;
`

export const Type = styled.div`
  display: inline-block;
  font-size: ${pxToRem(10)};
  font-weight: ${theme.fontWeights.medium};
  line-height: 12.1px;
  letter-spacing: 0.05em;
  color: ${pxToRem(1)} solid ${theme.textColors.tableHeader};
  border: ${pxToRem(1)} solid ${theme.textColors.tableHeader};
  border-radius: ${pxToRem(80)};
  padding: ${pxToRem(6)} ${pxToRem(8)};
  background: ${theme.colors.white};
  text-transform: uppercase;
  white-space: nowrap;
`
export const StyledCheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border: ${pxToRem(1)} solid #6f809e;
  border-radius: ${pxToRem(3)};
  background-color: ${theme.colors.white};
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

  &[data-state='checked'] {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  &[data-state='indeterminate'] {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`

export const StyledCheckboxIcon = styled(CheckIcon)`
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  color: ${theme.colors.white};
`

export const StyledMinusIcon = styled(MinusIcon)`
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  color: ${theme.colors.white};
`
