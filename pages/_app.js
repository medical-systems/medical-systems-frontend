import '@/styles/globals.css'
import { AuthProvider } from '@/contexts/auth'
import {NavProvider} from '@/contexts/Navcontext' 



export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NavProvider>
      <Component {...pageProps} />
      </NavProvider>
    </AuthProvider>
  )
}
