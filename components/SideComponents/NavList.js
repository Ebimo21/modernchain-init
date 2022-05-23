import React from 'react'
import ListItem from './ListItem'

function NavList({Link, path, toggleMobileMenu}) {
  return (
    <ul className="text-white px-5">
        <ListItem
            Link = {Link}
            href='/'
            toggleMobileMenu={toggleMobileMenu}
            className={`my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold`}
            title="Home"
        >
        </ListItem>
        <ListItem
            Link = {Link}
            href='/about'
            toggleMobileMenu={toggleMobileMenu}
            className={`${path === '/about' ? 'active' : ' '} my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold`}
            title="About"
        >
        </ListItem>
        <ListItem
            Link = {Link}
            href='/'
            toggleMobileMenu={toggleMobileMenu}
            className="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold"
            title="Services"
        >
        </ListItem>
        <ListItem
            Link = {Link}
            href='/'
            toggleMobileMenu={toggleMobileMenu}
            className="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold"
            title="Contact"
        >
        </ListItem>
        <ListItem
            Link = {Link}
            href='/'
            toggleMobileMenu={toggleMobileMenu}
            className="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold"
            title="Shop"
        >
        </ListItem>
        <ListItem
            Link = {Link}
            href='/'
            toggleMobileMenu={toggleMobileMenu}
            className="my-5 block text-sm px-2 py-4  hover:bg-green-500 font-semibold"
            title="FAQ"
        >
        </ListItem>
        
        
            
            
            
          </ul>
  )
}

export default NavList