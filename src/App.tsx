import { ThemeProvider } from 'styled-components'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { theme } from './styles/theme'
import AppRoutes from './routes'
import { GlobalStyle } from './styles/global-styles'
import './styles/variables.css'

const App: React.FC = () => {
  return (
    <Theme>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </Theme>
  )
}

export default App
