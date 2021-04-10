import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {

    return (
        <div className='Header'>
            <h1 className='header-title'>GoTravel</h1>
            <button id='logout-btn'>Logout</button>
            <Nav />
        </div>
    )
}

export default Header;