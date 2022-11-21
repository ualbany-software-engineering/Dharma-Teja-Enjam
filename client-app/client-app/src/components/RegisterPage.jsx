import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

import '../App.css'

export default function SignUpPage() {

    const [data, setData] = useState({name:"", email:"", password:""});

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {

        e.preventDefault();

        axios
            .post("http://localhost:8000/api/auth/signup", data)
            .then((res)  => {
                setData({name: "", description: ""});
                alert(res.data.message);
            });
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input          type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="text"
                                name="email"
                                value={data.email}
                                onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={data.password}
                                onChange={handleChange} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
