import React from 'react';
import './login.css';
const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Enter Your Email"/>
                <label htmlFor="">Password</label>
                <input type="password" className="loginInput" placeholder="Enter Your Password"/>
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    );
};

export default Login;