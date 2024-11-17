import React from 'react'
import Header from './Header'

import "../../styles/LayoutPage.css"


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="content">
        {children}
      </div>
    </>
  )
}

export default Layout;
