import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
    const [ cartArr, setCartArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/cart')
            .then(response => {
                setCartArr(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const mappedCart = cartArr.map((tour) => {
        return (
            <div key={tour.tour_id} className='tour-container'>
                <div>{tour.title}</div>
            </div>
        )
    })

    return (
        <div className='Cart'>
            <div>{mappedCart}</div>
        </div>
    );
}

export default Cart;