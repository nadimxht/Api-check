import React, { useEffect, useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
export default function App() {
  const [userOnline, setUserOnline]=useState("") ;
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login setUserOnline={setUserOnline}/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Home" element={<Home userOnline={userOnline}/>} />
      </Routes>

      </BrowserRouter>
     
    </div>
  )
}
// const [users , setUsers] = useState([]) ; 
// const [error , setError]=useState("")
// useEffect(
//   ()=>{
//     axios.get("http://localhost:3000/users").then((rep)=>setUsers(rep.data)).catch((err)=>setError("no user found"))
//   },[]
// )
// get 
// post 
// put 
// delete 