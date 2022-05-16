import React from 'react'
import Image from 'next/image'

const Logo = ({imgUrl, imgClass, aClass, width, height, altText, brandName}) => {
  return (
    <a className={aClass}>
        <Image
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