import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1;
    text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
