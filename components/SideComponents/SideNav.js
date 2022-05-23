import React from 'react'
import SideStyle from './SideNav.module.scss'
// import {useRouter} from 'next/router'
import NavList from './NavList'

const SideNav = ({Link, path, open, toggleMobileMenu}) => {
  
  

  return (
    <div id='btn'  className={`mobile-menu transition-all absolute ${open ? "w-0 hidden" : "w-48 "} top-0 bg-blue-900 h-full  `}>
          <NavList
            Link = {Link}
            toggleMobileMenu = {toggleMobileMenu}
            path={path}
            open={open}
          ></NavList>
      </div>
  )
}



export default SideNav