import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import { useState } from 'react';
import { useHistory } from "react-router-dom"
function Login() {

    let history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isauth, setAuth] = useState(false);

    const user = ({
        username: username,
        password: password
    })
    const SignIn = () => {

        console.log(username, password)


        if (isauth) {
            history.push("/dashboard")
        }
        else {
            alert("Incorrect username or pasword");
        }
    }

    return (
        <section className="login contain bg-light-purple">

            <div className="">
                <label>Login</label>
                <br />
                <br />
                <label>Username</label>
                <input type="text"
                    autofocus
                    required
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); user.username = username }}
                ></input>
                <br />
                <br />
                <label>Password</label>
                <input type="password"
                    autofocus
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); user.password = password }}
                ></input>
                <br />
                <br />
                <div >


                    <button className="btnContainer" onClick={SignIn} >Login</button>



                    <p><Link to='/register'><span>Sign up</span></Link></p>
                </div >


            </div>
        </section >
    )
}

export default Login
