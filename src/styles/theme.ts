import { createTheme } from '@material-ui/core/styles'
import { lightBlue, red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  typography: { fontSize: 25 },
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
    },
    background: {
      default: '#FFF'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(0, 0, 0, 0.54)'
    }
  }
})

export default theme
