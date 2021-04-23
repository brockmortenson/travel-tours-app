
import axios from 'axios';
import { useState } from 'react';
import { requestUserData } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './ChangePass.css';

const ChangePass = (props) => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    // const pass = props.userPassword;
    const history = useHistory();

    async function changePass(e) {
        e.preventDefault()
        let body = { userEmail, userPassword };
        try {
            await axios
                    .post('/auth/change', body)
                    props.requestUserData()
                    history.push('/Home')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='ChangePass'>
            <form className='change-pass-form' onSubmit={changePass}>
                <h1>Enter your email and new password</h1>
                <input
                    className='current-pass-input'
                    type='text'
                    placeholder='Email'
                    onChange={e => setUserEmail(e.target.value)}
                    />
                <input
                    className='change-pass-input'
                    type='password'
                    placeholder='New password'
                    onChange={e => setUserPassword(e.target.value)}
                />
                <button className='change-pass-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ChangePass;