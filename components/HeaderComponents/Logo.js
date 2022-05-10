import React from 'react'

const Logo = ({imgUrl, width, height, altText, brandName}) => {
  return (
    <div>
        <img 
            alt={altText} 
            src={imgUrl} 
            width={width} 
            height={height}
        />

        <span>{brandName}</span>

    </div>
  )
}

export default Logo