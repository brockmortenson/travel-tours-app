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
                    <div className='tour-price'>{tour.price}</div>
                    <div className='tour-summary'>{tour.summary}</div>
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
                <img className='full-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSaQJtUoaVDpxKRb5z9rH76gqE26v9hQitw&usqp=CAU' alt='full-paris' />
                <img className='inclusive-paris' />
            </div>
        </div>
    );
}

export default Tours;