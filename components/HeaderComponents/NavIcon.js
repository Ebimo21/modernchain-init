import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavIcon = ({calling, id, icon, className}) => {
  return (
    <i onClick={calling} id={id} className={className}>
        <FontAwesomeIcon  icon={icon} />
    </i>
  )
}

export default NavIcon