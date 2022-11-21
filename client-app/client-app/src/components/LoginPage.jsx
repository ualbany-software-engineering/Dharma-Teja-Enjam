import React, {useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from "axios";
import '../App.css'

export default function SignInPage() {

    const [data, setData] = useState({name:"", password:""});
    const navigate = useNavigate();

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/auth/signin", data)
            .then((res)  => {
                setData({name: "", password: ""});
                if(res.data.message =="Success"){
                    localStorage.setItem('token', res.data.token);
                    navigate("/create-profile");
                } else {
                    alert("Try again!");
                }
            });
    }

    
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br/>
                    <input     type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={data.password}
                                onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
