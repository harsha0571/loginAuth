import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Register() {

    let history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var flag = false


    async function RegUser() {

        await axios.post('http://localhost:5001/user/add', newuser)
            .then(res => console.log(res))
            .then(function (data) { flag = true })
            .catch(err => console.log("error: " + err))

        if (flag) {
            history.push('/')
        }
        else {
            alert("username or password is invalid")
        }
    }
    const newuser = ({
        username: username,
        password: password
    })
    return (
        <section className="login contain bg-light-purple">

            <div className="">
                <label>Register</label>
                <br />
                <br />
                <label>Username</label>
                <input type="text"
                    autoFocus
                    required
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); newuser.username = username }}
                ></input>
                <br />
                <br />
                <label>Password</label>
                <input type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); newuser.password = password }}
                ></input>
                <br />
                <br />
                <div >
                    <button onClick={RegUser}>Register</button>
                    <br />
                    <Link to='/'><span>Login</span></Link>
                </div >


            </div>
        </section >
    )
}

export default Register
