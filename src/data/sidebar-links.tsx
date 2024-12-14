import BriefCaseIcon from '../assets/brief-case.svg?react'
import MoreCircleIcon from '../assets/more-circle.svg?react'
import CheckCircleIcon from '../assets/check-circle.svg?react'
import CancelCircleIcon from '../assets/cancel-circle.svg?react'

const sidebarLinks = [
  {
    href: '/all-cases',
    key: 'all-cases',
    label: 'All cases',
    icon: <BriefCaseIcon />
  },
  {
    href: '/pending-cases',
    key: 'pending-cases',
    label: 'Pending cases',
    icon: <MoreCircleIcon />
  },
  {
    href: '/accepted-cases',
    key: 'accepted-cases',
    label: 'Accepted cases',
    icon: <CheckCircleIcon />
  },
  {
    href: '/rejected-cases',
    key: 'rejected-cases',
    label: 'Rejected cases',
    icon: <CancelCircleIcon />
  }
]

export default sidebarLinks
