import React from 'react';
// import axios from 'axios';
import Tours from '../Tours/Tours'; 
import './Home.css';

const Home = () => {

    return (
        <div className='Home'>
            <div className='home-container'></div>
            <div className='tours-render'>
                <header className='tours-header'>European Tours</header>
                <h2 className='arrow'></h2>
                <Tours />
            </div>
        </div>
    );
}

export default Home;