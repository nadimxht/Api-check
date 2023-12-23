import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
    const [userInfo , setUserInfo]=useState({
        id:0 , 
        username:"",
        email:"",
        password:"",
    }) ; 
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users", userInfo ).then(()=>console.log("data added")).catch(err=>alert('error'))
    }

    const HandleForm=(ev)=>{
        setUserInfo(prev=>{return {...prev , [ev.target.name] : ev.target.value }}); 
        console.log(userInfo)
    }
  return (
    <div>
        <form>
            <label>username</label>
            <input name="username" type='text' onChange={(event)=>HandleForm(event)} />
            <label>email</label>
            <input name="email" type='email' onChange={(event)=>HandleForm(event)}   />
            <label>password</label>
            <input name="password" type='password' onChange={(event)=>HandleForm(event)}   /> 
            <button onClick={(event)=>handleSubmit(event)}>Submit</button>
        </form>
        <p>If you  have an account <Link to="/">login</Link></p>
    </div>
  )
}
