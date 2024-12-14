export type GeneralResponseType<T = any> = {
  data?: T
  limit: number
  page: number
  total: number
}
