import React from 'react'
import Meta from '../components/Meta'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

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
            <h1 className='text-3xl'>{user.name}</h1>
            <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
            <h3 className='text-xl'><i>{user.username}</i></h3>
            <p><strong>{user.usernamexx}</strong></p>
            <a href={"https://www."+user.website}>{user.website}</a>
          </li>

            )
          )
        }      
      </ul>
    </div>
  )
}

export const getServerSideProps = async() =>{
    const prisma = new PrismaClient
    // const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await prisma.user.findMany()
    // const users = await res.json();
console.log('kd')
    return{
        props: {
            users,
        }
    }
}

export default about