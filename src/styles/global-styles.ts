import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none; 
    padding: 0;  
    margin: 0;  
  }

  li {
    padding: 0;   
    margin: 0;        
  }
`
