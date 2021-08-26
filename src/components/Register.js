import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Register() {

    let history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const RegUser = () => {

        console.log(newuser);

        axios.post('http://localhost:5001/user/add', newuser)
            .then(res => console.log(res))
            .catch(err => console.log("error: " + err))
        // axios.get('http://localhost:5000/exercises/')
        //     .then(response => {
        //         this.setState({ exercises: response.data })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        history.push('/')
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
                    autofocus
                    required
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); newuser.username = username }}
                ></input>
                <br />
                <br />
                <label>Password</label>
                <input type="password"
                    autofocus
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); newuser.password = password }}
                ></input>
                <br />
                <br />
                <div >
                    <button onClick={RegUser}>Register</button>
                </div >


            </div>
        </section >
    )
}

export default Register
