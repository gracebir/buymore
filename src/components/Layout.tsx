import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type layoutProp = {
  children: React.ReactNode
}

function Layout({ children }: layoutProp) {
  return (
    <div>
      <Navbar/>
      <div className="mx-auto max-w-6xl min-h-[75vh] px-4 lg:px-0 mt-[84px] lg:mt-0">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
