import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, connect } from 'react-redux';
import { requestUserData } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './Landing.css';

const Landing = (props) => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const user = useSelector(reduxState => reduxState.user);
    const history = useHistory();
    
    useEffect(() => {
        
    }, []);
    // after the comma?
    async function userLogin() {
        let body = { userEmail, userPassword };
        try {
        await axios
            .post('/auth/login', body)
            props.requestUserData()
            history.push('/Home')
        } catch (err) {
            console.log(err)
        }
        
    };
    
    async function userRegister() {
        let body = { userEmail, userPassword };
        try {
        await axios
            .post('/auth/register', body)
            props.requestUserData()
            history.push('/Home')
        } catch (err) {
            console.log(err)
        }
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

export default connect(null, {requestUserData})(Landing);