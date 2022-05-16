import React from 'react'
import SideStyle from './SideNav.module.scss'
import ListItem from '../ListItem'
import Link from 'next/link'

const SideNav = () => {
  return (
    <div id='sideNav' className={SideStyle.container}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
    </div>
  )
}

export default SideNav