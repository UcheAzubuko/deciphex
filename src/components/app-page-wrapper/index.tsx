import * as S from './styles'

type AppPageWrapperProps = {
  children: React.ReactNode
}

const AppPageWrapper: React.FC<AppPageWrapperProps> = ({ children }) => {
  return <S.AppPageWrapper>{children}</S.AppPageWrapper>
}

export default AppPageWrapper
