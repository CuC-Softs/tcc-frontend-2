import { createTheme } from '@material-ui/core/styles'
import { lightBlue, red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#66BB6A',
      light: '#98EE99',
      dark: '#338A3E'
    },
    secondary: {
      main: '#D32F2F',
      light: '#FF6659',
      dark: '#9A0007'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
