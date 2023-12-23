import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Home({userOnline}) {
    const [users, setUsers] = useState([]) ; 
    const navigate = useNavigate()
    useEffect(
        ()=>{
            axios
            .get("http://localhost:3000/users")
            .then((rep) => setUsers(rep.data)) ;

            userOnline == "" ? navigate("/")  : null

        },
        []

    )
  return (
    <div>Home</div>
  )
}
