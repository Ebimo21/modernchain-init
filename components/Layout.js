import React from 'react'
import Header from './HeaderComponents/Header'
import Headstyler from '../styles/Style.module.scss'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header Headstyler={Headstyler}>

      </Header>
      
      {children}

      <Footer>
        
      </Footer>

    </>
  )
}

export default Layout