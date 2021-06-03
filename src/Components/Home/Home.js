import React from 'react';
import Tours from '../Tours/Tours'; 
import './Home.css';

const Home = () => {

    return (
        <div className='Home'>
            <div className='home-container'></div>
            <div className='tours-render'>
                <header className='tours-header'>European Tours</header>
                <Tours />
            </div>
            <div className='desc-header-container'>
                <h2 className='description-header'>Read More About Our Tours!</h2>
            </div>
        </div>
    );
}

export default Home;