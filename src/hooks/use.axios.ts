import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig
} from 'axios'

export function useAxios(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config
    },
    (error: AxiosError) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      if (error.response) {
        console.error(error.response)
      }

      return Promise.reject(error)
    }
  )

  return instance
}
