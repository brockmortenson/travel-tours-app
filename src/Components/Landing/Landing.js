import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    useEffect(() => {
        
    }, []);
    // after the comma?

    function userLogin() {
        let body = { userEmail, userPassword };
        axios
            .post('/auth/login', body)
            .then(response => response.data)
            .catch(err => console.log(err))
    };
    
    function userRegister() {
        let body = { userEmail, userPassword };
        // console.log(body)
        axios
            .post('/auth/register', body)
            .then(response => response.data)
            .catch(err => console.log(err))
    };

    return (
        <div className='landing'>
            <div className='auth'>
                <h1 className='login-text'>Login to view our tours!</h1>
                <form className='login' onSubmit={userLogin}>
                    <input
                        className='login-email'
                        type='text'
                        placeholder='Email'
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <input
                        className='login-pass'
                        type='password'
                        placeholder='Password'
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <button className='login-btn' type='submit'>Login</button>
                </form>

                <h1 className='register-text'>Don't have an account? Register below!</h1>

                <form className='register' onSubmit={userRegister}>
                    <input
                        className='register-email'
                        type='text'
                        placeholder='Email'
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <input
                        className='register-pass'
                        type='password'
                        placeholder='Password'
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <button className='register-btn' type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Landing;