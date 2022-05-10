import React from 'react'
import Header from './HeaderComponents/Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header>

        </Header>

        {children}

        <Footer>

        </Footer>
    </div>
  )
}

export default Layout