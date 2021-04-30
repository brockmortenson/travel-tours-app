import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestUserData } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './ChangePass.css';

const ChangePass = (props) => {
    const [ userPassword, setUserPassword ] = useState(''); 
    const [ newPassword, setNewPassword ] = useState(''); 
    const history = useHistory();

    async function changePass(e) {
        e.preventDefault()
        let body = { userPassword, newPassword };
        try {
            await axios
                    .put('/auth/change', body)
                    props.requestUserData()
                    history.push('/Home')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='ChangePass'>
            <form className='change-pass-form' onSubmit={changePass}>
                <h1>Enter your current and new passwords</h1>
                <input
                    className='current-pass-input'
                    type='text'
                    placeholder='Current password'
                    style={{ textDecoration: 'none'}}
                    onChange={(e) => setUserPassword(e.target.value)}
                    />
                <input
                    className='change-pass-input'
                    type='password'
                    placeholder='New password'
                    style={{ textDecoration: 'none'}}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className='change-pass-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {requestUserData})(ChangePass);