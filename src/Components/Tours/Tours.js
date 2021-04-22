import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { bookTour } from '../../ducks/tourReducer';
import './Tours.css';

const Tours = (props) => {
    const [ toursArr, setToursArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/tours')
            .then(response => {
                setToursArr(response.data)
            })
            .catch(err => console.log(err));
    }, []);

    function addTourToCart(tour_id) {
        let body = { tour_id };
        try {
            axios
                .post('/api/tours', body)
                bookTour()
        } catch (err) {
            console.log(err)
        }
    }

    // console.log(toursArr)
    const mappedTours = toursArr.map((tour) => {
        return (
            <div key={tour.tour_id} className='tour-container'>
                <div className='individual-tour'>
                    <div className='tour-title'>{tour.title}</div>
                    <div className='tour-price'>${tour.price}</div>
                    <div className='tour-summary'>{tour.summary}</div>
                    {/* <button className='tour-btn'>Book Now!!</button> */}
                </div>
            </div>
        )
    });

    const tourDescriptions = toursArr.map((tour) => {
        return (
            <div key={tour.tour_id} className='description-container'>
                <div className='individual-description'>
                    <div className='description-title'>{tour.title}</div>
                    <div className='tour-description'>{tour.description}</div>
                </div>
            </div>
        )
    });
    // console.log(mappedTours)
    

    /* I couldn't figure out how to add images to my database so I displayed images overtop the tours. After that I couldn't click on the button I originally had rendering in 'individual-tour' so I had to create a div for each image and render the button separately in each div */
    // console.log(props)
    return (
        <div className='Tours'>
            <h2 className='tours-list'>{mappedTours}</h2>
            <div className='tour-images'>
                <div className='images-container'>
                <img className='basic-paris' src='https://res.allmacwallpaper.com/pic/Thumbnails/2558_728.jpg' alt='basic-paris' />
                <button className='tour-btn' onClick={() => addTourToCart(1)}>Book Now</button>
                </div>
                <div className='images-container'>
                <img className='full-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IszB6YE-aDE8YtUGGvVUnZ6e-lPsir5xaA&usqp=CAU' alt='full-paris' />
                <button className='tour-btn' onClick={() => addTourToCart(2)}>Book Now</button>
                </div>
                <div className='images-container'>
                <img className='inclusive-paris' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSaQJtUoaVDpxKRb5z9rH76gqE26v9hQitw&usqp=CAU' alt='inclusive-paris' />
                <button className='tour-btn' onClick={() => addTourToCart(3)}>Book Now</button>
                </div>
                <div className='images-container'>
                <img className='basic-italy' src='https://wallpaperaccess.com/full/115157.jpg' alt='basic=italy' />
                <button className='tour-btn' onClick={() => addTourToCart(4)}>Book Now</button>
                </div>
                <div className='images-container'>
                <img className='full-italy' src='https://s1.1zoom.me/b5346/654/Bridges_Rivers_Evening_Italy_Rome_Cathedral_550636_1920x1080.jpg' alt='full-italy' />
                <button className='tour-btn' onClick={() => addTourToCart(5)}>Book Now</button>
                </div>
                <div className='images-container'>
                <img className='inclusive-italy' src='https://wallpaperaccess.com/full/115111.jpg' alt='inclusive-italy' />
                <button className='tour-btn' onClick={() => addTourToCart(6)}>Book Now</button>
                </div>
            </div>
                <div className='description-list'>{tourDescriptions}</div>
        </div>
    );
}

export default Tours;