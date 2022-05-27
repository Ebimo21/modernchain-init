import React from 'react'
import {useState,} from 'react'
import { data } from './api/data/data'


const register = () => {
    
    const [submit, setSubmit] = useState('')
    
    
    const [name, setUserName] = useState('')

    const submitting = async (e) =>{

      
   
        e.preventDefault();
        console.log(JSON.stringify(name))
        await saveUser(name);
      //   e.target.reset();

}
    
    return (
    <div>
      <h1>Add User!</h1>
      <form onSubmit={submitting}>
          <label>User Name</label><br/>
          <input 
            type={'text'} 
            name={'email'} 
            // placeholder={'enter_name'} 
            value={name}
            onChange={(e)=> setUserName(e.target.value)} />
          <button type={`submit`} >ADD</button>
      </form>
    </div>
  )
}




 

async function saveUser(data){

    const response =  await fetch('/api/data/userget', {
        method: 'UPDATE',
        body: JSON.stringify(data)
    })

    if(!response.ok){
        
        throw new Error(response.statusText); 
    }
    return await response.json();
  }


export default register
