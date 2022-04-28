import { AppProps } from 'next/app'
import Head from 'next/head'

import { AuthProvider } from 'data/context/AuthContext'
import IsLogout from 'components/IsLogout'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Engloba Sistemas</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="##2e9bf8" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <AuthProvider>
          <IsLogout>
            <Component {...pageProps} />
          </IsLogout>
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
