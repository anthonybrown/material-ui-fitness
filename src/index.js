import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'
import App from './Components/App'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: pink.A400,
      light: pink[200],
      dark: pink[700]
    },
    type: 'light'
  },
  spacing: {
    unit: 10
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
