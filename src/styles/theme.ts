export const theme = {
  colors: {
    primary: '#2264E5',
    white: '#ffffff',
    black: '#000000',
    lightMist: '#F4F7FC',
    lightBlue: '#EBF2FF'
  },
  fontSizes: {
    base: '1rem'
  },
  fontWeights: {
    base: '400',
    medium: '500',
    semibold: '600'
  },
  textColors: {
    default: '#2E3B52',
    tableHeader: '#606F89'
  },
  breakpoints: {
    tablet: '480px',
    desktop: '768px',
    laptop: '1440px',
    monitor: '1920px'
  }
}

export type ThemeType = typeof theme
