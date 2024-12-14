import { create } from 'zustand'
import {
  CaseType,
  FetchCaseParamsType,
  UpdateCaseStatusCredentialsType,
  UpdateCaseStatusResponseType
} from '../types/case'
import { useCasesApi } from '../hooks/api/use.case.api'
import { GeneralResponseType } from '../types/general'

type Store = {
  searchTerm: string
  selectedColumns: string[]
  isUpdatingCase: boolean
  fetchCases: (
    params?: FetchCaseParamsType,
    signal?: AbortSignal
  ) => Promise<GeneralResponseType<CaseType[]> | undefined>
  updateCaseStatus: (
    credentials: UpdateCaseStatusCredentialsType
  ) => Promise<UpdateCaseStatusResponseType | undefined>
  setSelectedColumns: (columns: string[]) => void
  abortUpdateCaseRequest: () => void
}

const LOCAL_STORAGE_KEY = 'deciphex-selectedColumns'

const useCaseStore = create<Store>((set) => {
  const { fetchCasesApi, updateCaseStatusApi } = useCasesApi()

  let updateCaseAbortController: AbortController | null = null

  const getInitialSelectedColumns = (): string[] => {
    const storedColumns = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedColumns
      ? JSON.parse(storedColumns)
      : ['caseName', 'assignee', 'description', 'dateCreated']
  }

  return {
    searchTerm: '',

    selectedColumns: getInitialSelectedColumns(),

    fetchCases: async (params?: FetchCaseParamsType, signal?: AbortSignal) => {
      try {
        const response = await fetchCasesApi(params, signal)
        return response
      } catch (error) {
        return error
      }
    },

    setSelectedColumns: (columns) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns))
      set({ selectedColumns: columns })
    },

    isUpdatingCase: false,

    updateCaseStatus: async (credentials: UpdateCaseStatusCredentialsType) => {
      if (updateCaseAbortController) updateCaseAbortController.abort()
      updateCaseAbortController = new AbortController()

      set({ isUpdatingCase: true })
      try {
        const response = await updateCaseStatusApi(credentials, updateCaseAbortController.signal)
        return response
      } catch (error) {
        console.error('Error updating case status:', error)
        return error
      } finally {
        set({ isUpdatingCase: false })
      }
    },

    abortUpdateCaseRequest: () => {
      if (updateCaseAbortController) {
        updateCaseAbortController.abort()
        updateCaseAbortController = null
      }
    }
  }
})

export default useCaseStore
