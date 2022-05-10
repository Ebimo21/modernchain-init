import React from 'react'
import Logo from './Logo'
import NavIcon from './NavIcon'
import HeadStyle from '../../styles/style.module.scss'
import { faCoffee, faCartShopping, faUser, faBars, faArrowsTurnToDots, faCar } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div>
        <Logo imgUrl="../logo.png" altText="Company Logo" width="30px" height="30px" brandName="Xeur">
        </Logo>

        <NavIcon icon={faUser}></NavIcon>
        <NavIcon icon={faCartShopping}></NavIcon>
        <NavIcon icon={faBars}></NavIcon>
        
    </div>
  )
}

export default Header