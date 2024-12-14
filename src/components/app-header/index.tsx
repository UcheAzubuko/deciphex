import { useLocation } from 'react-router-dom'
import * as S from './styles'

const AppHeader: React.FC = () => {
  const location = useLocation()

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/all-cases':
        return 'All cases'

      case '/pending-cases':
        return 'Pending cases'

      case '/accepted-cases':
        return 'Accepted cases'

      case '/rejected-cases':
        return 'Rejected cases'

      default:
        return null
    }
  }

  return (
    <S.AppHeader>
      <h1>{getHeaderTitle()}</h1>
    </S.AppHeader>
  )
}

export default AppHeader
