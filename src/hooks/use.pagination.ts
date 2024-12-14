import { useState, useEffect, useRef, useCallback } from 'react'
import { CaseType } from '../types/case'

interface UsePaginationProps {
  initialPage?: number
  initialLimit?: number
  fetchTableData: (params?: any, signal?: AbortSignal) => Promise<any>
  fetchTableDataParams?: any
}

const usePagination = ({
  initialPage = 1,
  initialLimit = 10,
  fetchTableData,
  fetchTableDataParams = {}
}: UsePaginationProps) => {
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState<CaseType[]>([])
  const [loading, setLoading] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchData = useCallback(
    async (params?: any) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      abortControllerRef.current = new AbortController()

      setLoading(true)
      try {
        const response = await fetchTableData({ ...params }, abortControllerRef.current.signal)
        const { data = [], total = 0 } = response || {}
        setData(data)
        setTotal(total)
      } finally {
        setLoading(false)
      }
    },
    [fetchTableData]
  )

  const searchTableData = useCallback(() => {
    fetchData({ limit, page, ...fetchTableDataParams })
  }, [fetchData, limit, page, fetchTableDataParams])

  useEffect(() => {
    searchTableData()
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [searchTableData])

  const totalPages = Math.ceil(total / limit)

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  return {
    data,
    total,
    page,
    limit,
    loading,
    nextPage,
    prevPage,
    setPage,
    setLimit,
    displayRange: `${data.length < 1 ? '0' : (page - 1) * limit + 1}-${Math.min(page * limit, total)} of ${total} cases`,
    totalPages,
    searchTableData
  }
}

export default usePagination
