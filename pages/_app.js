import {ThemeProvider} from 'styled-components'
import BootstrapProvider from '@bootstrap-styled/provider'

const styledTheme = {
  // empty theme for custom styles
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={styledTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
