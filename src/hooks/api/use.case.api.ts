import { FetchCaseParamsType, UpdateCaseStatusCredentialsType } from '../../types/case'
import { useAxios } from '../use.axios'

export function useCasesApi() {
  const axiosInstance = useAxios()
  const API_BASE_URL = '/api/'

  const fetchCasesApi = async (params?: FetchCaseParamsType, signal?: AbortSignal) => {
    const response = await axiosInstance.get(`${API_BASE_URL}requests`, { params, signal })
    return response.data
  }

  const updateCaseStatusApi = async (
    credentials: UpdateCaseStatusCredentialsType,
    signal: AbortSignal
  ) => {
    const response = await axiosInstance.put(`${API_BASE_URL}update-status`, credentials, {
      signal
    })
    return response.data
  }

  return {
    updateCaseStatusApi,
    fetchCasesApi
  }
}
