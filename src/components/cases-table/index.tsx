import React, { useState, useMemo } from 'react'
import * as S from './styles'
import AppDropdown from '../app-dropdown'
import HorizontalMoreIcon from '../../assets/horizontal-more.svg?react'
import { CaseType, CaseStatusEnum } from '../../types/case'
import AppPaginator from '../app-paginator'

type AppTableProps = {
  data: CaseType[]
  columns: { label: string; value: keyof CaseType }[]
  actionsOptions: { label: string; value: string }[]
  triggerAction: (selectedCase: CaseType, action: any) => void
  onSelectionChange: (selectedRows: CaseType[]) => void
  displayRange: string
  totalPages: number
  currentPage: number
  onNext: () => void
  onPrev: () => void
}

const CasesTable: React.FC<AppTableProps> = ({
  data,
  columns,
  actionsOptions,
  triggerAction,
  onSelectionChange,
  displayRange,
  totalPages,
  currentPage,
  onNext,
  onPrev
}) => {
  const [selectedRows, setSelectedRows] = useState<CaseType[]>([])

  const isRowSelected = (row: CaseType) =>
    selectedRows.some((selectedRow) => selectedRow.caseName === row.caseName)

  const handleRowSelect = (row: CaseType) => {
    const updatedSelection = isRowSelected(row)
      ? selectedRows.filter((selectedRow) => selectedRow.caseName !== row.caseName)
      : [...selectedRows, row]

    setSelectedRows(updatedSelection)
    onSelectionChange(updatedSelection)
  }

  const handleSelectAll = () => {
    if (selectedRows.length === data?.length) {
      setSelectedRows([])
      onSelectionChange([])
    } else {
      setSelectedRows(data)
      onSelectionChange(data)
    }
  }

  const isAllSelected = selectedRows.length === data?.length
  const isIndeterminate = selectedRows.length > 0 && !isAllSelected

  const getCaseStatusClassName = useMemo(() => {
    const statusClassMap: Record<CaseStatusEnum, string> = {
      'In Progress': 'pending',
      Rejected: 'rejected',
      Accepted: 'accepted'
    }
    return (status: CaseStatusEnum) => statusClassMap[status] || ''
  }, [])

  const handleActionClick = (action: string, row: CaseType) => {
    triggerAction(row, action)
  }

  return (
    <S.TableWrapper>
      <div>
        <S.StyledTable>
          <S.TableHead>
            <S.TableHeaderRow>
              <S.TableHeaderCell>
                <S.StyledCheckboxRoot
                  checked={isIndeterminate ? 'indeterminate' : isAllSelected}
                  onCheckedChange={handleSelectAll}
                >
                  {isAllSelected ? (
                    <S.StyledCheckboxIcon />
                  ) : isIndeterminate ? (
                    <S.StyledMinusIcon />
                  ) : null}
                </S.StyledCheckboxRoot>
              </S.TableHeaderCell>
              {columns.map((column, columnIndex) => (
                <S.TableHeaderCell key={`header-${column.value}-${columnIndex}`}>
                  {column.label}
                </S.TableHeaderCell>
              ))}
              <S.TableHeaderCell key="header-actions">Actions</S.TableHeaderCell>
            </S.TableHeaderRow>
          </S.TableHead>
          <S.TableBody>
            {data?.map((row, rowIndex) => (
              <S.TableRow key={`row-${row.caseName || rowIndex}`}>
                <S.TableCell>
                  <S.StyledCheckboxRoot
                    checked={isRowSelected(row)}
                    onCheckedChange={() => handleRowSelect(row)}
                  >
                    {isRowSelected(row) && <S.StyledCheckboxIcon />}
                  </S.StyledCheckboxRoot>
                </S.TableCell>
                {columns?.map((column, columnIndex) => (
                  <S.TableCell
                    key={`cell-${row.caseName || rowIndex}-${column.value}-${columnIndex}`}
                  >
                    {column.value === 'priority' ? (
                      <S.PriorityChip className={row[column.value]?.toLowerCase()}>
                        {row[column.value]}
                      </S.PriorityChip>
                    ) : column.value === 'assignee' ? (
                      <S.Assignee>{row[column.value]}</S.Assignee>
                    ) : column.value === 'type' ? (
                      <S.Type>{row[column.value]}</S.Type>
                    ) : column.value === 'status' ? (
                      <S.Status className={getCaseStatusClassName(row[column.value])}>
                        {row[column.value]}
                      </S.Status>
                    ) : column.value === 'description' ? (
                      <S.Description>
                        <p>{row[column.value]}</p>
                      </S.Description>
                    ) : (
                      row[column.value]
                    )}
                  </S.TableCell>
                ))}

                <S.TableCell key={`actions-${row.caseName || rowIndex}`}>
                  <AppDropdown
                    items={actionsOptions}
                    isTable
                    onClick={(action) => handleActionClick(action, row)}
                  >
                    <HorizontalMoreIcon />
                  </AppDropdown>
                </S.TableCell>
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.StyledTable>
      </div>
      <AppPaginator
        displayRange={displayRange}
        totalPages={totalPages}
        currentPage={currentPage}
        onNext={onNext}
        onPrev={onPrev}
      />
    </S.TableWrapper>
  )
}

export default CasesTable
