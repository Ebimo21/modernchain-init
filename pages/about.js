import React from 'react'
import Meta from '../components/Meta'
import Link from 'next/link'

const about = ({users}) => {
  return (
    <div>
      <Meta 
        title="About | ModernChain">
      </Meta>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <h2>Users</h2>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <a href={"https://www."+user.website}>{user.website}</a>
          </li>

            )
          )
        }      
      </ul>
    </div>
  )
}

export const getStaticProps = async() =>{
    const res = await fetch('http://localhost:3000/api/hello')
    const users = await res.json();

    return{
        props: {
            users,
        }
    }
}

export default about