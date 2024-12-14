import { useEffect, useState } from 'react'
import * as SharedStyles from '../styles/shared'
import TableSearchEngine from '../components/table-search-engine'
import { caseActionsList, columnsList } from '../data/cases'
import AppCheckboxCard from '../components/app-checkbox-card'
import useCaseStore from '../stores'
import CasesTable from '../components/cases-table'
import { CaseStatusEnum, CaseType } from '../types/case'
import usePagination from '../hooks/use.pagination'
import AppDropdown from '../components/app-dropdown'

const AcceptedCases: React.FC = () => {
  const { selectedColumns, setSelectedColumns, fetchCases, updateCaseStatus } = useCaseStore()

  const [searchTerm, setSearchTerm] = useState('')
  const [fetchTableDataParams, setFetchTableDataParams] = useState({
    status: 'Accepted',
    sort: 'caseName',
    order: 'asc',
    search: ''
  })
  const [selectedCases, setSelectedCases] = useState<CaseType[]>([])

  const { data, displayRange, totalPages, page, nextPage, prevPage, searchTableData } =
    usePagination({
      fetchTableData: fetchCases,
      fetchTableDataParams
    })

  useEffect(() => {
    searchTableData()
  }, [fetchTableDataParams, searchTableData])

  const selectedColumnObjects = columnsList.filter((col) => selectedColumns.includes(col.value))

  const handleUpdateSingleCase = async (row: CaseType, action: CaseStatusEnum) => {
    await updateCaseStatus({ ids: [row.caseName], status: action })
    searchTableData()
  }

  const handleColumnSelection = (selected: string[]) => {
    setSelectedColumns(selected)
  }

  const handleSelectionChange = (selectedRows: CaseType[]) => {
    setSelectedCases(selectedRows)
  }

  const handleSearch = () => {
    setFetchTableDataParams((prev) => ({
      ...prev,
      search: searchTerm
    }))
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const batchAction = async (status: CaseStatusEnum) => {
    if (selectedCases.length < 1) return
    const ids = selectedCases.map((c) => c.caseName)
    await updateCaseStatus({ ids, status })
    searchTableData()
  }

  return (
    <>
      <SharedStyles.TableControls>
        <div>
          <TableSearchEngine
            value={searchTerm}
            onChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </div>
        <div>
          <AppDropdown items={caseActionsList} onClick={batchAction}>
            Batch action
          </AppDropdown>
          <AppCheckboxCard
            buttonLabel="Columns"
            options={columnsList}
            selectedOptions={selectedColumns}
            onSelectionChange={handleColumnSelection}
          />
        </div>
      </SharedStyles.TableControls>

      <CasesTable
        data={data}
        columns={selectedColumnObjects}
        triggerAction={handleUpdateSingleCase}
        actionsOptions={caseActionsList}
        onSelectionChange={handleSelectionChange}
        displayRange={displayRange}
        totalPages={totalPages}
        currentPage={page}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </>
  )
}

export default AcceptedCases
