import React from 'react'

const ListItem = ({Link, href, toggleMobileMenu, className, title }) => {
  return (
    <Link href={href}>
      <a onClick={toggleMobileMenu} id='get' className={className}>{title}</a>
    </Link>
  )
}

export default ListItem
