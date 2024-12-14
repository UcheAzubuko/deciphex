import { CaseType } from '../types/case'

export const caseActionsList = [
  { label: 'Accept cases', value: 'Accepted' },
  { label: 'Reject cases', value: 'Rejected' }
]

export const columnsList: { label: string; value: keyof CaseType }[] = [
  { label: 'Priority', value: 'priority' },
  { label: 'Case name', value: 'caseName' },
  { label: 'Assignee', value: 'assignee' },
  { label: 'Description', value: 'description' },
  { label: 'Status', value: 'status' },
  { label: 'Type', value: 'type' },
  { label: 'Date created', value: 'dateCreated' },
  { label: 'Last updated', value: 'lastUpdated' }
]
