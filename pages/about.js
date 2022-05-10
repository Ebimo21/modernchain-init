import React from 'react'

const about = ({users}) => {
  return (
    <div>
        <h2>Users</h2>
        {console.log(users)}

        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <a href={"https://www."+user.website}>{user.website}</a>
                </li>

            ))}
            
        </ul>
    </div>
  )
}

export const getStaticProps = async() =>{
    const res = await fetch('http://jsonplaceholder.typicode.com/users?_limit=5')
    const users = await res.json();

    return{
        props: {
            users,
        }
    }
}

export default about