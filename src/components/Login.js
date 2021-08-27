import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
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

    const clearState = () => {
        setUsername("")
        setPassword("")
        setAuth(false)
    };

    // useEffect(() => {

    //     if (mount) {
    //         axios.post('http://localhost:5001/user/verify', user)
    //             .then(res => res)
    //             .then(data => setAuth(data))
    //             .catch(err => console.log("error: " + err))
    //     }
    // });

    const SignIn = () => {
        axios.post('http://localhost:5001/user/verify', user)
            .then(res => res)
            .then(data => setAuth(data))
            .catch(err => console.log("error: " + err))
        if (isauth) {
            history.push("/dashboard")
        }
        else {
            alert("Incorrect username or pasword");
        }
        clearState()

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


                    <button className="btnContainer" onClick={SignIn} >Login</button>



                    <p><Link to='/register'><span>Sign up</span></Link></p>
                </div >


            </div>
        </section >
    )
}

export default Login
