import React from 'react'

const Logo = ({imgUrl, imgClass, aClass, width, height, altText, brandName}) => {
  return (
    <a className={aClass}>
        <img 
            alt={altText} 
            src={imgUrl} 
            width={width} 
            height={height}
            className={imgClass}
        />

        <span>{brandName}</span>

    </a>
  )
}

export default Logo