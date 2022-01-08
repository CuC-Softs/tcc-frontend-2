import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { useEffect } from 'react'
import { AuthProvider } from '../contexts/AuthContext'

const IFConnect = (props) => {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>IFConnect</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledComponentThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <Component {...pageProps} />
            <GlobalStyle />
          </AuthProvider>
        </StyledComponentThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default IFConnect
