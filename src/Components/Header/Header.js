import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import { logout } from '../../ducks/userReducer';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import './Header.css';

const Header = (props) => {

    const history = useHistory();

    function userLogout() {
        try {
        axios
            .delete('/auth/logout')
            .then(() => {
                props.logout();
                history.replace('/');
            })
            } catch (err) {
            console.log(err)
            }
    };

    return (
        <div className='Header'>
            <h1 className='header-title'>GoTravel</h1>
            <button id='logout-btn' onClick={userLogout}>Logout</button>
            <Nav />
        </div>
    )
}

export default connect(null, {logout})(Header);