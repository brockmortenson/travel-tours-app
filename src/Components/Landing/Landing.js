import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { requestUserData } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './Landing.css';

const Landing = (props) => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ loginError, setLoginError] = useState('');
    const [ registerError, setRegisterError] = useState('');
    
    const history = useHistory();
    
    useEffect(() => {
        
    }, []);

    const checkRegister = () => {
        if (userEmail.includes('@' && '.')) {
            setRegisterError('')
            return;
        } else {
            setRegisterError('Please enter a valid email address')
        }
    };

    async function userLogin(e) {
        e.preventDefault()
        let body = { userEmail, userPassword };
        try {
            await axios
                    .post('/auth/login', body)
                    props.requestUserData()
                    history.push('/Home')
            } catch (err) {
                console.log(err)
                setLoginError('*Incorrect username or password*')
            }
    };
    
    async function userRegister(e) {
        e.preventDefault()
        let body = { userEmail, userPassword };
        try {
            await axios
                    .post('/auth/register', body)
                    props.requestUserData()
                    history.push('/Home')
            } catch (err) {
                console.log(err)
                setRegisterError('*A user with this email already exists*')
            }
    };


    return (
        <div className='landing'>
            <div className='auth'>
                <h1 className='login-text'>Login to view our tours!</h1>
                <div>{loginError}</div>
                <form className='login' onSubmit={userLogin}>
                    <input
                        className='login-email'
                        type='text'
                        placeholder='Email'
                        onChange={e => setUserEmail(e.target.value)}
                        required
                    />
                    <input
                        className='login-pass'
                        type='password'
                        placeholder='Password'
                        onChange={e => setUserPassword(e.target.value)}
                        required
                    />
                    <button className='login-btn' type='submit'>Login</button>
                </form>

                {/* <div className='change-pass'>
                    <Link to='/ChangePass'>Change my password</Link>
                </div> */}

                <h1 className='register-text'>Don't have an account? Register below!</h1>
                
                <div>{registerError}</div>
                <form className='register' onSubmit={userRegister}>
                    <input
                        className='register-email'
                        type='text'
                        placeholder='Email'
                        style={{ textDecoration: 'none'}}
                        onChange={e => setUserEmail(e.target.value)}
                        required
                        onKeyUp={checkRegister}
                    />
                    <input
                        className='register-pass'
                        type='password'
                        placeholder='Password'
                        style={{ textDecoration: 'none'}}
                        onChange={e => setUserPassword(e.target.value)}
                        required
                    />
                    <button className='register-btn' type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default connect(null, {requestUserData})(Landing);