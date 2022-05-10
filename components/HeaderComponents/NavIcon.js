import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const NavIcon = ({icon}) => {
  return (
    <div>
        {/* <p> */}
        <FontAwesomeIcon icon={icon} />
        {/* </p> */}
    </div>
  )
}

export default NavIcon