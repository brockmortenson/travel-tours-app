import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import { logout } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import './Header.css';

const Header = (props) => {

    const history = useHistory();

    function logout() {
        try {
        axios
            .delete('/auth/logout')
            .then(() => {
                logout();
                history.goBack('/');
            })
            } catch (err) {
            console.log(err)
            }
    };
    // try {
    //     axios
    //     .delete('/auth/logout')
    //     props.logout()
    //     history.push('/Landing')
    // } catch (err) {
    //     console.log(err)
    // }

    return (
        <div className='Header'>
            <h1 className='header-title'>GoTravel</h1>
            <button id='logout-btn' onClick={logout}>Logout</button>
            <Nav />
        </div>
    )
}

export default Header;