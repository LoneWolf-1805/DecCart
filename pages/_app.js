import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { DecCartProvider } from '../context/DecCartContext'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider 
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  >
    <DecCartProvider>
      <Component {...pageProps} />
    </DecCartProvider>
  </MoralisProvider>
  )
}

export default MyApp
