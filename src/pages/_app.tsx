import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import { AppProivder } from '@/context/productContext'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${quicksand.className} bg-very-dark min-h-screen text-white w-full`}>
      <Head>
        <title>buymore</title>
      </Head>
      <AppProivder>
        <SkeletonTheme baseColor="#141c2f" highlightColor="#1f2a48">
          <Component {...pageProps} />
        </SkeletonTheme>
      </AppProivder>
    </div>
  )
}
