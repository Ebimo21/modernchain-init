import React from 'react'
import Logo from './Logo'

// import LogoImage from '../../public/Logo.png'
import NavIcon from './NavIcon'
import SideNav from '../SideComponents/SideNav'
import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/router'
import { faCoffee, faCartShopping, faUser, faBars, faArrowsTurnToDots, faCar } from '@fortawesome/free-solid-svg-icons'


const Header = ({Headstyler}) => {

  const route = useRouter();
  const path = route.pathname;
  // console.log(path);
  
  const toggleMobileMenu = () =>{
    const menu = document.getElementById('btn');
    setOpen(!open);
  }
  const [open, setOpen] = useState(true);
  // const LogoImage = "/logo.png"
  
  return (

    <>
      <div className='bg-white shadow-lg'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div >
              <div>
                <Link href='/'>
                  
                  <Logo 
                    imgUrl='/logo.png'
                    imgClass="h-8 w-8 mr-2" 
                    aClass="flex items-center py-4 px-2" 
                    altText="Company Logo" 
                    width="30px" 
                    height="30px" 
                    brandName="Xeur">
                  </Logo> 

                </Link>

              </div>
            </div>

              <div className='flex basis-20 items-center justify-around' >
                
              <NavIcon  icon={faUser}></NavIcon>
              <NavIcon  icon={faCartShopping}></NavIcon>
              <NavIcon calling={toggleMobileMenu} id="btns" className="md:hidden" icon={faBars} ></NavIcon>
              </div>
            </div>
          </div>

          
      </div>

      <SideNav 
        Link = {Link}
        toggleMobileMenu = {toggleMobileMenu}
        path={path}
        open={open}
      >
      </SideNav>

      <div className="overlay">
        
      </div>


    </>
    
  )
     
}

export default Header