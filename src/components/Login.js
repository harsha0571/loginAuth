import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom"

function Login() {

    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    const [role, setRole] = useState(999);
    const user = ({
        username: username,
        password: password
    })

    const firstUpdateauth = useRef(true)
    const firstUpdaterole = useRef(true)

    const log = useRef(false)

    useEffect(() => {
        if (firstUpdateauth.current) {
            firstUpdateauth.current = false
            return
        }
        if (auth) {
            log.current = true
        }
        else {
            alert("Incorrect username or pasword");
        }
    }, [auth])

    useEffect(() => {
        if (firstUpdaterole.current) {
            firstUpdaterole.current = false
            return
        }
        if (log.current) {

            if (role.data === 'user') {
                console.log("role 0")
                history.push("/dashboard")
            } else if (role.data === 'admin') {
                console.log("role 1")
                history.push("/admin")
            }
            else {
                console.log("no role")
            }
        }

    }, [role])


    // function clearState() {
    //     console.log("clear states")
    //     setUsername("")
    //     setPassword("")
    //     setAuth(false)
    //     setRole(999)
    //     console.log(username + password + auth + role)
    // }
    // useEffect((user) => {
    // }, [mount]);    // for useEffct on updating var mount 

    async function SignIn() {
        // const getRequest = async () => {} to use await 
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ user })
        // };
        // fetch('http://localhost:5001/user/verify', requestOptions)
        //     .then(response => response.json())
        //     .then(data => setAuth(data))
        //     .catch(err => console.log("err: " + err))

        // fetch('http://localhost:5001/user/role', requestOptions)
        //     .then(response => response.json())
        //     .then(data => setRole(data))
        //     .catch(err => console.log("err: " + err))

        await axios.post('http://localhost:5001/user/verify', user)
            .then(res => res)
            .then(function (data) {
                setAuth(data)
            })
            .catch(err => console.log("error: " + err))

        await axios.post('http://localhost:5001/user/role', user)
            .then(res => res)
            .then(function (data) {
                setRole(data)
            })
            .catch(err => console.log("error: " + err))

    }

    return (
        <section className="login contain bg-light-purple">

            <div className="">
                <label>Login</label>
                <br />
                <br />
                <label>Username</label>
                <input type="text"
                    autoFocus
                    required
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); user.username = username }}
                ></input>
                <br />
                <br />
                <label>Password</label>
                <input type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); user.password = password }}
                ></input>
                <br />
                <br />
                <div >
                    <button id="signin" className="btnContainer" onClick={SignIn} >Login</button>
                    <br />
                    <Link to='/register'><span>Sign up</span></Link>
                </div >


            </div>
        </section >
    )
}

export default Login
