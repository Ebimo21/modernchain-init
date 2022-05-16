import React from 'react'
import Logo from './Logo'
import NavIcon from './NavIcon'
import SideNav from '../SideComponents/SideNav'
import Link from 'next/link'
import { useState } from 'react'
// import HeadStyle from '../../styles/style.module.scss'
import { faCoffee, faCartShopping, faUser, faBars, faArrowsTurnToDots, faCar } from '@fortawesome/free-solid-svg-icons'


const Header = ({Headstyler}) => {
  
  const toggleMobileMenu = () =>{
    const menu = document.getElementById('btn');
    setOpen(!open);
  }
  const [open, setOpen] = useState(true);
  
  return (
    
    <>
      <div className='bg-white shadow-lg'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div >
              <div>
                <Link href='/'>
                  
                  <Logo 
                    imgUrl="../logo.png"
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
                
              <NavIcon className={Headstyler.icon} icon={faUser}></NavIcon>
              <NavIcon className={Headstyler.icon} icon={faCartShopping}></NavIcon>
              <NavIcon calling={toggleMobileMenu} id="btns" className="md:hidden" icon={faBars} ></NavIcon>
              </div>
            </div>
          </div>

          
      </div>

      <div id='btn'  className={`mobile-menu transition-all absolute ${open ? "w-0 hidden" : "w-48 "} top-0 bg-blue-900 h-full  `}>
          <ul class="text-white px-5">
            <li>
              <Link href="/">
                <a onClick={toggleMobileMenu} class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">Home</a>
              </Link>
            </li>
            <li class="">
              <Link href="/about">
                <a onClick={toggleMobileMenu} id='get' class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">About</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a onClick={toggleMobileMenu} class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">Services</a>
              </Link>
            </li>
            <li class="">
              <Link href="/about">
                <a onClick={toggleMobileMenu} id='get' class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">Contact</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a onClick={toggleMobileMenu} class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">Shop</a>
              </Link>
            </li>
            <li class="">
              <Link href="/about">
                <a onClick={toggleMobileMenu} id='get' class="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold">FAQ</a>
              </Link>
            </li>
            
          </ul>
      </div>
    </>
    
  )
     
}

export default Header