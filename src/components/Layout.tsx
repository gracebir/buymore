import React from 'react'

type layoutProp = {
    children: React.ReactNode
}

function Layout({children}:layoutProp) {
  return (
    <div className="mx-auto max-w-6xl px-4 lg:px-0">
      {children}
    </div>
  )
}

export default Layout
