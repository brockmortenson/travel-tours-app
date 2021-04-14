import React from 'react';
// import axios from 'axios';
import Tours from '../Tours/Tours'; 
import './Home.css';

const Home = () => {

    return (
        <div className='Home'>
            <div className='home-container'></div>
            <div className='tours-render'>
                <header className='tours-header'>TOURS</header>
                <Tours />
            </div>
        </div>
    );
}

export default Home;