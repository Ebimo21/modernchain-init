import React from 'react'
import Head from 'next/head';

const Meta = (props) => {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name='keywords' content={props.keywords}></meta>
        <meta name="description" content={props.description}></meta>
        {/* <link rel={props.rel} href={props.icon} /> */}

    </Head>
  )
}

Meta.defaultProps = {
    title:"Modern Chain",
    keywords: "ecommerce business",
    description: "Buy and Sell Online"
}

export default Meta
