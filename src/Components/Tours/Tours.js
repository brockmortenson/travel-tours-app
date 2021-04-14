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
                <div className='tour-title'>{tour.title}</div>
                <div className='tour-price'>{tour.price}</div>
                <div className='tour-summary'>{tour.summary}</div>
            </div>
        )
    });
    // console.log(mappedTours)
    
    return (
        <div className='Tours'>
            <h2 className='tours-list'>{mappedTours}</h2>
        </div>
    );
}

export default Tours;