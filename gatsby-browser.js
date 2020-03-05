import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#580D7D" },
    secondary: { main: "#FFFFFF" },
  },
})

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
