import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight:['500','600','700']
 })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${quicksand.className} bg-very-dark min-h-screen text-white w-full`}>
      <Component {...pageProps} />
    </div>
  )
}
