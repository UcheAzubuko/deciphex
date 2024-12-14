import { Button } from './styles'

interface AppButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const AppButton: React.FC<AppButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default AppButton
