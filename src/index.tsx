import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyles from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
)

