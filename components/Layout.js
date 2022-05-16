import React from 'react'
import Header from './HeaderComponents/Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header >

      </Header>
      
      {children}

      <Footer>

      </Footer>

    </>
  )
}

export default Layout