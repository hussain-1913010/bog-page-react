import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
            <label htmlFor="">Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Username"/>
                <label htmlFor="">Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your Email"/>
                <label htmlFor="">Password</label>
                <input type="password" className="registerInput" placeholder="Enter Your Password"/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
            </form>
        </div>
    );
};

export default Register;