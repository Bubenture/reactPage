import AppLayout from './components/layout/AppLayut'
import { CryptoContextProvider } from './context/crypto-context'

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}
