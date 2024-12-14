export enum CaseStatusEnum {
  PENDING = 'In Progress',
  REJECTED = 'Rejected',
  ACCEPTED = 'Accepted'
}

export type CaseType = {
  caseName: string
  priority: 'High' | 'Low'
  assignee: string
  description: string
  status: CaseStatusEnum
  type: string
  dateCreated: string
  lastUpdated: string
}

export type UpdateCaseStatusCredentialsType = { ids: string[]; status: CaseStatusEnum }

export type FetchCaseParamsType = {
  search?: string
  sort?: string
  order?: string
  page?: number
  limit?: number
  status?: CaseStatusEnum
}

export type UpdateCaseStatusResponseType = {
  message: string
  updatedCount: number
}
