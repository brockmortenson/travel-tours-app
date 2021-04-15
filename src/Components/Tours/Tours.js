import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tours.css';

const Tours = () => {
    const [ toursArr, setToursArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/tours')
            .then(response => {
                setToursArr(response.data)
            })
            .catch(err => console.log(err));
    }, []);
    // console.log(toursArr)
    const mappedTours = toursArr.map((tour) => {
        return (
            <div className='tour-container'>
                <div className='individual-tour'>
                    <div className='tour-title'>{tour.title}</div>
                    <div className='tour-price'>${tour.price}</div>
                    <div className='tour-summary'>{tour.summary}</div>
                    <button className='tour-btn'>Book Now</button>
                </div>
            </div>
        )
    });
    // console.log(mappedTours)
    
    return (
        <div className='Tours'>
            <h2 className='tours-list'>{mappedTours}</h2>
            <div className='tour-images'>
                <img className='basic-paris' src='https://res.allmacwallpaper.com/pic/Thumbnails/2558_728.jpg' alt='basic-paris' />
                <img className='full-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IszB6YE-aDE8YtUGGvVUnZ6e-lPsir5xaA&usqp=CAU' alt='full-paris' />
                <img className='inclusive-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSaQJtUoaVDpxKRb5z9rH76gqE26v9hQitw&usqp=CAU' alt='inclusive-paris' />
                <img className='basic-italy' src='https://wallpaperaccess.com/full/115157.jpg' alt='basic=italy' />
                <img className='full-italy' src='https://s1.1zoom.me/b5346/654/Bridges_Rivers_Evening_Italy_Rome_Cathedral_550636_1920x1080.jpg' alt='full-italy' />
                <img className='inclusive-italy' src='https://wallpaperaccess.com/full/115111.jpg' alt='inclusive-italy' />
            </div>
        </div>
    );
}

export default Tours;