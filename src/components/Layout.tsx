import React from 'react'
import Navbar from './Navbar'

type layoutProp = {
  children: React.ReactNode
}

function Layout({ children }: layoutProp) {
  return (
    <div>
      <Navbar/>
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {children}
      </div>
    </div>
  )
}

export default Layout
