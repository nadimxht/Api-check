import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
export default function Login({setUserOnline}) {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({username: "", password: ""});

    const HandleForm = (ev) => {
        setUserInfo(prev => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value
            }
        });
        console.log(userInfo)
    }
    // get users
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            .then((rep) => setUsers(rep.data))
            .catch((err) => setError("no user found"))

        }, [])

    const CheckLogin = ({
        username,
        password
    }, e) => {
        e.preventDefault();
        console.log(users)
        users.find(e => e.username == username && e.password == password) == null
            ? alert("wrong credentiels")
            :  setUserOnline(users.find(e => e.username == username && e.password == password))  , navigate("/Home") 
    }

    return (
        <div>
            <form>
                <label>username</label>
                <input name="username" type='text' onChange={(event) => HandleForm(event)}/>
                <label>password</label>
                <input name="password" type='password' onChange={(event) => HandleForm(event)}/>
                <button onClick={(event) => CheckLogin(userInfo, event)}>Submit</button>
            </form> 

            <p>If you don't have an account <Link to="/signup">sign up </Link></p>
        </div>
    )
}
